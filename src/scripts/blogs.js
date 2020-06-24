// checks if browser is mobile.
const init = () => {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		let figcaption = document.querySelectorAll('figcaption');
		console.log(figcaption);
		
	} else {
		document.body.classList.add('non-mobile');
	}
}

export default init;