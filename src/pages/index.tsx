import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CubeIcon, CursorArrowRaysIcon, EyeDropperIcon, PencilIcon, PhotoIcon, SwatchIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [tool, setTool] = useState<number>(0)
	const [colorWindow, toggleColor] = useState<boolean>(false)

	const updateTool = (tool: number) => { }

	return (
		<main
			className={`min-h-screen relative px-24 py-12 ${inter.className}`}
		>
			<div className="fixed bg-white rounded-lg text-gray-800 px-2 py-4 space-y-4 backdrop-blur-sm z-50">
				<div onClick={() => setTool(0)} className="hover:text-gray-400 cursor-pointer">
					<CursorArrowRaysIcon className="h-6 w-6" />
				</div>
				<div onClick={() => setTool(1)} className="hover:text-gray-400 cursor-pointer">
					<PencilIcon className="h-6 w-6" />
				</div>
				<div onClick={() => setTool(2)} className="hover:text-gray-400 cursor-pointer">
					<PhotoIcon className="h-6 w-6" />
				</div>
				<div onClick={() => setTool(3)} className="hover:text-gray-400 cursor-pointer">
					<CubeIcon className="h-6 w-6" />
				</div>
				<div onClick={() => setTool(4)} className="hover:text-gray-400 flex justify-center items-center h-6 w-6 font-bold cursor-pointer">
					T
				</div>
				<div onClick={() => toggleColor(!colorWindow)} className="hover:text-gray-400">
					<SwatchIcon className="h-6 w-6" />
				</div>
			</div>

			{
				colorWindow && <div className="absolute top-0 left-0 min-h-screen w-screen flex justify-center items-center">
					<div className="bg-white rounded-lg text-gray-800 shadow-white/50 shadow-lg px-6 py-4">
						<div className="flex justify-between mb-6">
							<h1 className="font-bold">Color Picker</h1>
							<div className="flex justify-center items-center" onClick={() => toggleColor(false)}>
								<XMarkIcon className="h-4 w-4 text-gray-800 hover:text-gray-400 cursor-pointer" />
							</div>
						</div>
						<div className="grid grid-cols-6 gap-2">
							<div className="bg-white outline-black/70 hover:outline-black/30 color-picker"></div>
							<div className="bg-black outline-white/70 hover:outline-black/70 color-picker"></div>
							<div className="bg-blue-400 outline-blue-800/70 hover:outline-blue-400/70 color-picker"></div>
							<div className="bg-blue-800 outline-blue-400/70 hover:outline-blue-800/70 color-picker"></div>
							<div className="bg-yellow-400 outline-yellow-800/70 hover:outline-yellow-400/70 color-picker"></div>
							<div className="bg-yellow-800 outline-yellow-400/70 hover:outline-yellow-800/70 color-picker"></div>
							<div className="bg-red-400 outline-red-800/70 hover:outline-red-400/70 color-picker"></div>
							<div className="bg-red-800 outline-red-400/70 hover:outline-red-800/70 color-picker"></div>
							<div className="bg-green-400 outline-green-800/70 hover:outline-green-400/70 color-picker"></div>
							<div className="bg-green-800 outline-green-400/70 hover:outline-green-800/70 color-picker"></div>
						</div>
					</div>
				</div>
			}

			<div className="flex justify-center">
				State: {tool}
			</div>
			<div className="flex justify-center">
				Color Picker: {colorWindow ? 'true' : 'false'}
			</div>

			{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div> */}
		</main>
	)
}
