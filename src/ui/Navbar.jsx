import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar bg-secondary fg-2 p-4">
      <div className="container-fluid">
        <div className="drawer-body vw-100">
          <ul className="d-flex flex-row navbar-nav gap-4">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="text-decoration-none fg-white"
                style={{ color: "white" }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products/ajouter"
                end
                className="text-decoration-none fg-white"
                style={{ color: "white" }}
              >
                Ajouter produit
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
