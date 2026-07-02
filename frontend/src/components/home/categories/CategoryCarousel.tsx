// import { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "./category.css";

// import CategoryCard from "./CategoryCard";

// import { categories } from "./categoryData";

// const CategoryCarousel = () => {
//   const [, setActiveIndex] = useState(0);

//   return (
//     <Swiper
//       modules={[EffectCoverflow, Pagination, Autoplay]}
//       effect="coverflow"
//       centeredSlides
//       grabCursor
//       loop
//       slidesPerView={"auto"}
//       speed={700}
//       autoplay={{
//         delay: 3500,
//         disableOnInteraction: false,
//       }}
//       coverflowEffect={{
//         rotate: 0,
//         stretch: -120,
//         depth: 280,
//         modifier: 2,
//         scale: 0.82,
//         slideShadows: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//       className="categorySwiper"
//     >
//       {categories.map((category) => (
//         <SwiperSlide key={category.id} className="!w-[320px]">
//           <CategoryCard category={category} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default CategoryCarousel;

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./category.css";

import CategoryCard from "./CategoryCard";
import Orbit from "./Orbit";

import { categories } from "./categoryData";

const CategoryCarousel = () => {
  const [, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {/* ONE ORBIT */}

      <Orbit
        width={820}
        height={170}
        className="
          left-1/2
          -translate-x-1/2
          bottom-[95px]
          z-0
        "
      />

      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        slidesPerView={"auto"}
        speed={700}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -120,
          depth: 280,
          modifier: 2,
          scale: 0.82,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="categorySwiper relative z-10"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="!w-[320px]">
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;
