import gsap from 'gsap'
import { hero } from './hero'
export const header = () => {
	gsap
		.timeline()
		.to('[data-animation="header"] span', {
			opacity: 1,
			x: 0,
			duration: 0.2,
		})
		.to('[data-animation="header"] ul li', {
			autoAlpha: 1,
			stagger: 0.2,
			x: 0,
		})
		.to('[data-animation="header"] div a', {
			autoAlpha: 1,
			x: 0,
			duration: 0.2,
			ease: 'none',
		})
		.to('[data-animation="header"] div button', {
			autoAlpha: 1,
			x: 0,
			ease: 'none',
		})
		.call(() => hero(), [], 0.5)
}
