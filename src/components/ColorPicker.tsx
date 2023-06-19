import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'

export default function ColorPicker({ toggleWindow, setColor }: { toggleWindow: Dispatch<SetStateAction<boolean>>, setColor: Dispatch<SetStateAction<string>> }) {
	const updateColor = (color: string) => {
		setColor(color)
		toggleWindow(false)
	}
	return (
		<div className="absolute z-10 top-0 left-0 min-h-screen w-screen flex justify-center items-center">
			<div className="w-full h-full absolute z-0" onClick={() => toggleWindow(false)}></div>
			<div className="fixed bg-white rounded-lg text-gray-800 shadow-white/50 shadow-lg px-6 py-4">
				<div className="flex justify-between mb-6">
					<h1 className="font-bold">Color Picker</h1>
					<div className="flex justify-center items-center" onClick={() => toggleWindow(false)}>
						<XMarkIcon className="h-4 w-4 text-gray-800 hover:text-gray-400 cursor-pointer" />
					</div>
				</div>
				<div className="grid grid-cols-6 gap-2">
					<div onClick={() => updateColor("bg-white text-white")} className="bg-white outline-black/70 hover:outline-black/30 color-picker"></div>
					<div onClick={() => updateColor("bg-black text-black")} className="bg-black outline-white/70 hover:outline-black/70 color-picker"></div>
					<div onClick={() => updateColor("bg-blue-400 text-blue-400")} className="bg-blue-400 outline-blue-800/70 hover:outline-blue-400/70 color-picker"></div>
					<div onClick={() => updateColor("bg-blue-800 text-blue-800")} className="bg-blue-800 outline-blue-400/70 hover:outline-blue-800/70 color-picker"></div>
					<div onClick={() => updateColor("bg-yellow-400 text-yellow-400")} className="bg-yellow-400 outline-yellow-800/70 hover:outline-yellow-400/70 color-picker"></div>
					<div onClick={() => updateColor("bg-yellow-800 text-yellow-800")} className="bg-yellow-800 outline-yellow-400/70 hover:outline-yellow-800/70 color-picker"></div>
					<div onClick={() => updateColor("bg-red-400 text-red-400")} className="bg-red-400 outline-red-800/70 hover:outline-red-400/70 color-picker"></div>
					<div onClick={() => updateColor("bg-red-800 text-red-800")} className="bg-red-800 outline-red-400/70 hover:outline-red-800/70 color-picker"></div>
					<div onClick={() => updateColor("bg-green-400 text-green-400")} className="bg-green-400 outline-green-800/70 hover:outline-green-400/70 color-picker"></div>
					<div onClick={() => updateColor("bg-green-800 text-green-800")} className="bg-green-800 outline-green-400/70 hover:outline-green-800/70 color-picker"></div>
				</div>
			</div>
		</div>
	)
}