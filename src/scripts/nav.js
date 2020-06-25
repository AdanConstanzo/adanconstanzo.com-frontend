import { IsInViewport, smoothScroll } from './utils';

const init = (id) => {
	const navbar = document.getElementById('nav');
	const navBarBlock = document.getElementById('mobile-nav-block');
	const header = document.getElementById('home');
	const headerHeight = header.clientHeight;
	const aboutMe = document.getElementById('about-me');
	const aboutMeLi = document.getElementById('about-me-li');
	const projects = document.getElementById('projects');
	const projectsLi = document.getElementById('projects-li');
	const blogs = document.getElementById('blogs');
	const blogsLi = document.getElementById('blogs-li');
	const contact = document.getElementById('contact');
	const contactLi = document.getElementById('contact-li');
	const hamburger = document.getElementById('hamburger');
	const checkPoints = [[header, null], [aboutMe, aboutMeLi], [projects, projectsLi], [blogs, blogsLi], [contact, contactLi]];	
	let currentNav = ""

	const deactivateAll = () => checkPoints.forEach(ele => ele[1] ? ele[1].classList.remove('active') : null);

	const changeNavSection = (checkPoints) =>
		() => {
			checkPoints.forEach(ele => {
				if (IsInViewport(ele[0]) && currentNav !== ele[0].id) {
					currentNav = ele[0].id;
					deactivateAll();
					if (ele[1]) {
						ele[1].classList.add('active');
					}
				}
			})
		}

	const AddStickyNav = (nav, headerHeight) =>
		() => {
			if (window.pageYOffset > headerHeight * 0.8 && window.innerWidth > 1024) {
				nav.classList.add('sticky');
			} else {
				nav.classList.remove('sticky');
			}
		}

	const animationEvent = () => {
		navBarBlock.classList.remove('nav-block');
		navBarBlock.classList.remove('nav-block-remove');
		navbar.classList.remove('nav-mobile');
		navbar.classList.remove('nav-mobile-remove');
		document.body.style.overflow = '';
		navBarBlock.removeEventListener('animationend', animationEvent);
	}

	const hideMobileNav = () => {
		if (window.innerWidth < 1024) {
			navbar.classList.add('nav-mobile-remove');
			navBarBlock.classList.add('nav-block-remove');
			navBarBlock.addEventListener('animationend', animationEvent);
		}
	}

	const toggleMobileMenu = () => {
		var isTrueSet = (hamburger.getAttribute('data-open') === 'true');
		if (isTrueSet) {

		} else {
			document.body.style.overflow = "hidden";
			navbar.classList.add('nav-mobile');
			navBarBlock.classList.add('nav-block');
		}
	}
	if (window.setNavEventListeners === undefined && aboutMe && projects && blogs) {
		window.addEventListener('scroll', changeNavSection(checkPoints));
		window.addEventListener('scroll', AddStickyNav(navbar, headerHeight));
		hamburger.addEventListener('click', toggleMobileMenu);
		navBarBlock.addEventListener('click', hideMobileNav);
		window.setNavEventListeners = true;
	}
	// about-me , projects, blogs, contract
	const li = document.getElementById(`${id}-li`);
	li.addEventListener('click', smoothScroll(document.getElementById(id)));
	li.addEventListener('click', hideMobileNav);
}

export default init;