const GOOGLE_APP_SCRIPT_URL = "YOUR_WEB_APP_URL_HERE"; 

document.getElementById("verificationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const btn = document.getElementById("btnVerify");
    const statusWrapper = document.getElementById("statusWrapper");
    const spinner = document.getElementById("loadingSpinner");
    const successAnim = document.getElementById("successAnimation");
    const statusMsg = document.getElementById("statusMessage");
    const profileCard = document.getElementById("profileCard");

    btn.disabled = true;
    btn.innerText = "Querying Database...";
    
    statusWrapper.classList.remove("hidden");
    spinner.classList.remove("hidden");
    successAnim.classList.add("hidden");
    profileCard.classList.add("hidden");
    statusMsg.className = "status-alert-heading";
    statusMsg.innerText = "";

    const payload = {
        empId: document.getElementById("empId").value,
        empName: document.getElementById("empName").value,
        empRole: document.getElementById("empRole").value
    };

    fetch(GOOGLE_APP_SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(result => {
        spinner.classList.add("hidden");
        
        if (result.verified) {
            statusMsg.innerText = "Identity Authenticated Successfully";
            statusMsg.classList.add("text-success");
            successAnim.classList.remove("hidden");
            
            document.getElementById("lblId").innerText = result.data.empId;
            document.getElementById("lblName").innerText = result.data.empName;
            document.getElementById("lblRole").innerText = result.data.empRole;
            document.getElementById("lblDate").innerText = result.data.joiningDate;
            document.getElementById("lblStatus").innerText = result.data.status;
            
            profileCard.classList.remove("hidden");
        } else {
            statusMsg.innerText = "Identity Mismatch: Record Not Verified";
            statusMsg.classList.add("text-danger");
        }
    })
    .catch(err => {
        console.error(err);
        spinner.classList.add("hidden");
        statusMsg.innerText = "Connection Error. Unable to contact servers.";
        statusMsg.classList.add("text-danger");
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerText = "Verify Identity";
    });
});