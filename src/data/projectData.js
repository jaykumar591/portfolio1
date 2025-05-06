import home from '../assets/movie/home.png';
// import image1 from '../assets/img/image1.png';
import chatDialog from '../assets/chats/img/chatdialog.png';
import chatHome from '../assets/chats/img/home.png';
import loginImage from '../assets/login/img/image.png';
import uploadHomePage from '../assets/uploaddata/dash.png';
import uploadLoginPage from '../assets/uploaddata/login.png';
import uploadVideo from '../assets/uploaddata/image.png';
import mybookHome from '../assets/mybook/home.png';
import mybookChat from '../assets/mybook/Chat.png';
import AIPost from '../assets/mybook/ai post.png';
import OwnPost from '../assets/mybook/own post.png';
import StudyHome from '../assets/study/home.png'
import StudyDashvoard from '../assets/study/dashboard.png'
import StudyDialog from '../assets/study/study dialog.png'
import StudyEnjoy from '../assets/study/Entertenmet dialog.png'

const projects = [
  {
    title: 'My Book',
    description:
      'Social media platform (video/audio call, chatting, post video/image, comment, like, powerful authentication system: email verification, recovery, masked account, OTP verification)',
    image: [mybookHome, mybookChat, AIPost, OwnPost],
    link: 'https://github.com/jaykmarBCET/mybook',
    code: 'https://github.com/jaykmarBCET/mybook',
  },
  {
    title:'Study',
    description:"A smart study platform that collects and organizes all videos from our YouTube playlists into one convenient place. Designed for both studying and entertainment, this platform lets users watch, learn, and ask questions—all without needing to switch tabs. Everything you need, all in one space.",
    image:[StudyHome,StudyDashvoard,StudyDialog,StudyEnjoy],
    link:"https://study-jay-kumar.vercel.app/",
    code:"https://github.com/jaykmarBCET/study"
  },
  {
    title: 'Movie Search App',
    description: 'Movie Search application',
    image: [home],
    link: 'https://movie-search-xi-nine.vercel.app',
    code: 'https://github.com/jaykumar591/movie-search',
  },
  {
    title: 'Authentication System',
    description: 'Login,Register,logout,current user,auto login',
    image: [loginImage],
    link: 'https://loginapp-6giz.onrender.com/',
    code: 'https://github.com/jaykumar591/loginapp',
  },
  {
    title: 'Droply Clone',
    description: 'Cloudinary, Next.js, MongoDB, JWT, Bcrypt, TailwindCSS, TypeScript, JavaScript, ShadCN',
    image: [uploadHomePage, uploadLoginPage, uploadVideo],
    link: 'https://uploaddata-eight.vercel.app',
    code: 'https://github.com/jaykumar591/uploaddata',
  },
  {
    title: 'Chat App',
    description: 'Express, Mongoose, Socket.IO, React, React-Toast, Multer, Cloudinary, MongoDB Cloud',
    image: [chatHome, chatDialog],
    link: 'https://chat-application-90tm.onrender.com/',
    code: 'https://github.com/jaykumar591/chat-application',
  }
];

export default projects;
