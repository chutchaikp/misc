// TODO: create my own slider

// Adap from react-responsive-carousel
// <ul class="slider animated"
// transform: translate3d(-60%, 0px, 0px);
// transition-duration: 350ms;

// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import { useState } from 'react';
import './MySlider.scss';
const MySlider = () => {
  // left: 0 -300px -600px -900px
  // right: 0 +300px + 600px ...
  const [index, setIndex] = useState(0);
  const MoveLeft = () => {
    setIndex(index - 300);
  };
  const MoveRight = () => {
    setIndex(index + 300);
  };

  return (
    <div className="my-slider">
      <h1> Slider {index} </h1>
      <div className="buttons">
        <button onClick={() => MoveLeft()}>LEFT</button>
        <button onClick={() => MoveRight()}>right</button>
      </div>
      <div className="wrapper">
        <ul
          style={{
            transform: `translate3d(${index}px, 0px, 0px)`,
            transitionDuration: '350ms',
          }}
        >
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          <li>
            <MyProduct />
          </li>
          {/* <li>
            <MyProduct />
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default MySlider;

const MyProduct = () => {
  return (
    <div className="product">
      <img src="./images/products/p1.png" alt="" />
      <p>Product name</p>
      <p>9.99</p>
    </div>
  );
};

// // import required modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Keyboard, Pagination, Navigation } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './slider.scss';
// const Slider = () => {
//   return (
//     <div className="slider">
//       <h1> Slider </h1>

//       <div className="mySwiper">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           keyboard={{
//             enabled: true,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Keyboard, Pagination, Navigation]}
//           className="hello"
//         >
//           <SwiperSlide>Slide 1</SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//           <SwiperSlide>Slide 5</SwiperSlide>
//           <SwiperSlide>Slide 6</SwiperSlide>
//           <SwiperSlide>Slide 7</SwiperSlide>
//           <SwiperSlide>Slide 8</SwiperSlide>
//           <SwiperSlide>Slide 9</SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };
// export default Slider;
