import img1 from '../../../src/images/vectors/vector-2.svg';
import img2 from '../../../src/images/vectors/vector-3.png';
import img4 from '../../../src/images/vectors/4.svg';
import img5 from '../../../src/images/vectors/5.svg';
import img6 from '../../../src/images/vectors/6.svg';
import img7 from '../../../src/images/vectors/7.svg';
import img8 from '../../../src/images/hero.jpeg';
import img9 from '../../../src/images/teacher-logo.png';
import img11 from '../../../src/images/vectors/arrow.svg';
import img12 from '../../../src/images/vectors/check.svg';
import img13 from '../../../src/images/vectors/msg.svg';
import img14 from '../../../src/images/vectors/msg-bg-3.png';

// import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from './Header';
import { Link } from 'react-router-dom';
export default function Mail() {

    return (
        <div className="bodyCont">
            <div className="body-wrapper">
                <Header />
                <section className="sign-section llogin">
                    <div className="container m-auto">
                        <div className="sign-cont">
                            <LazyLoadImage
                                src={img1}
                                alt="vector"
                                className="rocket-img"
                            />
                            <LazyLoadImage
                                src={img2}
                                alt="vector"
                                className="star-img"
                            />
                            <div className="sign-hero">
                                <div className="sign-hero-img">
                                    <div className="hero-img">
                                        <LazyLoadImage src={img8} alt="hero" />
                                    </div>
                                    <LazyLoadImage
                                        src={img9}
                                        alt="logo"
                                        className="teacher-logo"
                                    />
                                </div>
                            </div>
                            <div className="sign-form">
                                <div className="sign-form-head" style={{ height: "85px" }}>
                                    <Link to='/login' className="form-ex"
                                    ><LazyLoadImage src={img11} alt="back"
                                        /></Link>
                                </div>
                                <div className="sign-form-cont">
                                    <div className="check-msg">
                                        <div className="msg-bg"><span></span></div>
                                        <LazyLoadImage
                                            src={img13}
                                            alt="icon"
                                            className="icon-msg"
                                        />
                                        <h3 className="msg-head"><span>Check Your Email</span></h3>
                                        <p className="msg-pargh">
                                            An email has been sent to recover your password, Check your
                                            email.
                                        </p>
                                        <LazyLoadImage
                                            src={img14}
                                            alt="bg"
                                            className="msg-bg-img"
                                        />
                                        <LazyLoadImage
                                            src={img12}
                                            alt="check"
                                            className="msg-seen"
                                        />
                                    </div>
                                    <LazyLoadImage
                                        src={img4}
                                        alt="icon"
                                        className="sign-vector sign-v1"
                                    />
                                    <LazyLoadImage
                                        src={img5}
                                        alt="icon"
                                        className="sign-vector sign-v2"
                                    />
                                    <LazyLoadImage
                                        src={img6}
                                        alt="icon"
                                        className="sign-vector sign-v3"
                                    />
                                    <LazyLoadImage
                                        src={img7}
                                        alt="icon"
                                        className="sign-vector sign-v4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}