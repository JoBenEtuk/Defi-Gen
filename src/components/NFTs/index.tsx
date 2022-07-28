import React, { useEffect, useRef } from 'react'
import cls from './NFTs.module.scss'
import Splitting from 'splitting'

import img1 from '../../assets/unsplash1.png'
import img2 from '../../assets/unsplash2.png'
import img3 from '../../assets/unsplash3.png'
import img4 from '../../assets/unsplash4.png'
import img5 from '../../assets/unsplash5.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const NFTs = () => {
	const _list = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit blandit velit eget augue id posuere elit. Vitae faucibus lorem pharetra amet egestas ipsum.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit blandit velit eget augue id posuere elit. Vitae faucibus lorem pharetra amet egestas ipsum.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit blandit velit eget augue id posuere elit. Vitae faucibus lorem pharetra amet egestas ipsum.',
	]

	useEffect(() => {
		Splitting()
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '[data-animation="nft"]',
						start: 'top bottom',
						scroller: '#main-container',
						toggleActions: 'restart none none reverse',
					},
				})
				.to('[data-animation="nft"] header h2 span', {
					opacity: 1,
					y: 0,
					stagger: 0.05,
				})
				.to(
					'[data-animation="nft"] header h3 span',
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
			<section className={cls.nfts} data-animation='nft'>
				<header>
					<h3 data-splitting='chars'>DefiGen.</h3>
					<h2 data-splitting='chars'>How NFTs works</h2>
					<span></span>
				</header>

				<div className={cls.nfts__main}>
					<div className={cls.nfts__main__list}>
						<ul>
							{_list.map((item, index) => (
								<li key={index}>
									<span>{index + 1}</span>
									<p>{item}</p>
								</li>
							))}
						</ul>
						<a data-splitting='chars'>Read more insights</a>
					</div>

					<div className={cls.nfts__main__imgs}>
						<div data-animation='nft-img'>
							<div>
								<img src={img5} />
							</div>
							<div>
								<img src={img3} />
								<img src={img2} />
							</div>
							<div>
								<img src={img4} />
								<img src={img1} />
							</div>
						</div>
						<div data-animation='nft-img'>
							<div>
								<img src={img5} />
							</div>
							<div>
								<img src={img3} />
								<img src={img2} />
							</div>
							<div>
								<img src={img4} />
								<img src={img1} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NFTs
