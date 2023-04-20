import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    starbucks,
    tesla,
    carrent,
    jobit,
    tripguide,
    ULELA,
    logo,
    laravel,
    technicalSupport,
    php,
    expresscourses,
    ulela_angola,
    JOB_APP,
    ecomm
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "projects",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "laravel",
        icon: laravel,
    },
    {
        name: "technical Support",
        icon: technicalSupport,
    },
    {
        name: "php",
        icon: php,
    },
];

const experiences = [
    {
        title: "PHP Developer",
        company_name: "FREELANCER",
        icon: logo,
        iconBg: "#383E56",
        date: "March 2020 - Now",
        points: [
            "Developing and maintaining web applications using php and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing version control in all of the products builded.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "REACT NATIVE DEVELOPER",
        company_name: "FREELA",
        icon: logo,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Now",
        points: [
            "Developing mobile applications with react-native and other related technologies.",
            "Giving support to our teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing API and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "IT CONSULTER",
        company_name: "ULELA ANGOLA",
        icon: ULELA,
        iconBg: "#383E56",
        date: "Jan 2022 - Now",
        points: [
            "Developing web applications using PHP and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing microsoft office to the administration works.",
            "Participating in code reviews and providing sourching and procurament..",
        ],
    },
    {
        title: "WEB DEVELOPER",
        company_name: "ULELA ANGOLA",
        icon: ULELA,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Present",
        points: [
            "Developing web applications using PHP and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing microsoft office to the administration works.",
            "Participating in code reviews and providing sourching and procurament..",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Is better when I work with him. Realy better.",
        name: "Engenheiro Elias",
        designation: "Telecomunications Engineer",
        company: "ULELA ANGOLA",
        image: "https://media.licdn.com/dms/image/C5603AQHeeKZtrQDTcg/profile-displayphoto-shrink_800_800/0/1655807368731?e=1687392000&v=beta&t=SaMYWooJpddmleOnxnb_obkVbGHQZyIiOPeVEMi8NjQ",
    },
    {
        testimonial:
            "Is good having Danilson in our company. Is worth.",
        name: "Ngunza Hanja",
        designation: "CEO",
        company: "ULELA ANGOLA",
        image: "https://media.licdn.com/dms/image/D5603AQFSPeLmgmS3fA/profile-displayphoto-shrink_800_800/0/1679999810732?e=1687392000&v=beta&t=_5i_l4_aH8wZ3JC1dOr-R9p70bFN9Kc3piVCPg82WjY",
    },
    {
        testimonial:
            "Yeah, I recommend him to web developing projects",
        name: "Miguel Cataganha",
        designation: "Administration",
        company: "ULELA ANGOLA",
        image: "https://media.licdn.com/dms/image/C4D0BAQHm2-jWWkMpbg/company-logo_200_200/0/1678980716208?e=1689811200&v=beta&t=xbik1JuIhJZ5kMqv5pNic_OLM6tBRU-qDnLIAmPP1Ko",
    },
];

const projects = [
    {
        name: "Express Courses",
        description:
            "Plataforma Angolana de cursos profissionais intensivos. Para diminuir a forma massiva de ingresso aos cursos profissionais em Angola",
        tags: [
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: expresscourses,
        source_code_link: "https://github.com/",
    },
    {
        name: "SITE ULELA ANGOLA",
        description:
            "Desenvolvi o site da ULELA ANGOLA parea possibilitá-los em armagenar seus produtos em banco de dados e ministrá-los em dashboard",
        tags: [
            {
                name: "HTML5_CSSS3",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: ulela_angola,
        source_code_link: "https://github.com/",
    },
    {
        name: "APP JOB FINDER",
        description:
            "Plataforma Angolana, para definir e procurrar cursos online em Angola e por qualquer parte do mundo",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "reapidAPI",
                color: "green-text-gradient",
            },
            {
                name: "JsearchAPI",
                color: "blue-text-gradient",
            },
        ],
        image: JOB_APP,
        source_code_link: "https://github.com/",
    },
    ,
    {
        name: "BOOKS.COM",
        description:
            "Sistema de venda online(ecommerce), para definir e procurar produtos online em Angola e por qualquer parte do mundo. Assim podendo comprar online com pickup",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "HTML_CSS",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: ecomm,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };