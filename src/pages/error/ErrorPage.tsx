import { Link } from "react-router";
function ErrorPage({ homePath = "/" }) {
  return (
    <div>
      <h1>Something Went wrong</h1>
      <Link to={homePath}>Go Back Home</Link>
    </div>
  );
}

export { ErrorPage };
