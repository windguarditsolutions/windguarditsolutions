const webDatabase = {
    meta: {
        title: "windguard IT Solutions",
        description:
            "windguard IT Solutions is a leading IT company in Noida offering web development, mobile apps, custom software, SEO services. 10+ years experience. Call now!",
        keywords:
            "web development Noida, mobile app development Noida, software company Noida, SEO services Noida, IT company Sector 63",
        author: "windguard IT Solutions",
        favicon: "../../Backend/img/tab_icon.png"
    },
    companyName: "windguard IT Solutions",
    logo: {
        src: "../../Backend/img/icon.png",
        alt: "windguard IT Solutions Logo"
    },
    navLinks: [
        {
            text: "Home",
            url: "../../frontend/index.html",
            isBtn: false
        },
        {
            text: "Services",
            url: "../../Backend/Services/services.html",
            isBtn: false
        },
        {
            text: "Products",
            url: "../../Backend/Services/product.html",
            isBtn: false
        },
        {
            text: "Portfolio",
            url: "../../Backend/Services/portfolio.html",
            isBtn: false
        },
        {
            text: "Contact",
            url: "../../Backend/about/contact.html",
            isBtn: false
        },
        {
            text: "Sign In",
            url: "../../Backend/login/login.html",
            isBtn: true
        }
    ],
    popup: {
        title: "Welcome to windguard IT Solutions",
        desc:
            "Get 20% off on your first project. Limited time offer for Indian businesses.",
        buttons: [
            {
                text: "View Services",
                action: "goToServices()"
            },
            {
                text: "View Products",
                action: "goToProduct()"
            }
        ]
    },
    hero: {
        title:
            "Professional IT Solutions <br>for Your <span class='highlight'>Business Growth</span>",
        desc:
            "We deliver high-quality web applications, mobile apps, custom software, and SEO services. 10+ years of experience, 500+ projects delivered for Indian businesses.",
        videoSrc:
            "../../Backend/img/video/hero.mp4",
        isVideoPlaying: true,
        buttons: [
            {
                text: "Explore Services",
                url: "../../Backend/Services/services.html",
                class: "btn btn-primary",
                icon: "fas fa-arrow-right"
            },
            {
                text: "Get Free Quote",
                url: "../../Backend/about/contact.html",
                class: "btn btn-outline"
            },
            {
                text: "Employment verification",
                url: "../../Backend/about/emp_verify.html",
                class: "btn btn-outline"
            }
        ],
        stats: [
            {
                value: "500+",
                label: "Projects Delivered"
            },
            {
                value: "480+",
                label: "Happy Clients"
            },
            {
                value: "10+",
                label: "Years Experience"
            },
            {
                value: "24/7",
                label: "Support"
            }
        ],
        socials: [
            {
                type: "whatsapp",
                url: "#",
                target: "_blank",
                icon: "fab fa-whatsapp",
                text: "WhatsApp"
            },
            {
                type: "linkedin",
                url:
                    "https://www.linkedin.com/company/windguard-it-solutions/?viewAsMember=true",
                target: "_blank",
                icon: "fab fa-linkedin-in",
                text: "LinkedIn"
            }
        ]
    },
    clients: {
        title:
            "Trusted by 50+ Indian Businesses",
        logos: [
            {
                src:
                    "https://img.magnific.com/premium-vector/blue-red-medical-logo-with-red-cross-it_1242616-858.jpg?semt=ais_hybrid&w=740&q=80",
                alt: "healthcare"
            },
            {
                src:
                    "https://img.freepik.com/free-vector/vector-education-logo_779267-2080.jpg",
                alt: "Education"
            },
            {
                src:
                    "https://img.pikbest.com/png-images/ecommerce-logo-vector-graphics-element--e-commerce-logo-icon-design-online-store-logo-icon_1726010.png!sw800",
                alt: "e-commerce"
            },
            {
                src:
                    "https://static.vecteezy.com/system/resources/thumbnails/043/211/219/small/a-sleek-and-minimalistic-logo-featuring-a-blue-and-white-house-design-design-a-sleek-and-minimalist-logo-for-a-virtual-event-platform-free-vector.jpg",
                alt: "minimalistic"
            },
            {
                src:
                    "https://img.freepik.com/premium-vector/beauty-logo-design-vector_67715-523.jpg",
                alt: "Beauty"
            }
        ]
    },
    about: {
        image:
            "https://t3.ftcdn.net/jpg/18/58/29/12/360_F_1858291272_nVRhKZ4l8zsVzzGIOjwwmmiyU7KVPtMF.jpg",
        badge: "10+ Years",
        tag: "About Us",
        title:
            "India's Leading IT Company in Noida",
        paragraphs: [
            "windguard IT Solutions is a premium IT company based in <strong>Noida, Sector 63</strong>, delivering high-quality web and mobile solutions since 2015. We specialize in creating custom software, web applications, mobile apps, and SEO services for Indian businesses, startups, and enterprises.",
            "Our team of 30+ experienced developers, designers, and digital marketers work from our Noida office to serve clients across India and globally. We understand the Indian market, local business needs, and deliver solutions that actually work."
        ],
        features: [
            "100% Indian Team",
            "Affordable Pricing",
            "On-Time Delivery",
            "Free Lifetime Support"
        ],
        btnText:
            "Read More About Us",
        btnUrl:
            "../../Backend/about/about.html"
    },
    services: {
        tag: "Our Services",
        title: "What We Offer",
        subtitle:
            "End-to-end IT solutions for modern businesses",
        list: [
            {
                bg:
                    "https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?cs=srgb&dl=pexels-mizunokozuki-12899188.jpg&fm=jpg",
                icon:
                    "https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_1280.png",
                title:
                    "Web Application Development",
                desc:
                    "We build scalable, secure, and high-performance web applications using modern technologies like React, Angular, Node.js, Python, and PHP.",
                points: [
                    "E-commerce Websites",
                    "Business Portals & CRM",
                    "API Development & Integration",
                    "Cloud-Based Applications"
                ],
                url:
                    "../../Backend/offer/offer-blog.html"
            },
            {
                bg:
                    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
                icon:
                    "https://www.pngkey.com/png/detail/129-1290553_choose-one-of-our-pro-kits-today-to.png",
                title:
                    "Mobile App Development",
                desc:
                    "Reach your customers on the go with powerful mobile apps for Android and iOS using Flutter, React Native, Kotlin, and Swift.",
                points: [
                    "Android & iOS Apps",
                    "Hybrid & Cross-Platform",
                    "App Store Optimization",
                    "Maintenance & Support"
                ],
                url:
                    "../../Backend/offer/android-app.html"
            },
            {
                bg:
                    "https://aoplweb.com/wp-content/uploads/2024/01/HD-wallpaper-digital-marketing-consulting-services-strait-web-solutions-seo-marketing.jpg",
                icon:
                    "https://png.pngtree.com/png-clipart/20250428/original/pngtree-d-isolated-render-of-an-seo-icon-with-a-high-quality-png-image_20809047.png",
                title:
                    "SEO & Digital Marketing",
                desc:
                    "Get found on Google! Our SEO experts help you rank higher in search results and drive organic traffic.",
                points: [
                    "Local SEO & Google Maps",
                    "On-Page & Off-Page SEO",
                    "Google Ads & Social Media",
                    "Content Marketing"
                ],
                url:
                    "../../Backend/offer/SEO.html"
            },
            {
                bg:
                    "https://img.magnific.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?semt=ais_hybrid&w=740&q=80",
                icon:
                    "https://cdn-icons-png.flaticon.com/512/11765/11765112.png",
                title:
                    "Custom Software Development",
                desc:
                    "Tailor-made software solutions for your unique business needs including inventory, billing, and ERP systems.",
                points: [
                    "Windows Desktop Applications",
                    "Utility & Productivity Tools",
                    "Billing & Accounting Software",
                    "ERP & Business Automation"
                ],
                url:
                    "../../Backend/offer/software.html"
            }
        ]
    },
    whyChooseUs: {
        tag:
            "Why Choose Us",
        title:
            "What Makes windguard IT Solutions Different",
        desc:
            "We don't just write code – we build business solutions that deliver measurable results.",
        image:
            "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_640.jpg",
        items: [
            {
                icon:
                    "fas fa-users",
                title:
                    "100% Indian Team",
                desc:
                    "Local team based in Noida who understands Indian business culture."
            },
            {
                icon:
                    "fas fa-rupee-sign",

                title:
                    "Affordable Pricing",

                desc:
                    "Best rates for Indian businesses. No hidden costs, transparent pricing."
            },

            {
                icon:
                    "fas fa-clock",

                title:
                    "On-Time Delivery",

                desc:
                    "95% projects delivered before or on time with strict quality checks."
            },

            {
                icon:
                    "fas fa-headset",

                title:
                    "24/7 Customer Support",

                desc:
                    "Call, email, or WhatsApp – we're always available for our clients."
            }
        ]
    },
    portfolio: {
        tag:
            "Our Work",
        title:
            "Recent Projects",

        subtitle:
            "See what we've built for Indian businesses",

        btnText:
            "View All Projects",

        btnUrl:
            "../../Backend/Services/portfolio.html",

        items: [

            {
                src:
                    "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149483805.jpg",

                title:
                    "E-commerce Portal",

                desc:
                    "For a Noida-based fashion brand"
            },

            {
                src:
                    "https://cdn.techjockey.com/web/assets/images/techjockey/products/14623_e-school-ERP.jpg",

                title:
                    "School Management ERP",

                desc:
                    "For 5 schools in Delhi NCR"
            },

            {
                src:
                    "https://static.vecteezy.com/system/resources/thumbnails/057/714/229/small/doctor-busy-with-tablet-filling-out-checklist-in-hospital-setting-free-photo.jpeg",

                title:
                    "Hospital Management",

                desc:
                    "For a multi-specialty hospital"
            },

            {
                src:
                    "https://img.magnific.com/premium-vector/food-delivery-service-illustration-featuring-online-food-ordering-through-mobile-app-fast-delivery-your-preferred-location-background_2175-32101.jpg?semt=ais_hybrid&w=740&q=80",

                title:
                    "Food Delivery App",

                desc:
                    "For a Noida restaurant chain"
            },

            {
                src:
                    "https://www.superoffice.com/globalassets/blog/2024/benefits-crm-software/top-banner-benefist-crm.png",

                title:
                    "CRM Software",

                desc:
                    "For a B2B service company"
            },

            {
                src:
                    "https://img.freepik.com/premium-vector/inventory-control-system-concept-professional-manager-checking-goods-stock-supply-inventory-management-with-goods-demand_185038-803.jpg?w=360",

                title:
                    "Inventory System",

                desc:
                    "For a manufacturing unit"
            }
        ]
    },

    // =========================================================
    // TESTIMONIALS
    // =========================================================

    testimonials: {

        tag:
            "Testimonials",

        title:
            "What Our Clients Say",

        subtitle:
            "Don't take our word for it - hear from our clients",

        list: [

            {
                name:
                    "HarshDeep Singh",
                role:
                    "Founder, FashionHub Noida",
                feedback:
                    "windguard IT Solutions built our e-commerce website. Excellent work, on time, and within budget. Highly recommended for Indian businesses looking for quality IT services.",
                stars:
                    5,
                img:
                    "https://img.magnific.com/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41023.jpg?semt=ais_hybrid&w=740&q=80"
            },
            {
                name:
                    "monika",
                role:
                    "Owner, Beauty cave Noida",
                feedback:
                    "Their mobile app development team is fantastic. Our Beauty product delivery app is getting great reviews on Play Store. The team understood our requirements perfectly.",
                stars:
                    4,
                img:
                    "https://cdn.pixabay.com/photo/2021/02/03/09/44/portrait-5977311_1280.jpg"
            },
            {
                name:
                    "Hammza mirr",
                role:
                    "Director, Hammza Industries",
                feedback:
                    "Best IT company in Noida. We've been using their custom software for 2 years - zero issues, great support, and very responsive team. Worth every rupee.",
                stars:
                    5,
                img:
                    "https://t4.ftcdn.net/jpg/04/02/15/79/360_F_402157924_KeEL938KdDIGUhZ4xoznrPU40YnMPLla.jpg"
            }
        ]
    },
    cta: {
        title:
            "Ready to Start Your Project?",
        desc:
            "Let's discuss your requirements. Get a free quote today.",
        contactUrl:
            "../../Backend/about/contact.html",
        email:
            "windguarditsolutions@gmail.com"
    },
    blog: {

        tag:
            "Our Blog",

        title:
            "Latest Articles",

        subtitle:
            "Insights from our experts",

        list: [

            {
                src:
                    "https://media.licdn.com/dms/image/v2/D4E12AQE1ap2nuxNYlA/article-cover_image-shrink_720_1280/B4EZgsP2meGwAM-/0/1753089012833?e=2147483647&v=beta&t=UT7xMMPl7txWnW39agel7__KINBzzPrfsR0YG4KyHGo",

                date:
                    "January 9, 2024",

                title:
                    "How to Choose Right Tech Stack for Your Startup?",

                desc:
                    "A complete guide for Indian startups on choosing between React, Angular, Vue, and more...",

                url:
                    "../../Backend/about/blog.html"
            },

            {
                src:
                    "https://www.localfalcon.com/uploads/blog-imagery/how-to-do-local-seo-for-home-services-businesses/what-are-the-benefits-of-local-seo-for-home-services-businesses.png",

                date:
                    "October 26, 2025",

                title:
                    "Local SEO Tips for Noida Businesses in 2026",

                desc:
                    "Rank number 1 on Google Maps and get more customers from your local area...",

                url:
                    "#"
            },

            {
                src:
                    "https://twinr.dev/wp-content/uploads/2024/03/3_how_to_create_an_app_from_scratch_in_11_simple_steps.webp",

                date:
                    "March 9, 2026",

                title:
                    "Cost of Developing a Mobile App in India 2026",

                desc:
                    "Complete breakdown of mobile app development costs for Indian businesses...",

                url:
                    "#"
            }
        ]
    },

    // =========================================================
    // FAQ
    // =========================================================

    faq: {

        tag:
            "FAQ",

        title:
            "Frequently Asked Questions",

        subtitle:
            "Have questions? We have answers",

        list: [

            {
                q:
                    "What is the cost of a website in India?",

                a:
                    "Basic website starts from ₹5,000, e-commerce from ₹8,000, and custom web applications from ₹10,000. Contact us for exact quote based on your requirements."
            },

            {
                q:
                    "How long does it take to build a mobile app?",

                a:
                    "Simple apps take 1-2 months, complex apps with backend take 2-3 months. We follow agile methodology and provide regular updates."
            },

            {
                q:
                    "Do you provide after-sales support?",

                a:
                    "Yes. Free support for 1 year. Paid annual maintenance plans available after that which includes bug fixes and updates."
            },

            {
                q:
                    "Are you located in Noida?",

                a:
                    "Yes. Our office is at B-45, Sector 63, Noida. You can visit us anytime between 10 AM to 7 PM (prior appointment recommended)."
            },

            {
                q:
                    "Do you work with startups?",

                a:
                    "Absolutely. We love working with Indian startups. We offer special pricing, flexible payment terms, and mentorship for young entrepreneurs."
            },

            {
                q:
                    "What technologies do you use?",

                a:
                    "React, Angular, Node.js, Python, PHP, Flutter, React Native, Kotlin, Swift, .NET, and many more as per project requirements."
            }
        ]
    },

    // =========================================================
    // CONTACT
    // =========================================================

    contact: {

        tag:
            "Get In Touch",

        title:
            "Let's Work Together",

        desc:
            "We're here to help you grow your business with technology. Reach out to us anytime.",

        address:
            "windguard IT Solutions, B-45, 7th Floor, Sector 63, Noida, Uttar Pradesh - 201301",

        email:
            "windguarditsolutions@gmail.com",

        timing:
            "Monday - Saturday: 10:00 AM - 7:00 PM",

        services: [
            "Web Development",
            "Mobile App Development",
            "SEO Services",
            "Custom Software",
            "Other"
        ],
        socials: [
            {
                icon:
                    "fab fa-linkedin-in",
                url:
                    "https://www.linkedin.com/company/windguard-it-solutions/?viewAsMember=true"
            },
            {
                icon:
                    "fab fa-facebook-f",
                url:
                    "#"
            },
            {
                icon:
                    "fab fa-instagram",
                url:
                    "#"
            },
            {
                icon:
                    "fab fa-twitter",
                url:
                    "#"
            }
        ]
    }
};
module.exports = webDatabase;
