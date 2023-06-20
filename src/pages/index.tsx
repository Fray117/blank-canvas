import { Inter } from 'next/font/google'
import { useState, MouseEvent } from 'react'

import ColorPicker from '@/components/ColorPicker'
import SideBar from '@/components/SideBar'
import CanvasElement from '@/components/CanvasElement'
import ImageUploader from '@/components/ImageUploader'

const inter = Inter({ subsets: ['latin'] })

const CURSOR_TYPE: string[] = [
	"cursor-default",
	"cursor-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0idy01IGgtNSI+IDxwYXRoIGQ9Ik0yLjY5NSAxNC43NjNsLTEuMjYyIDMuMTU0YS41LjUgMCAwMC42NS42NWwzLjE1NS0xLjI2MmE0IDQgMCAwMDEuMzQzLS44ODVMMTcuNSA1LjVhMi4xMjEgMi4xMjEgMCAwMC0zLTNMMy41OCAxMy40MmE0IDQgMCAwMC0uODg1IDEuMzQzeiIgLz4gPC9zdmc+'),_crosshair]",
	"cursor-text",
	"cursor-crosshair",
]

const DEBUG_STATS: boolean = true

export default function Home() {
	const [tool, setTool] = useState<number>(0)
	const [activeDrags, setActiveDrags] = useState<number>(0)
	const [colorWindow, toggleColor] = useState<boolean>(false)
	const [uploadWindow, toggleUpload] = useState<boolean>(false)
	const [shape, setShape] = useState<number>(0)
	const [color, setColor] = useState<string>("bg-white text-white")
	const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

	const [markupElements, updateElements] = useState<{ shape: boolean, class: string, source: string }[]>([])

	const [placeObject, togglePlaceObject] = useState<boolean>(false)

	const [mouseHold, toggleMousehold] = useState<boolean>(false)

	const updatePosition = (e: MouseEvent) => {
		setPosition({
			x: e.clientX,
			y: e.clientY
		})

		if (tool === 1 && !colorWindow && (activeDrags < 1) && mouseHold) {
			updateElements([
				...markupElements,
				{
					shape: false,
					class: `${color} w-6 h-6`,
					source: ''
				}
			])
		}
	}

	const makeElement = (e: MouseEvent) => {
		if (e.currentTarget !== e.target) return

		toggleMousehold(true)

		if ((activeDrags < 1) && (tool > 0) && !colorWindow) {
			switch (tool) {
				case 2:
					updateElements([
						...markupElements,
						{
							shape: false,
							class: `${color} bg-transparent`,
							source: ''
						}
					])
					break
				case 3:
				default:
					updateElements([
						...markupElements,
						{
							shape: true,
							class: `${color} ${shape === 1 ? 'rounded-full' : ''} h-full w-full`,
							source: ''
						}
					])
					break
			}

			togglePlaceObject(true)
			setTimeout(() => {
				togglePlaceObject(false)
			}, 1000)
		}
	}

	const releaseMouse = () => {
		toggleMousehold(false)
	}

	const onStart = () => {
		setActiveDrags(activeDrags + 1)
	}

	const onStop = () => {
		setTimeout(() => {
			setActiveDrags(activeDrags - 1)
		}, 100)
	}

	return (
		<main
			className={`min-h-screen relative px-24 py-12 ${inter.className} ${CURSOR_TYPE[tool]}`}
		>
			<SideBar
				toggleColorWindow={toggleColor}
				toggleUploadWindow={toggleUpload}
				setTool={setTool}
				colorWindow={colorWindow}
				uploadWindow={uploadWindow}
				setShape={setShape} />

			{
				colorWindow && <ColorPicker toggleWindow={toggleColor} setColor={setColor} />
			}

			{
				uploadWindow && <ImageUploader
					toggleWindow={toggleUpload}
					updateElements={updateElements}
					markupElements={markupElements}
					setPosition={setPosition} />
			}

			{
				DEBUG_STATS &&
				<div className="fixed right-10">
					<div>State: {tool}</div>
					<div>Color Picker: {colorWindow ? 'true' : 'false'}</div>
					<div>Image Uploader: {uploadWindow ? 'true' : 'false'}</div>
					<div>Constrained Object: {activeDrags}</div>
					<div>Place object should active? {placeObject ? 'yes' : 'no'}</div>
					<div>{JSON.stringify(position)}</div>
					<div>{markupElements.length} vertices</div>
				</div>
			}

			<div className="absolute top-0 left-0 min-h-screen w-screen" onMouseDown={makeElement} onMouseMove={updatePosition} onMouseUp={releaseMouse}>
				{
					markupElements.map((element, index) => (
						<CanvasElement key={index} data={element} onStart={onStart} onStop={onStop} position={position} />
					))
				}
			</div>
		</main >
	)
}
