import dbConnect from '../../../utils/dbConnect';
import Booking from '../../../models/Booking';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const bookings = await Booking.find({});

        res.status(200).json({ success: true, data: bookings })
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const booking = await Booking.create(req.body);

        res.status(201).json({ success: true, data: booking })
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}