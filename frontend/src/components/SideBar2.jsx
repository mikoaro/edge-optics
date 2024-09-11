import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { NavLink, Link } from "react-router-dom";

const SideBar2 = () => {
  return (
    <>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        {/* <CDBSidebar textColor="#333" backgroundColor="#f0f0f0"> */}
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Contrast Light Mode
          </CDBSidebarHeader>
          <CDBSidebarContent  className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/">
                <CDBSidebarMenuItem icon="th-large">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink as={Link} to='/components'>
                <CDBSidebarMenuItem icon="sticky-note">
                  Components
                </CDBSidebarMenuItem>
              </NavLink>
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                Metrics
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: "20px 5px" }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  );
};

export default SideBar2;
