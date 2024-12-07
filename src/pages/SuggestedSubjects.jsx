import { Link } from 'react-router-dom';
import sub from '/public/sub.png'
import view from '/public/view.svg'
// import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function SuggestedSubjects() {
    return (
        <div className="suggested-subjects">
            <div className="heading">
                <h2>Suggested Subjects</h2>
                <Link to={'#'}><LazyLoadImage src={view} className='view-img-d' alt='iTeacher'></LazyLoadImage> <span>View All</span></Link>
            </div>
            <div className="sug-subs-cont">
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <LazyLoadImage src={sub} alt='iTeacher' />
                        <Link to={'#'}> View Subject <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <LazyLoadImage src={sub} alt='iTeacher' />
                        <Link to={'#'}> View Subject <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <LazyLoadImage src={sub} alt='iTeacher' />
                        <Link to={'#'}> View Subject <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <LazyLoadImage src={sub} alt='iTeacher' />
                        <Link to={'#'}> View Subject <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}