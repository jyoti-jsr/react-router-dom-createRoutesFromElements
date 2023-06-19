import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <header>
        <nav>
          <NavLink to="faq">View The Faq</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default HelpLayout;
