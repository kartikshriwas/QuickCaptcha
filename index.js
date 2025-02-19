function QuickCaptcha() {
	const hdncaptcha = document.querySelector("#hdncaptcha")?.value;
	const txtcaptcha = document.querySelector("#txtcaptcha");
	if (hdncaptcha && txtcaptcha) {
		txtcaptcha.value = hdncaptcha.toUpperCase();
	}
}
requestAnimationFrame(QuickCaptcha);
const observer = new MutationObserver(() => {
	requestAnimationFrame(QuickCaptcha);
});
observer.observe(document.body, {
    subtree: true,
    attributes: true
});