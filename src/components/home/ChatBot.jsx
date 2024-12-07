// import React from 'react';
import sos from '/public/sos.svg'
import cls from '/public/cls.png'
import hager from '/public/hager.svg'
import mLogo from '/public/messlogo.svg'
import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ChatBot() {
    let messages = [
        { id: 1, message: 'hello', owner: 'me', },
        { id: 2, message: 'Hi! How can I help you today? 😊', owner: 'chat', },
        { id: 3, message: 'How can I add and subtract two numbers?', owner: 'me', },
        { id: 4, message: `Adding and subtracting two numbers is simple!Here is how you can do it:<br/><span className="bold">1. Enter the first number.</span><br/><ul><li>Click on the "Add" button.</li><li>Click on the "Subtract" button.</li></ul><span className="bold">2. Enter the second number.</span><br/><ul><li>Click on the "Add" button.</li><li>Click on the "Subtract" button.</li><li>Click on the "Add" button.</li><li>Click on the "Subtract" button.</li></ul><span className="bold">3. Click on the "Add" or "Subtract" button.</span><br/>That's it! <div className="code"><div className="code-head"><span>Python</span><span><i className="fa-solid fa-copy"></i> Copy Code</span></div><div className="code-body"><pre className="comment"># Add and subtract two numbers </pre><pre><code>num1 = <span className="number">3</span><br/>num2 = <span className="number">5</span><br/><span className="comment"># Add and subtract two numbers</span><br/>sum_result = num1 + num2<br/>"result = num1 + num2<br/><span className="keyword">print</span>(<span className="variab">"Sum:"</span>, sum_result)<br/> <span className="comment"># Subtraction </span> <br/>sub_result = num1 - num2<br/>"result = num1 - num2<br/><span className="keyword">print</span>(<span className="variab">"Subtraction:"</span>, sub_result)</code></pre></div></div> Would you like to explore it further?`, owner: 'chat' },
        { id: 5, message: 'yes', owner: 'me', },
        { id: 6, message: 'Great! Let’s dive a bit deeper into adding and subtracting numbers programmatically. I will expand on how to take user input, perform multiple operations, and handle different data types.<div className=bold>Example: Python Program for Adding and Subtracting Numbers</div><div className="code"><div className="code-head"><span>Python</span><span><i className="fa-solid fa-copy"></i> Copy Code</span></div><div className="code-body"><pre className="comment"># Add and subtract two numbers </pre><pre><code>num1 = <span className="number">3</span><br/>num2 = <span className="number">5</span><br/><span className="comment"># Add and subtract two numbers</span><br/>sum_result = num1 + num2<br/>"result = num1 + num2<br/><span className="keyword">print</span>(<span className="variab">"Sum:"</span>, sum_result)<br/> <span className="comment"># Subtraction </span> <br/>sub_result = num1 - num2<br/>"result = num1 - num2<br/><span className="keyword">print</span>(<span className="variab">"Subtraction:"</span>, sub_result)</code></pre></div></div><div className="bold">Steps to Run This Program:</div><ol><li>Copy the code above.</li><li>Paste it into any Python IDE (like PyCharm, VS Code, or Jupyter Notebook) or an online compiler like Replit</li><li>Run the code.</li></ol><div className="bold">Output:</div><pre className="comment">Sum: 8<br/>Subtraction: -2</pre></div><ul><li>Valid Input: Catch errors if users enter invalid data.</li><li>Large Numbers: Handle very large values (Python supports arbitrarily large integers by default). Here’s an enhanced version with error handling:</li>', owner: 'chat', },
        { id: 7, message: 'hello', owner: 'me', },
        { id: 8, message: 'hello', owner: 'me', },
        { id: 9, message: 'hello', owner: 'me', },
        { id: 10, message: 'hello', owner: 'me', },
    ]
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
                    <div className="messages-cont">
                        {
                            messages.map((message) =>
                                message.owner == 'me' ?
                                    <div className="message-cont" key={message.id}>
                                        <p className="message">{parse(message.message)}</p>
                                    </div>
                                    :
                                    <div className="chatpor-message-cont " key={message.id}>
                                        <LazyLoadImage src={mLogo} alt="iTeacher" />
                                        <p className="message">{parse(message.message)}</p>
                                    </div>
                            )
                        }
                    </div>
                    <form action="/">
                        <div className="abs-text-area">
                            <textarea className="text-area" placeholder='Message to iteacher...'></textarea>
                        </div>
                        <div className="btns-cont">
                            <label htmlFor="file-upload" className="custom-file-upload">
                            </label>
                            <input id="file-upload" className='fileUploader' type="file" />
                            <label htmlFor="file-upload" className="custom-file-upload2">
                            </label>
                            <input id="file-upload" className='fileUploader' type="file" />
                            <label htmlFor='submit' className="send-btn-cont">
                                <span className="send-btn">Send</span>
                                <i className="fa-solid fa-paper-plane"></i>
                                <LazyLoadImage src={hager} alt="iTeacher" className='hagar' />
                            </label>
                            <input type="submit" className='submit-btn-with-label' id="submit"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}