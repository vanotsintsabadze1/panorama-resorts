interface RegisterField {
  email: string;
  password: string;
}

interface RoomImagePayload {
  id: string;
  url: string;
}

interface Room {
  residents: number;
  price: number;
  id: string;
  type: number;
  description: string;
  capacity: number;
  pricePerNight: number;
  pricePerNightCurrency: number;
  averageStars: number;
  images: RoomImagePayload[];
}

interface AuthorizedUser {
  id: string;
  email: string;
  emailConfirmed: boolean;
  roles: string[];
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
    images: RoomImagePayload[];
  };
}

interface RoomReview {
  id: string;
  starCount: number;
  text: string;
  createdAtUtc: Date;
  user: {
    id: string;
    email: string;
    emailConfiremd: boolean;
    roles: string[] | null;
  };
}
