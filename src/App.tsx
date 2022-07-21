import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import useLocoScroll from './hooks/useLocoScroll'

function App() {
	const scrollRef = useRef<any>()
	useLocoScroll(scrollRef)

	return (
		<main id='main-container' ref={scrollRef}>
			<section>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>

				<h1 data-scroll data-scroll-speed='3' data-scroll-position='top'>
					Locomotive Scroll in React
				</h1>
				<h2
					data-scroll
					data-scroll-speed='2'
					// data-scroll-position='top'
					data-scroll-direction='horizontal'>
					Ima go sideways
				</h2>

				<h1 data-scroll data-scroll-speed='3' data-scroll-position='top'>
					Locomotive Scroll in React
				</h1>
				<h2
					data-scroll
					data-scroll-speed='2'
					data-scroll-position='top'
					data-scroll-direction='horizontal'>
					Ima go sideways
				</h2>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
			</section>
		</main>
	)
}

export default App
