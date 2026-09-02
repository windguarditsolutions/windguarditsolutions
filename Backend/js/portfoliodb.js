const companyConfig = {
    name: "windguard IT",
    suffix: "Solutions",
    logoImg: "../img/icon.png",
    established: 2024,
    location: "B-45, Sector 63, Noida",
    email: "windguarditsolutions@gmail.com",
    socials: {
        linkedin: "https://www.linkedin.com/company/windguard-it-solutions/?viewAsMember=true",
        facebook: "#",
        instagram: "#"
    }
};

const navigationLinks = [
    { text: "Home", url: "../../Frontend/index.html", class: "" },
    { text: "Services", url: "../Services/services.html", class: "" },
    { text: "Products", url: "../Services/product.html", class: "" },
    { text: "Portfolio", url: "../Services/portfolio.html", class: "" },
    { text: "Contact", url: "../about/contact.html", class: "" },
    { text: "Sign In", url: "../login/login.html", class: "btn-login" }
];

const legalLinks = [
    { text: "Privacy Policy", url: "../Services/privacy.html" },
    { text: "Terms & Conditions", url: "../privacy/terms.html" }
];

const heroContent = {
    title: "Our Portfolio",
    subtitle: "See what we've built for Indian businesses"
};

const filterCategories = [
    { filterId: "all", text: "All Projects" },
    { filterId: "web", text: "Web Development" },
    { filterId: "mobile", text: "Mobile Apps" },
    { filterId: "software", text: "Software" }
];

const portfolioDatabase = [
    {
        id: 1,
        title: "FashionHub E-commerce",
        description: "Complete e-commerce website for a Noida-based fashion brand with 10,000+ products.",
        category: "web",
        tag: "Web Development",
        image: "https://www.zauca.com/wp-content/uploads/Fashion-Accessories-Website-Designing-Company-E-Commerce-Site.jpg"
    },
    {
        id: 2,
        title: "FoodCart Delivery App",
        description: "Food delivery mobile app for a Delhi restaurant chain with live tracking.",
        category: "mobile",
        tag: "Mobile App",
        image: "https://img.magnific.com/premium-vector/food-delivery-service-illustration-featuring-online-food-ordering-through-mobile-app-fast-delivery-your-preferred-location-background_2175-32101.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 3,
        title: "Sales CRM Platform",
        description: "Custom CRM software for a B2B service company with 500+ users.",
        category: "software",
        tag: "Software",
        image: "https://www.superoffice.com/globalassets/blog/2024/benefits-crm-software/top-banner-benefist-crm.png"
    },
    {
        id: 4,
        title: "School Management ERP",
        description: "Complete school management system used by 5 schools in Delhi NCR.",
        category: "web",
        tag: "Web Development",
        image: "https://leadschool.in/wp-content/uploads/2023/02/Which-is-the-best-all-in-one-school-management-system-in-India.png"
    },
    {
        id: 5,
        title: "HealthCare Plus App",
        description: "Doctor appointment booking and telemedicine mobile application.",
        category: "mobile",
        tag: "Mobile App",
        image: "https://static.vecteezy.com/system/resources/thumbnails/057/714/229/small/doctor-busy-with-tablet-filling-out-checklist-in-hospital-setting-free-photo.jpeg"
    },
    {
        id: 6,
        title: "Inventory Management",
        description: "Windows-based inventory software for a manufacturing unit.",
        category: "software",
        tag: "Software",
        image: "https://thumbs.dreamstime.com/b/inventory-management-words-white-paper-against-background-table-numbers-calculator-banknotes-inventory-215015659.jpg"
    },
    {
        id: 7,
        title: "Real Estate Portal",
        description: "Property listing and search portal for Noida real estate agency.",
        category: "web",
        tag: "Web Development",
        image: "https://pvsbuilders.com/wp-content/uploads/2019/10/Working-of-Real-Estate-Portals.png"
    },
    {
        id: 8,
        title: "FitLife Fitness App",
        description: "Workout tracking and diet planning mobile application.",
        category: "mobile",
        tag: "Mobile App",
        image: "https://img.freepik.com/premium-vector/abstract-people-logo-sport-fit-health-vector-design-concept_272489-1334.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 9,
        title: "GST Billing Software",
        description: "Windows-based billing software for a retail chain with 20+ stores.",
        category: "software",
        tag: "Software",
        image: "https://nextgentemplates.com/wp-content/uploads/2025/02/GST-Billing-Software-V1.0-3.jpg"
    }
];

const ctaContent = {
    heading: "Have a Project in Mind?",
    subheading: "Let's create something amazing together.",
    btnText: "Start Your Project",
    btnUrl: "../about/contact.html"
};