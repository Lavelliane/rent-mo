import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardActionArea, CardContent, Card, Pagination } from '@mui/material';
import { ICar } from 'types/types';
import imageUnavailable from '../assets/logo/image_not_available.png';
import {
	BsFillStarFill,
	BsMapFill,
	BsTelephoneFill,
	BsCashCoin,
	BsMap,
	BsPinMap,
	BsFillPinMapFill,
} from 'react-icons/bs';
import { ButtonFillRoundedFull } from '../components/Buttons';

const ListingPage = () => {
	const [data, setData] = useState<ICar[]>([]);
	const [currentItems, setCurrentItems] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const itemsPerPage = 4; // Number of items to display per page

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
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div className='w-full min-h-fit flex flex-col items-center justify-center sm:px-16 p-2 gap-10'>
			<h4 className='md:pl-20 font-bold md:text-3xl text-2xl self-start'>Featured 4-wheelers</h4>
			<div className='w-full items-center justify-center flex flex-wrap gap-4 mx-auto'>
				{currentItems.map((item, index) => (
					<Card className='drop-shadow-lg hover:scale-[102%] hover:transition-transform h-fit w-72' key={index}>
						<div className='relative hover:scale-[1.02] transition p-2'>
							<img
								src={item.vehiclePhotos[0].toString()}
								alt={`Image ${index}`}
								onError={(e: any) => (e.target.src = imageUnavailable)}
								className='mx-auto w-full h-48 object-cover select-none object-center rounded-md'
							/>
						</div>
						<CardContent className='flex flex-col w-full h-12 gap-0 justify-center text-center items-center'>
							<h4 className='flex text-xl font-extrabold'>{item.brand + ' ' + item.model}</h4>
							<p className='flex text-md font-semibold'>Php {item.price}/day</p>
						</CardContent>
						<div className='p-4'>
							<ButtonFillRoundedFull text='Rent Now' />
						</div>
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
