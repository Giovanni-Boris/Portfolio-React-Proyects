import pro1 from "../../assets/project1.png";
import pro2 from "../../assets/project2.png";
import pro3 from "../../assets/project3.png";
import pro4 from "../../assets/project4.png";
const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Ecommerce Website Mern",
    text: "This application was made using the MERN stack, in the backend some libraries were used such as json web token, stripe to handle payments and crypto Js to encrypt passwords and to save the images firebase was used and in the frontend libraries such as styled components, redux toolkit and redux persist. If the application does not show the products, just wait a few seconds",
    view: "https://ecommerce-boris-giovanni.netlify.app",
    source: "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/ecommerce",
  },
  {
    imgsrc: pro2,
    title: "Blog Website MERN",
    text: "This application made in MERN is a blog where you can upload your anecdotes, you can delete or update them. The backend was built using json web token to give more security, express, bycript to encrypt my passwords and multer was used to save the images. On the frontend to manage the status, context api and axios for the requests. If your posts do not load please wait a few seconds. If you want to login use boris as USERNAME and 123456 as PASSWORD ",
    view: "https://blog-app-bori-giovanni.netlify.app",
    source: "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/blog-app",
  },
  {
    imgsrc: pro3,
    title: "Chat real time and facebook clone using MERN",
    text: "This facebook clone uses the MERN stack and also a real time chat like messenger using sockets. In the case of the backend it was built using libraries like bycript and multer to save images. On the frontend, context api is used to handle the global context and axios for reqeustrs. In the case of sockets, a separate server was used using socket.id. If you want to try the messenger first, wait a few seconds, log in with this information EMAIL: boris@gmail.com PASS:123456 and  in another private tab with EMAIL: lucas@gmail.com PASS: 123456 ",
    view: "https://facebook-boris-clone.netlify.app/",
    source: "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/chat-real-time",
  },
  {
    imgsrc: pro4,
    title: "Netflix application using MERN",
    text: "This facebook clone uses the MERN stack and also a real time chat like messenger using sockets. In the case of the backend it was built using libraries like bycript and multer to save images. On the frontend, context api is used to handle the global context and axios for reqeustrs. In the case of sockets, a separate server was used using socket.id. If you want to try the messenger first, wait a few seconds, log in with this information EMAIL: boris@gmail.com PASS:123456 and  in another private tab with EMAIL: lucas@gmail.com PASS: 123456 ",
    view: "https://netflix-clone-boris.netlify.app/",
    source: "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/netflix",
  },
];
export default ProjectCardData;
