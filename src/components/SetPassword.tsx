const SetPassword = () => {
  return (
    <div className="mt-4 space-y-4 ">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h2 className="text-2xl font-bold text-gray-700">
          Update Your Password
        </h2>
        <div className="flex space-x-2">
          <input type="text" className="h-12 text-xl text-center rounded-lg" />
        </div>

        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SetPassword;
