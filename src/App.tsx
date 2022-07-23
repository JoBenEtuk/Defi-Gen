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

function App() {
	const scrollRef = useRef<any>()
	useLocoScroll(scrollRef)

	return (
		<main id='main-container' ref={scrollRef}>
			{/* <Preloader /> */}
			<Header />
			<Cursor />
			<Hero />
			<hr />
			<Trending />
			<hr />
		</main>
	)
}

export default App
