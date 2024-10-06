export type parkingSpotResponse = {
  parkingSpots: parkinSpot[];
};

export type parkinSpot = {
  id: number;
  type: string;
  occupied: boolean;
  inactive: boolean;
  status: string;
};
