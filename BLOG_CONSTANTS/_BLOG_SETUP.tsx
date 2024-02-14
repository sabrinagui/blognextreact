import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const MAYUR: IAuthor = {
    name: "Sabrina Mesquita",
    designation: "Front-end Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/sabrinagui'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/sabrina-mesquita-8a39a6205/'
        },
    ]
}

export const RUPALI: IAuthor = {
    name: "Rupali Yadav",
    designation: "IT Analyst",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/sabrinagui'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/sabrina-mesquita-8a39a6205/'
        },
    ]
}

export const SABRINA: IAuthor = {
    name: "Sabrina Mesquita",
    designation: "Front-end Developer",
    bio: " Front-End Developer apaixonada pela tecnologia.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/sabrinagui'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/sabrina-mesquita-8a39a6205/'
        },
    ]
}



// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Sabrina Mesquita Blog';
export const WEBSITE_URL: string = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'SM BLOG',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: '',
            path: ''
        },
       
        
        
        {
            label: 'Contato',
            path: '/contato'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            
            path: ''
        },
        
       
       
        {
            label: 'Contato',
            path: '/contato'
        }
    ],
    socials: [
        {
            link: 'https://www.linkedin.com/in/sabrina-mesquita-8a39a6205/',
            icon: <AiFillLinkedin />
        },
        {
            link: 'https://www.instagram.com/sabrinamesquitaweb',
            icon: <AiFillInstagram />
        },
        
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Blog por Sabrina Mesquita",
    description: "Hobby ",
    keywords: "Blog, next js, react js, next js blog, front end developer, typescript, nextjs typescript, react js blog, responsive blog template, portfolio",
    url: WEBSITE_URL,
    author: `${MAYUR.name}, ${RUPALI.name}`,
    twitterHandle: '',
    ogImage: '/public/images/og-image.jpg'
}