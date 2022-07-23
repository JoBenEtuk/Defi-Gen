import React from 'react'
import cls from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<div className='container'>
			<nav className={cls.nav}>
				<span>DefiGen.</span>
				<ul>
					<li>
						<a>Subscribe</a>
					</li>
					<li>
						<a>Roadmap</a>
					</li>
					<li>
						<a>How it Works</a>
					</li>
				</ul>
				<div>
					<a>Upcoming Projects</a>
					<button>Connect Wallet</button>
				</div>
			</nav>
		</div>
	)
}

export default Header
