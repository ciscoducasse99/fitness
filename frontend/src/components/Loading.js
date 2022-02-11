import Div100vh from "react-div-100vh";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <Div100vh className="bg-dark d-flex align-items-start">
      <Spinner color="danger" className="mx-auto mt-5" />
    </Div100vh>
  );
};

export default Loading;
