const IsInViewportBottom = (domElement) => {
	const bounding = domElement.getBoundingClientRect();
	// Only using bottom (my dom elements are too big.)
	// uncomment to have full viewport.
	return (
		// bounding.top >= 0 &&
		// bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		// bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

export const IsInViewport = (domElement) => {
	const bounding = domElement.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Uses scrollIntoView to scroll element into view.
// Takes in the element as a param. 
// Returns a function for closure purposes (to add as event listener).
export const smoothScroll = (element) =>
	() =>
		element.scrollIntoView({ behavior: 'smooth', block: 'center' });


/**
 * Checks to see if div is within viewing distance
 * and initials animations.
 * @listens scroll:checkProjectScroll
 * @param {DOM} parentDiv Reference to parent div to check if within viewport.
 * @param {string} elementClassName Class name for element searching / appending.
 * @return {function} Returning a function for closure purposes.
 */
/**
 * Required HTML structure
 * <section id="[parentDiv]">
 * 	<h2 class="[elementClassName]" data-animation={}</h2>
 * 	<div class="[elementClassName]">
 * 		<div class="[elementClassName]-div">
*/
export const checkProjectScroll = (selfObj) =>
	// returning function for closure.
	() => {
		// get reference to parentDiv
		const parentDiv = document.getElementById(selfObj.sectionId);
		// checks if div is within viewport.
		if (IsInViewportBottom(parentDiv)) {
			// grab all instances of class
			const elements = document.querySelectorAll('.' + selfObj.blocksClass);
			// looping through all elements.
			for (let i = 0; i < elements.length; i++) {
				const element = elements[i];
				let animation;
				// if element has an animation play it, 
				// else probably blocks of projects/blogs
				if (element.getAttribute('data-animation')) {
					// standard animation bit.
					animation = JSON.parse(element.getAttribute('data-animation'));
					if (animation.delayInit === false) {
						setTimeout(function () {
							element.classList.remove(selfObj.blocksClass);
							element.classList.add(animation.animation);
						}, animation.delayTime);
					}
					animation.delayInit = true;
					element.setAttribute('data-animation', JSON.stringify(animation));
				} else {
					// looping through all project/blog items
					for (let j = 0; j < element.children.length; j++) {
						// binding j
						const animation = JSON.parse(element.children[j].getAttribute('data-animation'));
						if (animation.delayInit === false) {
							setTimeout((num, animationVal) => {
								// removing opacity.
								element.children[num].classList.remove(selfObj.blocksClass + '-div');
								// if (animation.terminalTextInit) {
								// 	selfObj.cb();
								// }
								// adding animation.
								element.children[num].classList.add(animationVal.animation);
							}, 500 + animation.delayBetween * j, j, animation); // increments time delay by 500ms
						}
						animation.delayInit = true;
						element.children[j].setAttribute('data-animation', JSON.stringify(animation));
					}
					element.classList.remove(selfObj.blocksClass);
				}
				// once loops reaches max, remove listener.
				if (i === elements.length - 1) {
					window.removeEventListener('scroll', selfObj.func);
				}
			}
		}
	}


