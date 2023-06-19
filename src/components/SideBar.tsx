import { CubeIcon, CursorArrowRaysIcon, PencilIcon, PhotoIcon, SwatchIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'

export default function SideBar({ colorWindow, toggleColorWindow, setTool }: { colorWindow: boolean, toggleColorWindow: Dispatch<SetStateAction<boolean>>, setTool: Dispatch<SetStateAction<number>> }) {
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
			<div onClick={() => setTool(3)} className="hover:text-gray-400 cursor-pointer">
				<CubeIcon className="h-6 w-6" />
			</div>
			<div onClick={() => setTool(4)} className="hover:text-gray-400 cursor-pointer">
				<PhotoIcon className="h-6 w-6" />
			</div>
			<div onClick={() => toggleColorWindow(!colorWindow)} className="hover:text-gray-400">
				<SwatchIcon className="h-6 w-6" />
			</div>
		</div>
	)
}