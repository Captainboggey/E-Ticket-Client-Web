import React from "react";
import f from "../../assets/acc.webp";

const Faq = () => {
  return (
    <div>
      <p className="text-center text-2xl my-10 text-green-800 font-bold">
        সচরাচর জিজ্ঞাসা
      </p>
      <div className="flex md:flex-row flex-col justify-center  my-10 gap-2 mx-10">
        <div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              <p> ১। কিভাবে টিকিট কিনতে পারবো?</p>
            </div>
            <div className="collapse-content">
              <p>
                আপনি আমাদেরওয়েবসাইটে গিয়েআপনার দর্শনীয়স্থান, তারিখএবং
                টিকিটসংখ্যা নির্বাচনকরে সহজেইটিকিট কিনতেপারবেন। এরপরপেমেন্ট
                সম্পন্নকরলেই আপনারটিকিট পপ-আপবা ড্যাশবোর্ডথেকে ডাউনলোডকরতে
                পারবেন।
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              <p> ২। টিকিট বাতিল বা ফেরতের নিয়ম কী?</p>
            </div>
            <div className="collapse-content">
              <p>টিকিট বাতিলবা ফেরতপ্রদানের সুযোগনেই ।</p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              <p>৩। আমি কি অনলাইনে টিকিট পরিবর্তন করতে পারবো?</p>
            </div>
            <div className="collapse-content">
              <p>টিকিট পরিবর্তনএর সুযোগনেই ।</p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              <p>৪। পেমেন্ট অপশনগুলো কী কী?</p>
            </div>
            <div className="collapse-content">
              <p>
                আপনি বিকাশ,নগদ, রকেট,ক্রেডিট কার্ডসহবিভিন্ন মোবাইলব্যাংকিং
                এবংঅনলাইন পেমেন্টঅপশন ব্যবহারকরে টিকিটেরমূল্য পরিশোধকরতে পারবেন।
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              <p>৫। আমি কি অন্য কারো টিকেটে ভ্রমণ করতে পারবো?</p>
            </div>
            <div className="collapse-content">
              <p>
                না, টিকিটক্রয়ের সময়ব্যবহৃত নামও তথ্যঅনুযায়ীই ভ্রমণকরতে
                হবে।অন্য কারোটিকিট ব্যবহারকরলে সেটিঅবৈধ হিসেবেগণ্য হবে।{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={f} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
