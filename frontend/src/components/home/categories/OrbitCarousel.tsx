import { useEffect, useState } from "react";

import Orbit from "./Orbit";
import OrbitItem from "./OrbitItem";
import { categories } from "./categoryData";

const RADIUS_X = 330;
const RADIUS_Y = 95;

const OrbitCarousel = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      setRotation((prev) => prev + 0.0022);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative h-[620px] overflow-visible">
      <Orbit
        width={1150}
        height={320}
        className="
          left-1/2
          top-[452px]
          -translate-x-1/2
          
        "
      />

      {categories.map((category, index) => {
        const angle = rotation + (index * Math.PI * 2) / categories.length;

        const x = Math.cos(angle) * RADIUS_X;

        const y = Math.sin(angle) * RADIUS_Y + 70;

        const depth = (Math.sin(angle) + 1) / 2;

        return (
          <OrbitItem
            key={category.id}
            category={category}
            x={x}
            y={y}
            scale={0.78 + depth * 0.22}
            opacity={0.55 + depth * 0.45}
            zIndex={Math.round(depth * 100)}
          />
        );
      })}
    </div>
  );
};

export default OrbitCarousel;
