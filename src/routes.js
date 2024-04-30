/**
 * This is the root file of React Router. All the page routes are defined here.
 * It is used by the BrowserRouter component to render the pages based on the url path.
 */

import Index1 from "./pages/Enquire/Index1";
import Index2 from "./pages/Landing/Index2";
import Index4 from "./pages/AboutUS/Index4";
import Index5 from "./pages/Referral/Index5";
import Service1 from "./pages/Service1/section";
import Service2 from "./pages/Service2/section";
import Service3 from "./pages/Service3/section";
import Service4 from "./pages/Service4/section";
import Service5 from "./pages/Service5/section";
import Service6 from "./pages/Service6/section";
const routes = [
  { path: "/referral", component: <Index5 /> },
  { path: "/about", component: <Index4 /> },
  { path: "/enquire", component: <Index1 /> },
  { path: "/", component: <Index2 /> },
  { path: "/DAILYACTIVITIES&IMPROVEDLIVINGCHOICE", component: <Service1 /> },
  {
    path: "/ASSISTANCEWITHSOCIALANDCOMMUNITYPARTICIPATION",
    component: <Service2 />,
  },
  { path: "/ACCOMMODATIONSUPPORT", component: <Service3 /> },
  { path: "/SUPPORTSINEMPLOYMENT", component: <Service4 /> },
  { path: "/SUPPORTEDINDEPENDENTLIVING", component: <Service5 /> },
  { path: "/SCHOOLLEAVEREMPLOYMENTSUPPORTS", component: <Service6 /> },
];

export default routes;
