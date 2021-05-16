import Div100vh from "react-div-100vh";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <Div100vh>
      <Spinner color="primary" />
    </Div100vh>
  );
};

export default Loading;
