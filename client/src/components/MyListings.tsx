import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ICar } from 'types/types';
import imageUnavailable from '../assets/logo/image_not_available.png';
import { CardActionArea, CardContent, Card, Pagination, Typography } from '@mui/material';
import { BsFillStarFill, BsMapFill, BsTelephoneFill, BsCashCoin } from 'react-icons/bs';
import axios from 'axios';

const MyListings = () => {
	const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items to display per page
	const [data, setData] = useState<ICar[]>([]);
	const [currentItems, setCurrentItems] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth < 600) {
				setItemsPerPage(1);
			} else if (window.innerWidth < 1630) {
				setItemsPerPage(2);
			} else if (window.innerWidth < 1900) {
				setItemsPerPage(3);
			} else {
				setItemsPerPage(4);
			}
		};

		// Initial update
		updateItemsPerPage();

		// Event listener for window resize
		window.addEventListener('resize', updateItemsPerPage);

		// Clean up the event listener when component unmounts
		return () => {
			window.removeEventListener('resize', updateItemsPerPage);
		};
	}, []);

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const toDisplay = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];
		const displayCount = Math.ceil(data.length / itemsPerPage);
		setCount(displayCount);
		setCurrentItems(toDisplay);
	}, [currentPage, data]);

	useEffect(() => {
		fetchData();
	}, [itemsPerPage]);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/v1/host/listing/my-listings'); // Replace with your API endpoint
			setData(response.data.listingsByUser); // Update the 'data' state with fetched data
			//console.log('Data fetched:', response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	return (
		<div className='w-full h-fit flex flex-col items-center justify-center p-0 gap-10'>
			<div className='flex w-full items-center'>
				<img className='h-8' src='../src/assets/logo/icons8-car.png' alt='logo' />
				<p className='block p-2 no-select w-full'>{data.length + ' Listing/s'}</p>
			</div>
			<div className='w-full items-center 2xl:justify-start justify-center flex flex-wrap gap-4 mx-auto'>
				{currentItems.map((item, index) => (
					<Card className='drop-shadow-lg hover:scale-[102%] hover:transition-transform sm:w-64 w-full' key={index}>
						<Carousel
							showStatus={false}
							showThumbs={false}
							infiniteLoop={true}
							swipeable={true}
							emulateTouch={true}
							centerMode={item.vehiclePhotos.length < 2 ? false : true}
							centerSlidePercentage={100}
							className='carousel-container w-full'
						>
							{item.vehiclePhotos.map((image, index) => (
								<div key={index} className='carousel-slide relative hover:scale-[1.02] transition'>
									<img
										src={image as any}
										alt={`Image ${index}`}
										onError={(e: any) => (e.target.src = imageUnavailable)}
										className='mx-auto h-48 shadow-md object-cover select-none object-center'
									/>
								</div>
							))}
						</Carousel>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant='h5' fontWeight={700} component='div'>
									{item.brand + ' ' + item.model}
								</Typography>
								<span className='w-full h-1 bg-dark500'></span>
								<Typography className='grid grid-cols-1 justify-between gap-4' variant='body1' color='text.primary'>
									<div className='flex items-start justify-start gap-2'>
										<BsMapFill className='mt-1' />
										{item.city + ', ' + item.country}
									</div>
									<div className='flex items-start justify-start gap-2'>
										<BsTelephoneFill className='mt-1' />
										{item.mobileNumber}
									</div>
									<div className='flex items-start justify-start gap-2'>
										<BsFillStarFill className='mt-1' />
										{'Rating'}
									</div>
									<div className='flex items-start justify-start gap-2'>
										<BsCashCoin className='mt-1' />
										{item.price}
									</div>
								</Typography>

								<Typography variant='body1' color='text.primary'></Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</div>
			<Pagination
				className=' self-center'
				count={count}
				color='standard'
				shape='rounded'
				page={currentPage}
				onChange={(event, newPage) => handlePageChange(newPage)}
			/>
		</div>
	);
};

export default MyListings;