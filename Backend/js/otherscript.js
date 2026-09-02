(function () {
    emailjs.init("cjp8whkFsfFhyxzeg");
})();
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
async function submitContactForm(event) {
    event.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("service", document.getElementById("service").value);
    formData.append("message", document.getElementById("message").value);
    try {
        await fetch("https://script.google.com/macros/s/AKfycbwOnaVA6D21sSrm1i4xRlHhVQvvJ1QcAevwuf2UwKDAfnFzhpFhxqCnd8leOuk78azz/exec", {
            method: "POST",
            body: formData
        });
        await emailjs.send("service_5vvb0o8", "template_d13onqp", {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            service: formData.get("service"),
            message: formData.get("message")
        });
        window.location.href = "../feedback/thank-you.html";
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
    submitBtn.innerHTML = "Send Message";
    submitBtn.disabled = false;
    return false;
}