import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-16">
      <div className="flex items-center gap-6">
      <div><img src='./signature.png' className='w-12 md:w-16'/></div>
      <h1 className='text-white md:text-7xl text-4xl font-bold'>DO IT TODAY</h1>
      </div>
    </div>
  );
};

export default Navbar;
