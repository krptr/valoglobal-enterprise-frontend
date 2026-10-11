import { Link } from "react-router";
function NotFoundPage({ homePath = "/" }) {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to={homePath}>Go Back Home</Link>
    </div>
  );
}

export { NotFoundPage };
