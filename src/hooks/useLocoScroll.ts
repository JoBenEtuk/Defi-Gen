import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'

gsap.registerPlugin(ScrollTrigger)

export default function useLocoScroll(start: any) {
	useEffect(() => {
		if (!start) return
		let locoScroll: any = null

		const scrollEl = document.querySelector('#main-container')

		locoScroll = new LocomotiveScroll({
			el: start.current,
			smooth: true,
			multiplier: 0.75,
		})

		locoScroll.on('scroll', () => {
			ScrollTrigger.update()
		})

		ScrollTrigger.scrollerProxy(scrollEl, {
			scrollTop(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.y
				}
				return null
			},
			scrollLeft(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.x
				}
				return null
			},
		})

		const lsUpdate = () => {
			if (locoScroll) {
				locoScroll.update()
			}
		}

		ScrollTrigger.addEventListener('refresh', lsUpdate)
		ScrollTrigger.refresh()

		return () => {
			if (locoScroll) {
				ScrollTrigger.removeEventListener('refresh', lsUpdate)
				locoScroll.destroy()
				locoScroll = null
				console.log('Kill', locoScroll)
			}
		}
	}, [start])
}

// export const locoScroll = new LocomotiveScroll({
// 	el: document.querySelector('#main-container'),
// 	smooth: true,

// 	tablet: { smooth: true },

// 	smartphone: { smooth: true },
// })
// locoScroll.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy('#main-container', {
// 	scrollTop(value) {
// 		return arguments.length
// 			? locoScroll.scrollTo(value, 0, 0)
// 			: locoScroll.scroll.instance.scroll.y
// 	},
// 	getBoundingClientRect() {
// 		return {
// 			top: 0,
// 			left: 0,
// 			width: window.innerWidth,
// 			height: window.innerHeight,
// 		}
// 	},
// })

// ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

// ScrollTrigger.refresh()
