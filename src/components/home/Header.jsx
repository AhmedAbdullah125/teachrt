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
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="bg-transparent">iteacher 4o</SelectLabel>
                    <SelectItem value="iteacher4o">iteacher 4o</SelectItem>
                    <SelectItem value="iteacher4">iteacher 4</SelectItem>
                    <SelectItem value="iteacher3">iteacher 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="user-name">SH</div>
        </div>
      </div>
    </header>
  );
}