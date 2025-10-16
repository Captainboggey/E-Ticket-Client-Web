import React from "react";
import l1 from "../../assets/lalbag/l1.webp";
import l2 from "../../assets/lalbag/lal2.webp";
import l3 from "../../assets/lalbag/lal3.webp";
import l4 from "../../assets/lalbag/lal4.webp";
import l5 from "../../assets/lalbag/lal5.webp";
import { Link } from "react-router-dom";

const LalbagCard = () => {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-5 mx-auto  md:mx-10 justify-center items-center gap-5">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={l1} alt="Shoes" />
          </figure>
        </div>

        <div>
          <div className="card bg-base-100     shadow-sm">
            <figure>
              <img src={l2} alt="Shoes" />
            </figure>
          </div>
        </div>
        <div>
          <div className="card bg-base-100  shadow-sm">
            <figure>
              <img src={l3} alt="Shoes" />
            </figure>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src={l4} alt="Shoes" />
            </figure>
          </div>
        </div>
        <div>
          <div className="card bg-base-100  shadow-sm">
            <figure>
              <img src={l5} alt="Shoes" />
            </figure>
          </div>
        </div>
        <div className="col-span-3">
          <p>
            <span className="text-center  my-10 text-green-800 font-bold">
              লালবাগ কেল্লা
            </span>{" "}
            বা কেল্লা আওরঙ্গবাদ ঢাকার দক্ষিণ-পশ্চিমাঞ্চলে বুড়িগঙ্গা নদীর তীরে
            অবস্থিত একটি অসমাপ্ত মুঘল দুর্গ। এটির নির্মাণকাজ শুরু হয়েছিল ১৬৭৮
            সালে, মুঘল সুবেদার মুহাম্মদ আজম শাহ কর্তৃক, যিনি ছিলেন সম্রাট
            আওরঙ্গজেবের পুত্র এবং পরবর্তীতে নিজেও সম্রাট পদপ্রাপ্ত হয়েছিলেন।
            কিন্তু পরে তিনি দিল্লি চলে যান এতে কাজ বন্ধ হয়ে যায়। তার
            উত্তরসুরি, মুঘল সুবাদার শায়েস্তা খাঁ ১৬৮০ সালে নির্মাণকাজ পুনরায়
            শুরু করেন, কিন্তু শেষ করেননি। কারণ মুঘল সুবাদার শায়েস্তা খাঁ এর
            কন্যা পরিবীবী মারা যান। এ কারণে তিনি নির্মাণ কাজ বন্ধ করে দেন।
          </p>
        </div>
      </div>
      <div className="text-center ">
       <Link to={'/lalbagTicket'}> <button
          className="btn bg-green-400  px-8 border-0 border-b-0 
        "
        >
          Buy Ticket
        </button></Link>
      </div>
    </div>
  );
};

export default LalbagCard;
