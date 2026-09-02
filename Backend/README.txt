WINDGUARD IT SOLUTIONS
LOCAL FULL STACK SETUP
======================


PROJECT STRUCTURE
-----------------

BACKEND/
│
├── server.js
├── package.json
│
├── js/
│   ├── database.js
│   ├── android-ios.js
│   ├── careers.js
│   ├── guide-engine.js
│   ├── loginscript.js
│   ├── otherscript.js
│   ├── portfoliodb.js
│   ├── script.js
│   ├── SEO.js
│   ├── software.js
│   ├── thankyou.js
│   └── verify-engine.js
│
├── about/
├── css/
├── feedback/
├── img/
├── login/
├── offer/
├── privacy/
└── Services/


FRONTEND/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── main.js


INSTALL BACKEND
---------------

Open CMD/Terminal inside BACKEND:

npm install


START BACKEND
-------------

npm start


Backend:

http://localhost:5000


API:

http://localhost:5000/api/website-data


HEALTH CHECK:

http://localhost:5000/api/health


FRONTEND
--------

Open FRONTEND folder with VS Code.

Run index.html using Live Server.

Frontend:

http://localhost:5500/


IMPORTANT
---------

Do NOT put this in frontend index.html:

<script src="../Backend/js/database.js"></script>


Only use:

<script src="js/main.js" defer></script>


DATA FLOW
---------

Frontend index.html
        |
        v
Frontend js/main.js
        |
        | fetch()
        v
http://localhost:5000/api/website-data
        |
        v
Backend server.js
        |
        v
Backend js/database.js
        |
        v
JSON response
        |
        v
Frontend main.js
        |
        v
HTML rendered


DATABASE
--------

MongoDB is NOT required.

database.js is the website data source.

database.js runs on the backend only.

The frontend never directly loads database.js.


BACKEND HTML PAGES
------------------

Existing HTML pages remain inside BACKEND.

Examples:

http://localhost:5000/Services/services.html

http://localhost:5000/Services/product.html

http://localhost:5000/about/contact.html

http://localhost:5000/login/login.html

http://localhost:5000/privacy/privacy.html


IMAGES
------

Backend images:

http://localhost:5000/img/icon.png

http://localhost:5000/img/tab_icon.png


VIDEO
-----

Backend video:

http://localhost:5000/assets/video/hero.mp4

or, according to the actual database.js path:

http://localhost:5000/img/video/hero.mp4


RENDER LATER
------------

After localhost works correctly, change in main.js:

const API_BASE_URL = "http://localhost:5000";

to:

const API_BASE_URL =
"https://YOUR-BACKEND-NAME.onrender.com";


VERCEL
------

Frontend can then be deployed to Vercel.

Frontend main.js will call the Render backend API.