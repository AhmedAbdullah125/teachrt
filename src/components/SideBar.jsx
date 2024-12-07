'use client'
// import Image from 'next/image';
import  { useEffect, useState } from 'react';
import teatcher from '/public/teacher.svg'
import starImg from '/public/star.svg'
import cloud from '/public/cloud2.svg'
import rocket from '/public/rocket.svg'
import paper from '/public/paper.svg'
import ghoz from '/public/ghoz.svg'
import pen from '/public/Pen.svg'
import asteca from '/public/asteca.svg'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function SideBar() {
    let accordionItems = [
        { id: 1, title: 'Math Tiltle here', data: [{ id: 1, title: 'Monday, 03 Jan 2024', isActive: true }, { id: 2, title: 'Monday, 04 Jan 2024', isActive: false }, { id: 3, title: 'Monday, 05 Jan 2024', isActive: false }, { id: 4, title: 'Monday, 05 Jan 2024', isActive: false }] },
        { id: 2, title: 'Math Tiltle here2', data: [{ id: 1, title: 'Monday, 03 Jan 2024', isActive: false }, { id: 2, title: 'Monday, 03 Jan 2024', isActive: false }, { id: 3, title: 'Monday, 03 Jan 2024', isActive: false }, { id: 4, title: 'Monday, 03 Jan 2024', isActive: false }] },
        { id: 3, title: 'Math Tiltle here3', data: [{ id: 1, title: 'Monday, 03 Jan 2024', isActive: false }, { id: 2, title: 'Monday, 03 Jan 2024', isActive: false }, { id: 3, title: 'Monday, 03 Jan 2024', isActive: false }, { id: 4, title: 'Monday, 03 Jan 2024', isActive: false }] },
    ];
    let width = screen.width;
    console.log(width);

    const [open, setOpen] = useState(false)
    function handleToggle() {
        document.getElementById('side-bar').classList.toggle('side-bar-mini')
    }
    useEffect(() => {
        window.innerWidth < 1024 ? setOpen(true) : setOpen(false)
    }, [])
    return (
        <div className={`side-bar ${open ? 'side-bar-mini' : ''}`} id='side-bar'>
            <div className="arrows">
                <div className="arr-togle" onClick={handleToggle}>
                    <div className="toggle" >
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
                <div className="add" >
                    <i className="fa-solid fa-plus" ></i>
                </div>
            </div>
            <div className="all-cont" id='all-cont'>
                <div className="teacher-img relative">
                    <LazyLoadImage src={teatcher} className='teacher-img'></LazyLoadImage>
                    <LazyLoadImage src={starImg} className="star-img absolute top-0 end-20 w-3 h-3 z-10"></LazyLoadImage>
                    <LazyLoadImage src={starImg} className="star-img absolute -bottom-3 end-0 w-5 h-5 z-10"></LazyLoadImage>
                    <LazyLoadImage src={starImg} className="star-img absolute -bottom-5 start-5 w-5 h-5 z-10"></LazyLoadImage>
                </div>
                <div className="discussions">
                    <h3>Discussions</h3>
                    <span>400</span>
                    <LazyLoadImage src={rocket} className="rocket-img"></LazyLoadImage>
                    <LazyLoadImage src={paper} className="paper-img"></LazyLoadImage>
                    <LazyLoadImage src={starImg} className="star-img absolute top-5 end-[40%] w-5 h-5 z-10"></LazyLoadImage>
                    <div className="w-2 h-2 bg-white/20 absolute top-4 start-8 rounded-full "></div>
                    <div className="w-5 h-5 bg-white/20 absolute top-4 start-12 rounded-full "></div>
                    <div className="w-2 h-2 bg-white/20 absolute top-[50%] end-[45%] rounded-full "></div>
                    <div className="w-1 h-1 bg-white/20 absolute bottom-8 start-[45%] rounded-full "></div>
                    <div className="w-4 h-4 bg-white/20 absolute bottom-4 start-[40%] rounded-full "></div>
                    <LazyLoadImage src={cloud} alt='iTeacher' className='cloud' />
                </div>
                <Accordion type="single" collapsible className="w-full accordion">
                    {
                        accordionItems.map((item, index) =>
                            <AccordionItem value={item.id} className='accordion-item' key={index}>
                                <AccordionTrigger><div className="accordion-title"><h2>{item.title}</h2> <span  className='num-back'>20</span></div></AccordionTrigger>
                                {
                                    item.data.map((subItem) =>
                                        <AccordionContent key={subItem.id}>
                                            <div className="accordion-conttent-data">
                                                <h4><i className="fa-regular fa-calendar-days"></i>{subItem.title}</h4>
                                                <div className="options">
                                                    <div className="option">
                                                        <div className="bullet"></div>
                                                        <h5>What is multiplication</h5>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56 drop-side rounded-xl p-4 ps-7 top-0 lg:left-12 right-12 arrow-smm " >
                                                                <div className="arrow-after rounded-2xl top-4 lg:-start-4 -end-4 lg:rotate-90"></div>
                                                                <DropdownMenuGroup>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#EAEAEC] bg-red px-6 py-2 mb-3'>Share
                                                                        <DropdownMenuShortcut><LazyLoadImage src={ghoz} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#EAEAEC] bg-red px-6 py-2 mb-3'>Rename
                                                                        <DropdownMenuShortcut><LazyLoadImage src={pen} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#FF3B30] text-[#FF3B30] bg-red px-6 py-2'>Delete
                                                                        <DropdownMenuShortcut><LazyLoadImage src={asteca} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                    <div className={`option ${subItem.isActive ? 'active-option' : ''}`}>
                                                        <div className="bullet"></div>
                                                        <h5>Addition of two numbers</h5>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56 drop-side rounded-xl p-4 ps-7 top-0 lg:left-12 right-12 arrow-smm " >                                                                <div className="arrow-after rounded-2xl top-4 lg:-start-4 -end-4 lg:rotate-90"></div>
                                                                <DropdownMenuGroup>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#EAEAEC] bg-red px-6 py-2 mb-3'>Share
                                                                        <DropdownMenuShortcut><LazyLoadImage src={ghoz} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#EAEAEC] bg-red px-6 py-2 mb-3'>Rename
                                                                        <DropdownMenuShortcut><LazyLoadImage src={pen} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#FF3B30] text-[#FF3B30] bg-red px-6 py-2'>Delete
                                                                        <DropdownMenuShortcut><LazyLoadImage src={asteca} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                    <div className="option">
                                                        <div className="bullet"></div>
                                                        <h5>Long division steps</h5>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <i className="fa-solid fa-ellipsis"></i>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56 drop-side rounded-xl p-4 ps-7 top-0 lg:left-12 right-12 arrow-smm " >                                                            <div className="arrow-after rounded-2xl top-4 lg:-start-4 -end-4 lg:rotate-90"></div>
                                                                <DropdownMenuGroup>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#EAEAEC] bg-red px-6 py-2 mb-3'>Share
                                                                        <DropdownMenuShortcut><LazyLoadImage src={ghoz} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#EAEAEC] bg-red px-6 py-2 mb-3'>Rename
                                                                        <DropdownMenuShortcut><LazyLoadImage src={pen} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem className='rounded-[60px] border border-[#FF3B30] text-[#FF3B30] bg-red px-6 py-2'>Delete
                                                                        <DropdownMenuShortcut><LazyLoadImage src={asteca} alt='iTeacher' /></DropdownMenuShortcut>
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    )
                                }

                            </AccordionItem>
                        )
                    }
                </Accordion>
            </div>
        </div>
    );
}
