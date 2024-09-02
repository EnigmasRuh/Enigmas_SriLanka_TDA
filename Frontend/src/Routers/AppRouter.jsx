import {RouterProvider,createBrowserRouter} from "react-router-dom";

import MainLayOut from "../LayOut/LayOut";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import NoUrl from "../Pages/404/NoUrl";
import Explore from "../Pages/Explore/Explore";
import PyTrip from "../Pages/PYTrip/PYTrip";
import VisaApplication from "../Pages/VisaApplication/VisaApplication";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import TravelerOnboarding from "../Pages/TravelerOnboarding/TravelerOnboarding";
import TripDetails from "../Pages/TripDetails/Tripdetails";
import ProtectedRoute from "../Routers/ProtectedRoute";

const router1 = createBrowserRouter([{
  path : "/",
  element : <MainLayOut/>,
  children : [{
   index : true,
   element : <Landing/>
   
},
// {
//     element: <UserProtected/>,
//     children: [
//       {
//         path: "/user",
//         element: <User/>,
//       }
//     ]
//   }
{
  path: "/explore",
  element: <ProtectedRoute><Explore /></ProtectedRoute>,

},
{
  path:'/explore:id',
  element:<TripDetails/>
},
{
  path: "/pytrip",
  element: <PyTrip/>,
},{
  path: "/visaapplication",
  element: <VisaApplication/>,
},{
  path: "/about",
  element: <About/>,
},{
  path: "/contact",
  element: <Contact/>,
},{
  path: "/login",
  element: <Login/>,
},{
  path: "/travelerOnboarding",
  element: <TravelerOnboarding/>,
},
// {
//   path: "/tripdetails",
//   element: <TripDetails/>
// }
]
},
{   //all
  path:'*',
  element:<NoUrl/>
},
]);

const AppRouter = () => {
  return  <RouterProvider router={router1}/>;
}

export default AppRouter;

