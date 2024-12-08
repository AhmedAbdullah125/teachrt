'use client';
// import React, { useState } from 'react';
import logo from '/public/logo.png';
// import Image from 'next/image';import { Menu, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
export default function Header() {
  // const [position, setPosition] = useState("bottom")
  return (
    <header>
      <div className="custom-container">
        <div className="header-cont">
          <div className="align-header">
            <div className="main-logo">
              <LazyLoadImage src={logo} alt="image" />
              <span>GreenWood International School</span>
            </div>
            <div className="main-logo main-select">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Teacher" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl">
                  <SelectGroup className="">
                    <SelectLabel className="bg-transparent mb-2">iteacher 4o</SelectLabel>
                    <SelectItem value="iteacher4o" className="mb-2 border rounded-xl hover:bg-slate-500 border-[#EAEAEC]">iteacher 4o</SelectItem>
                    <SelectItem value="iteacher4" className="mb-2 border rounded-xl hover:bg-slate-500 border-[#EAEAEC]">iteacher 4</SelectItem>
                    <SelectItem value="iteacher3" className="mb-2 border rounded-xl hover:bg-slate-500 border-[#EAEAEC]">iteacher 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Link to={'/login'}   className="user-name">SH</Link>
        </div>
      </div>
    </header>
  );
}