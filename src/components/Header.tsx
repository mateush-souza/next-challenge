"use client";
import Image from 'next/image'
import Link from "next/link";

import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from '@/image/logo.png'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow-md w-full py-6 px-10 bg-white">
      <nav className="grid md:grid-cols-12 items-center gap-4">
        <div className="absolute col-span-2 md:col-span-2 xs:static">
          <Image
            src={logo}
            alt="Logo autocheckup"
            className="h-auto"
            width={200}
            height={500}
          />
        </div>
        <div className="hidden md:flex md:col-span-6 justify-between font-semibold">
          <ul className="flex space-x-8">
            <li
              className="cursor-pointer border-b-3 border-transparent hover:border-blue-500"
            >
             <Link href={'/'}>Home</Link>
            </li>
            <li className="cursor-pointer border-b-3 border-transparent hover:border-blue-500">
              Diagnostico
            </li>
            <li
              className="cursor-pointer border-b-3 border-transparent hover:border-blue-500"
            >
             <Link href={'/membros'}>Participantes</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:col-span-4 justify-end">
          <button
            className="w-40 h-10 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            <Link href={'/login'}>Àrea do Cliente</Link>
          </button>
        </div>
        <div className="md:hidden flex justify-end">
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-8 h-8" onClick={toggleMobileMenu} />
          ) : (
            <Bars3Icon className="w-8 h-8" onClick={toggleMobileMenu} />
          )}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute right-0 top-20 w-full bg-white p-6 shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            <li
              className="cursor-pointer"
            >
              <Link href={'/'}>Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={'/login'}>Diagnostico</Link>
            </li>
            <li
              className="cursor-pointer"
            >
             <Link href={'/membros'}>Participantes</Link>
            </li>
            <li className="cursor-pointer">
              <button
                className="w-40 h-10 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                <Link href={'/login'}>Àrea do Cliente</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
