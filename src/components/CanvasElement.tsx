import { Dispatch, SetStateAction } from 'react'

export default function CanvasElement({ data }: { data: { shape: boolean, class: string } }) {
	return (
		<>
			{data.shape ? <div className={data.class} ></div> : <input type="text" className={data.class} autoFocus />}
		</>
	)
}