import img from "../utils/computer.png";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="err-box">
      <div className="err-imgBox">
        <img src={img} className="err-img"></img>
      </div>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
