import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { CiWifiOn } from "react-icons/ci";
function Layout({ children }) {
  return (
    <>
      <header>
        <div>
          <div>
            <p>Dashboard</p>
          </div>
          <div>
            <p>Employee List</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>AD</Avatar>
          <CiWifiOn />
        </div>
      </header>
      {children}
      <footer>
        <div>
          <p>Developed By Mobin Sari</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
