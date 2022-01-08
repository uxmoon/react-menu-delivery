import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/stores">Stores</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
