export interface ICar {
	brand: string;
	model: string;
	street: string;
	city: string;
	email: string;
	mobileNumber: string;
	state: string;
	country: string;
	zipCode: string;
	licensePlateNumber: string;
	carRegistrationNumber: string;
	carAvailability: ICarAvailability;
	vehiclePhotos: string[];
}

interface ICarAvailability {
	startDate: Date;
	endDate: Date;
}
