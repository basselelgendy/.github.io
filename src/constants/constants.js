import {
    // الأساسيات
    mobile,
    backend,
    web,
    git,
    docker,
    postgresql,
    // مهاراتك الجديدة
    python,
    sql,
    excel,
    spark,
    gcp,
    azure,
    aws,
    linux,
    opencv,
    tensorflow,
    pytorch,
    anaconda,
    jupyter,
    tableau,
    powerbi,
    // المشاريع واللوجو
    carrent,
    jobit,
    inkSync,
    socialSphere,
    vega,
    speedvitals,
    initialLetterLogo,
} from "../assets";

// الاستيراد المباشر لصور المشاريع (تأكد من وجودهم في فولدر assets)
import powerbi_dashboard from "../assets/powerbi_dashboard.png";
import retail_sales from "../assets/retail_sales.png"; // <-- صورة البروجكت التاني

const initialLetterIcon = initialLetterLogo; // يُفضل أن تكون الصورة هنا لحرف الـ B
const remainingLetters = "asel"; // ليصبح الاسم B + asel = Basel

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
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Data Analyst",
        icon: web,
    },
    {
        title: "Data Scientist",
        icon: mobile,
    },
    {
        title: "Machine Learning Engineer",
        icon: backend,
    },
];

// ترتيب المهارات بشكل منطقي واحترافي
const technologies = [
    // 1. Artificial Intelligence & Deep Learning
    { name: "PyTorch", icon: pytorch },
    { name: "TensorFlow", icon: tensorflow },
    { name: "OpenCV", icon: opencv },

    // 2. Data Science Environments
    { name: "Python", icon: python },
    { name: "Jupyter", icon: jupyter },
    { name: "Anaconda", icon: anaconda },

    // 3. Data Analysis & Big Data
    { name: "SQL", icon: sql },
    { name: "PostgreSQL", icon: postgresql },
    { name: "Apache Spark", icon: spark },
    { name: "Power BI", icon: powerbi },
    { name: "Tableau", icon: tableau },
    { name: "Excel", icon: excel },

    // 4. Cloud Computing & DevOps
    { name: "AWS", icon: aws },
    { name: "Azure", icon: azure },
    { name: "Google Cloud", icon: gcp },
    { name: "Linux", icon: linux },
    { name: "Docker", icon: docker },
    { name: "Git", icon: git },
];

const projects = [
    {
        name: "Global Sales Performance Dashboard",
        description:
            "A comprehensive Power BI dashboard analyzing raw global sales data. The project involved end-to-end data preparation using Power Query, structured data modeling, and the creation of complex DAX measures to extract actionable KPIs and trends across Sales, Products, and Time.",
        features: [
            "Data cleaning and advanced transformations via Power Query.",
            "Built a structured data model with optimized relationships.",
            "Developed custom DAX measures for meaningful insights and KPIs.",
            "Designed interactive visualizations for Sales, Product, and Time analysis.",
        ],
        tags: [
            {
                name: "Power BI",
                color: "blue-text-gradient",
            },
            {
                name: "Power Query",
                color: "green-text-gradient",
            },
            {
                name: "DAX",
                color: "pink-text-gradient",
            },
            {
                name: "Data Modeling",
                color: "blue-text-gradient",
            },
        ],
        image: powerbi_dashboard,
        source_code_link: "https://github.com/opsawbs0-cloud/PowerBI_SalesDashboard",
        live_link: "https://app.powerbi.com/view?r=YOUR_LIVE_DASHBOARD_LINK",
    },
    // *** المشروع التاني الجديد ***
    {
        name: "Retail Sales & Satisfaction Analysis",
        description:
            "An end-to-end data pipeline project focusing on analyzing retail sales performance and customer satisfaction. The workflow included database design, synthetic data generation, exploratory data analysis (EDA), and interactive reporting to understand factors impacting revenue.",
        features: [
            "Designed and implemented a relational database model in SQL Server.",
            "Utilized Python for realistic synthetic data generation and comprehensive EDA.",
            "Developed calculated measures to analyze gross profit, margins, and sales trends.",
            "Created interactive Power BI dashboards for Sales Performance and Customer Reviews.",
        ],
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "SQL Server",
                color: "green-text-gradient",
            },
            {
                name: "Power BI",
                color: "pink-text-gradient",
            },
        ],
        image: retail_sales, // تأكد من اسم الصورة هنا
        source_code_link: "", // <-- تم مسح اللينك هنا عشان أيقونة جيت هاب تختفي
        live_link: "https://github.com/YOUR_GITHUB_REPO", // حط رابط جيت هاب هنا لو موجود أو امسحه لو مش عايزه يظهر
    },
];

const experiences = [
    {
        title: "Data Analyst Intern",
        company_name: "Tech Company",
        icon: speedvitals,
        iconBg: "#383E56",
        date: "Jan 2024 - Present",
        points: [
            "Analyzed large datasets using SQL and Python to identify market trends.",
            "Created interactive Tableau dashboards for stakeholder reporting.",
            "Collaborated with the engineering team to optimize database queries.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Basel's insights from the data helped us increase our revenue by 20% in just one quarter.",
        name: "Ahmed Ali",
        designation: "CEO",
        company: "DataCorp",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    initialLetterIcon,
    remainingLetters,
};