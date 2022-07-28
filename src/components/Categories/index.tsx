import cls from './Categories.module.scss'
import img from '../../assets/categories.png'
import { useEffect } from 'react'
import gsap from 'gsap'
import Splitting from 'splitting'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Categories = () => {
	const list = [
		'Photography',
		'Collectibles',
		'Domain Names',
		'Music',
		'Sports',
		'Utility',
		'Art',
	]

	useEffect(() => {
		Splitting()
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '[data-animation="categories"]',
						start: 'top bottom',
						scroller: '#main-container',
						toggleActions: 'restart none none reverse',
					},
				})
				.to('[data-animation="categories"] header h2 span', {
					opacity: 1,
					y: 0,
					stagger: 0.05,
				})
				.to(
					'[data-animation="categories"] header h3 span',
					{
						opacity: 1,
						x: 0,
						stagger: 0.15,
					},
					0
				)
		})
		ScrollTrigger.refresh()
	}, [])

	return (
		<div className='container'>
			<section className={cls.categories} data-animation='categories'>
				<header>
					<span></span>
					<h2 data-splitting='chars'>Categories</h2>
					<h3 data-splitting='chars'>DefiGen.</h3>
				</header>
				<div className={cls.categories__main}>
					<div className={cls.categories__main__left}>
						<div>
							<img src={img} height='733' width='460' alt='' />
						</div>
						<p>Photography</p>
					</div>

					<div className={cls.categories__main__right}>
						<ul>
							{list.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Categories
