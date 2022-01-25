export interface mainOptions {
  image: string;
  content: string;
  url: string;
}

export interface collectionOptions {
  image: string;
  content: string;
  visits: number;
  url: string;
}

export interface places {
  place: string;
  count: number;
}

export interface diningOutItems {
  image: string;
  title: string;
  rating: number;
  type: string;
  cost: string;
  place: string;
}

export interface trendingItems {
  image: string;
  title: string;
  diningRating: number;
  deliveryRating: number;
  type: string;
  place: string;
}