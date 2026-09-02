const GOOGLE_SHEET_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
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
const heroContent = {
    title: "Join Our Team",
    subtitle: "Start your career journey with windguard IT Solutions. Apply for internships below."
};
const formMeta = {
    heading: "Internship Application Form",
    subheading: "Please fill this form. Fields with (*) are required."
};
const formFieldsConfig = [
    { id: "fullName", label: "Your Full Name", type: "text", placeholder: "Rahul Sharma", required: true, fullWidth: false },
    { id: "email", label: "Email Address", type: "email", placeholder: "rahul@example.com", required: true, fullWidth: false },
    { id: "phone", label: "Phone Number (WhatsApp)", type: "tel", placeholder: "987654XXXX", required: true, fullWidth: false },
    { 
        id: "domain", 
        label: "Select Internship Domain", 
        type: "select", 
        required: true, 
        fullWidth: false,
        options: [
            "Full Stack Developer",
            "Software Developer", 
            "Frontend Developer", 
            "Backend Developer", 
            "Android/iOS App Developer",
            "UI/UX Designer",
            "Data Scientist / Data Analyst",
            "Artificial Intelligence & Machine Learning",
            "Cyber Security Analyst",
            "Digital Marketing Specialist"
        ] 
    },
    { id: "college", label: "College or University Name", type: "text", placeholder: "Amity University, Noida", required: true, fullWidth: true },
    { id: "qualification", label: "Your Course / Degree & Passing Year", type: "text", placeholder: "B.Tech CSE (2027 Passout)", required: true, fullWidth: false },
    { id: "resumeLink", label: "Resume Link (Google Drive / Dropbox)", type: "url", placeholder: "Paste your public resume link here", required: true, fullWidth: false, note: "Make sure anyone with the link can view your file." },
    { id: "coverLetter", label: "Why do you want this internship?", type: "textarea", placeholder: "Write a short message about your skills and why you want to join us...", required: false, fullWidth: true }
];
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderHero();
    renderFormStructure();
    renderFooter();
    setupFormSubmission();
});
function renderHeader() {
    const header = document.getElementById('dynamicHeader');
    if (!header) return;
    const navLinksHtml = navigationLinks.map(l => `<li><a href="${l.url}" class="${l.class}">${l.text}</a></li>`).join('');
    header.innerHTML = `
        <nav>
            <div class="logo">
                <a href="../../Frontend/index.html">
                    <img src="${companyConfig.logoImg}" alt="${companyConfig.name}" class="logo-img">
                    <span class="logo-text">${companyConfig.name} <span>${companyConfig.suffix}</span></span>
                </a>
            </div>
            <div class="menu-btn" onclick="toggleMenu()"><i class="fas fa-bars"></i></div>
            <ul class="nav-links" id="navLinks">${navLinksHtml}</ul>
        </nav>`;
}
function renderHero() {
    const hero = document.getElementById('dynamicHero');
    if (!hero) return;
    hero.innerHTML = `
        <div class="page-hero-overlay"></div>
        <div class="page-hero-container">
            <h1>${heroContent.title}</h1>
            <p>${heroContent.subtitle}</p>
        </div>`;
}
function renderFormStructure() {
    document.getElementById('dynamicFormTitle').innerHTML = `<h2>${formMeta.heading}</h2><p>${formMeta.subheading}</p>`;
    const fieldsContainer = document.getElementById('dynamicFormFields');
    if (!fieldsContainer) return;
    fieldsContainer.innerHTML = formFieldsConfig.map(field => {
        const widthClass = field.fullWidth ? 'full-width' : '';
        const reqAttr = field.required ? 'required' : '';
        let inputHtml = '';
        if (field.type === 'select') {
            const optionsHtml = ['<option value="" disabled selected>-- Click to Choose Domain --</option>']
                .concat(field.options.map(opt => `<option value="${opt}">${opt}</option>`)).join('');
            inputHtml = `<select id="${field.id}" name="${field.id}" ${reqAttr}>${optionsHtml}</select>`;
        } else if (field.type === 'textarea') {
            inputHtml = `<textarea id="${field.id}" name="${field.id}" rows="4" placeholder="${field.placeholder}" ${reqAttr}></textarea>`;
        } else {
            inputHtml = `<input type="${field.type}" id="${field.id}" name="${field.id}" placeholder="${field.placeholder}" ${reqAttr}>`;
        }
        return `
            <div class="form-group ${widthClass}">
                <label for="${field.id}">${field.label} ${field.required ? '<span style="color:#e53e3e">*</span>' : ''}</label>
                ${inputHtml}
                ${field.note ? `<span class="file-note"><i class="fas fa-info-circle"></i> ${field.note}</span>` : ''}
            </div>`;
    }).join('');
}
function renderFooter() {
    const footer = document.getElementById('dynamicFooter');
    if (!footer) return;
    const quickLinks = navigationLinks.filter(l => l.text !== "Sign In").map(l => `<a href="${l.url}">${l.text}</a>`).join('');   
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-col">
                <h4>${companyConfig.name} <span>${companyConfig.suffix}</span></h4>
                <p>Professional IT solutions provider in Noida since ${companyConfig.established}.</p>
                <div class="footer-social">
                    <a href="${companyConfig.socials.linkedin}"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${companyConfig.socials.facebook}"><i class="fab fa-facebook-f"></i></a>
                    <a href="${companyConfig.socials.instagram}"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-col"><h4>Quick Links</h4>${quickLinks}</div>
            <div class="footer-col">
                <h4>Contact Info</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${companyConfig.location}</p>
                <p><i class="fas fa-envelope"></i> ${companyConfig.email}</p>
            </div>
        </div>
        <div class="footer-bottom"><p>&copy; 2026 ${companyConfig.name} <span>${companyConfig.suffix}</span>. All rights reserved.</p></div>`;
}
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.toggle('active');
}
function setupFormSubmission() {
    const form = document.getElementById('internshipForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('statusMessage');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting... Please Wait <i class="fas fa-spinner fa-spin"></i>';
        statusMsg.className = 'status-msg';
        statusMsg.style.display = 'none';
        const formData = {};
        formFieldsConfig.forEach(field => {
            formData[field.id] = document.getElementById(field.id).value;
        });
        formData['submissionDate'] = new Date().toLocaleString();
        fetch(GOOGLE_SHEET_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(() => {
            statusMsg.textContent = "Your application was submitted successfully! Our team will contact you soon.";
            statusMsg.className = 'status-msg success';
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            statusMsg.textContent = "Submission failed. Please check your internet connection and try again.";
            statusMsg.className = 'status-msg error';
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit Application <i class="fas fa-arrow-right"></i>';
        });
    });
}