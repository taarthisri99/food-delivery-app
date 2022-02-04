/**
 * Main options details
 *
 * @property image 
 * @property content
 */
export interface mainOptions {
  image: string;
  content: string;
  url: string;
}

/**
 * Collection options details
 *
 * @property image 
 * @property content
 * @property visits
 * @property url
 */
export interface collectionOptions {
  image: string;
  content: string;
  visits: number;
  url: string;
}

/**
 * Places details
 *
 * @property place 
 * @property count
 */
export interface places {
  place: string;
  count: number;
}

/**
 * Dining out details
 *
 * @property image 
 * @property title
 * @property rating 
 * @property type
 * @property cost 
 * @property place
 */
export interface diningOutItems {
  image: string;
  title: string;
  rating: number;
  type: string;
  cost: string;
  place: string;
}

/**
 * Trending details
 *
 * @property image 
 * @property title
 * @property diningrating 
 * @property deliveryrating 
 * @property type 
 * @property place
 */
export interface trendingItems {
  image: string;
  title: string;
  diningRating: number;
  deliveryRating: number;
  type: string;
  place: string;
}