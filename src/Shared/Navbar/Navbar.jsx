import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/adaptive-icon.png';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';

const Navbar = () => {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const data = [
    { name: 'লালবাগ কেল্লা', value: '/lalbag' },
    { name: 'জাতীয় উদ্ভিদ উদ্যান', value: '/botanical' },
    { name: 'বাংলাদেশ জাতীয় চিড়িয়াখানা', value: '/zoo' },
    { name: 'পানাম নগর', value: '/panam' },
    { name: 'আহসান মঞ্জিল', value: '/ahsan' },
    { name: 'মহাস্থানগড়', value: '/mohasthangor' },
  ];

  const handleSelect = (value) => {
    setSelected(value);
    if (value) navigate(value);
  };

  return (
<div className="navbar bg-base-200 flex justify-between">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl"><img src={mainLogo} className='md:w-28 w-12' alt="" /></a>
  </div>

  <div className="navbar-end">
 
          <div >
            <div className=" rounded-lg    px-1  transition-all duration-200 ">
              <SelectSearch
                options={data}
                
                search
                placeholder="দর্শনীয় স্থান অনুসন্ধান করুন..."
                value={selected}
                onChange={handleSelect}
              />
            </div>
          </div>
       
  </div>
</div>
  );
};

export default Navbar;
