import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardActionArea, CardMedia, CardContent, Card, Pagination, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { BiPhone, BiMap, BiStar, BiMapPin, BiPhoneCall } from 'react-icons/bi';
import { ICar } from 'types/types';
import { BsFillPhoneFill, BsFillStarFill } from 'react-icons/bs';

const ListingPage = () => {
	const [data, setData] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5; // Number of items to display per page

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	useEffect(() => {
		fetchData();
	}, []);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/v1/host/listings'); // Replace with your API endpoint
			setData(response.data); // Update the 'data' state with fetched data
			console.log(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
		const dummyData = [
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
			{
				brand: 'Toyota',
				model: 'Vios',
				street: 'Street 1',
				city: 'City 1',
				email: '',
				mobileNumber: '123456789',
				state: 'State 1',
				country: 'Country 1',
				zipCode: '123456',
				licensePlateNumber: 'ABC123',
				carRegistrationNumber: 'ABC123',
				carAvailability: { startDate: new Date(), endDate: new Date() },
				vehiclePhotos: [
					'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg',
					'https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp',
					'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format',
				],
			},
		];
		setData(dummyData);
	};

	return (
		<div className='w-full min-h-fit flex flex-col items-center justify-center px-40 gap-10 pt-40'>
			<h4 className=' font-Messina-Sans font-bold text-3xl self-start'>Featured 4-wheelers</h4>
			<div className='self-center w-full items-center justify-center flex gap-4'>
				{currentItems.map((item, index) => (
					<Card
						className='drop-shadow-lg hover:scale-[102%] hover:rotate-3 hover:transition-transform'
						sx={{ maxWidth: 345 }}
						key={index}>
						<Carousel
							showStatus={false}
							showThumbs={false}
							infiniteLoop={true}
							swipeable={true}
							emulateTouch={true}
							centerMode={item.vehiclePhotos.length < 2 ? false : true}
							centerSlidePercentage={100}
							className='carousel-container w-full'>
							{item.vehiclePhotos.map((image, index) => (
								<div
									key={index}
									className='carousel-slide relative hover:scale-[1.02] transition'>
									<img
										src={image as any}
										alt={`Image ${index}`}
										className='mx-auto h-48 shadow-md object-cover select-none object-center'
									/>
								</div>
							))}
						</Carousel>
						<CardActionArea>
							<CardContent>
								<Typography
									gutterBottom
									variant='h5'
									fontWeight={700}
									component='div'>
									{item.brand + ' ' + item.model}
								</Typography>
								<Typography
									className='grid grid-cols-2 justify-between'
									variant='body1'
									color='text.primary'>
									<div className='flex items-center gap-2'>
										<BiMapPin />
										{item.city + ', ' + item.country}
									</div>
									<div className='flex items-center gap-2'>
										<BiPhone />
										{item.mobileNumber}
									</div>
									<div className='flex items-center gap-2'>
										<BsFillStarFill />
										{'Rating'}
									</div>
									<div className='flex items-center gap-2'>
										<BiPhone />
										{item.mobileNumber}
									</div>
								</Typography>

								<Typography
									variant='body1'
									color='text.primary'></Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</div>
			<Pagination
				className=' self-center'
				count={Math.ceil(data.length / itemsPerPage) as any}
				color='standard'
				shape='rounded'
				page={currentPage}
				onChange={(event, newPage) => handlePageChange(newPage)}
			/>
		</div>
	);
};

export default ListingPage;
