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

import gsap, { ScrollTrigger } from 'gsap/src/all'
import { useEffect, useRef } from 'react'

const Collections = () => {
	// gsap.registerPlugin(ScrollTrigger)
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

	const collection = useRef(null)
	// useEffect(() => {
	// 	gsap.from(collection.current, {
	// 		scrollTrigger: {
	// 			trigger: collection.current,
	// 			markers: true,
	// 			// scroller: '#main-container',
	// 			// scrub: true,
	// 			start: 'top bottom',
	// 		},
	// 		opacity: 0,
	// 		ease: 'none',
	// 	})
	// }, [])

	return (
		<section ref={collection}>
			<div className='container'>
				<section className={cls.collections}>
					<header>
						<h3>DefiGen.</h3>
						<h2>Top Collections</h2>
						<span></span>
					</header>
					<div className={cls.collections__main}>
						{_arr.map((item, index) => (
							<div key={index} className={cls.collections__main__item}>
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

			<footer className={cls.collections__footer}>
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
