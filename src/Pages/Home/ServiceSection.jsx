import React from "react";
import in1 from "../../assets/l1.webp";
import in2 from "../../assets/l2.webp";
import in3 from "../../assets/l3.webp";

const ServiceSection = () => {
  return (
    <div>
      <p className="text-center text-2xl my-10 text-green-800 font-bold">
        সেবা গ্রহণের ধাপ
      </p>
      <div className="flex md:flex-row flex-col justify-center mx-auto gap-2 items-center">
        <div className="card bg-base-100 w-96 ">
          <figure>
            <img
              src={in1}
              className="rounded-xl shadow-sm p-3 my-2 hover:bg-green-100"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-[16px] text-center">ধাপ ১</h2>
            <p className="text-center text-[18px] font-bold">
              দর্শনীয় স্থান নির্বাচন করুন
            </p>
            <p className="text-center ">
              মাইগভ ই-টিকিটিং সাইটে প্রবেশ করে “দর্শনীয় স্থান নির্বাচন করুন”
              ড্রপডাউন থেকে আপনার পছন্দের দর্শনীয় স্থান নির্বাচন করুন।
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 ">
          <figure>
            <img src={in2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className=" text-[16px] text-center">ধাপ ২</h2>
            <p className="text-center text-[18px] font-bold">
              টিকিট ক্রয় করুন
            </p>
            <p className="text-center ">
              “টিকিট ক্রয় করুন” বাটন ক্লিক করে প্রয়োজনীয় তথ্য প্রদান করুন এবং
              এরপর “পেমেন্ট করুন” অপশন থেকে পেমেন্ট সম্পন্ন করে টিকিট ক্রয়
              করুন।
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 ">
          <figure>
            <img src={in3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className=" text-[16px] text-center">ধাপ ৩</h2>
            <p className="text-center text-[18px] font-bold">
              টিকিট ডাউনলোড করুন
            </p>
            <p className="text-center ">
              পেমেন্ট সম্পন্ন করার পর ডাউনলোড লিংক হতে অথবা মোবাইলে প্রাপ্ত SMS
              লিংক হতে আপনার টিকিট ডাউনলোড করুন। টিকিটের QR কোড স্ক্যানের
              মাধ্যমে ভেন্যুতে প্রবেশ করা যাবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
