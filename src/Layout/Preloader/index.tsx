import { preloader } from '../../animation/preloader'
import React, { useEffect } from 'react'
import cls from './Preloader.module.scss'

const Header: React.FC = () => {
	useEffect(() => {
		preloader()
	}, [])

	return (
		<section data-animation='preloader' className={cls.preloader}>
			<section />
			<section />
			<div />
		</section>
	)
}

export default Header
