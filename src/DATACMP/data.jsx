
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import Circulerprog from "../Components/Myskil/Circulerprog";
import Lineprog from "../Components/Myskil/Lineprog";
import Rohitji from "../DATACMP/Rohitji.png"
import SocialM from "../Components/ContactMe/SocialM";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import rohitbhai from "./rohitbhai.png"
import { ImHome2 } from "react-icons/im";
import { BsPersonVcardFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { ImProfile } from "react-icons/im";
export const data4=[
  {
    ids:'homepage',
    name:'Home',
    icons:<ImHome2 />
  },
  {
    ids:'about',
    name:'About',
    icons:<BsPersonVcardFill />
  },
  {
    ids:'skill',
    name:'Skills',
    icons:<GiSkills />
  },
  {
    ids:'report',
    name:'Report',
    icons:<GiProgression />
  },
  {
    ids:'resume',
    name:'Report',
    icons:<ImProfile />
  },
  {
    ids:'project',
    name:'Projects',
    icons:<MdWork />
  },
  {
    ids:'contact',
    name:'Contact',
    icons:<MdContactPhone />
  }
]








export const data=[
    {
        img1:rohitbhai,
         
    } 
]
export const photodata={
  img3:Rohitji
}
 

export const data2=[
    {
        icon:<IoPersonCircleOutline />,
        name:'Rohit Kumar Chaurasia',
    },
    {
        icon:<BsCalendarDate />,
        name:'20-10-2003',
    },
    {
        icon:<FaPhone />,
        name:'8953014140',
    },
    {
        icon:<MdOutlineMarkEmailRead />,
        name:'rc3881425@gmail.com',
    }
]

export const skilldata=[
    {
        circular:<Circulerprog values={'85'}/>,
        name:'Teamwork'
    },
    {
        circular:<Circulerprog values={'70'}/>,
        name:'Management'
    },
    {
        circular:<Circulerprog values={'80'}/>,
        name:'Communication'
    },
    {
        circular:<Circulerprog values={'90'}/>,
        name:'Creativity'
    }
];

export const skilldata2hai=[
    {
        linearhai:<Lineprog values={'80'}/>,
        name:'Html',
        colorr:'orange',
        icons:<FaHtml5 />,
        values:'80'
    },
    {
        linearhai:<Lineprog values={'75'}/>,
        name:'Css',
        icons:<DiCss3 />,
        colorr:'blue',
        values:'75'
    },
    {
        linearhai:<Lineprog values={'80'}/>,
        name:'Tailwind css',
        icons:<SiTailwindcss />,
        colorr:'blue',
        values:'80'
    },
    {
        linearhai:<Lineprog values={'70'}/>,
        name:'Java Script',
        icons:<DiJavascript />,
        colorr:'green',
        values:'70'
    },
    {
        linearhai:<Lineprog values={'85'}/>,
        name:'React js',
        icons:<FaReact />,
        colorr:'blue',
        values:'85'
        
    },
    {
        linearhai:<Lineprog values={'85'}/>,
        name:'C++',
        icons:<TbBrandCpp />,
        colorr:'blue',
        values:'85'
    }
    
]

export const chartdata={
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      title: {
        text: 'DSA',
        align: 'middle'
      },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },

      fill: {
        colors: ['#000'],
        type: "gradient",  //linear
      },
      dataLabels:{
        enabled: true,
      },
      stroke: {
        curve: "smooth",   // straight
        colors: ["white"],  //lebel color
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
      grid: {
        show: true,
      },
      
      xaxis: {
        type: "datetime",
        categories:[
          "2018-09-2T00:00:",
          "2018-09-3T01:30:",
          "2018-09-3T02:30:",
          "2018-09-4T03:30:",
          "2018-09-5T04:30:",
          "2018-09-6T05:30:",
          "2018-09-7T06:30:",
          "2018-09-8T07:30:",
          "2018-09-9T08:30:",
          "2018-09-10T09:30:",
          "2018-09-11T010:30:",
          "2018-09-12T011:30:",
          "2018-09-13T012:30:",
          "2018-09-14T013:30:",
          "2018-09-15T014:30:",
          "2018-09-16T015:30:",
          "2018-09-17T016:30:",
          "2018-09-18T017:30:",
        ],
      },

      yaxis: {
        title: {
          text: 'No of questions'
        }
        
      },
      markers: {
        size: 1
      
      },

    },
  };
export const chartdata2={
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      title: {
        text: 'Development',
        align: 'middle'
      },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },

      fill: {
        colors: ['#000'],
        type: "gradient",  //linear
      },
      dataLabels:{
        enabled: false,
      },
      stroke: {
        curve: "smooth",   // straight
        colors: ["white"],  //lebel color
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
      grid: {
        show: true,
      },
      
      xaxis: {
        type: "datetime",
        categories:[
          "2018-09-2T00:00:",
          "2018-09-3T01:30:",
          "2018-09-3T02:30:",
          "2018-09-4T03:30:",
          "2018-09-5T04:30:",
          "2018-09-6T05:30:",
          "2018-09-7T06:30:",
          "2018-09-8T07:30:",
          "2018-09-9T08:30:",
          "2018-09-10T09:30:",
          "2018-09-11T010:30:",
          "2018-09-12T011:30:",
          "2018-09-13T012:30:",
          "2018-09-14T013:30:",
          "2018-09-15T014:30:",
          "2018-09-16T015:30:",
          "2018-09-17T016:30:",
          "2018-09-18T017:30:",
        ],
      },

      yaxis: {
        title: {
          text: 'Percentage(1 = 25 %)'
        }
        
      },
      markers: {
        size: 1
      
      },

    },
  };
 
  export const prodata=[
    {
     img:''
    },
    {
     img:''
    },
    {
     img:''
    },
    {
     img:''
    },
  ]
  
 export const edudata=[
  {
    year:'2022-Present',
    education:"Bachelor's in Information Technology",
    college:'Bundelkhand Institute Of Engineering and Technology',
    about:'Pursuing B.Tech with Information Technology branch',
    score:'CGPA:7.93',
    sem:'(till 1st year)'
  },
  {
    year:'2020-2021',
    education:"Intermediate",
    college:'St. Thomas Enter College Shahganj Jaunpur UP',
    about:'Completed my 10th from a UP board affiliated Institute',
    perc:'Percentage:',
    score:'77.7%',
  },
  {
    year:'2019-2020',
    education:"High-school",
    college:'Kumudini UMV Harwa Azamgarh Uttar Pradesh.',
    about:'Completed my 12th from a UP board affiliated Institute',
    perc:'Percentage:',
    score:'83.8%',
  },
 ]



export const edudata2=[
  {
    year:'2023-Present',
    education:"Frontent Web developer and Coder",
    college:'Bundelkhand Institute Of Engineering and Technology',
    about:'My objective is to create user-centric web experiences.',
    
  },
  {
    year:'2020-2021',
    education:"Coordinator",
    college:'The Syntax Society',
    about:'A dedicated member of coding club of B.I.E.T Jhansi',
  },
  {
    year:'2019-2020',
    education:"Coordinator",
    college:'The Syntax Society',
    about:'A dedicated member of forum of Information Technology',
  },
 ]




export const contdata=[
  {
    icon:<IoShareSocialSharp className="text-orange-500"/>,
    name:'Social Media Profiles',
    social:<SocialM/>
  },
  {
    icon:<TfiEmail className="text-orange-500" />,
    name:'Email Address',
    paira:'rc3881425@gmail.com'
  },
  {
    icon:<FaPhoneVolume className="text-orange-500"/>,
    name:'Mobile number',
    paira:'8953014140'
  },
  {
    icon:<FaLocationCrosshairs className="text-orange-500"/>,
    name:'Location',
    paira:'BIET Jhansi, UP'
  }
 ]