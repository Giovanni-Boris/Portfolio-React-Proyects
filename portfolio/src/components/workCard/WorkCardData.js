import pro1 from "../../assets/project1.png";
import pro2 from "../../assets/project2.png";
import pro3 from "../../assets/project3.png";
import pro4 from "../../assets/project4.png";
import pro5 from "../../assets/project5.png";
import pro6 from "../../assets/project6.png";
const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Ecommerce Website Mern",
    text: `This application was made using the MERN stack, 
           in the backend some libraries were used such as 
           json web token, stripe to handle payments and 
           crypto Js to encrypt passwords and to save the 
           images firebase was used and in the frontend 
           libraries such as styled components, redux toolkit 
           and redux persist. If the application does not show 
           the products, just wait a few seconds. Please use 
            admin as Username and 123456 as password`,
    view: "https://ecommerce-boris-giovanni.netlify.app",
    source:
      "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/ecommerce",
  },
  {
    imgsrc: pro2,
    title: "Dashboard Website ASP.NET and Angular 17",
    text: "This application made in ASP.NET and angular stack is a dashboard where you can create users, products and orders, you can delete or update them. The backend was built using json web token to give more security, asp.net core v6, EntityFrameworkCore to manage the users and cloudinary was used to save the images. On the frontend  NGRX for global state and metareducers to save de data into sessionstorage. If the side does not load please wait a few seconds. If you want to login use 1234 as USERNAME and @String2 as PASSWORD  or you can create your own account",
    view: "https://net-angular-dashboard.netlify.app/",
    source:
      "https://github.com/Giovanni-Boris/Angular-Projects/tree/main/dashboard",
  },
  {
    imgsrc: pro3,
    title: "Chat real time and facebook clone using Spring Boot and Angular 16",
    text: "This facebook clone uses the Spring Boot and angular stack and also a real time chat like messenger using sockets. In the case of the backend it was built using libraries like spring-security and json web token to give more security. On the frontend, NGRX is used to handle the global context and firebase to save images. In the case of sockets, a separate server was used using WebSocketMessageBroker . If you want to try the messenger first, wait a few seconds, log in with this information EMAIL: boris@gmail.com PASS:123456 and  in another private tab with EMAIL: luis@gmail.com PASS: 123456 ",
    view: "https://angular-spring-facebook.netlify.app/",
    source:
      "https://github.com/Giovanni-Boris/Angular-Projects/tree/main/facebook",
  },
  /*{
    imgsrc: pro4,
    title: "Netflix application using MERN",
    text: `This MERN app is a Netflix clone. In this case 
            in the backend json web token to give more 
            security and and crypto-js to encrypt passwords. 
            On the frontend I use sass for styles and axios 
            for requests and to handle the genrral context api
            state with reducers. If you want login use 
            EMAIL: admin@gmail.com and PASSWORD: 123456    `,
    view: "https://netflix-react-mern.netlify.app/",
    source:
      "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/netflix",
  },*/
  {
    imgsrc: pro5,
    title: "Restaurant application using NextJS",
    text: `This application made in nexts is a pizzeria 
          restaurant, it has some tools such as redux toolkit 
          to manage the status, axios for requests and to manage 
          payments, PayPal and cookies are used. And in the api 
          using mongoose. If you want to enter the admin panel, 
          enter the /admin route and use USERNAME: admin 
          and PASSWORD: 123456 `,
    view: "https://portfolio-react-proyects.vercel.app/",
    source:
      "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/restaurant",
  },
  {
    imgsrc: pro6,
    title: "Admin panel Netflix MERN",
    text: `This admin panel uses the api used by the previously made 
            netflix app. In this case, firebase libraries were used 
            to create saves for the images and other resources. 
            To manage the state we use context api and reducers and 
            the graphics with rechards. To log in use the 
            Username: admin@gmail.com and Password: 123456 `,
    view: "https://admin-panel-netflix-boris.netlify.app/",
    source:
      "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/netflix/admin-panel",
  },
  {
    imgsrc: pro6,
    title: "Admin panel Ecommerce MERN",
    text: `This admin panel uses the api used by the previously 
           made ecommerce application. In this case, firebase libraries 
           were used to create saves for the images and other resources. 
           To manage the state, redux toolkit and redux persistor were 
           used, and the graphics with rechards. To log in use the 
           Username: admin and Password: 123456 `,
    view: "https://admin-panel-ecommerce-boris.netlify.app",
    source:
      "https://github.com/Giovanni-Boris/Portfolio-React-Proyects/tree/main/ecommerce/admin-panel",
  },
];
export default ProjectCardData;
