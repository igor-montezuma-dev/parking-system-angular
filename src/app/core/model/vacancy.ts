export type parkingSpotResponse = {
  parkingSpots: ParkinSpot[];
};

export type ParkinSpot = {
  id: number;
  type: string;
  occupied: boolean;
  inactive: boolean;
  status: string;
};
