function QuickCaptcha() {
    const txtcaptcha = document.querySelector("#txtcaptcha");
    if (txtcaptcha) txtcaptcha.value = txtcaptcha.getAttribute("data-captcha")?.toUpperCase() || "";
}
requestAnimationFrame(QuickCaptcha);
new MutationObserver(() => requestAnimationFrame(QuickCaptcha)).observe(document.body, { subtree: true, attributes: true });