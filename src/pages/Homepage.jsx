
import Header from '../components/home/Header';
// import Recorder from '../components/home/Recorder';
import SideBar from './../components/SideBar';
import MainContent from './MainContent';
export default function Homepage() {
    return (
        <div className="bodyCont">
            <div className="body-wrapper">
                <Header />
                <main className='main-home'>

                    <SideBar />
                    <MainContent />
                </main>
                {/* <Recorder/> */}
            </div>
        </div>
    )
}
