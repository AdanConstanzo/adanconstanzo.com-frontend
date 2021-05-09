// Check to see if current device is mobile.
const IsMobile = () => {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	}
	return false;
}

// Formats correct url for static files.
const FormatUrlSrc = (url) => {
	return process.env.NODE_ENV !== "development"
		? `https://api.adanconstanzo.com${url}`
		: process.env.REACT_APP_BACKEND_URL + url;
}

export {
	IsMobile,
	FormatUrlSrc
}