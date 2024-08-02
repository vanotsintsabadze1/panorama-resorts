interface RegisterField {
  email: string;
  password: string;
}

interface Room {
  id: string;
  type: number;
  description: string;
  capacity: number;
  pricePerNight: number;
  pricePerNightCurrency: number;
  images: string[];
}

interface ReservationResponse {
  approveLink: string;
  reservationIdentifier: string;
}

interface ConfirmedReservationResponse {
  checkInDateUtc: Date;
  checkOutDateUtc: Date;
  numberOfGuests: number;
  status: number;
  identifier: string;
  user: {
    id: string;
    email: string;
  };
  room: {
    id: string;
    images: string[];
  };
}
