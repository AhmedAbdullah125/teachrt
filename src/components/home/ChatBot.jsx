import React, { useEffect, useState } from 'react';
import sos from '/public/sos.svg'
import cls from '/public/cls.png'
import hager from '/public/hager.svg'
import mLogo from '/public/messlogo.svg'
import parse from 'html-react-parser';
import rate1 from '/public/rate1.svg'
import rate2 from '/public/rate2.svg'
import rate3 from '/public/rate3.svg'
import rate4 from '/public/rate4.svg'
import rate5 from '/public/rate5.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Recorder from './Recorder';
// import { p } from 'framer-motion/client';
// import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';

export default function ChatBot() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState("");
    let [activRate, setActiveRate] = useState(0)
    let [text, setText] = useState('')
    let [isFile, setIsFile] = useState(false)
    let [isRecord, setIsRecord] = useState(false)
    const MAX_FILE_SIZE = 1024 * 1024 * 10; // 10MB
    const ACCEPTED_IMAGE_MIME_TYPES = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
    ];
    function handleRate(params) {
        console.log(params);
    }
    // console.log(isFile);

    let [messages, setMessages] = useState([
        { id: 10, message: 'اهلا يا سيدي', owner: 'chat', },
        { id: 9, message: 'hello', owner: 'me', },
        { id: 8, message: `Steps to Run This Program:<div className="bold">Steps to Run This Program:</div><ul><li>Copy the code above.</li><li>Paste it into any Python IDE (like PyCharm, VS Code, or Jupyter Notebook) or an online compiler like Replit</li><li>Run the code.</li></ul><p>Here’s an enhanced version with error handling:</p> `, owner: 'chat', owner: 'char', end: true, },
        { id: 7, message: 'hello', owner: 'me', },
        { id: 6, message: 'Great! Let’s dive a bit deeper into adding and subtracting numbers programmatically. I will expand on how to take user input, perform multiple operations, and handle different data types.<div className=bold>Example: Python Program for Adding and Subtracting Numbers</div><div className="code"><div className="code-head"><span>Python</span><span><i className="fa-solid fa-copy"></i> Copy Code</span></div><div className="code-body"><pre className="comment"># Add and subtract two numbers </pre><pre><code>num1 = <span className="number">3</span><br/>num2 = <span className="number">5</span><br/><span className="comment"># Add and subtract two numbers</span><br/>sum_result = num1 + num2<br/>"result = num1 + num2<br/><span className="keyword">print</span>(<span className="variab">"Sum:"</span>, sum_result)<br/> <span className="comment"># Subtraction </span> <br/>sub_result = num1 - num2<br/>"result = num1 - num2<br/><span className="keyword">print</span>(<span className="variab">"Subtraction:"</span>, sub_result)</code></pre></div></div><div className="bold">Steps to Run This Program:</div><ol><li>Copy the code above.</li><li>Paste it into any Python IDE (like PyCharm, VS Code, or Jupyter Notebook) or an online compiler like Replit</li><li>Run the code.</li></ol><div className="bold">Output:</div><pre className="comment">Sum: 8<br/>Subtraction: -2</pre></div><ul><li>Valid Input: Catch errors if users enter invalid data.</li><li>Large Numbers: Handle very large values (Python supports arbitrarily large integers by default). Here’s an enhanced version with error handling:</li>', owner: 'chat', },
        { id: 5, message: 'yes', owner: 'me', },
        { id: 4, message: `Adding and subtracting two numbers is simple!Here is how you can do it:<br/><span className="bold">1. Enter the first number.</span><br/><ul><li>Click on the "Add" button.</li><li>Click on the "Subtract" button.</li></ul><span className="bold">2. Enter the second number.</span><br/><ul><li>Click on the "Add" button.</li><li>Click on the "Subtract" button.</li><li>Click on the "Add" button.</li><li>Click on the "Subtract" button.</li></ul><span className="bold">3. Click on the "Add" or "Subtract" button.</span><br/>That's it! <div className="code"><div className="code-head"><span>Python</span><span><i className="fa-solid fa-copy"></i> Copy Code</span></div><div className="code-body"><pre className="comment"># Add and subtract two numbers </pre><pre><code>num1 = <span className="number">3</span><br/>num2 = <span className="number">5</span><br/><span className="comment"># Add and subtract two numbers</span><br/>sum_result = num1 + num2<br/>"result = num1 + num2<br/><span className="keyword">print</span>(<span className="variab">"Sum:"</span>, sum_result)<br/> <span className="comment"># Subtraction </span> <br/>sub_result = num1 - num2<br/>"result = num1 - num2<br/><span className="keyword">print</span>(<span className="variab">"Subtraction:"</span>, sub_result)</code></pre></div></div> Would you like to explore it further?`, owner: 'chat' },
        { id: 3, message: 'How can I add and subtract two numbers?', owner: 'me', },
        { id: 2, message: 'Hi! How can I help you today? 😊', owner: 'chat', },
        { id: 1, message: 'hello', owner: 'me', },
    ]);
    let messageCopy = [...messages];
    console.log(activRate)
    function handleSend() {
        if (file || isRecord || text != "") {
            setMessages([{
                id: messages.length + 1, message: `
                <p>${text}</p>
                ${isRecord ? `<div className="player">
                    <video src=${isRecord} controls   style={{ height: "54px"  }} className="md:w-56 w-44"/>
                </div>`
                        : ""
                    }
                ${file ? `<div className="file-text-cont">
                    <img src=${previewUrl} alt='iTeacher d'/>
                    
                </div>`: ""}
                ` , owner: 'me',
            }, ...messageCopy])
            setIsRecord(false)
            setText('')
            setFile(null)
            setPreviewUrl(null)
        }
        if (text == '') {
            document.querySelector('.text-area').style.border = '1px solid red';
        }
        // else {
        //     if (isFile) {
        //         setMessages([{
        //             id: messages.length + 1, message:

        //                 `<div className="file-text-cont">
        //                 <img src=${isFile} alt='iTeacher'>
        //                 <p>${text}</p>
        //             </div>
        //             `
        //             , owner: 'me',
        //         }, ...messageCopy])
        //         setText('')
        //         setIsFile(false)
        //     }
        //     else {
        //         if (text == '') {
        //             document.querySelector('.text-area').style.border = '1px solid red';
        //         }
        //         else {
        //             console.log(text);
        //             setMessages([{ id: messages.length + 1, message: text, owner: 'me', }, ...messageCopy])
        //             setText('')
        //             // setMessages([ { id: messages.length + 1, message: 'hello', owner: 'chat', } , ...messageCopy])
        //             // setInterval(() => {
        //             // },3000)
        //             // //stop time inter
        //             // clearInterval(this.intervalID)
        //         }
        //     }
        // }
    }
    const [file, setFile] = useState(null);
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    //     console.log(file);

    //     setMessages([{ id: messages.length + 1, message: "<img src='" + e.target.files[0].name + "' alt='iTeacher'>", owner: 'me', }, ...messageCopy])

    // }
    useEffect(() => {
        if (!file) {
            console.log("file is null");
            return;
        }
        console.log(file);

        // Validate file size
        if (file && file.size > MAX_FILE_SIZE) {
            setError("Maximum Size :5 MB");
            setSelectedFile(null);
            setPreviewUrl(null);
            log
            return;
        }

        // Validate file type
        if (file && !ACCEPTED_IMAGE_MIME_TYPES.includes(file.type)) {
            setError("Only Images is acceptable");
            setSelectedFile(null);
            setPreviewUrl(null);
            return;
        }

        // Create preview URL
        console.log("here");

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);

        setSelectedFile(file);
        setError("");

    }, [file])

    return (
        <div className="chat-main">
            <div className="yell-cont">
                <div className="sos-cont">
                    <LazyLoadImage src={sos} alt="iTeacher" />
                </div>
                <div className="cls-cont">
                    <LazyLoadImage src={cls} alt="iTeacher" />
                </div>
                <div className="white-cont">
                    {/* <div class="flex items-center rounded-[80px] bg-[#F9F9F9] py-3 overflow-hidden border border-[#E6E6E6] w-max rates-imgs" onClick={() => console.log("activRate")}>
                        <LazyLoadImage className={`${activRate == 1 ? "scale-125" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125`} src={rate1} alt="iTeacher" onClick={() => setActiveRate(1)}></LazyLoadImage>
                        <LazyLoadImage className={`${activRate == 2 ? "scale-125" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125`} src={rate2} alt="iTeacher" onClick={() => setActiveRate(2)}></LazyLoadImage>
                        <LazyLoadImage className={`${activRate == 3 ? "scale-125" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125`} src={rate3} alt="iTeacher" onClick={() => setActiveRate(3)}></LazyLoadImage>
                        <LazyLoadImage className={`${activRate == 4 ? "scale-125" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125`} src={rate4} alt="iTeacher" onClick={() => setActiveRate(4)}></LazyLoadImage>
                        <LazyLoadImage className={`${activRate == 5 ? "scale-125" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125`} src={rate5} alt="iTeacher" onClick={() => setActiveRate(5)}></LazyLoadImage>
                    </div> */}
                    <div className="messages-cont">
                        {
                            messages.map((message) =>
                                message.owner == 'me' ?
                                    <div className="message-cont" key={message.id}>
                                        <p className="message">{parse(message.message)}</p>
                                    </div>
                                    :
                                    <div className="c">
                                        <div className="chatpor-message-cont " key={message.id}>
                                            <LazyLoadImage src={mLogo} alt="iTeacher" />
                                            <div className="message">
                                                {parse(message.message)}

                                                {
                                                    message.end ?
                                                        <div class="flex items-center rounded-[80px] bg-[#F9F9F9] py-3 overflow-hidden border border-[#E6E6E6] w-max rates-imgs" onClick={() => console.log("activRate")}>
                                                            <LazyLoadImage className={`${activRate == 1 ? "scale-125 rounded-[5px] bg-slate-500/25" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125 hover:bg-slate-500/10`} src={rate1} alt="iTeacher" onClick={() => setActiveRate(1)}></LazyLoadImage>
                                                            <LazyLoadImage className={`${activRate == 2 ? "scale-125 rounded-[5px] bg-slate-500/25" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125 hover:bg-slate-500/10`} src={rate2} alt="iTeacher" onClick={() => setActiveRate(2)}></LazyLoadImage>
                                                            <LazyLoadImage className={`${activRate == 3 ? "scale-125 rounded-[5px] bg-slate-500/25" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125 hover:bg-slate-500/10`} src={rate3} alt="iTeacher" onClick={() => setActiveRate(3)}></LazyLoadImage>
                                                            <LazyLoadImage className={`${activRate == 4 ? "scale-125 rounded-[5px] bg-slate-500/25" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125 hover:bg-slate-500/10`} src={rate4} alt="iTeacher" onClick={() => setActiveRate(4)}></LazyLoadImage>
                                                            <LazyLoadImage className={`${activRate == 5 ? "scale-125 rounded-[5px] bg-slate-500/25" : ""} w-12 h-12 px-3 border-e  border-[#E6E6E6] shrink-0 hover:scale-125 hover:bg-slate-500/10`} src={rate5} alt="iTeacher" onClick={() => setActiveRate(5)}></LazyLoadImage>
                                                        </div>
                                                        : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                    <form action={handleSend}>
                        <div className="abs-text-area">
                            <textarea className="text-area" id='myFile' placeholder='Message to iteacher...' value={text} onChange={(e) => {
                                setText(e.target.value);
                                document.querySelector('.text-area').style.border = 'none';
                            }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSend()
                                    }
                                }}
                            ></textarea>
                        </div>
                        <div className="btns-cont">
                           
                            {
                                previewUrl ?
                                    <div className="img-file-cont">
                                        <LazyLoadImage src={previewUrl} alt="iTeacher" className='img-file' />
                                    </div>
                                    : null
                            }
                            <label htmlFor="file-upload" className="custom-file-upload">
                            </label>
                            <input id="file-upload" className='fileUploader' type="file" onChange={(e) => { setFile(e.target.files[0]); console.log(file) }} />
                            {error==""?null:<p>{error}</p>}
                            <Recorder setIsRecord={setIsRecord} isRecord={isRecord} />
                            <label htmlFor='submit' className="send-btn-cont" onClick={handleSend}>
                                <span className="send-btn">Send</span>
                                <i className="fa-solid fa-paper-plane"></i>
                                <LazyLoadImage src={hager} alt="iTeacher" className='hagar' />
                            </label>
                            <input className='submit-btn-with-label' id="submit"></input>
                        </div>
                    </form>
                </div>
            </div>
            <AudioPlayer />
        </div>
    );
}