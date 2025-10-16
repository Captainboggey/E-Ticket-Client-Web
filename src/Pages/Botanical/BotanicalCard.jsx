import React from "react";
import b1 from "../../assets/botanical/b4.webp";
import b2 from "../../assets/botanical/b5.webp";
import b3 from "../../assets/botanical/b6.webp";
import b4 from "../../assets/botanical/b7.webp";
import b5 from "../../assets/botanical/b8.webp";
import { Link } from "react-router-dom";

const BotanicalCard = () => {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-3 mx-auto  md:mx-10 justify-center items-center gap-5">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={b1} alt="Shoes" />
          </figure>
        </div>

        <div>
          <div className="card bg-base-100  shadow-sm">
            <figure>
              <img src={b3} alt="Shoes" />
            </figure>
          </div>
        </div>

        <div>
          <div className="card bg-base-100  shadow-sm">
            <figure>
              <img src={b5} alt="Shoes" />
            </figure>
          </div>
        </div>

        <div className="col-span-3">
          <p>
            <span className="text-center  my-10 text-green-800 font-bold">
              জাতীয় উদ্ভিদ উদ্যান
            </span>{" "}
            বা বাংলাদেশ ন্যাশনাল হার্বেরিয়াম বাংলাদেশে উদ্ভিদ প্রজাতি সংরক্ষণ,
            গবেষণা ও প্রদর্শনের সবচেয়ে বড় কেন্দ্র হিসেবে বিবেচিত। কেন্দ্রটি
            ন্যাশনাল বোটানিক্যাল গার্ডেন নামেও পরিচিত। উদ্যানটি ঢাকার মিরপুরে
            বাংলাদেশ জাতীয় চিড়িয়াখানার পাশে অবস্থিত। ১৯৬১ সালে প্রায় ২০৮ একর
            (৮৪ হেক্টর) জায়গা জুড়ে উদ্যানটি প্রতিষ্ঠিত হয়। ঢাকার আরেকটি
            উদ্যান বলধা গার্ডেন প্রশাসনিক দিক দিয়ে এই উদ্যানেরই অংশ। জাতীয়
            উদ্ভিদ উদ্যান বাংলাদেশের অন্যতম বৃহৎ উদ্ভিদ উদ্যান। প্রতিবছর প্রায়
            ১৫ লক্ষ দর্শনার্থী উদ্যানটিতে বেড়াতে আসেন।
          </p>
        </div>
      </div>
      <div className="text-center ">
        <Link to={"/lalbagTicket"}>
          {" "}
          <button
            className="btn bg-green-400  px-8 border-0 border-b-0 
        "
          >
            Buy Ticket
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BotanicalCard;
