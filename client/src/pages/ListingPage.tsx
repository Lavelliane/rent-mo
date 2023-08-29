import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardActionArea, CardContent, Card, Pagination, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { ICar } from 'types/types';
import imageUnavailable from '../assets/logo/image_not_available.png';
import { BsFillStarFill, BsMapFill, BsTelephoneFill, BsCashCoin } from 'react-icons/bs';

const ListingPage = () => {
	const [data, setData] = useState<ICar[]>([]);
	const [currentItems, setCurrentItems] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const itemsPerPage = 8; // Number of items to display per page

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
	}, []);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/v1/host/listings'); // Replace with your API endpoint
			setData(response.data.listings); // Update the 'data' state with fetched data
			console.log('Data fetched:', response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div className='w-full min-h-fit flex flex-col items-center justify-center sm:px-16 p-2 gap-10 pt-28'>
			<h4 className=' font-Messina-Sans font-bold text-3xl self-start'>Featured 4-wheelers</h4>
			<div className='w-full items-center justify-center flex flex-wrap gap-4 mx-auto'>
				{currentItems.map((item, index) => (
					<Card className='drop-shadow-lg hover:scale-[102%] hover:transition-transform sm:w-80 w-full' key={index}>
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
								<Typography className='grid grid-cols-2 justify-between' variant='body1' color='text.primary'>
									<div className='flex items-start justify-start gap-2 h-12'>
										<BsMapFill className='mt-1' />
										{item.city + ', ' + item.country}
									</div>
									<div className='flex items-start justify-start gap-2 h-12'>
										<BsTelephoneFill className='mt-1' />
										{item.mobileNumber}
									</div>
									<div className='flex items-start justify-start gap-2 h-12'>
										<BsFillStarFill className='mt-1' />
										{'Rating'}
									</div>
									<div className='flex items-start justify-start gap-2 h-12'>
										<BsCashCoin className='mt-1' />
										{item.mobileNumber}
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

export default ListingPage;
