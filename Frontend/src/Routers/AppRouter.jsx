import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayOut from "../LayOut/LayOut";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import ServiceSignUp from "../Pages/ServiceSignUp/ServiceSignUp";
import TravellerSignUp from "../Pages/TravellerSignUp/TravellerSignUp";
import NoUrl from "../Pages/404/NoUrl";
import Explore from "../Pages/Explore/Explore";
import PyTrip from "../Pages/PYTrip/PYTrip";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import TravelerOnboarding from "../Pages/TravelerOnboarding/TravelerOnboarding";
import TripDetails from "../Pages/TripDetails/Tripdetails";
import ProtectedRoute from "../Routers/ProtectedRoute";
import VisaApplication from "../Pages/VisaApplication/VisaApplication";
import VisaInfo from "../Pages/VisaInfo/VisaInfo";
import FormPage1 from "../Pages/FormPage1/FormPage1";
import FormPage2 from "../Pages/FormPage2/FormPage2";
import DocumentFeez from "../Pages/DocumentFeez/DocumentFeez";


const router1 = createBrowserRouter([{
  path: "/",
  element: <MainLayOut />,
  children: [{
    index: true,
    element: <Landing />

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
    element: <Explore/>,

  },
  {
    path: '/explore:id',
    element: <TripDetails />
  },
  {
    path: "/pytrip",
    element: <PyTrip />,
  }, {
    path: "/visaapplication",
    element: <VisaApplication />,
  }, {
    path: "/about",
    element: <About />,
  }, {
    path: "/contact",
    element: <Contact />,
  }, {
    path: "/login",
    element: <Login />,
  }, {
    path: "/service-register",
    element: <ServiceSignUp />,
  }, {
    path: "/traveller-register",
    element: <TravellerSignUp />,
  }, {
    path: "/travelerOnboarding",
    element: <TravelerOnboarding />,
  },
  {
    path: "/tripdetails",
    element: <TripDetails />
  },{
    path: "/visaapplication/details",
    element: <VisaInfo />
  },{
    path: "/visaapplication/form",
    element: <FormPage1 />
  },{
    path: "/visaapplication/form/next",
    element: <FormPage2/>
  },{
    path: "/visaapplication/doc",
    element: <DocumentFeez/>

  ]
},
{   //all
  path: '*',
  element: <NoUrl />
},
]);

const AppRouter = () => {
  return <RouterProvider router={router1} />;
}

export default AppRouter;

