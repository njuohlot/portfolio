import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "The design created by Njuoh Lot was modern, visually appealing and easy to navigate, which helped to improve user experience.",
    },
    {
      img: profilePic2,
      review:
        "I recently hired Njuoh Lot to improve the SEO on my website and I couldn't be happier with the results. This guy was extremely professional and knowledgeable about the latest SEO techniques.",
    },
    {
      img: profilePic3,
      review:
        "I recently hired Njuoh Lot to improve the SEO on my website and I couldn't be happier with the results. This guy was extremely professional and knowledgeable about the latest SEO techniques.",
    },
    {
      img: profilePic4,
      review:
        "The design created by Njuoh Lot was modern, visually appealing and easy to navigate, which helped to improve user experience.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
