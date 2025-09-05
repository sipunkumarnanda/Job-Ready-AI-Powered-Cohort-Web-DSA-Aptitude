
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-pink-500 text-black w-full h-[50px] flex justify-between px-4 items-center">
        <div className="text-xl font-bold">
            Food Villa
        </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/product">Product</Link>
        <Link href="/services">Services</Link>
        <Link href="/courses">All Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
