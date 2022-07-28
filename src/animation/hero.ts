import gsap from 'gsap'

export const hero = () => {
	gsap
		.timeline()
		.to('[data-animation="hero"] div:nth-child(1)', {
			opacity: 1,
			duration: 0.5,
		})
		.to(
			'[data-animation="hero"] aside',
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
			},
			0
		)
		.to('[data-animation="hero"] div:nth-child(2) h1 span', {
			opacity: 1,
			x: 0,
			stagger: 0.07,
		})
		.to('[data-animation="hero"] div:nth-child(2) p span', {
			opacity: 1,
			y: 0,
			stagger: 0.01,
		})
		.to(
			'[data-animation="hero"] div:nth-child(2) ul li',
			{
				opacity: 1,
				x: 0,
				stagger: 0.08,
			},
			0.5
		)
		.to('[data-animation="hero"] div:nth-child(2) > div > div:nth-child(2)', {
			opacity: 1,
			y: 0,
		})
}
