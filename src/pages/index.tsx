import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, MouseEvent } from 'react'
import Draggable from 'react-draggable'
import ColorPicker from '@/components/ColorPicker'
import SideBar from '@/components/SideBar'
import CanvasElement from '@/components/CanvasElement'

const inter = Inter({ subsets: ['latin'] })

const CURSOR_TYPE: string[] = [
	"cursor-default",
	"cursor-pointer",
	"cursor-text",
	"cursor-pointer",
	"cursor-pointer",
]

export default function Home() {
	const [tool, setTool] = useState<number>(0)
	const [activeDrags, setActiveDrags] = useState<number>(0)
	const [colorWindow, toggleColor] = useState<boolean>(false)
	const [uploadWindow, toggleUpload] = useState<boolean>(false)
	const [color, setColor] = useState<string>("bg-white text-white")
	const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

	const [markupElements, updateElements] = useState<{ shape: boolean, class: string }[]>([])

	const [placeObject, togglePlaceObject] = useState<boolean>(false)

	const updatePosition = (e: MouseEvent) => {
		setPosition({
			x: e.clientX,
			y: e.clientY
		})

		if ((activeDrags < 1) && (tool > 0) && !colorWindow) {
			updateElements([
				...markupElements,
				{
					shape: true,
					class: `${color} h-6 w-6`,
				}
			])

			togglePlaceObject(true)
			setTimeout(() => {
				togglePlaceObject(false)
			}, 1000)
		}
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
			className={`min-h-screen relative px-24 py-12 z-0 ${inter.className} ${CURSOR_TYPE[tool]}`}
			onClick={updatePosition}
		>
			<SideBar toggleColorWindow={toggleColor} setTool={setTool} colorWindow={colorWindow} />

			{
				colorWindow && <ColorPicker toggleWindow={toggleColor} setColor={setColor} />
			}

			{
				uploadWindow && <ColorPicker toggleWindow={toggleColor} setColor={setColor} />
			}


			<div className="flex justify-center">
				State: {tool}
			</div>
			<div className="flex justify-center">
				Color Picker: {colorWindow ? 'true' : 'false'}
			</div>
			<div className="flex justify-center">
				Dragged Object: {activeDrags}
			</div>
			<div className="flex justify-center">
				Target Position: {JSON.stringify(position)}
			</div>
			<div className="flex justify-center">
				Place object should active? {placeObject ? 'yes' : 'no'}
			</div>
			<div className="absolute top-0 left-0 min-h-screen w-screen">
				{
					markupElements.map((element, index) => (
						<Draggable key={index} onStart={onStart} onStop={onStop} defaultPosition={position}>
							<div className="fixed">
								<CanvasElement data={element} />
							</div>
						</Draggable>
					))
				}
			</div>
		</main >
	)
}
