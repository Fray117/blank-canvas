import { useRef, useState } from 'react'
import Draggable from 'react-draggable'
import Image from 'next/image'
import { Resizable } from 'react-resizable'

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

	const [width, setWidth] = useState<number>(300)
	const [height, setHeight] = useState<number>(300)

	const resizableHandler = (e: any, { node, size, handle }: any) => {
		setWidth(size.width)
		setHeight(size.height)
	}

	return (
		<Draggable onStart={onStart} onStop={onStop} defaultPosition={position} nodeRef={elementRef} cancel=".react-resizable-handle">
			<Resizable onResize={resizableHandler} height={height} width={width} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
				<div className="box fixed" ref={elementRef} style={{ width: width + 'px', height: height + 'px' }}>
					{data.source === '' ? data.shape ? <div className={data.class} ></div> : <input type="text" className={data.class} autoFocus /> : <Image draggable="false" src={data.source} width={300} height={300} alt={''} />}
				</div>
			</Resizable>
		</Draggable>

		// <Resizable>
		// 	<div className="fixed">
		// 		{data.source === '' ? data.shape ? <div className={data.class} ></div> : <input type="text" className={data.class} autoFocus /> : <Image draggable="false" src={data.source} width={300} height={300} alt={''} />}
		// 	</div>
		// </Resizable>
	)
}