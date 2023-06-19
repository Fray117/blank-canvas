import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'

export default function ImageUploader({ toggleWindow, setColor }: { toggleWindow: Dispatch<SetStateAction<boolean>>, setColor: Dispatch<SetStateAction<string>> }) {
	const updateColor = (color: string) => {
		setColor(color)
		toggleWindow(false)
	}
	return (
		<div className="absolute z-10 top-0 left-0 min-h-screen w-screen flex justify-center items-center">
			<div className="w-full h-full absolute z-0" onClick={() => toggleWindow(false)}></div>
			<div className="fixed bg-white rounded-lg text-gray-800 shadow-white/50 shadow-lg px-6 py-4">
				<div className="flex justify-between mb-6">
					<h1 className="font-bold">Upload Image</h1>
					<div className="flex justify-center items-center" onClick={() => toggleWindow(false)}>
						<XMarkIcon className="h-4 w-4 text-gray-800 hover:text-gray-400 cursor-pointer" />
					</div>
				</div>
				<div className="w-64 h-64 rounded-lg border-dashed border-2 border-gray-800 flex flex-col justify-center items-center text-gray-800">
					<PhotoIcon className="h-12 w-12" />
					<span>Drop image here</span>
				</div>
			</div>
		</div>
	)
}