
import img1 from '../../../src/images/vectors/vector-2.svg';
import img2 from '../../../src/images/vectors/vector-3.png';
import img3 from '../../../src/images/vectors/btn-icon.svg';
import img4 from '../../../src/images/vectors/4.svg';
import img5 from '../../../src/images/vectors/5.svg';
import img6 from '../../../src/images/vectors/6.svg';
import img7 from '../../../src/images/vectors/7.svg';
import img8 from '../../../src/images/hero.jpeg';
import img9 from '../../../src/images/teacher-logo.png';
import img10 from '../../../src/images/vectors/8.svg';

// import Image from 'next/image';
// import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Header from './Header';
export default function Login() {
    // useEffect(() => {
    //     document.body.classList.add('sign-pages');
    //     document.body.classList.remove('bodyCont');
    //     // document.querySelector('.bodyCont').classList.toggle('bodyCont');
    //     // document.querySelector('.bodyCont').classList.remove('bodyCont');

    // }, []);
    return (
        <div className="bodyCont">
            <div className="body-wrapper">
                <Header />
                <section className="sign-section llogin">
                    <div className="container mx-auto">
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
                                <div className="sign-form-head">
                                    <span>Login 🚀</span>
                                </div>
                                <div className="sign-form-cont">
                                    <form action="/" className="login-form">
                                        <div className="form-header">
                                            <h3>
                                                Enter Your Email and Password to access for your account
                                            </h3>
                                            <figure>
                                                <LazyLoadImage src={img10} alt="icon" />
                                            </figure>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email:</label>
                                            <input
                                                type="email"
                                                className="form-input"
                                                placeholder="Example: Johnsmith123@gmail.com"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Password:</label>
                                            <div className="form-input-relative">
                                                <label className="password-show">
                                                    <input type="checkbox" />
                                                    <i className="fa-light fa-eye-slash"></i>
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-input"
                                                    placeholder="Enter Your Password"
                                                />
                                            </div>
                                        </div>
                                        <Link to="/forget" className="forget-password">
                                            Forget Password?
                                        </Link>
                                        <div className="form-btn-cont">
                                            <LazyLoadImage
                                                src={img3}
                                                alt="icon"
                                                className="submit-vector"
                                            />
                                            <button className="submit-btn" type="submit">Login</button>
                                        </div>
                                    </form>
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