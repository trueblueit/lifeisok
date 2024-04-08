/**
 * This is the root file of React Router. All the page routes are defined here.
 * It is used by the BrowserRouter component to render the pages based on the url path.
 */

import Index1 from "./pages/Index1/Index1";
import Index2 from "./pages/Index2/Index2";
import Index3 from "./pages/Index3/Index3";
import Index4 from "./pages/Index4/Index4";
import Index5 from "./pages/Index5/Index5";
import Service1 from "./pages/Service1/section";
import Service2 from "./pages/Service2/section";
import Service3 from "./pages/Service3/section";
import Service4 from "./pages/Service4/section";
import Service5 from "./pages/Service5/section";
import Service6 from "./pages/Service6/section";
const routes = [
  { path: "/index5", component: <Index5 /> },
  { path: "/index4", component: <Index4 /> },
  { path: "/index1", component: <Index1 /> },
  { path: "/", component: <Index2 /> },
  { path: "/index3", component: <Index3 /> },
  { path: "/service1", component: <Service1 /> },
  { path: "/service2", component: <Service2 /> },
  { path: "/service3", component: <Service3 /> },
  { path: "/service4", component: <Service4 /> },
  { path: "/service5", component: <Service5 /> },
  { path: "/service6", component: <Service6 /> },
];

export default routes;
