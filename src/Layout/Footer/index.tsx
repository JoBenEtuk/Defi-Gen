import React from 'react'
import cls from './Footer.module.scss'
import img1 from '../../assets/Discord New@3x.png'
import img2 from '../../assets/Facebook@3x.png'
import img3 from '../../assets/YouTube@3x.png'
import img4 from '../../assets/Instagram@3x.png'
import img5 from '../../assets/Reddit@3x.png'
import img6 from '../../assets/Twitter@3x.png'

const Footer: React.FC = () => {
	const marketPlace = [
		'Explore',
		'Roadmap',
		'Blog',
		'How it works',
		'Hiring',
		'Virtual World',
	]
	const resources = [
		'Help Center',
		'Platform Staus',
		'Partners',
		'Gas-free Marketplace',
		'Taxes',
		'Documentation',
		'Newsletter',
	]
	const links = ['Bug Bounty', 'DefiGen API', 'DefiGen Token', 'Become a partner']
	const socials = [img1, img2, img3, img4, img5, img6]
	return (
		<div className='container'>
			<section className={cls.footer}>
				<div className={cls.footer__left}>
					<div className={cls.footer__left__top}>
						<dl>
							<dt>Marketplace</dt>
							{marketPlace.map((item) => (
								<dd key={item}>{item}</dd>
							))}
						</dl>
						<dl>
							<dt>Resources</dt>
							{resources.map((item) => (
								<dd key={item}>{item}</dd>
							))}
						</dl>
						<dl>
							<dt>Links</dt>
							{links.map((item) => (
								<dd key={item}>{item}</dd>
							))}
						</dl>
					</div>
					<div className={cls.footer__left__bottom}>
						<span></span>
						<div>
							<h3>DefiGen</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper massa
								arcu suscipit consequat. Orci sit tortor ornare nisi hendrerit tristique
								sed. Dis in neque orci tellus, tristique ante tincidunt felis, tortor.
							</p>
						</div>
					</div>
				</div>
				<div className={cls.footer__division}></div>
				<div className={cls.footer__right}>
					<h3>Get Latest updates</h3>
					<p>One step to being an NFT degen</p>
					<div className={cls.footer__right__input}>
						<input type='text' placeholder='example@email.com' />
						<button>Subscribe</button>
					</div>
					<h3>Join DefiGen community</h3>
					<div className={cls.footer__right__socials}>
						{socials.map((item) => (
							<a key={item}>
								<img src={item} width='40' height='40' alt='' />
							</a>
						))}
					</div>
					<ul>
						<li>© DefiGen, Inc. All rights reserved.</li>
						<li>Community Guidelines</li>
						<li>Privacy Policy</li>
						<li>Terms</li>
					</ul>
				</div>
			</section>
		</div>
	)
}

export default Footer
