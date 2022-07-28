import cls from './Collections.module.scss'
import img1 from '../../assets/Ellipse 1-1.png'
import img2 from '../../assets/Ellipse 1-2.png'
import img3 from '../../assets/Ellipse 1-3.png'
import img4 from '../../assets/Ellipse 1-4.png'
import img5 from '../../assets/Ellipse 1.png'

import img6 from '../../assets/Black and White Collection 0.png'
import img7 from '../../assets/Black and White Collection 1.png'
import img8 from '../../assets/Black and White Collection 12.png'
import img9 from '../../assets/Black and White Collection 14.png'
import img10 from '../../assets/Black and White Collection 3.png'
import img11 from '../../assets/Black and White Collection 9.png'

import { useEffect } from 'react'
import gsap from 'gsap'
import Splitting from 'splitting'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Collections = () => {
	const _arr: {
		img: any
		title: string
		percent: number
		price: number
		floor: string
	}[] = [
		{
			img: img1,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img2,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img3,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img4,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img5,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img1,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img2,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img3,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img4,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img5,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img1,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img2,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img3,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img4,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
		{
			img: img5,
			title: 'smeagol.sol',
			percent: 73.4,
			price: 3472.22,
			floor: '9.0',
		},
	]

	useEffect(() => {
		Splitting()
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '[data-animation="collection"]',
						start: 'top bottom',
						scroller: '#main-container',
						toggleActions: 'restart none none reverse',
					},
				})
				.to('[data-animation="collection"] header h2 span', {
					opacity: 1,
					y: 0,
					stagger: 0.05,
				})
				.to(
					'[data-animation="collection"] header h3 span',
					{
						opacity: 1,
						x: 0,
						stagger: 0.15,
					},
					0
				)

			gsap.to('[data-animation="collection__imgs"] img', {
				scale: 1,
				stagger: 0.2,
				duration: 0.5,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '[data-animation="collection__imgs"]',
					start: 'top bottom',
					scroller: '#main-container',
					toggleActions: 'restart none none reverse',
				},
			})

			gsap.to('[data-animation="collection__item"]', {
				y: 0,
				opacity: 1,
				stagger: 0.1,
				duration: 0.5,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '[data-animation="collection__item"]',
					start: 'top bottom',
					scroller: '#main-container',
				},
			})
		})
		ScrollTrigger.refresh()
	}, [])

	return (
		<section>
			<div className='container'>
				<section className={cls.collections} data-animation='collection'>
					<header>
						<h3 data-splitting='chars'>DefiGen.</h3>
						<h2 data-splitting='chars'>Top Collections</h2>
						<span></span>
					</header>
					<div className={cls.collections__main}>
						{_arr.map((item, index) => (
							<div
								data-animation='collection__item'
								key={index}
								className={cls.collections__main__item}>
								<div className={cls.collections__main__item__left}>
									<img src={item.img} width='50' height='50' alt='' />
									<div>
										<p>{item.title}</p>
										<small>floor price: {item.floor} ETH</small>
									</div>
								</div>
								<div className={cls.collections__main__item__right}>
									<span>{item.percent}%</span>
									<p>{item.price}</p>
								</div>
							</div>
						))}
					</div>
					<div className={cls.collections__btn}>
						<button>View more</button>
					</div>
				</section>
			</div>

			<footer data-animation='collection__imgs' className={cls.collections__footer}>
				<img src={img6} width='130' height='130' alt='' />
				<img src={img7} width='130' height='130' alt='' />
				<img src={img8} width='130' height='130' alt='' />
				<img src={img9} width='130' height='130' alt='' />
				<img src={img10} width='130' height='130' alt='' />
				<img src={img11} width='130' height='130' alt='' />
			</footer>
		</section>
	)
}

export default Collections
