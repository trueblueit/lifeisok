import Index1 from "./pages/Index1/Index1";
import Index2 from "./pages/Index2/Index2";
import Index3 from "./pages/Index3/Index3";
import Index4 from "./pages/Index4/Index4";



const routes = [
  //Auth
 


  { path: "/index4", component: <Index4 /> },
  { path: "/index3", component: <Index3 /> },
  { path: "/index2", component: <Index2 /> },
  { path: "/", component: <Index1 /> },
];

export default routes;
