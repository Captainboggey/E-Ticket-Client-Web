import React from "react";
import { Carousel } from "react-responsive-carousel";
import b1 from "../../assets/botanical/b1.webp";
import b2 from "../../assets/botanical/b2.webp";
import b3 from "../../assets/botanical/b3.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BotanicalCaresoul = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        autoFocus={true}
      >
        <div>
          <img className="md:h-[600px] " src={b1} />
        </div>
        <div>
          <img className="md:h-[600px]" src={b2} />
        </div>
        <div>
          <img className="md:h-[600px]" src={b3} />
        </div>
      </Carousel>
      <p className="text-center text-2xl my-10 text-green-800 font-bold">
        জাতীয় উদ্ভিদ উদ্যান
      </p>
    </div>
  );
};

export default BotanicalCaresoul;
