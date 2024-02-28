import Index1 from "./pages/Index1/Index1";
import Index2 from "./pages/Index2/Index2";
import Index3 from "./pages/Index3/Index3";
import Index4 from "./pages/Index4/Index4";
import Index5 from "./pages/Index5/Index5";

const routes = [
  { path: "/index5", component: <Index5 /> },
  { path: "/index4", component: <Index4 /> },
  { path: "/index3", component: <Index3 /> },
  { path: "/index1", component: <Index1 /> },
  { path: "/", component: <Index2 /> },
];

export default routes;
