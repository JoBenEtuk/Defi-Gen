import gsap from 'gsap'
import { header } from './header'

export const preloader = () => {
	gsap
		.timeline()
		.to('[data-animation="preloader"] div', {
			top: '50vh',
			repeat: 8,
			yoyo: true,
			ease: 'none',
			height: '0.5rem',
		})
		.to('[data-animation="preloader"] div', {
			width: '100vw',
			height: '1.5px',
			borderRadius: '0',
			left: 0,
		})
		.to(
			'[data-animation="preloader"] div',
			{
				height: '0',
			},
			'close'
		)
		.to(
			'[data-animation="preloader"] section:nth-child(1)',
			{
				top: '-50vh',
				ease: 'power3.Out',
			},
			'close'
		)
		.to(
			'[data-animation="preloader"] section:nth-child(2)',
			{
				bottom: '-50vh',
				ease: 'power3.Out',
			},
			'close'
		)
		.to('[data-animation="preloader"]', {
			display: 'none',
		})
		.call(() => header())
}
