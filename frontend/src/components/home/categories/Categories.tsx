// import CategoryCarousel from "./CategoryCarousel";

// const Categories = () => {
//   return (
//     <section className="relative py-28 bg-background overflow-hidden">
//       {/* Blur Background */}
//       <div className="absolute -left-40 top-20 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[120px]" />

//       <div className="absolute -right-40 bottom-10 w-[420px] h-[420px] rounded-full bg-sky-300/20 blur-[140px]" />

//       {/* Orbit */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-[62%]
//           -translate-x-1/2
//           -translate-y-1/2

//           w-[900px]
//           h-[900px]

//           rounded-full

//           bg-[radial-gradient(circle,transparent_61%,rgba(0,108,225,.08)_62%,transparent_63%)]

//           pointer-events-none
//         "
//       />

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="text-center mb-20">
//           <span className="text-primary font-semibold tracking-widest uppercase">
//             Explore
//           </span>

//           <h2 className="mt-4 text-5xl lg:text-6xl font-bold text-textPrimary">
//             Popular Categories
//           </h2>

//           <p className="mt-6 max-w-2xl mx-auto text-lg text-textSecondary leading-8">
//             Explore premium devices designed for work, gaming and creativity.
//           </p>
//         </div>

//         <CategoryCarousel />
//       </div>
//     </section>
//   );
// };

// export default Categories;

import CategoryCarousel from "./CategoryCarousel";

const Categories = () => {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -left-40 top-20 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-10 w-[420px] h-[420px] rounded-full bg-sky-300/20 blur-[140px]" />

      {/* Animated Orbit */}

      <div className="orbit-container">
        <div className="orbit orbit-1" />

        <div className="orbit orbit-2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-semibold tracking-[0.25em] uppercase">
            Explore
          </span>

          <h2 className="mt-4 text-5xl lg:text-6xl font-bold text-textPrimary">
            Popular Categories
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-textSecondary leading-8">
            Explore premium devices designed for work, gaming and creativity.
          </p>
        </div>

        <CategoryCarousel />
      </div>
    </section>
  );
};

export default Categories;
