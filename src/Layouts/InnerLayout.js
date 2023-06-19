import { NavLink, Outlet } from "react-router-dom";

const InnerLayout = () => {
  return (
    <div className="help-layout">
      <header>
        <nav>
          <NavLink to="contact">faq/contac</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default InnerLayout;
