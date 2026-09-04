const API_BASE_URL = "https://windguarditsolutions.onrender.com";
const FRONTEND_HOME_URL = new URL(
    "./index.html",
    window.location.href
).href;
const EMAILJS_PUBLIC_KEY = "cjp8whkFsfFhyxzeg";
const EMAILJS_SERVICE_ID = "service_5vvb0o8";
const EMAILJS_TEMPLATE_ID = "template_d13onqp";
function isExternalUrl(value) {
    if (!value) {
        return false;
    }
    return /^(https?:\/\/|data:|blob:|mailto:|tel:|#)/i.test(
        String(value).trim()
    );
}
function backendUrl(value) {
    if (!value) {
        return "#";
    }
    let url = String(value).trim();
    if (isExternalUrl(url)) {
        return url;
    }
    url = url.replace(
        /^(?:\.\.\/)+Backend\//i,
        ""
    );
    url = url.replace(
        /^Backend\//i,
        ""
    );
    url = url.replace(
        /^(?:\.\.\/|\.\/)+/,
        ""
    );
    url = url.replace(
        /^\/+/,
        ""
    );
    return `${API_BASE_URL}/${url}`;
}
function resolveUrl(value) {
    if (!value) {
        return "#";
    }
    const url = String(value).trim();
    if (isExternalUrl(url)) {
        return url;
    }
    return backendUrl(url);
}
function escapeHtml(value) {
    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
async function loadWebsiteData() {
    try {
        const apiUrl =
            `${API_BASE_URL}/api/website-data`;
        const response = await fetch(
            apiUrl,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                cache: "no-store"
            }
        );
        if (!response.ok) {
            throw new Error(
                `Backend API Error: ${response.status}`
            );
        }
        const payload =
            await response.json();
        if (
            !payload ||
            payload.success === false
        ) {
            throw new Error(
                payload?.message ||
                "Backend API returned an error."
            );
        }
        const db =
            payload.data &&
            typeof payload.data === "object"
                ? payload.data
                : payload;
        if (
            !db ||
            typeof db !== "object"
        ) {
            throw new Error(
                "Invalid website data received."
            );
        }
        renderMeta(db);
        renderLogo(db);
        renderNavbar(db);
        renderPopup(db);
        renderHero(db);
        renderClients(db);
        renderAbout(db);
        renderServices(db);
        renderWhyChooseUs(db);
        renderPortfolio(db);
        renderTestimonials(db);
        renderCTA(db);
        renderBlog(db);
        renderFAQ(db);
        renderContact(db);
        renderFooter(db);
        initScrollAnimations();
        initCounterAnimations();
    } catch (error) {
        console.error(
            "Website data load failed:",
            error
        );
        const heroDesc =
            document.getElementById(
                "heroDesc"
            );
        if (heroDesc) {
            heroDesc.innerText =
                "Website data load nahi ho pa raha. Please try again.";
        }
    }
}
function renderMeta(db) {
    if (!db.meta) {
        return;
    }
    document.title =
        db.meta.title ||
        "windguard IT Solutions";
    const metaDesc =
        document.getElementById(
            "metaDesc"
        );
    if (metaDesc) {
        metaDesc.setAttribute(
            "content",
            db.meta.description || ""
        );
    }
    const metaKeywords =
        document.getElementById(
            "metaKeywords"
        );
    if (metaKeywords) {
        metaKeywords.setAttribute(
            "content",
            db.meta.keywords || ""
        );
    }
    const metaAuthor =
        document.getElementById(
            "metaAuthor"
        );
    if (metaAuthor) {
        metaAuthor.setAttribute(
            "content",
            db.meta.author || ""
        );
    }
    const favicon =
        document.getElementById(
            "favIcon"
        );
    if (
        favicon &&
        db.meta.favicon
    ) {
        favicon.href =
            resolveUrl(
                db.meta.favicon
            );
    }
}
function renderLogo(db) {
    const logo =
        db.logo || {};
    const logoImg =
        document.getElementById(
            "logoImg"
        );
    const logoText =
        document.getElementById(
            "logoText"
        );
    if (logoImg) {
        logoImg.src =
            resolveUrl(
                logo.src
            );
        logoImg.alt =
            logo.alt ||
            db.companyName ||
            "windguard IT Solutions";
    }
    if (logoText) {
        const name =
            db.companyName ||
            "windguard IT Solutions";
        logoText.innerHTML =
            escapeHtml(name)
                .replace(
                    " Solutions",
                    "<span> Solutions</span>"
                );
    }
    const logoLink =
        document.getElementById(
            "logoLink"
        );
    if (logoLink) {
        logoLink.href =
            FRONTEND_HOME_URL;
    }
}
function renderNavbar(db) {
    const nav =
        document.getElementById(
            "navLinks"
        );
    if (
        !nav ||
        !Array.isArray(
            db.navLinks
        )
    ) {
        return;
    }
    nav.innerHTML =
        db.navLinks
            .map(link => {
                const href =
                    resolveUrl(
                        link.url
                    );
                return `
                    <li>
                        <a
                            href="${href}"
                            class="${
                                link.isBtn
                                    ? "btn-login"
                                    : ""
                            }"
                        >
                            ${escapeHtml(
                                link.text
                            )}
                        </a>
                    </li>
                `;
            })
            .join("");
}
function renderPopup(db) {
    if (!db.popup) {
        return;
    }
    const title =
        document.getElementById(
            "popupTitle"
        );
    const desc =
        document.getElementById(
            "popupDesc"
        );
    const buttons =
        document.getElementById(
            "popupBtns"
        );
    if (title) {
        title.innerText =
            db.popup.title || "";
    }
    if (desc) {
        desc.innerText =
            db.popup.desc || "";
    }
    if (
        buttons &&
        Array.isArray(
            db.popup.buttons
        )
    ) {
        buttons.innerHTML =
            db.popup.buttons
                .map(
                    (button, index) => {
                        const action =
                            button.action || "";
                        return `
                            <button
                                class="btn ${
                                    index === 1
                                        ? "btn-outline"
                                        : ""
                                }"
                                onclick="${escapeHtml(
                                    action
                                )}"
                            >
                                ${escapeHtml(
                                    button.text
                                )}
                            </button>
                        `;
                    }
                )
                .join("");
    }
    const currentPath =
        window.location.pathname;
    const isHomepage =
        currentPath.endsWith(
            "/index.html"
        ) ||
        currentPath === "/" ||
        currentPath === "";
    if (isHomepage) {
        if (
            !sessionStorage.getItem(
                "popupShown"
            )
        ) {
            setTimeout(() => {
                const popup =
                    document.getElementById(
                        "popup"
                    );
                if (popup) {
                    popup.style.display =
                        "flex";
                }
            }, 1500);
            sessionStorage.setItem(
                "popupShown",
                "true"
            );
        }
    }
}
function renderHero(db) {
    if (!db.hero) {
        return;
    }
    const heroTitle =
        document.getElementById(
            "heroTitle"
        );
    const heroDesc =
        document.getElementById(
            "heroDesc"
        );
    const heroBtns =
        document.getElementById(
            "heroBtns"
        );
    const heroStats =
        document.getElementById(
            "heroStats"
        );
    const heroSocials =
        document.getElementById(
            "heroSocials"
        );
    if (heroTitle) {
        heroTitle.innerHTML =
            db.hero.title || "";
    }
    if (heroDesc) {
        heroDesc.innerText =
            db.hero.desc || "";
    }
    if (
        heroBtns &&
        Array.isArray(
            db.hero.buttons
        )
    ) {
        heroBtns.innerHTML =
            db.hero.buttons
                .map(button => {
                    return `
                        <a
                            href="${resolveUrl(
                                button.url
                            )}"
                            class="${
                                button.class || ""
                            }"
                        >
                            ${escapeHtml(
                                button.text
                            )}
                            ${
                                button.icon
                                    ? `
                                        <i
                                            class="${escapeHtml(
                                                button.icon
                                            )}"
                                        ></i>
                                    `
                                    : ""
                            }
                        </a>
                    `;
                })
                .join("");
    }
    if (
        heroStats &&
        Array.isArray(
            db.hero.stats
        )
    ) {
        heroStats.innerHTML =
            db.hero.stats
                .map(
                    (stat, index) => {
                        const value =
                            String(
                                stat.value || ""
                            );
                        const match =
                            value.match(
                                /^(\d+)(.*)$/
                            );
                        if (match) {
                            const number =
                                match[1];
                            const suffix =
                                match[2];
                            return `
                                <div
                                    class="stat scroll-reveal"
                                    style="transition-delay:${
                                        index * 0.1
                                    }s;"
                                >
                                    <h3
                                        class="counter"
                                        data-target="${number}"
                                        data-suffix="${escapeHtml(
                                            suffix
                                        )}"
                                    >
                                        0${escapeHtml(
                                            suffix
                                        )}
                                    </h3>
                                    <p>
                                        ${escapeHtml(
                                            stat.label
                                        )}
                                    </p>
                                </div>
                            `;
                        }
                        return `
                            <div
                                class="stat scroll-reveal"
                                style="transition-delay:${
                                    index * 0.1
                                }s;"
                            >
                                <h3>
                                    ${escapeHtml(
                                        value
                                    )}
                                </h3>
                                <p>
                                    ${escapeHtml(
                                        stat.label
                                    )}
                                </p>
                            </div>
                        `;
                    }
                )
                .join("");
    }
    if (
        heroSocials &&
        Array.isArray(
            db.hero.socials
        )
    ) {
        heroSocials.innerHTML =
            db.hero.socials
                .map(social => {
                    return `
                        <a
                            href="${resolveUrl(
                                social.url
                            )}"
                            target="${
                                social.target ||
                                "_blank"
                            }"
                            rel="noopener noreferrer"
                            class="social-icon ${
                                social.type || ""
                            }"
                        >
                            <i
                                class="${escapeHtml(
                                    social.icon || ""
                                )}"
                            ></i>
                            <span>
                                ${escapeHtml(
                                    social.text
                                )}
                            </span>
                        </a>
                    `;
                })
                .join("");
    }
    renderHeroVideo(
        db.hero
    );
}
function renderHeroVideo(hero) {
    const wrapper =
        document.getElementById(
            "heroVideoWrapper"
        );
    if (!wrapper) {
        return;
    }
    wrapper.innerHTML = "";
    if (
        !hero ||
        !hero.videoSrc
    ) {
        console.warn(
            "Hero video URL nahi mili."
        );
        return;
    }
    const videoUrl =
        resolveUrl(
            hero.videoSrc
        );
    wrapper.innerHTML = `
        <video
            id="bgHeroVideo"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            aria-hidden="true"
        >
            <source
                src="${videoUrl}"
                type="video/mp4"
            >
        </video>
    `;
    const video =
        document.getElementById(
            "bgHeroVideo"
        );
    if (!video) {
        return;
    }
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.addEventListener(
        "loadeddata",
        () => {
            if (
                hero.isVideoPlaying !==
                false
            ) {
                video.play()
                    .then(() => {
                        updateVideoButton(
                            video
                        );
                    })
                    .catch(error => {
                        console.warn(
                            "Video autoplay blocked:",
                            error
                        );
                        updateVideoButton(
                            video
                        );
                    });
            } else {
                updateVideoButton(
                    video
                );
            }
        }
    );
    video.addEventListener(
        "play",
        () => {
            updateVideoButton(
                video
            );
        }
    );
    video.addEventListener(
        "pause",
        () => {
            updateVideoButton(
                video
            );
        }
    );
    video.addEventListener(
        "error",
        () => {
            console.error(
                "Hero video load failed:",
                videoUrl
            );
        }
    );
    if (
        hero.isVideoPlaying !==
        false
    ) {
        const promise =
            video.play();
        if (
            promise &&
            typeof promise.catch ===
                "function"
        ) {
            promise.catch(() => {});
        }
    }
}
function renderClients(db) {
    if (!db.clients) {
        return;
    }
    const title =
        document.getElementById(
            "clientsTitle"
        );
    const grid =
        document.getElementById(
            "clientsGrid"
        );
    if (title) {
        title.innerText =
            db.clients.title || "";
    }
    if (
        grid &&
        Array.isArray(
            db.clients.logos
        )
    ) {
        grid.innerHTML =
            db.clients.logos
                .map(logo => {
                    return `
                        <img
                            src="${resolveUrl(
                                logo.src
                            )}"
                            alt="${escapeHtml(
                                logo.alt
                            )}"
                            class="client-logo scroll-reveal zoom-in"
                        >
                    `;
                })
                .join("");
    }
}
function renderAbout(db) {
    if (!db.about) {
        return;
    }
    const image =
        document.getElementById(
            "aboutImg"
        );
    const badge =
        document.getElementById(
            "aboutBadge"
        );
    const tag =
        document.getElementById(
            "aboutTag"
        );
    const title =
        document.getElementById(
            "aboutTitle"
        );
    const text =
        document.getElementById(
            "aboutText"
        );
    const features =
        document.getElementById(
            "aboutFeatures"
        );
    const button =
        document.getElementById(
            "aboutBtn"
        );
    if (image) {
        image.src =
            resolveUrl(
                db.about.image
            );
        image.alt =
            db.about.title || "";
    }
    if (badge) {
        badge.innerText =
            db.about.badge || "";
    }
    if (tag) {
        tag.innerText =
            db.about.tag || "";
    }
    if (title) {
        title.innerHTML =
            db.about.title || "";
    }
    if (
        text &&
        Array.isArray(
            db.about.paragraphs
        )
    ) {
        text.innerHTML =
            db.about.paragraphs
                .map(
                    paragraph =>
                        `<p>${paragraph}</p>`
                )
                .join("");
    }
    if (
        features &&
        Array.isArray(
            db.about.features
        )
    ) {
        features.innerHTML =
            db.about.features
                .map(
                    feature => `
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>
                                ${escapeHtml(
                                    feature
                                )}
                            </span>
                        </div>
                    `
                )
                .join("");
    }
    if (button) {
        button.href =
            resolveUrl(
                db.about.btnUrl
            );
        button.innerHTML = `
            ${escapeHtml(
                db.about.btnText
            )}
            <i class="fas fa-arrow-right"></i>
        `;
    }
}
function renderServices(db) {
    if (!db.services) {
        return;
    }
    const header =
        document.getElementById(
            "servicesHeader"
        );
    const grid =
        document.getElementById(
            "servicesGrid"
        );
    if (header) {
        header.innerHTML = `
            <span class="tag">
                ${escapeHtml(
                    db.services.tag
                )}
            </span>
            <h2 class="section-title">
                ${escapeHtml(
                    db.services.title
                )}
            </h2>
            <p class="section-subtitle">
                ${escapeHtml(
                    db.services.subtitle
                )}
            </p>
        `;
    }
    if (
        grid &&
        Array.isArray(
            db.services.list
        )
    ) {
        grid.innerHTML =
            db.services.list
                .map(
                    (service, index) => `
                        <div
                            class="service-card-detailed scroll-reveal zoom-in"
                            style="transition-delay:${
                                index * 0.15
                            }s;"
                        >
                            <div
                                class="service-bg"
                                style="
                                    background-image:url('${resolveUrl(
                                        service.bg
                                    )}');
                                "
                            ></div>
                            <div class="service-content">
                                <div class="service-icon">
                                    <img
                                        src="${resolveUrl(
                                            service.icon
                                        )}"
                                        class="offer-logo"
                                        alt="${escapeHtml(
                                            service.title
                                        )}"
                                    >
                                </div>
                                <h3>
                                    ${escapeHtml(
                                        service.title
                                    )}
                                </h3>
                                <p>
                                    ${escapeHtml(
                                        service.desc
                                    )}
                                </p>
                                <ul>
                                    ${
                                        Array.isArray(
                                            service.points
                                        )
                                            ? service.points
                                                .map(
                                                    point =>
                                                        `<li>${escapeHtml(
                                                            point
                                                        )}</li>`
                                                )
                                                .join("")
                                            : ""
                                    }
                                </ul>
                                <a
                                    href="${resolveUrl(
                                        service.url
                                    )}"
                                    class="btn-link"
                                >
                                    Learn More
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    `
                )
                .join("");
    }
}
function renderWhyChooseUs(db) {
    if (!db.whyChooseUs) {
        return;
    }
    const tag =
        document.getElementById(
            "whyTag"
        );
    const title =
        document.getElementById(
            "whyTitle"
        );
    const desc =
        document.getElementById(
            "whyDesc"
        );
    const image =
        document.getElementById(
            "whyImg"
        );
    const list =
        document.getElementById(
            "whyList"
        );
    if (tag) {
        tag.innerText =
            db.whyChooseUs.tag || "";
    }
    if (title) {
        title.innerHTML =
            db.whyChooseUs.title || "";
    }
    if (desc) {
        desc.innerText =
            db.whyChooseUs.desc || "";
    }
    if (image) {
        image.src =
            resolveUrl(
                db.whyChooseUs.image
            );
        image.alt =
            db.whyChooseUs.title || "";
    }
    if (
        list &&
        Array.isArray(
            db.whyChooseUs.items
        )
    ) {
        list.innerHTML =
            db.whyChooseUs.items
                .map(
                    item => `
                        <div class="why-item scroll-reveal">
                            <i
                                class="${escapeHtml(
                                    item.icon || ""
                                )}"
                            ></i>
                            <div>
                                <h4>
                                    ${escapeHtml(
                                        item.title
                                    )}
                                </h4>
                                <p>
                                    ${escapeHtml(
                                        item.desc
                                    )}
                                </p>
                            </div>
                        </div>
                    `
                )
                .join("");
    }
}
function renderPortfolio(db) {
    if (!db.portfolio) {
        return;
    }
    const header =
        document.getElementById(
            "portfolioHeader"
        );
    const grid =
        document.getElementById(
            "portfolioGrid"
        );
    const button =
        document.getElementById(
            "portfolioAllBtn"
        );
    if (header) {
        header.innerHTML = `
            <span class="tag">
                ${escapeHtml(
                    db.portfolio.tag
                )}
            </span>
            <h2 class="section-title">
                ${escapeHtml(
                    db.portfolio.title
                )}
            </h2>
            <p class="section-subtitle">
                ${escapeHtml(
                    db.portfolio.subtitle
                )}
            </p>
        `;
    }
    if (
        grid &&
        Array.isArray(
            db.portfolio.items
        )
    ) {
        grid.innerHTML =
            db.portfolio.items
                .map(
                    (project, index) => `
                        <div
                            class="portfolio-item scroll-reveal fade-up"
                            style="transition-delay:${
                                index * 0.1
                            }s;"
                        >
                            <img
                                src="${resolveUrl(
                                    project.src
                                )}"
                                alt="${escapeHtml(
                                    project.title
                                )}"
                            >
                            <h3>
                                ${escapeHtml(
                                    project.title
                                )}
                            </h3>
                            <p>
                                ${escapeHtml(
                                    project.desc
                                )}
                            </p>
                        </div>
                    `
                )
                .join("");
    }
    if (button) {
        button.href =
            resolveUrl(
                db.portfolio.btnUrl
            );
        button.innerHTML = `
            ${escapeHtml(
                db.portfolio.btnText
            )}
            <i class="fas fa-arrow-right"></i>
        `;
    }
}
function renderTestimonials(db) {
    if (!db.testimonials) {
        return;
    }
    const header =
        document.getElementById(
            "testimonialHeader"
        );
    const grid =
        document.getElementById(
            "testimonialGrid"
        );
    if (header) {
        header.innerHTML = `
            <span class="tag">
                ${escapeHtml(
                    db.testimonials.tag
                )}
            </span>
            <h2 class="section-title">
                ${escapeHtml(
                    db.testimonials.title
                )}
            </h2>
            <p class="section-subtitle">
                ${escapeHtml(
                    db.testimonials.subtitle
                )}
            </p>
        `;
    }
    if (
        grid &&
        Array.isArray(
            db.testimonials.list
        )
    ) {
        grid.innerHTML =
            db.testimonials.list
                .map(
                    (item, index) => `
                        <div
                            class="testimonial-card scroll-reveal zoom-in"
                            style="transition-delay:${
                                index * 0.15
                            }s;"
                        >
                            <div class="quote-icon">
                                <i class="fas fa-quote-left"></i>
                            </div>
                            <p>
                                ${escapeHtml(
                                    item.feedback
                                )}
                            </p>
                            <div class="client-info">
                                <img
                                    src="${resolveUrl(
                                        item.img
                                    )}"
                                    alt="${escapeHtml(
                                        item.name
                                    )}"
                                >
                                <div>
                                    <h4>
                                        ${escapeHtml(
                                            item.name
                                        )}
                                    </h4>
                                    <span>
                                        ${escapeHtml(
                                            item.role
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div class="rating">
                                ${
                                    '<i class="fas fa-star"></i>'
                                        .repeat(
                                            Math.max(
                                                0,
                                                Number(
                                                    item.stars
                                                ) || 0
                                            )
                                        )
                                }
                            </div>
                        </div>
                    `
                )
                .join("");
    }
}
function renderCTA(db) {
    const container =
        document.getElementById(
            "ctaContent"
        );
    if (
        !container ||
        !db.cta
    ) {
        return;
    }
    container.innerHTML = `
        <h2>
            ${escapeHtml(
                db.cta.title
            )}
        </h2>
        <p>
            ${escapeHtml(
                db.cta.desc
            )}
        </p>
        <div class="cta-buttons">
            <a
                href="${resolveUrl(
                    db.cta.contactUrl
                )}"
                class="btn btn-primary"
            >
                Contact Us Now
            </a>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    db.cta.email || ""
                )}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline-white"
            >
                <i class="fas fa-envelope"></i>
                ${escapeHtml(
                    db.cta.email
                )}
            </a>
        </div>
    `;
}
function renderBlog(db) {
    if (!db.blog) {
        return;
    }
    const header =
        document.getElementById(
            "blogHeader"
        );
    const grid =
        document.getElementById(
            "blogGrid"
        );
    if (header) {
        header.innerHTML = `
            <span class="tag">
                ${escapeHtml(
                    db.blog.tag
                )}
            </span>
            <h2 class="section-title">
                ${escapeHtml(
                    db.blog.title
                )}
            </h2>
            <p class="section-subtitle">
                ${escapeHtml(
                    db.blog.subtitle
                )}
            </p>
        `;
    }
    if (
        grid &&
        Array.isArray(
            db.blog.list
        )
    ) {
        grid.innerHTML =
            db.blog.list
                .map(
                    (blog, index) => `
                        <div
                            class="blog-card scroll-reveal fade-up"
                            style="transition-delay:${
                                index * 0.15
                            }s;"
                        >
                            <img
                                src="${resolveUrl(
                                    blog.src
                                )}"
                                alt="${escapeHtml(
                                    blog.title
                                )}"
                            >
                            <div class="blog-content">
                                <span class="blog-date">
                                    ${escapeHtml(
                                        blog.date
                                    )}
                                </span>
                                <h3>
                                    ${escapeHtml(
                                        blog.title
                                    )}
                                </h3>
                                <p>
                                    ${escapeHtml(
                                        blog.desc
                                    )}
                                </p>
                                <a
                                    href="${resolveUrl(
                                        blog.url
                                    )}"
                                    class="btn-blog"
                                >
                                    Read More
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    `
                )
                .join("");
    }
}
function renderFAQ(db) {
    if (!db.faq) {
        return;
    }
    const header =
        document.getElementById(
            "faqHeader"
        );
    const grid =
        document.getElementById(
            "faqGrid"
        );
    if (header) {
        header.innerHTML = `
            <span class="tag">
                ${escapeHtml(
                    db.faq.tag
                )}
            </span>
            <h2 class="section-title">
                ${escapeHtml(
                    db.faq.title
                )}
            </h2>
            <p class="section-subtitle">
                ${escapeHtml(
                    db.faq.subtitle
                )}
            </p>
        `;
    }
    if (
        grid &&
        Array.isArray(
            db.faq.list
        )
    ) {
        grid.innerHTML =
            db.faq.list
                .map(
                    (faq, index) => `
                        <div
                            class="faq-item scroll-reveal fade-up"
                            style="transition-delay:${
                                index * 0.1
                            }s;"
                        >
                            <h3>
                                ${escapeHtml(
                                    faq.q
                                )}
                            </h3>
                            <p>
                                ${escapeHtml(
                                    faq.a
                                )}
                            </p>
                        </div>
                    `
                )
                .join("");
    }
}
function renderContact(db) {
    if (!db.contact) {
        return;
    }
    const tag =
        document.getElementById(
            "contactTag"
        );
    const title =
        document.getElementById(
            "contactTitle"
        );
    const desc =
        document.getElementById(
            "contactDesc"
        );
    const address =
        document.getElementById(
            "addressBox"
        );
    const socials =
        document.getElementById(
            "footerSocials"
        );
    const serviceSelect =
        document.getElementById(
            "service"
        );
    if (tag) {
        tag.innerText =
            db.contact.tag || "";
    }
    if (title) {
        title.innerHTML =
            db.contact.title || "";
    }
    if (desc) {
        desc.innerText =
            db.contact.desc || "";
    }
    if (address) {
        address.innerHTML = `
            <h3>
                Our Office Address
            </h3>
            <p>
                <i class="fas fa-map-marker-alt"></i>
                ${escapeHtml(
                    db.contact.address
                )}
            </p>
            <p>
                <i class="fas fa-envelope"></i>
                <a
                    href="mailto:${escapeHtml(
                        db.contact.email
                    )}"
                >
                    ${escapeHtml(
                        db.contact.email
                    )}
                </a>
            </p>
            <p>
                <i class="fas fa-clock"></i>
                ${escapeHtml(
                    db.contact.timing
                )}
            </p>
        `;
    }
    if (
        socials &&
        Array.isArray(
            db.contact.socials
        )
    ) {
        socials.innerHTML =
            db.contact.socials
                .map(
                    social => `
                        <a
                            href="${resolveUrl(
                                social.url
                            )}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                class="${escapeHtml(
                                    social.icon || ""
                                )}"
                            ></i>
                        </a>
                    `
                )
                .join("");
    }
    if (
        serviceSelect &&
        Array.isArray(
            db.contact.services
        )
    ) {
        serviceSelect.innerHTML =
            `<option value="">
                Select Service
            </option>` +
            db.contact.services
                .map(
                    service => `
                        <option
                            value="${escapeHtml(
                                service
                            )}"
                        >
                            ${escapeHtml(
                                service
                            )}
                        </option>
                    `
                )
                .join("");
    }
}
function renderFooter(db) {
    const footerCols =
        document.getElementById(
            "footerCols"
        );
    const footerBottom =
        document.getElementById(
            "footerBottom"
        );
    if (footerCols) {
        const socials =
            db.contact &&
            Array.isArray(
                db.contact.socials
            )
                ? db.contact.socials
                    .map(
                        social => `
                            <a
                                href="${resolveUrl(
                                    social.url
                                )}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    class="${escapeHtml(
                                        social.icon || ""
                                    )}"
                                ></i>
                            </a>
                        `
                    )
                    .join("")
                : "";
        const nav =
            Array.isArray(
                db.navLinks
            )
                ? db.navLinks
                    .map(
                        link => `
                            <a
                                href="${resolveUrl(
                                    link.url
                                )}"
                            >
                                ${escapeHtml(
                                    link.text
                                )}
                            </a>
                        `
                    )
                    .join("")
                : "";
        footerCols.innerHTML = `
            <div class="footer-col">
                <h4>
                    ${escapeHtml(
                        db.companyName || ""
                    )}
                </h4>
                <p>
                    Professional IT solutions
                    provider in Noida.
                </p>
                <div class="footer-social">
                    ${socials}
                </div>
            </div>
            <div class="footer-col">
                <h4>
                    Quick Links
                </h4>
                ${nav}
            </div>
            <div class="footer-col">
                <h4>
                    Our Services
                </h4>
                <a
                    href="${backendUrl(
                        "Services/services.html"
                    )}"
                >
                    Web Development
                </a>
                <a
                    href="${backendUrl(
                        "Services/services.html"
                    )}"
                >
                    Mobile Apps
                </a>
            </div>
            <div class="footer-col">
                <h4>
                    Legal
                </h4>
                <a
                    href="${backendUrl(
                        "privacy/privacy.html"
                    )}"
                >
                    Privacy Policy
                </a>
                <a
                    href="${backendUrl(
                        "privacy/terms.html"
                    )}"
                >
                    Terms
                </a>
            </div>
        `;
    }
    if (footerBottom) {
        footerBottom.innerHTML = `
            <p>
                &copy; 2026
                ${escapeHtml(
                    db.companyName || ""
                )}
                All rights reserved.
            </p>
        `;
    }
}
function updateVideoButton(video) {
    if (!video) {
        return;
    }
    const icon =
        document.getElementById(
            "videoToggleIcon"
        );
    const button =
        document.getElementById(
            "videoToggleBtn"
        );
    const text =
        document.getElementById(
            "videoToggleText"
        );
    if (video.paused) {
        if (icon) {
            icon.className =
                "fas fa-play";
        }
        if (button) {
            button.setAttribute(
                "aria-label",
                "Play Video"
            );
            button.setAttribute(
                "title",
                "Play Video"
            );
        }
    } else {
        if (icon) {
            icon.className =
                "fas fa-pause";
        }
        if (button) {
            button.setAttribute(
                "aria-label",
                "Pause Video"
            );
            button.setAttribute(
                "title",
                "Pause Video"
            );
        }
    }
    if (text) {
        text.style.display =
            "none";
    }
}
function toggleHeroVideo() {
    const video =
        document.getElementById(
            "bgHeroVideo"
        );
    if (!video) {
        console.warn(
            "Hero video nahi mila."
        );
        return;
    }
    if (video.paused) {
        video.play()
            .then(() => {
                updateVideoButton(
                    video
                );
            })
            .catch(error => {
                console.error(
                    "Video play failed:",
                    error
                );
            });
    } else {
        video.pause();
        updateVideoButton(
            video
        );
    }
}
function animateCounter(element) {
    if (!element) {
        return;
    }
    const target =
        Number(
            element.dataset.target
        );
    const suffix =
        element.dataset.suffix ||
        "";
    if (
        Number.isNaN(target)
    ) {
        return;
    }
    const duration =
        1800;
    const start =
        performance.now();
    function update(time) {
        const elapsed =
            time - start;
        const progress =
            Math.min(
                elapsed / duration,
                1
            );
        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );
        const current =
            Math.floor(
                eased * target
            );
        element.textContent =
            current + suffix;
        if (
            progress < 1
        ) {
            requestAnimationFrame(
                update
            );
        } else {
            element.textContent =
                target + suffix;
        }
    }
    requestAnimationFrame(
        update
    );
}
function initCounterAnimations() {
    const counters =
        document.querySelectorAll(
            ".counter"
        );
    if (!counters.length) {
        return;
    }
    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {
        counters.forEach(
            counter =>
                animateCounter(
                    counter
                )
        );
        return;
    }
    const observer =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(
                    entry => {
                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }
                        const counter =
                            entry.target;
                        if (
                            counter.dataset
                                .animated ===
                            "true"
                        ) {
                            return;
                        }
                        counter.dataset
                            .animated =
                            "true";
                        animateCounter(
                            counter
                        );
                        observer.unobserve(
                            counter
                        );
                    }
                );
            },
            {
                threshold: 0.5
            }
        );
    counters.forEach(
        counter =>
            observer.observe(
                counter
            )
    );
}
function initScrollAnimations() {
    const elements = [
        [
            ".about-content",
            "slide-right"
        ],
        [
            ".about-image",
            "slide-left"
        ],
        [
            ".why-content",
            "slide-left"
        ],
        [
            ".why-image",
            "slide-right"
        ],
        [
            ".cta-content",
            "zoom-in"
        ],
        [
            ".contact-form-full",
            "slide-right"
        ],
        [
            ".contact-info",
            "slide-left"
        ]
    ];
    elements.forEach(
        ([selector, animation]) => {
            const element =
                document.querySelector(
                    selector
                );
            if (element) {
                element.classList.add(
                    "scroll-reveal",
                    animation
                );
            }
        }
    );
    const items =
        document.querySelectorAll(
            ".scroll-reveal"
        );
    if (!items.length) {
        return;
    }
    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {
        items.forEach(
            item =>
                item.classList.add(
                    "reveal-active"
                )
        );
        return;
    }
    const observer =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(
                    entry => {
                        if (
                            entry.isIntersecting
                        ) {
                            entry.target.classList.add(
                                "reveal-active"
                            );
                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );
            },
            {
                root: null,
                rootMargin:
                    "0px 0px -60px 0px",
                threshold: 0.1
            }
        );
    items.forEach(
        item =>
            observer.observe(
                item
            )
    );
}
function toggleMenu() {
    const nav =
        document.getElementById(
            "navLinks"
        );
    if (!nav) {
        return;
    }
    nav.classList.toggle(
        "active"
    );
}
function closePopup() {
    const popup =
        document.getElementById(
            "popup"
        );
    if (popup) {
        popup.style.display =
            "none";
    }
}
function goToServices() {
    window.location.href =
        backendUrl(
            "Services/services.html"
        );
}
function goToProduct() {
    window.location.href =
        backendUrl(
            "Services/product.html"
        );
}
async function submitContactForm(event) {
    if (event) {
        event.preventDefault();
    }
    const submitBtn =
        document.getElementById(
            "submitBtn"
        );
    if (!submitBtn) {
        return false;
    }
    const name =
        document.getElementById(
            "name"
        )?.value.trim() || "";
    const email =
        document.getElementById(
            "email"
        )?.value.trim() || "";
    const phone =
        document.getElementById(
            "phone"
        )?.value.trim() || "";
    const service =
        document.getElementById(
            "service"
        )?.value || "";
    const message =
        document.getElementById(
            "message"
        )?.value.trim() || "";
    if (
        !name ||
        !email ||
        !message
    ) {
        alert(
            "Please fill all required fields."
        );
        return false;
    }
    submitBtn.disabled =
        true;
    submitBtn.innerHTML =
        "Sending...";
    try {
        const response =
            await fetch(
                `${API_BASE_URL}/api/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                        "Accept":
                            "application/json"
                    },
                    body:
                        JSON.stringify({
                            name,
                            email,
                            phone,
                            service,
                            message
                        })
                }
            );
        let result;
        try {
            result =
                await response.json();
        } catch {
            result = {};
        }
        if (!response.ok) {
            throw new Error(
                result.message ||
                `Contact API Error: ${response.status}`
            );
        }
        if (
            typeof emailjs !==
            "undefined"
        ) {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name,
                    email,
                    phone,
                    service,
                    message
                }
            );
        }
        window.location.href =
            backendUrl(
                "feedback/thankyou.html"
            );
    } catch (error) {
        console.error(
            "Contact form error:",
            error
        );
        alert(
            "Something went wrong! Please try again."
        );
        submitBtn.disabled =
            false;
        submitBtn.innerHTML = `
            Send Message
            <i class="fas fa-paper-plane"></i>
        `;
    }
    return false;
}
function initializeEmailJS() {
    if (
        typeof emailjs !==
        "undefined"
    ) {
        emailjs.init(
            EMAILJS_PUBLIC_KEY
        );
    } else {
        console.warn(
            "EmailJS library load nahi hui."
        );
    }
}
function initializeNavigationEvents() {
    const nav =
        document.getElementById(
            "navLinks"
        );
    if (!nav) {
        return;
    }
    nav.addEventListener(
        "click",
        event => {
            const link =
                event.target.closest(
                    "a"
                );
            if (link) {
                nav.classList.remove(
                    "active"
                );
            }
        }
    );
}
document.addEventListener(
    "DOMContentLoaded",
    () => {
        initializeEmailJS();
        initializeNavigationEvents();
        loadWebsiteData();
    }
);
