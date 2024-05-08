import { Menu } from "../components/Menu/Menu";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
