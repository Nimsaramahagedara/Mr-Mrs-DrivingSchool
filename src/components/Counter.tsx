// src/ClientCounter.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
    target: number
}
const Counter: React.FC<Props> = ({target}) => {
  const [count, setCount] = useState(0);

 const trigger = () => {
    const interval = 10; // Interval in milliseconds
    const increment = Math.ceil(target / (2000 / interval)); // Adjusting increment based on target and interval

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + increment;
        } else {
          clearInterval(counter);
          return target;
        }
      });
    }, interval);

    return () => clearInterval(counter);
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="text-2xl lg:text-5xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onViewportEnter={trigger}
      >
        {count.toLocaleString()}
      </motion.div>
    </div>
  );
};

export default Counter;
