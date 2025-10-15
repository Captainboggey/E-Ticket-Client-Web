import React from "react";
import g from "../../assets/gov.png";
import a from "../../assets/a2.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex justify-between   items-center p-4">
        <aside className="grid-flow-col items-center">
          <img src={g} className="w-10" alt="" />
          <p>
            কপিরাইট © ২০২৫ সর্বস্বত্ব সংরক্ষিত <br /> গণপ্রজাতন্ত্রী বাংলাদেশ
            সরকার
          </p>
        </aside>
        <nav className="grid-flow-col flex items-center gap-4 md:place-self-center md:justify-self-end">
          <p>পরিকল্পনা ও বাস্তবায়নে:</p>
          <a>
            <img className="w-40" src={a} alt="" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
