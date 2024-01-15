import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

function Features() {
  return (
    <div className="bg-[#FFF0BD]">
      Features
      <div className="blogs-content">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          speed={800}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            800: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
          }}
          loop
          className="blog-swiper"
        >
          {blogSlice.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                {/* <BlogCard {...item} /> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Features;
