
import Header from '../components/home/Header';
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
            </div>
        </div>
    )
}
