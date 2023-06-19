import { useRef } from 'react'
import Draggable from 'react-draggable'

export default function CanvasElement({ data, onStart, onStop, position }: {
	data: {
		shape: boolean,
		class: string
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
				{data.shape ? <div className={data.class} ></div> : <input type="text" className={data.class} autoFocus />}
			</div>
		</Draggable>
	)
}