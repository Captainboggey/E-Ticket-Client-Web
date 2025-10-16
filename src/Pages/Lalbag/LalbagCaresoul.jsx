import React from "react";
import { Carousel } from "react-responsive-carousel";
import l1 from "../../assets/lalbag/l1.webp";
import l2 from "../../assets/lalbag/lal2.webp";
import l3 from "../../assets/lalbag/lal3.webp";
import l4 from "../../assets/lalbag/lal4.webp";
import l5 from "../../assets/lalbag/lal5.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LalbagCaresoul = () => {
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
          <img className="md:h-[600px] " src={l1} />
        </div>
        <div>
          <img className="md:h-[600px]" src={l2} />
        </div>
        <div>
          <img className="md:h-[600px]" src={l3} />
        </div>
        <div>
          <img className="md:h-[600px]" src={l4} />
        </div>
        <div>
          <img className="md:h-[600px]" src={l5} />
        </div>
      </Carousel>
      <p className="text-center text-2xl my-10 text-green-800 font-bold">
        লালবাগ কেল্লা
      </p>
   
    </div>
  );
};

export default LalbagCaresoul;
