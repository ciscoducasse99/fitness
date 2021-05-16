import React from "react";

const Reasonings = () => {
  return (
    <div className="reasonings-section my-5">
      <div className="container">
        <div className="border shadow cc-rounded reasonings-content">
          <h3 className="text-center h2 my-4">Why choose Coach Chris?</h3>
          {/* <small className="text-center">
        https://dribbble.com/shots/15288754-Fitness-and-Workout-Trainers-Website/attachments/7042777?mode=media
      </small> */}
          <div class="row g-5 py-4 text-center mx-auto">
            <div class="col-md-4">
              <div>
                <i className="fas fa-utensils fa-5x mb-4" />
              </div>
              <h4>Personal Diet</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
            <div class="col-md-4">
              <div>
                <i className="fas fa-weight fa-5x mb-4" />
              </div>
              <h4>Weight Transformation</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
            <div class="col-md-4">
              <div>
                <i className="fas fa-dumbbell fa-5x mb-4" />
              </div>
              <h4>Catered Workouts</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasonings;
