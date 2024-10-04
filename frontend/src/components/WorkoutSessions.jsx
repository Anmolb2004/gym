import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover the ultimate workout session designed to elevate your fitness journey. Our sessions combine high-intensity training with expert guidance to maximize your results and keep you motivated.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our exclusive bootcamps tailored for every fitness level. Whether you're a beginner or a seasoned athlete, our programs offer personalized coaching and dynamic workouts to help you achieve your goals.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp: Transform Your Body</h4>
            <p>
              Experience the power of High-Intensity Interval Training (HIIT) in this challenging bootcamp. Burn calories, build strength, and boost your endurance in just a few weeks!
            </p>
          </div>
          <div>
            <h4>Yoga and Mindfulness Retreat</h4>
            <p>
              Relax and rejuvenate with our Yoga and Mindfulness Bootcamp. Connect your body and mind through guided sessions that enhance flexibility and mental clarity.
            </p>
          </div>
          <div>
            <h4>Strength Training Fundamentals</h4>
            <p>
              Master the basics of strength training with this comprehensive bootcamp. Learn proper techniques, increase your muscle strength, and build confidence in the gym.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Challenge</h4>
            <p>
              Join our Cardio Blast Challenge for an exhilarating workout that will improve your cardiovascular fitness. Engage in a variety of cardio exercises and feel the burn!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;

