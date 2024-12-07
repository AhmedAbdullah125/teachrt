import img1 from '../../../src/images/vectors/vector-2.svg';
import img2 from '../../../src/images/vectors/vector-3.png';
import img3 from '../../../src/images/vectors/btn-icon.svg';
import img4 from '../../../src/images/vectors/4.svg';
import img5 from '../../../src/images/vectors/5.svg';
import img6 from '../../../src/images/vectors/6.svg';
import img7 from '../../../src/images/vectors/7.svg';
import img8 from '../../../src/images/hero.jpeg';
import img9 from '../../../src/images/teacher-logo.png';
import img11 from '../../../src/images/vectors/008.svg';
import img12 from '../../../src/images/sucess.svg';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function NewPass() {
    // useEffect(() => {
    //     document.body.classList.add('sign-pages');
    //     document.body.classList.remove('bodyCont');
    //     // document.querySelector('.bodyCont').classList.toggle('bodyCont');
    //     // document.querySelector('.bodyCont').classList.remove('bodyCont');

    // }, []);
    // const router = useRouter();
    const navigate = useNavigate();
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
                                <div className="sign-form-head">
                                    <span>New Password 🔐</span>
                                </div>
                                <div className="sign-form-cont">
                                    <form action="" className="login-form">
                                        <div className="form-header">
                                            <h3>Enter new password to be changed</h3>
                                            <figure>
                                                <LazyLoadImage src={img11} alt="icon" />
                                            </figure>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">New Password:</label>
                                            <div className="form-input-relative">
                                                <label className="password-show">
                                                    <input type="checkbox" />
                                                    <i className="fa-light fa-eye-slash"></i>
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-input"
                                                    placeholder="Enter new password"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Confirm New Password:</label>
                                            <div className="form-input-relative">
                                                <label className="password-show">
                                                    <input type="checkbox" />
                                                    <i className="fa-light fa-eye-slash"></i>
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-input"
                                                    placeholder="Confirm new password"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-btn-cont">
                                            <LazyLoadImage
                                                src={img3}
                                                alt="icon"
                                                className="submit-vector"
                                            />
                                            <button className="submit-btn success-btn" type="button" onClick={() => {
                                                document.querySelector('.success-msg').style.opacity = '1';
                                                document.querySelector('.success-msg').style.visibility = 'visible';
                                                setTimeout(() => {
                                                    navigate('/login');
                                                }, 3000);
                                            }}>
                                                Change Password
                                            </button>
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
                                <div className="success-msg success-msgh">
                                    <span className="success-icon" ><LazyLoadImage src={img12} alt="success" /></span>
                                    <div className="success-content">
                                        <h5 className="success-title">Successfully</h5>
                                        <p className="success-pargh">
                                            Your Password Successfully Changed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}