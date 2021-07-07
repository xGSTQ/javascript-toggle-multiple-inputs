const eyeIcon = document.querySelectorAll(".input-image");

for (let i = 0; i < eyeIcon.length; i++) {
	eyeIcon[i].addEventListener("click", function () {
		const imageSrc = eyeIcon[i].src;
		const newImageSrc = imageSrc.replace("eye-open", "eye-closed");
		const resetImageSrc = imageSrc.replace("eye-closed", "eye-open");
		const input = eyeIcon[i].previousElementSibling;

		if (input.type == "password") {
			eyeIcon[i].src = newImageSrc;
			input.type = "text";
		} else {
			eyeIcon[i].src = resetImageSrc;
			input.type = "password";
		}
	});
}