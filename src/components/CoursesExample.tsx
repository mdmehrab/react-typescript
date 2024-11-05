const CoursesExample = () => {
  return (
    <>
      <div className="px-7 bg-white py-5">
        <h2 className="text-3xl font-bold py-3">A broad selection of courses</h2>
        <p className="py-3 text-gray-700">
          Choose from over 250,000 online video courses with new additions
          published every month
        </p>
        <div className="flex gap-7 font-bold cursor-pointer">
          <div className=" text-black">Python</div>
          <div className=" text-gray-700 hover:text-black">Microsoft Excle</div>
          <div className=" text-gray-700 hover:text-black">Web Development</div>
          <div className=" text-gray-700 hover:text-black">Java Script</div>
          <div className=" text-gray-700 hover:text-black">Data Science</div>
          <div className=" text-gray-700 hover:text-black">Amazon AWS</div>
          <div className=" text-gray-700 hover:text-black">Drawing</div>
        </div>
      </div>
    </>
  );
};

export default CoursesExample;
