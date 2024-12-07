const ChangePassword = () => {
  return (
    <div className=" space-y-4 mt-4">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h2 className="text-2xl font-bold text-gray-700">Enter OTP</h2>
        <div className="flex space-x-2">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                type="tel"
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg"
                maxLength={1}
              />
            ))}
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ">
          Submit OTP
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
