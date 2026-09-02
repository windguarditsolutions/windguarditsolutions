const express = require("express");
const cors = require("cors");
const path = require("path");

const webDatabase = require("./js/database.js");

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================================
// CORS
// ============================================================

const allowedOrigins = new Set([
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]);

if (process.env.FRONTEND_URL) {
    allowedOrigins.add(
        process.env.FRONTEND_URL.replace(/\/$/, "")
    );
}

app.use(
    cors({
        origin(origin, callback) {

            // Browser ke bina requests:
            // Postman, curl etc.
            if (!origin) {
                return callback(null, true);
            }

            const normalized =
                origin.replace(/\/$/, "");

            if (allowedOrigins.has(normalized)) {
                return callback(null, true);
            }

            // Local development ke kisi bhi port ko allow
            if (
                /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(
                    normalized
                )
            ) {
                return callback(null, true);
            }

            return callback(
                new Error("CORS: origin not allowed")
            );
        },

        methods: [
            "GET",
            "POST",
            "OPTIONS"
        ],

        allowedHeaders: [
            "Content-Type",
            "Accept"
        ],

        credentials: false
    })
);


// ============================================================
// BODY PARSER
// ============================================================

app.use(
    express.json({
        limit: "1mb"
    })
);

app.use(
    express.urlencoded({
        extended: true
    })
);


// ============================================================
// ROOT / API INFORMATION
// ============================================================

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "windguard IT Solutions Backend API",
        version: "1.0.0",

        endpoints: [
            "/api/health",
            "/api/website-data",
            "/api/meta",
            "/api/navbar",
            "/api/hero",
            "/api/clients",
            "/api/about",
            "/api/services",
            "/api/why-choose-us",
            "/api/portfolio",
            "/api/testimonials",
            "/api/cta",
            "/api/blog",
            "/api/faq",
            "/api/contact"
        ]
    });
});


// ============================================================
// HEALTH CHECK
// ============================================================

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        message: "Windguard backend is running."
    });
});


// ============================================================
// MAIN WEBSITE DATA API
// ============================================================

app.get("/api/website-data", (req, res) => {

    res.setHeader(
        "Cache-Control",
        "no-store"
    );

    res.json({
        success: true,
        data: webDatabase
    });
});


// ============================================================
// INDIVIDUAL API ENDPOINTS
// ============================================================

const sectionRoutes = {

    "/api/meta": "meta",

    "/api/navbar": "navLinks",

    "/api/hero": "hero",

    "/api/clients": "clients",

    "/api/about": "about",

    "/api/services": "services",

    "/api/why-choose-us": "whyChooseUs",

    "/api/portfolio": "portfolio",

    "/api/testimonials": "testimonials",

    "/api/cta": "cta",

    "/api/blog": "blog",

    "/api/faq": "faq",

    "/api/contact": "contact"
};


for (
    const [route, key]
    of Object.entries(sectionRoutes)
) {

    app.get(route, (req, res) => {

        res.setHeader(
            "Cache-Control",
            "no-store"
        );

        res.json({
            success: true,
            data: webDatabase[key] ?? null
        });
    });
}


// ============================================================
// CONTACT API
// ============================================================

app.post("/api/contact", (req, res) => {

    const {
        name,
        email,
        phone,
        service,
        message
    } = req.body || {};


    if (
        !name ||
        !email ||
        !message
    ) {

        return res.status(400).json({

            success: false,

            message:
                "Name, email and message are required."
        });
    }


    console.log(
        "Contact request received:",
        {
            name,
            email,
            phone: phone || "",
            service: service || "",
            message
        }
    );


    return res.json({

        success: true,

        message:
            "Contact request received successfully."
    });
});


// ============================================================
// EXISTING BACKEND HTML / CSS / IMAGES
// ============================================================
//
// Tumhare existing backend folders ko wahi rakha gaya hai.
// Kuch move/rename nahi karna.
// ============================================================

const publicFolders = [

    "about",

    "css",

    "feedback",

    "img",

    "login",

    "offer",

    "privacy",

    "Services"
];


for (
    const folder
    of publicFolders
) {

    app.use(

        `/${folder}`,

        express.static(
            path.join(
                __dirname,
                folder
            ),
            {
                extensions: ["html"],
                index: false
            }
        )
    );
}


// ============================================================
// BACKEND JAVASCRIPT FILES
// ============================================================
//
// database.js ko browser se direct access nahi dena.
// Baaki JS files public reh sakti hain.
// ============================================================

app.use(

    "/js",

    (req, res, next) => {

        const requested =
            req.path.toLowerCase();


        if (
            requested === "/database.js"
        ) {

            return res
                .status(404)
                .send("Not found");
        }


        next();
    },

    express.static(
        path.join(
            __dirname,
            "js"
        )
    )
);


// ============================================================
// 404
// ============================================================

app.use(
    (req, res) => {

        res.status(404).json({

            success: false,

            message: "Route not found",

            path: req.originalUrl
        });
    }
);


// ============================================================
// ERROR HANDLER
// ============================================================

app.use(
    (err, req, res, next) => {

        console.error(
            "Server error:",
            err
        );


        if (
            res.headersSent
        ) {

            return next(err);
        }


        res.status(500).json({

            success: false,

            message:
                err.message ||
                "Internal server error"
        });
    }
);


// ============================================================
// START SERVER
// ============================================================

app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            `Windguard backend running at http://localhost:${PORT}`
        );

        console.log(
            `Website API: http://localhost:${PORT}/api/website-data`
        );
    }
);