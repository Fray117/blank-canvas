import { CubeIcon, CursorArrowRaysIcon, PencilIcon, PhotoIcon, SwatchIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction, useState } from 'react'

export default function SideBar(
	{
		colorWindow,
		toggleColorWindow,
		uploadWindow,
		toggleUploadWindow,
		setTool,
		setShape
	}: {
		colorWindow: boolean,
		toggleColorWindow: Dispatch<SetStateAction<boolean>>,
		uploadWindow: boolean,
		toggleUploadWindow: Dispatch<SetStateAction<boolean>>,
		setTool: Dispatch<SetStateAction<number>>,
		setShape: Dispatch<SetStateAction<number>>,
	}) {

	const [shapeWindow, toggleShape] = useState<boolean>(false)

	const shapeHandler = () => {
		toggleShape(!shapeWindow)
		setTool(3)
	}

	return (
		<div className="fixed bg-white rounded-lg text-gray-800 px-2 py-4 space-y-4 backdrop-blur-sm z-50">
			<div onClick={() => setTool(0)} className="hover:text-gray-400 cursor-pointer">
				<CursorArrowRaysIcon className="h-6 w-6" />
			</div>
			<div onClick={() => setTool(1)} className="hover:text-gray-400 cursor-pointer">
				<PencilIcon className="h-6 w-6" />
			</div>
			<div onClick={() => setTool(2)} className="hover:text-gray-400 flex justify-center items-center h-6 w-6 font-bold cursor-pointer">
				T
			</div>
			<div onClick={shapeHandler} className="hover:text-gray-400 cursor-pointer relative">
				<CubeIcon className="h-6 w-6" />
				{
					shapeWindow &&
					<>
						<div className="absolute min-h-screen w-screen top-0 left-0" onClick={() => toggleShape(!shapeWindow)}></div>
						<div className="left-12 shadow-lg flex space-x-2 fixed bg-white p-2 rounded-lg">
							<div onClick={() => setShape(0)} className="outline outline-2 outline-gray-800 hover:outline-gray-400 h-4 w-4"></div>
							<div onClick={() => setShape(1)} className="outline outline-2 outline-gray-800 hover:outline-gray-400 h-4 w-4 rounded-full"></div>

						</div>
					</>
				}
			</div>
			<div onClick={() => toggleUploadWindow(!uploadWindow)} className="hover:text-gray-400 cursor-pointer">
				<PhotoIcon className="h-6 w-6" />
			</div>
			<div onClick={() => toggleColorWindow(!colorWindow)} className="hover:text-gray-400">
				<SwatchIcon className="h-6 w-6" />
			</div>
		</div>
	)
}