'use client';
// import React, { useState } from 'react';
import logo from '/public/logo.png';
// import Image from 'next/image';import { Menu, X } from 'lucide-react';
import ters from '/public/ters.svg'
import plan from '/public/plan.svg'
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
import { useState } from 'react';
export default function Header() {
  // let [open, setOpen] = useState(false)
  // const [position, setPosition] = useState("bottom")
  const [open, setOpen] = useState(false);
  const [openTeacher, setOpenTeacher] = useState(false);

  function handleOpen() {
    setOpen(!open)
    document.body.classList.toggle('overflow-y-hidden');
  }
  function handleOpenTeacher() {
    setOpenTeacher(!openTeacher)
    document.body.classList.toggle('overflow-y-hidden');
  }
  return (
    <header>
      <div className="overll" style={{ display: open || openTeacher ? "block" : "none", height: "100vh", width: "100%" }} onClick={() => {
        setOpen(false); setOpenTeacher(false)
        document.body.classList.toggle('overflow-y-hidden');
      }}>

      </div>
      <div className="custom-container">
        <div className="header-cont">
          <div className="align-header">
            <div className="main-logo">
              <Link to={'/'}><LazyLoadImage src={logo} alt='iTeacher' /></Link>
              <span>GreenWood International School</span>
            </div>
            <div className="main-logo main-select relative" onClick={handleOpenTeacher}>
              <p >iteacher 4o <i className="fa-solid fa-caret-down" style={openTeacher ? { transform: "rotate(180deg)" } : {}}></i></p>
              <div className="dropp absolute " style={openTeacher ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}>
                <div className="arrow-after" ></div>
                <Link to={'/login'} className=""><span>iTeacher 4o</span></Link>
                <Link to={'/chat'} className=""><span>Chatbot</span></Link>
                <Link to={'/mail'} className=""><span>iTeacher 3</span></Link>
                <Link to={'/newpass'} className=""><span>iTeacher 2</span></Link>
              </div>
            </div>
          </div>
          <div className="profile-cont relative">
            <div className="user-name" onClick={handleOpen}>SH</div>
            <div className="dropp absolute " style={open ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}>
              <div className="arrow-after" ></div>
              <Link to={'/login'} className=""><LazyLoadImage src={ters} alt='iTeacher' /><span>setting</span></Link>
              <Link to={'/newpass'} className=""><LazyLoadImage src={plan} alt='iTeacher' /><span>My Plan</span></Link>
              <Link to={'/login'} className=""><LazyLoadImage src={plan} alt='iTeacher' /><span>Log Out</span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}