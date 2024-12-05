import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import {UserType} from '../types/user'

const UserTable = () => {
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // handleApprovedByAdmin
const handleApprovedByAdmin = async (userId: string) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/users/approve/${userId}`,
      {
        withCredentials: true,
      }
    );

    if (response) {
      setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, isApproved: true } : user
        )
      );
      alert(`This user: ${userId} has been approved by Admin`);
    } else {
      alert("Something went wrong!");
    }
  } catch (err) {
    console.log(err);
  }
};


  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 220 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "roles", headerName: "Roles", width: 150 },
    { field: "mobileNumber", headerName: "Mobile Number", width: 150 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "country", headerName: "Country", width: 150 },
    {
      field: "isApproved",
      headerName: "Is Approved",
      width: 150,
      renderCell: (params) => (
        <span>{params.value ? <span>✔️</span> : <span>❌</span>}</span>
      ),
    },

    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params) => {
        const date = new Date(params.value);
        return (
          <div>
            {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`} -{" "}
            <button
              className="bg-green-200 text-black p-2 rounded-md text-xs"
              onClick={() => handleApprovedByAdmin(params.row._id)}
            >
              Approved
            </button>
          </div>
        );
      },
    },

    {
      field: "updatedAt",
      headerName: "Updated At",
      width: 200,
      renderCell: (params) => {
        const date = new Date(params.value);
        return (
          <div>
            {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
          </div>
        );
      },
    },
    {
      field: "profileImg",
      headerName: "Profile Image",
      width: 200,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Profile"
          style={{ width: 30, height: 30, borderRadius: "50%" }}
        />
      ),
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/all-users`,
          { withCredentials: true }
        );
        setAllUsers(response.data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-10">
      <h2 className="text-2xl text-center">User Approved Table</h2>
      <Paper className="mx-auto mt-10" sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={allUsers}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Paper>
    </div>
  );
};

export default UserTable;
