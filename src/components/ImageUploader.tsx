import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'

type MarkupElements = { shape: boolean, class: string, source: string }[]

export default function ImageUploader({
	toggleWindow,
	updateElements,
	setPosition,
	markupElements
}: {
	toggleWindow: Dispatch<SetStateAction<boolean>>,
	updateElements: Dispatch<SetStateAction<MarkupElements>>,
	setPosition: Dispatch<SetStateAction<{
		x: number,
		y: number
	}>>,
	markupElements: MarkupElements
}) {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		updateElements([
			...markupElements,
			{
				shape: true,
				class: `bg-transparent select-none`,
				source: URL.createObjectURL(acceptedFiles[0]),
			}
		])

		toggleWindow(false)
	}, [])

	const {
		getRootProps,
		getInputProps,
		isFocused,
	} = useDropzone({ onDrop, accept: { 'image/*': [] } })

	const dropClass = useMemo(() => {
		return `w-64 h-64 rounded-lg border-dashed border-2 text-gray-800 flex flex-col justify-center items-center h-full ${isFocused ? 'border-gray-400' : 'border-gray-800'}`
	}, [isFocused])

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
				<div {...getRootProps()} className={dropClass}>
					<PhotoIcon className="h-12 w-12" />
					<input {...getInputProps()} />
					<span>Drop image here</span>
				</div>
			</div>
		</div>
	)
}