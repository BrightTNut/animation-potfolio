import {
  NFTIMG,
  TodoFirebase,
  Iphone,
  RandomGif,
  Coffee,
} from "../images/index";
export const projects = [
  {
    id: 9,
    title: "NFT-market-place-using-api",
    date: "Jun 2023 - Aug 2023",
    description:
      "I'm developing an NFT marketplace using an API, enabling users to easily create, trade, and purchase unique digital assets as NFTs. The API integration ensures secure authentication, seamless minting of NFTs through blockchain, and smooth user transactions. This project aims to simplify the NFT experience for artists and collectors, fostering a vibrant ecosystem of digital ownership and creativity.",

    image: NFTIMG,
    tags: [
      "Javascript",
      "AWS",
      "Eslint",
      "React Js",
      "MongoDb",
      "Node Js",
      "Next Js",
      "Express Js",
      "Redux",
    ],
    category: "Blockchain application",
    github: "https://github.com/BrightTNut/NFT-market-place-using-api",
    webapp: "https://live-nft-marketplace.netlify.app/",
  },
  {
    id: 0,
    title: "IPhone 15 Pro Web Page",
    date: "March 2024",
    description:
      "Implemented captivating animations and immersive 3D graphics in React.js using GSAP and Three.js, enhancing user experience..",
    image: Iphone,
    tags: ["React Js", "GSAP", "Three.js", "javascript"],
    category: "web app",
    github: "https://github.com/BrightTNut/APPLE",
    webapp: "https://apple-ruby.vercel.app/",
    member: [
      {
        name: "Tejas Shiwankar",

        linkedin: "https://www.linkedin.com/in/tejas-shiwankar-099b8021b/",
        github: "https://github.com/BrightTNut/",
      },
    ],
  },
  {
    id: 1,
    title: "Todo App Using Firbase Authontication & Database",
    date: "April 2024",
    description:
      "Designed and developed the Todo Web page, a web page Operate Each user personal task . Implemented key features such as task tracking, task updatation, and task tracking.Beat part is Authontication using Firebase also Use of Database integaration of Firebasr Firestore. The plan is to add a user friendly Todo App using Google authontication which make it simple to use.",
    image: TodoFirebase,
    tags: [
      "Next Js",
      "Firebase Authontication",
      "Firebase Firstore Database",
      "Node Js",
      "Tailwind",
    ],
    category: "web app",
    github: "https://github.com/BrightTNut/MYTODO",
    webapp: "https://mytodo-two-rose.vercel.app/",
  },
  {
    id: 2,
    title: "Random Gif Generator",
    date: "Mar 22024",
    description:
      "Generator GIFS as per user mention words using API call.It Simple and beautifully design for every users.Tech use lie React Js,Tailwind",
    image: "https://raw.githubusercontent.com/BrightTNut/assets/main/RandomGif.png",
    tags: ["React Js", "Express Js", "Tailwind Css", "API", "GIF"],
    category: "web app",
    github: "https://github.com/BrightTNut/randomgifs",
    webapp: "https://randomgifs-two.vercel.app/",
  },
  {
    id: 3,
    title: "Buy Coffee for Me",
    date: "June 2024",
    description:
      "This project combines my passion for blockchain with a practical, real-world application. Whether you're a crypto enthusiast or simply love your daily caffeine fix, Buy Coffee for Me brings a refreshing twist to how we transact online.",
    image: Coffee,
    tags: [
      "Hardhat v2.22.5",
      "NextJs 14",
      "ethers v6",
      "Solidity v0.8.24",
      "tailwind css",
    ],
    category: "Blockchain application",

    webapp: "https://buy-coffee-for-me.vercel.app/",
  },
  // {
  //   id: 10,
  //   title: "Job Finding App",
  //   date: "Jun 2023 - Jul 2023",
  //   description:
  //     "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
  //   tags: ["React Native", "JavaScript", "Axios"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Job-finder-App",
  //   webapp: "https://github.com/rishavchanda/Job-finder-App",
  // },
  // {
  //   id: 4,
  //   title: "Whatsapp Clone",
  //   date: "Jul 2021",
  //   description:
  //     "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
  //   tags: ["React Js", "Firebase", "Firestore", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
  //   webapp: "https://whatsapp-clone-rishav.web.app",
  // },
  // {
  //   id: 5,
  //   title: "Todo Web App",
  //   date: "Jun 2021",
  //   description:
  //     " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
  //   image:
  //     "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
  //   tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Todo-Web-App",
  //   webapp: "https://rishav-react-todo.netlify.app/",
  // },
  // {
  //   id: 6,
  //   title: "Breaking Bad",
  //   date: "Jun 2021",
  //   description:
  //     "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
  //   image:
  //     "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
  //   tags: ["React Js", "API", "Axios", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Breaking-Bad",
  //   webapp: "https://breaking-bad-webapp.netlify.app",
  // },
  // {
  //   id: 7,
  //   title: "Quiz App",
  //   date: "Dec 2020 - Jan 2021",
  //   description:
  //     "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
  //   image:
  //     "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
  //   tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Quiz-Earn",
  //   webapp: "https://github.com/rishavchanda/Quiz-Earn",
  // },
  // {
  //   id: 8,
  //   title: "Face Recognition",
  //   date: "Jan 2021",
  //   description:
  //     "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
  //   image:
  //     "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  //   webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  // },
];
