import { Link } from "react-router-dom";

export default function NavLink({ href, logo, text, isActive, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`
        flex items-center gap-6 w-full p-3 rounded-md transition-colors
        ${
          isActive
            ? "bg-pink-600 text-white font-bold"
            : "bg-white hover:bg-pink-600 hover:text-white hover:font-bold"
        }
      `}
    >
      <img src={logo} alt="" className="w-5 h-5" />
      <span>{text}</span>
    </Link>
  );
}
