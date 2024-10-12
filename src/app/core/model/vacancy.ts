export type parkingSpotResponse = {
  parkingSpots: ParkinSpot[];
  totalAvailable: number;
  totalInactive: number;
  totalOccupied: number;
  totalVacancies: number;
};

export type ParkinSpot = {
  id: number;
  type: string;
  occupied: boolean;
  inactive: boolean;
  status: string;
};
