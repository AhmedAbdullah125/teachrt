'use client'
import harts from '/public/harts.svg'
import tringStar from '/public/tringStar.svg'
import dots from '/public/dots.svg'
import send from '/public/send.png'
import car from '/public/car.svg'
import lamb from '/public/lamb.svg'
import tallDots from '/public/tallDots.svg'
import cloud from '/public/cloud.svg'
import arrowDown from '/public/arrowDown.png'
import logo from '/public/logoMini.png'
import NumberTicker from '../ui/number-ticker';
// import Image from 'next/image';
// import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Recorder from './Recorder';


export default function Rest() {
    let relatives = [
        { id: 1, text: "First Level 1" },
        { id: 2, text: "First Level 2" },
        { id: 3, text: "First Level 3" },
        { id: 4, text: "First Level 4" },
        { id: 5, text: "First Level 5" },
        { id: 6, text: "First Level 9" },
        { id: 7, text: "First Level 1" },
        { id: 8, text: "First Level 2" },
        { id: 9, text: "First Level 3" },
        { id: 10, text: "First Level 4" },
        { id: 11, text: "First Level 5" },
        { id: 12, text: "First Level 9" },
    ]
    let [open, setOpen] = useState(0)
    return (
        <div className="rest">
            <h2>Conversation <span>AI Solutions</span> Infinite Possibilities 💪🏻</h2>
            <div className="rest-cont">
                <div className="counter-cont">
                    <div className="counter-r contter">
                        <div className="bordered-counter">
                            <LazyLoadImage src={harts} alt="iTeacher" />
                            <div className="counter">
                                <NumberTicker value={200} />
                                <p>Favorite Questions</p>
                            </div>
                        </div>
                    </div>
                    <div className="counter-b contter">
                        <div className="bordered-counter">
                            <LazyLoadImage src={lamb} alt="iTeacher" />
                            <div className="counter">
                                <NumberTicker value={7985} />
                                <p>Favorite Questions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="saying-hey">
                    <div className="hey">
                        <div className="text-cont">
                            Hey, Shams !
                            <div className="arrow-after">
                            </div>
                        </div>
                    </div>
                    <div className="logo-img">
                        <LazyLoadImage src={logo} alt="iTeacher" />
                    </div>
                    <p className="hey-p">Start A Conversation With Our <span>AI Chatbot</span> Today !</p>
                </div>
                <div className="help-steps">
                    <h3>What Can I help with?</h3>
                    <div className="trings-cont">

                        {
                            relatives.map((item, index) =>
                                <div className="relative" style={relatives.length - 1 === index ? { zIndex:relatives.length } : {zIndex: index +1}} key={item.id}>
                                    <div
                                        className="dotted-star">
                                        <LazyLoadImage className='star' src={tringStar} alt="iTeacher" />
                                        <LazyLoadImage className='dots' src={dots} alt="iTeacher" />
                                    </div>
                                    <motion.div
                                        initial={{ insetInlineStart: 0 }}
                                        whileInView={{ insetInlineStart: "50%" }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: 'linear',
                                            bounce: 0,
                                            duration: 5,
                                            delay: 0
                                        }}
                                        className="car-cont-2">
                                        <LazyLoadImage src={car} alt="iTeacher" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.2,
                                            duration: index * .1,
                                        }}
                                        viewport={{ once: true }}
                                        className="tring">
                                        <h5>{item.text}</h5>
                                        <div className="relative">
                                            <LazyLoadImage src={arrowDown} alt="iTeacher" onClick={() => {
                                                if (open === item.id) {
                                                    setOpen(0)
                                                } else {
                                                    setOpen(item.id)
                                                }
                                            }} />
                                        </div>
                                    </motion.div>
                                    <div className="dropp absolute " style={open === item.id ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}>
                                        <div className="arrow-after" ></div>
                                        <Link to={'/chat'} className=""><span>chat</span></Link>
                                        <Link to={'/login'} className=""><span>Login</span></Link>
                                    </div>
                                </div>
                            )
                        }

                        <LazyLoadImage className='tall-dotsmm' style={relatives.length > 3 ? {} : { display: 'none' }} src={tallDots} alt="iTeacher" />
                        {/* <motion.div
                            initial={{ insetInlineStart: 0 }}
                            whileInView={{ insetInlineStart: "100%" }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'linear',
                                bounce: 0,
                                duration: 5,
                            }}
                            className="car-cont">
                            <LazyLoadImage src={car} alt="iTeacher" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, insetInlineStart: 0 }}
                            whileInView={{ opacity: 1, insetInlineStart: "66%" }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'linear',
                                bounce: 0,
                                duration: 5,
                                delay: 5
                            }}
                            className="car-cont-2">
                            <LazyLoadImage src={car} alt="iTeacher" />
                        </motion.div> */}
                    </div>
                    <form className="form-cont" action="#" id='form-cont'>
                        <input type="text" placeholder='Write your question here...'></input>
                        <div className="btnss">
                            <Recorder/>
                            <label htmlFor="file-upload" className="custom-file-upload">
                            </label>
                            <input id="file-upload" type="file" />
                            <label htmlFor="submit" className="custom-submit">
                                <span>Send</span> <LazyLoadImage src={send} alt='iTeacher'></LazyLoadImage>
                            </label>
                            <input type="submit" className='submit' id="submit"></input>
                        </div>
                    </form>
                    <LazyLoadImage src={cloud} alt='iTeacher' className='cloud-img'></LazyLoadImage>
                </div>
            </div>
        </div >
    );
}