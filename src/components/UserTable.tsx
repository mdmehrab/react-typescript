import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";

const UserTable = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      type: "boolean",
    },
    { field: "createdAt", headerName: "Created At", width: 200 },
    { field: "updatedAt", headerName: "Updated At", width: 200 },
    {
      field: "profileImg",
      headerName: "Profile Image",
      width: 200,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Profile"
          style={{ width: 50, height: 50 }}
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
    <Paper className="mx-auto mt-10" sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={allUsers}
        columns={columns}
        getRowId={(row) => row._id} // Ensure row id is fetched from _id
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Paper>
  );
};

export default UserTable;
