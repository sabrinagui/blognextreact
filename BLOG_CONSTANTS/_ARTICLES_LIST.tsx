import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAYUR, SABRINA} from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/your-first-article.tsx",
    featureArticle: true,
    preview: {
      author: SABRINA,
      date: "Janeiro 03 2024",
      articleTitle: "Mudança de carreira: Da saúde para a tecnologia",
      tags: "carreira, frontend",
      thumbnail: "/public/imp_assets/tutorials/saude.png",
      shortIntro: "Por que eu mudei da área da saúde para a tecnologia?",
      category: "tech",
    },
    seo: {
      title: "Mudança de carreira: Da saúde para a tecnologia",
      description: "Por que eu mudei da área da saúde para a tecnologia?",
      keywords: "frontend, carreira",
      ogImage: "/public/imp_assets/tutorials/saude.png",
      twitterHandle: "@mayur_nalwala",
      author: SABRINA.name,
    },
  },
  {
    path: "/pages/tutorial/how-to-write-your-first-article.tsx",
    featureArticle: true,
    preview: {
      author: SABRINA,
      date: "Janeiro 03 2024",
      articleTitle: "Por que eu escolhi a área de front-end?",
      tags: "frontend, tecnologia",
      thumbnail: "/public/imp_assets/tutorials/frontend.png",
      shortIntro:
        "A escolha que fiz pelo front-end.",
      category: "tech",
    },
    seo: {
      keywords:
        "frontend, web, blog, mudança, carreira",
      ogImage: "/public/imp_assets/tutorials/frontend.png",
    },
  },
  {
    path: "/pages/tutorial/how-to-deploy-blog.tsx",
    featureArticle: true,
    preview: {
      author: SABRINA,
      date: "Janeiro 02 2023",
      articleTitle: "Criação de sites",
      tags: "sites, web",
      thumbnail: "/public/imp_assets/tutorials/sites.png",
      shortIntro:
        "Como eu comecei a desenvolver sites do zero",
      category: "tech",
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/sites.png",
    },
  },
  {
    path: "/pages/tutorial/home-layout.tsx",
    preview: {
      author: SABRINA,
      date: "August 14 2022",
      articleTitle: "Home Layout Example",
      tags: "demo, layout, home layout",
      thumbnail: "/public/imp_assets/tutorials/home-layouts.svg",
      shortIntro: "In this article we will see Default Home Layout example.",
      category: "layouts",
    },
    seo: {
      title: "Home Layout Example",
      description: "In this article we will see Default Home Layout example.",
      keywords:
        "next js, tailwind css, typescript, blog template, default layout, default home layout",
      ogImage: "/public/imp_assets/tutorials/home-layouts.svg",
      author: SABRINA.name,
    },
  },
  
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
