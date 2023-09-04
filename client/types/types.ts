export interface ICar {
	_id: string;
	brand: string;
	model: string;
	street: string;
	city: string;
	email: string;
	mobileNumber: string;
	state: string;
	country: string;
	price: number | null;
	zipCode: string;
	licensePlateNumber: string;
	carRegistrationNumber: string;
	carAvailability: ICarAvailability;
	vehiclePhotos: File[];
}

interface ICarAvailability {
	startDate: Date;
	endDate: Date;
}
