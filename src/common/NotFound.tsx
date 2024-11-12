import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="text-red-400 font-bold text-center text-3xl my-7">
        404! Not found page!
      </div>
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default NotFoundPage;
