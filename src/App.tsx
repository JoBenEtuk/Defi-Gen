import { useRef } from 'react'
import Header from './Layout/Header'
import Cursor from './Layout/Cursor'
import Preloader from './Layout/Preloader'
import useLocoScroll from './hooks/useLocoScroll'
import Hero from './components/Hero'
import Trending from './components/Trending'

import 'splitting/dist/splitting.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NFTs from './components/NFTs'
import Categories from './components/Categories'
import Collections from './components/Collections'
import Footer from './Layout/Footer'

function App() {
	const scrollRef = useRef<any>()
	useLocoScroll()

	return (
		<>
			<Cursor />
			<Preloader />
			<main id='main-container' ref={scrollRef}>
				<Header />
				<Hero />
				<hr />
				<Trending />
				<hr />
				<NFTs />
				<hr />
				<Categories />
				<hr />
				<Collections />
				<Footer />
			</main>
		</>
	)
}

export default App
