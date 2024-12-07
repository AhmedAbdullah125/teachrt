
import Header from '../components/home/Header';
import SideBar from '../components/SideBar';
import ChatBot from './../components/home/ChatBot';
export default function ChatPage() {
    return (
        <div className="bodyCont">
            <div className="body-wrapper">
                <Header />
                <main className='main-home'>

                    <SideBar />
                    <ChatBot/>
                </main>
            </div>
        </div>
    )
}
