/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// @mui icons
import Icon from "@mui/material/Icon";

// pages
import Dashboard from "./layouts/dashboard";
import Documentation from "./layouts/documentation";
import ContactUs from "./components/ContactUs";
import CreateSchedule from "./components/CreateSchedule";
import MySchedule from "./components/MySchedule";
import AllSchedule from "./components/OverallSchedule";
import SignIn from "./layouts/authentication/sign-in";
import ExpertCard from "./components/Experts";
import SignUp from "./layouts/authentication/sign-up";
import FarmerSignUp from "./layouts/authentication/farmer-sign-up";
import AboutUs from "./components/AboutUs";
import Profile from "./components/Profile";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "My Schedule",
    key: "my-schedule",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/my-schedule",
    component: <MySchedule />,
  },
  {
    type: "collapse",
    name: "Overall Schedule",
    key: "overall-schedule",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/overall-schedule",
    component: <AllSchedule />,
  },
  {
    type: "collapse",
    name: "Create Schedule",
    key: "create-schedule",
    icon: <Icon fontSize="small">event</Icon>,
    route: "/create-schedule",
    component: <CreateSchedule />,
  },
  {
    type: "collapse",
    name: "Experts",
    key: "experts",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/experts",
    component: <ExpertCard />,
  },
  {
    type: "collapse",
    name: "Contact Us",
    key: "contact-us",
    icon: <Icon fontSize="small">phone</Icon>,
    route: "/contact-us",
    component: <ContactUs />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Farmer Sign Up",
    key: "farmer-sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/farmer-sign-up",
    component: <FarmerSignUp />,
  },
  {
    type: "collapse",
    name: "About Us",
    key: "about-us",
    icon: <Icon fontSize="small">info</Icon>,
    route: "/about-us",
    component: <AboutUs />,
  },
  {
    type: "collapse",
    name: "Documentation",
    key: "documentation",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/documentation",
    component: <Documentation />,
  },
];

export default routes;
