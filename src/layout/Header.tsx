import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className={`trasition fixed z-10 flex w-full justify-center space-x-6 py-3 backdrop-blur-lg backdrop-filter duration-500 ease-in-out ${
            animateHeader && "bg-[rgb(215,221,221)]/90 shadow-xl"
          }`}
        >
          <Link href="/">
            <p className="cursor-pointer">Home</p>
          </Link>
          <Link href="/About">
            <p className="cursor-pointer">About me</p>
          </Link>
          <Link href="/Experience">
            <p className="cursor-pointer">Experience</p>
          </Link>
          <Link href="/Projects">
            <p className="cursor-pointer">Projects</p>
          </Link>
          <Link href="/Contact">
            <p className="cursor-pointer">Contact</p>
          </Link>
        </div>
      </div>
    </>
  ); 
}

export default Header;