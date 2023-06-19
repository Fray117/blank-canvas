import { useRef } from 'react'
import Draggable from 'react-draggable'
import Image from 'next/image'

export default function CanvasElement({ data, onStart, onStop, position }: {
	data: {
		shape: boolean,
		class: string,
		source: string,
	},
	onStart: () => void,
	onStop: () => void,
	position: {
		x: number
		y: number
	}
}) {

	const elementRef = useRef(null)

	return (
		<Draggable onStart={onStart} onStop={onStop} defaultPosition={position} nodeRef={elementRef}>
			<div className="fixed" ref={elementRef}>
				{data.source === '' ? data.shape ? <div className={data.class} ></div> : <input type="text" className={data.class} autoFocus /> : <Image draggable="false" src={data.source} width={300} height={300} alt={''} />}
			</div>
		</Draggable>
	)
}