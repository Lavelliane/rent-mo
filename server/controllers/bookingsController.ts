import { Request, Response } from 'express';

export const createBooking = (req: Request, res: Response) => {
	return res.status(200).json({ msg: 'Created Booking' });
};
