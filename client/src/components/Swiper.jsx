"use client"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";


export default function Swipers() {
  return (
    <> 
      <div className="flex flex-col w-full h-[400px] md:h-[600px] bg-white px-2">
      <h1 className="text-2xl text-[48px] text-center text-[rgba(0,0,0,1)] my-10 ">WHAT OUR USERS SAY</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
        >
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <img
                src="/images/slide3.png"
                width={200}
                height={200}
                // objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <h1 className="text-[rgba(0,0,0,1)] text-[16px] font-[600]">Sarah</h1>
            <p className="text-slate-600">Bakery Owner</p>
            <p className="text-[rgba(0,0,0,1)] py-6 px-8 text-start">
              I used to spend hours creating financial reports manually. Now, I
              just download the PDF and get everything I need in one place. The
              platform is straightforward and user-friendly.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <img
                src="/images/slide1.png"
                width={200}
                height={200}
                // objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <h1 className="text-[rgba(0,0,0,1)] text-[16px] font-[600]">David</h1>
            <p className="text-slate-600">IT Consultant</p>
            <p className="text-[rgba(0,0,0,1)] py-6 px-8 text-start">
              This tool has made my financial tracking so much easier. I love
              how simple it is to add my expenses and income. The alerts have
              helped me avoid overspending.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3 bg-[rgba(66,133,244,0.5)]">
            <div className="flex justify-center mb-4">
              <img
                src="/images/slide3.png"
                width={200}
                height={200}
                // objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <h1 className="text-[rgba(0,0,0,1)] text-[16px] font-[600]">Maria</h1>
            <p className="text-slate-600">Freelancer</p>
            <p className="text-[rgba(0,0,0,1)] py-6 px-8 text-start">
              I’ve tried other tools, but they were too complicated or
              expensive. This platform gives me exactly what I need clear
              financial insights without the headache.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <img
                src="/images/slide2.png"
                width={200}
                height={200}
                // objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <h1 className="text-[rgba(0,0,0,1)] text-[16px] font-[600]">Sarah</h1>
            <p className="text-slate-600">Bakery Owner</p>
            <p className="text-[rgba(0,0,0,1)] py-6 px-8 text-start">
              I used to spend hours creating financial reports manually. Now, I
              just download the PDF and get everything I need in one place. The
              platform is straightforward and user-friendly.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center py-3">
            <div className="flex justify-center mb-4">
              <img
                src="/images/slide3.png"
                width={200}
                height={200}
                // objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <h1 className="text-[rgba(0,0,0,1)] text-[16px] font-[600]">Maria</h1>
            <p className="text-slate-600">Maria, Freelancer</p>
            <p className="text-[rgba(0,0,0,1)] py-6 px-8 text-start">
              I’ve tried other tools, but they were too complicated or
              expensive. This platform gives me exactly what I need clear
              financial insights without the headache.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <img
                src="/images/slide3.png"
                width={200}
                height={200}
                // objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <h1 className="text-[rgba(0,0,0,1)] text-[16px] font-[600]">Sarah</h1>
            <p className="text-slate-600">Bakery Owner</p>
            <p className="text-[rgba(0,0,0,1)] py-6 px-8 text-start">
              I’ve tried other tools, but they were too complicated or
              expensive. This platform gives me exactly what I need clear
              financial insights without the headache.
            </p>
          </SwiperSlide> 
        </Swiper>
      </div>
    </>
  );
}
