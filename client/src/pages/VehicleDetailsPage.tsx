import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

import '../index.css';
import { Carousel } from 'react-responsive-carousel';
import { ICar } from '../../types/types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
	BsFillStarFill,
	BsMapFill,
	BsTelephoneFill,
	BsCashCoin,
	BsMap,
	BsPinMap,
	BsFillPinMapFill,
} from 'react-icons/bs';
import axios from 'axios';

const VehicleDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const [data, setData] = useState<ICar[]>([]);

	useEffect(() => {
		fetchData();
	});

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/v1/host/listing/:id');
			setData(response.data.listings);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const imageFile = [
		'https://images.prismic.io/barnebys/105985ac-c96c-458d-9011-acc988b2f098_1.jpeg?w=900&auto=format%2Ccompress&cs=tinysrgb',
		'https://qph.cf2.quoracdn.net/main-qimg-7458d545cfd0a575972283f52f913ecd-lq',
		'https://cdn.shopify.com/s/files/1/0035/9877/8435/files/Rosso_Corsa_Ferrari_F8_Spider_2048x2048.jpg?v=1591100127',
		'https://wallpaperaccess.com/full/1470367.jpg',
	];

	return (
		<>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans'>
				<Navbar />
				<div className='absolute w-full h-72 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
				<div className='w-3/4 h-full flex items-center justify-center self-center'>
					<Carousel
						showStatus={false}
						showThumbs={false}
						infiniteLoop={false}
						swipeable={true}
						emulateTouch={true}
						showArrows={true}
						centerMode={true}
						centerSlidePercentage={100}
						className='carousel-container w-full'
					>
						{imageFile.map((image, index) => (
							<div key={index} className='carousel-slide relative hover:scale-[1.02] my-2 transition'>
								<img
									src={image}
									alt={`Image ${index}`}
									className='mx-auto h-[400px] shadow-md object-cover select-none'
								/>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</>
	);
};

export default VehicleDetailsPage;
