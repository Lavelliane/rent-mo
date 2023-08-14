import React, { useState, ChangeEvent } from 'react';
import { MdCloudUpload, MdAddCircle, MdClose } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageUploader() {
	const [images, setImages] = useState<File[]>([]);

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedImages = Array.from(event.target.files || []);

		if (selectedImages.length === 1) {
			// Handle single image upload
			setImages([...images, selectedImages[0]]);
		} else if (selectedImages.length > 1) {
			// Handle multiple image upload (limit to 8 images)
			const limitedImages = selectedImages.slice(0, 8 - images.length);
			setImages([...images, ...limitedImages]);
		}
	};

	const handleRemoveImage = (indexToRemove: number) => {
		const updatedImages = images.filter((_, index) => index !== indexToRemove);
		setImages(updatedImages);
	};

	return (
		<div>
			<div className='mt-3 lg:flex items-center'>
				<div className='flex items-center justify-center w-full'>
					{images.length === 0 ? (
						<label
							htmlFor='image-input'
							className='flex flex-col items-center justify-center w-full h-24 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-white hover:bg-dark100'>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<MdCloudUpload
									size='30px'
									color='#747474'
								/>
								<p className='mb-2 text-sm text-dark600 dark:text-dark200'>
									<span className='font-semibold'>Click to upload</span> or drag and drop
								</p>
								<p className='text-xs text-dark600 dark:text-dark200'>HEIC, PNG, JPG</p>
							</div>
							<input
								type='file'
								multiple
								accept='image/*'
								onChange={handleImageChange}
								className='hidden'
								id='image-input'
							/>
						</label>
					) : null}
				</div>
			</div>

			{images.length > 0 && (
				<div className='h-full flex mb-5'>
					<Carousel
						showStatus={false}
						showThumbs={false}
						showArrows={images.length < 3 ? false : true}
						infiniteLoop={images.length < 3 ? false : true}
						centerMode={true}
						centerSlidePercentage={images.length < 2 ? 100 : images.length === 2 ? 50 : 33.33}
						className='carousel-container w-full'>
						{images.map((image, index) => (
							<div
								key={index}
								className='carousel-slide relative'>
								<img
									src={URL.createObjectURL(image)}
									alt={`Image ${index}`}
									className='mx-auto h-32 shadow-md object-cover'
								/>
								<button
									className='absolute top-2 right-2 p-1 bg-dark900 rounded-full text-red-100 hover:text-red-300 transition'
									onClick={() => handleRemoveImage(index)}>
									<MdClose size='16px' />
								</button>
							</div>
						))}
					</Carousel>
					{images.length > 0 && images.length < 8 && (
						<div className='flex items-center self-center text-center md:mx-5 mx-3'>
							<label
								htmlFor='image-input'
								className='cursor-pointer hover:text-dark900 transition-colors text-dark500'>
								<MdAddCircle size='32px' />
							</label>
							<input
								type='file'
								multiple
								accept='image/*'
								onChange={handleImageChange}
								className='hidden'
								id='image-input'
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default ImageUploader;
