import React, { useState, useEffect } from "react";
import "./AnimatedSquare.css"; // You can create this CSS file for styling

const AnimatedSquare = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    // Function to update the position of the square
    const moveSquare = () => {
      setPosition((prevPosition) => prevPosition + 1);
    };

    // Start the animation
    const animationId = requestAnimationFrame(moveSquare);

    // Cleanup the animation when the component unmounts
    return () => cancelAnimationFrame(animationId);
  }, [position]);

  return <div className="square" style={{ left: position }}></div>;
};

export default AnimatedSquare;
