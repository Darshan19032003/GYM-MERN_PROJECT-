import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Experience invigorating workout sessions at our gym, designed to cater to all fitness levels. Our state-of-the-art equipment and expert trainers ensure you achieve your fitness .
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Bootcamp Sessions.</h4>
            <p>
            Our gym offers dynamic bootcamps that combine high-intensity workouts with team spirit, pushing you to new limits. Led by certified trainers.
            </p>
          </div>
          <div>
            <h4>Transformative Fitness Experience.</h4>
            <p>
            Join our bootcamps for a transformative fitness experience, where varied exercises keep routines exciting and challenging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;