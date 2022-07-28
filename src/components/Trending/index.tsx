import React, { useEffect } from 'react'
import Splitting from 'splitting'
import cls from './Trending.module.scss'
import Slider from 'react-slick'

import img1 from '../../assets/carousel1.png'
import img2 from '../../assets/carousel2.png'
import img3 from '../../assets/carousel3.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Trending: React.FC = () => {
	gsap.registerPlugin(ScrollTrigger)
	useEffect(() => {
		Splitting()
	}, [])

	const settings = {
		arrows: false,
		dots: true,
		centerMode: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3.25,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}

	const _carousel: { title: string; price: string; artist: string; img: any }[] = [
		{
			title: 'The Black Pit',
			price: '2.5 ETH',
			artist: 'Liam Koll',
			img: img1,
		},
		{
			title: 'Helms Deep',
			price: '5 ETH',
			artist: 'Liam Koll',
			img: img2,
		},
		{
			title: 'Hopeful Thinking',
			price: '3.5 ETH',
			artist: 'Ronn Vinn',
			img: img3,
		},
		{
			title: 'Helms Deep',
			price: '5 ETH',
			artist: 'Liam Koll',
			img: img1,
		},
		{
			title: 'Hopeful Thinking',
			price: '3.5 ETH',
			artist: 'Ronn Vinn',
			img: img2,
		},
		{
			title: 'Helms Deep',
			price: '5 ETH',
			artist: 'Liam Koll',
			img: img3,
		},
	]

	useEffect(() => {
		setTimeout(() => {
			gsap.to('[data-animation="trending"] header h2 span', {
				opacity: 1,
				y: 0,
				stagger: 0.05,
				scrollTrigger: {
					trigger: '[data-animation="trending"]',
					start: 'top bottom',
					scroller: '#main-container',
					toggleActions: 'restart none none reverse',
					// markers: true,
				},
			})
		})
		ScrollTrigger.refresh()
	}, [])

	return (
		<div className='container'>
			<section className={cls.trending} data-animation='trending'>
				<header>
					<span></span>
					<h2 data-splitting='chars'>Trending this week</h2>
					<h3>DefiGen.</h3>
				</header>
				<div className={cls.trending__header}>
					<span className={cls.active}>Top Arts</span>
					<span>Top Artists</span>
				</div>

				<div className={cls.trending__carousel}>
					<Slider {...settings}>
						{_carousel.map((carousel, index) => (
							<article key={index} className={cls.trending__carousel__item}>
								<div>
									<img width='370' height='485' src={carousel.img} alt={carousel.title} />
									<div>
										<h2>{carousel.title}</h2>
										<h3>{carousel.price}</h3>
									</div>
								</div>
								<footer>
									{carousel.title} - {carousel.artist}
								</footer>
							</article>
						))}
					</Slider>
				</div>
			</section>
		</div>
	)
}

export default Trending
