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

	const [width, setWidth] = useState<number>(100)
	const [height, setHeight] = useState<number>(100)

	const resizableHandler = (e: any, { node, size, handle }: any) => {
		setWidth(size.width)
		setHeight(size.height)
	}

	return (
		<Draggable onStart={onStart} onStop={onStop} defaultPosition={position} nodeRef={elementRef} cancel=".react-resizable-handle">
			{
				data.shape ?
					<Resizable onResize={resizableHandler} height={height} width={width} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
						<div className="fixed" ref={elementRef} style={{ width: width + 'px', height: height + 'px' }}>
							{data.source === '' ? <div className={data.class} ></div> : <Image draggable="false" src={data.source} width={width} height={height} alt={''} />}
						</div>
					</Resizable> :
					<div className="fixed" ref={elementRef}>
						<textarea autoFocus={true} className={data.class}></textarea>
					</div>
			}
		</Draggable>
	)
}