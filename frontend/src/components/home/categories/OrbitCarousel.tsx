// import { useEffect, useState } from "react";

// import Orbit from "./Orbit";
// import OrbitItem from "./OrbitItem";
// import { categories } from "./categoryData";

// const RADIUS_X = 330;
// const RADIUS_Y = 95;

// const OrbitCarousel = () => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     let frame = 0;

//     const animate = () => {
//       setRotation((prev) => prev + 0.0022);

//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(frame);
//   }, []);

//   return (
//     <div className="relative h-[620px] overflow-visible">
//       <Orbit
//         width={1150}
//         height={320}
//         className="
//           left-1/2
//           top-[452px]
//           -translate-x-1/2

//         "
//       />

//       {categories.map((category, index) => {
//         const angle = rotation + (index * Math.PI * 2) / categories.length;

//         const x = Math.cos(angle) * RADIUS_X;

//         const y = Math.sin(angle) * RADIUS_Y + 70;

//         const depth = (Math.sin(angle) + 1) / 2;

//         return (
//           <OrbitItem
//             key={category.id}
//             category={category}
//             x={x}
//             y={y}
//             scale={0.78 + depth * 0.22}
//             opacity={0.55 + depth * 0.45}
//             zIndex={Math.round(depth * 100)}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default OrbitCarousel;

//   with mouse drag
// import { useEffect, useRef, useState } from "react";

// import Orbit from "./Orbit";
// import OrbitItem from "./OrbitItem";
// import { categories } from "./categoryData";

// const RADIUS_X = 330;
// const RADIUS_Y = 95;

// const OrbitCarousel = () => {
//   const [rotation, setRotation] = useState(0);

//   const containerRef = useRef<HTMLDivElement>(null);

//   const isDragging = useRef(false);

//   const lastClientX = useRef(0);

//   const autoRotate = useRef(true);

//   useEffect(() => {
//     let frame = 0;

//     const animate = () => {
//       if (autoRotate.current) {
//         setRotation((prev) => prev + 0.0022);
//       }

//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(frame);
//   }, []);

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     isDragging.current = true;

//     autoRotate.current = false;

//     lastClientX.current = e.clientX;
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging.current) return;

//     const delta = e.clientX - lastClientX.current;

//     setRotation((prev) => prev + delta * 0.006);

//     lastClientX.current = e.clientX;
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;

//     autoRotate.current = true;
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="
//         relative
//         h-[620px]
//         overflow-visible

//         select-none

//         cursor-grab
//         active:cursor-grabbing
//       "
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       <Orbit
//         width={1150}
//         height={320}
//         className="
//           left-1/2
//           top-[452px]
//           -translate-x-1/2
//         "
//       />

//       {categories.map((category, index) => {
//         const angle = rotation + (index * Math.PI * 2) / categories.length;

//         const x = Math.cos(angle) * RADIUS_X;

//         const y = Math.sin(angle) * RADIUS_Y + 70;

//         const depth = (Math.sin(angle) + 1) / 2;

//         return (
//           <OrbitItem
//             key={category.id}
//             category={category}
//             x={x}
//             y={y}
//             scale={0.78 + depth * 0.22}
//             opacity={0.55 + depth * 0.45}
//             zIndex={Math.round(depth * 100)}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default OrbitCarousel;

import { useEffect, useRef, useState } from "react";

import Orbit from "./Orbit";
import OrbitItem from "./OrbitItem";
import { categories } from "./categoryData";

const RADIUS_X = 330;
const RADIUS_Y = 95;

const OrbitCarousel = () => {
  const [rotation, setRotation] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);

  const lastClientX = useRef(0);

  const autoRotate = useRef(true);
  const velocity = useRef(0);
  useEffect(() => {
    let frame = 0;

    const animate = () => {
      setRotation((prev) => {
        let next = prev;

        if (autoRotate.current) {
          next += 0.0022;
        }

        if (!isDragging.current) {
          next += velocity.current;

          velocity.current *= 0.95;

          if (Math.abs(velocity.current) < 0.00005) {
            velocity.current = 0;
          }
        }

        return next;
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;

    autoRotate.current = false;

    lastClientX.current = e.clientX;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;

    autoRotate.current = false;

    lastClientX.current = e.touches[0].clientX;
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const delta = e.clientX - lastClientX.current;

    setRotation((prev) => prev + delta * 0.006);

    velocity.current = delta * 0.00012;

    lastClientX.current = e.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const delta = e.touches[0].clientX - lastClientX.current;

    setRotation((prev) => prev + delta * 0.006);

    velocity.current = delta * 0.00012;

    lastClientX.current = e.touches[0].clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;

    setTimeout(() => {
      autoRotate.current = true;
    }, 2000);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;

    setTimeout(() => {
      autoRotate.current = true;
    }, 2000);
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-[620px]
        overflow-visible

        select-none
        touch-none

        cursor-grab
        active:cursor-grabbing
      "
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
