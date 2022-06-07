import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import CostEnergy from "views/CostEnergy";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import DeviceDetail from "Widgets/DeviceDetail";


import UserPage from "views/UserPage.js";
import DeviceList from "views/DevicesList";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/costENJ",
    name: "Cost & Energy",
    icon: "business_chart-bar-32",
    component: CostEnergy,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/device",
    name: "",
    icon: "",
    component: DeviceDetail,
    layout: "/admin",
  },
  {
    path: "/devices",
    name: "", //just let them empty
    icon: "", //they will not show on the sidebar
    component: DeviceList,
    layout: "/admin",
  },
  
  
  

];
export default dashRoutes;
