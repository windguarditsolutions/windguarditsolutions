const pageTextConfig = {
    mainHeading: "windguard IT Solutions Internship Guide",
    mainSubheading: "Kindly review the structural operational workflows, evaluation phases, and compliance parameters before applying.",
    formRedirectUrl: "../about/Careers.html"
};

const documentMetaData = {
    title: "Official Induction Manual Handbook",
    documentId: "DOC-ID: WG-INT-2026-REV3"
};

const programCoreMetrics = [
    { title: "Program Duration", value: "2 Calendar Months", iconClass: "fas fa-calendar-alt" },
    { title: "Financial Overhead", value: "100% Free (No Hidden Charges)", iconClass: "fas fa-hand-holding-usd" },
    { title: "Operational Mode", value: "Work From Home (Fully Remote)", iconClass: "fas fa-laptop-house" }
];

const processPipelineSteps = [
    { 
        phase: "Phase 1: Profile Screening", 
        details: "The Talent Acquisition team evaluates your submitted data, academic consistency, and public portfolio resume link validation." 
    },
    { 
        phase: "Phase 2: Email Invitation", 
        details: "Shortlisted candidates receive a formal notification email containing dynamic screening confirmation details and calendar slots." 
    },
    { 
        phase: "Phase 3: Interactive Interview", 
        details: "A live technical interaction and conversational evaluation is conducted via Google Meet to verify foundational core concepts." 
    },
    { 
        phase: "Phase 4: Contract Issuance", 
        details: "Selected interns receive an official softcopy contract via email, followed by an authentic hardcopy PDF Offer Letter." 
    },
    { 
        phase: "Phase 5: Evaluation & LOR", 
        details: "Upon completing the 2-month program, candidate submissions undergo evaluation to release the Completion Certificate and LOR." 
    },
    { 
        phase: "Phase 6: Immutable Verification", 
        details: "Candidate performance profiles are hosted on our official web ecosystem infrastructure for global employment verification." 
    }
];

const engineeringTrackMatrix = [
    { 
        track: "Full Stack Developer", 
        scope: "Responsible for constructing fluid user interfaces using HTML/CSS/React and engineering robust database architecture layers with continuous API synchronization protocols." 
    },
    { 
        track: "Software Developer", 
        scope: "Focuses on procedural design patterns, microservices automation scripting, building structural computational algorithms, and performance debugging." 
    },
    { 
        track: "Frontend Developer", 
        scope: "Translates high-fidelity Figma blueprints into semantic, accessible, cross-browser responsive production interfaces using modern JavaScript frameworks." 
    },
    { 
        track: "Backend Developer", 
        scope: "Engineers data pipeline endpoints, structures secure storage models, designs complex schemas, and enforces high-level user token authentication." 
    },
    { 
        track: "Android/iOS App Developer", 
        scope: "Designs and maintains native or hybrid mobile application lifecycles, optimizing async network operations and background device state components." 
    },
    { 
        track: "UI/UX Designer", 
        scope: "Maps abstract user journeys, designs architectural low/high fidelity digital wireframes, and develops clickable product prototypes within Figma environments." 
    },
    { 
        track: "Data Scientist / Analyst", 
        scope: "Executes mathematical operations on messy, raw enterprise datasets to isolate anomalies, construct predictive charts, and translate trends into business solutions." 
    },
    { 
        track: "AI & Machine Learning Engineer", 
        scope: "Trains smart operational predictive datasets, customizes specific neural weights, structures automated processing loops, and builds intelligent API layers." 
    },
    { 
        track: "Cyber Security Analyst", 
        scope: "Monitors application codebase risks, evaluates configuration vulnerabilities, tracks authentication access breaches, and hardens isolated cloud data servers." 
    },
    { 
        track: "Digital Marketing Specialist", 
        scope: "Calculates global search analytics matrices, manages conversion frameworks, builds product reach funnels, and increases organic web search traffic." 
    }
];

// ==========================================
// 2. RENDERING ARCHITECTURE AUTOMATION ENGINE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    executePagePopulation();
});

function executePagePopulation() {
    // 1. Populate Outside Header Text Elements
    const mainHeaderHook = document.getElementById("hookMainHeader");
    if (mainHeaderHook) {
        mainHeaderHook.innerHTML = `
            <h1 class="main-title">${pageTextConfig.mainHeading}</h1>
            <p class="main-subtitle">${pageTextConfig.mainSubheading}</p>
        `;
    }

    // 2. Populate Document Card Meta Section
    const metaHeaderHook = document.getElementById("hookMetaHeader");
    if (metaHeaderHook) {
        metaHeaderHook.innerHTML = `
            <h3><i class="fas fa-file-contract" style="color: var(--accent-blue);"></i> ${documentMetaData.title}</h3>
            <span class="doc-tag">${documentMetaData.documentId}</span>
        `;
    }

    // 3. Populate Program Metrics Badges
    const metricsHook = document.getElementById("hookMetricsGrid");
    if (metricsHook) {
        metricsHook.innerHTML = programCoreMetrics.map(metric => `
            <div class="metric-card">
                <i class="${metric.iconClass}"></i>
                <div class="metric-info">
                    <h5>${metric.title}</h5>
                    <p>${metric.value}</p>
                </div>
            </div>
        `).join('');
    }

    // 4. Populate 6-Step Pipeline Nodes
    const stepsHook = document.getElementById("hookStepsContainer");
    if (stepsHook) {
        stepsHook.innerHTML = processPipelineSteps.map(step => `
            <div class="step-node">
                <h4>${step.phase}</h4>
                <p>${step.details}</p>
            </div>
        `).join('');
    }

    // 5. Populate Data Table Rows
    const tableBodyHook = document.getElementById("hookTableBody");
    if (tableBodyHook) {
        tableBodyHook.innerHTML = engineeringTrackMatrix.map(row => `
            <tr>
                <td style="font-weight: 700; color: var(--primary-dark);">${row.track}</td>
                <td style="color: #475569; font-size: 0.9rem; line-height: 1.6;">${row.scope}</td>
            </tr>
        `).join('');
    }

    // 6. Populate Action Controls
    const controlPanelHook = document.getElementById("hookControlPanel");
    if (controlPanelHook) {
        controlPanelHook.innerHTML = `
            <a href="${pageTextConfig.formRedirectUrl}" class="action-btn-main">
                Proceed to Apply <i class="fas fa-arrow-right"></i>
            </a>
            <button type="button" onclick="triggerPDFDownloadPipeline()" class="action-btn-secondary">
                <i class="fas fa-cloud-download-alt"></i> Export Handbook (PDF)
            </button>
        `;
    }
}

// ==========================================
// 3. HIGH-FIDELITY ASYNC PDF EXPORT INTERFACE
// ==========================================
function triggerPDFDownloadPipeline() {
    const targetElement = document.getElementById("pdfPrintArea");
    if (!targetElement) return;

    const configurationOptions = {
        margin:       [0.4, 0.4, 0.4, 0.4],
        filename:     'Windguard_IT_Induction_Manual.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const actionButton = document.querySelector('.action-btn-secondary');
    const originalContent = actionButton.innerHTML;
    
    actionButton.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Rendering PDF Engine...`;
    actionButton.disabled = true;

    html2pdf().set(configurationOptions).from(targetElement).save().then(() => {
        actionButton.innerHTML = originalContent;
        actionButton.disabled = false;
    }).catch(error => {
        console.error("PDF generation layout failure:", error);
        actionButton.innerHTML = originalContent;
        actionButton.disabled = false;
    });
}