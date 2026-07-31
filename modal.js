// Get the modal
	const modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	const modalImg = document.getElementById("img01");
	const captionText = document.getElementById("caption2");

	const images = document.querySelectorAll(".modal-img");

	images.forEach(img => {
		img.addEventListener("click", function () {
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		});
	});

	// Get the <span> element that closes the modal
	// When the user clicks on <span> (x), close the modal
	document.querySelector(".close").onclick = function () {
		modal.style.display = "none";
	}