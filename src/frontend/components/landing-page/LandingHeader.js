import "../../styles/landing.scss";
import { Button } from "reactstrap";

const LandingHeader = () => {
  return (
    <div className="landing-header">
      <div className="landing-header-overlay">
        <div className="container">
          <div className="landing-header-text text-white">
            <h1 className="mb-5 display-2 fw-bold">
              Start your fitness journey the{" "}
              <span className="text-darkred">right</span> way
            </h1>
            <p className="h4 mb-5">
              See why many people trust in Coach Chris for a body transformation
            </p>
            <Button
              color="danger"
              size="lg"
              className="rounded-pill mx-auto col-8 col-md-6 col-lg-3 bg-darkred"
            >
              Contact
            </Button>
            {/* <small>https://www.youtube.com/watch?v=NDcfKNQBqAk</small> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
