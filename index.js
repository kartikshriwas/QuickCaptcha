function QuickCaptcha() {
    const txtcaptcha = document.querySelector("#txtcaptcha");
    if (txtcaptcha) txtcaptcha.value = txtcaptcha.getAttribute("data-captcha")?.toUpperCase() || "";
}
QuickCaptcha()
new MutationObserver(() => QuickCaptcha()).observe(document.body, { subtree: true, attributes: true });