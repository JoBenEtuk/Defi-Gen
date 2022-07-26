import React from 'react'
import cls from './Categories.module.scss'
import img from '../../assets/categories.png'

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
	return (
		<div className='container'>
			<section className={cls.categories}>
				<header>
					<span></span>
					<h2>Categories</h2>
					<h3>DefiGen.</h3>
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
