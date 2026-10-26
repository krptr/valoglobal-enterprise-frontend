import { Link } from "react-router";

function Logo() {
  return (
    <div>
      <Link to="/">
        <div className="font-black leading-7 text-2xl">
          <span className="text-on-background">VALO</span>
          <span className="text-primary">GLOBAL</span>
        </div>
      </Link>
    </div>
  );
}

export { Logo };
