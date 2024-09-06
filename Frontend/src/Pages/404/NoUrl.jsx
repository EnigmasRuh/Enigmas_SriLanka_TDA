import { useLocation } from "react-router-dom";

const NoUrl = () => {

  // const params = useParams();
  // console.log(params['*']);

  const location = useLocation();



  return (
    <div className={`w-screen h-screen flext flex-col items-center content-center`}>
      <h1 className=" text-6xl font-bold">404</h1>
      <h2 className="text-3xl font-medium ">The requested URL <span className="text-red">http://localhost:5173{location.pathname} </span>was not found on this server</h2>
    </div>
  )
}
export default NoUrl;