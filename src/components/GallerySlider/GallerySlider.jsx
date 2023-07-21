import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./galleryslider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function GallerySlider({ image, socialImage }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={true}
        pagination={{ type: "dynamic" }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {image.map((image, index) => (
          <SwiperSlide
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
