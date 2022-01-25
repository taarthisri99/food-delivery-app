import { mainOptions, collectionOptions, places, diningOutItems, trendingItems } from './list-interface'

export const mainOptionsList: mainOptions[] = [
  {
    image: "../../../assets/images/order-food.png",
    content: "Order Food Online",
    url: "",
  },

  {
    image: "../../../assets/images/meal.png",
    content: "Go out for a meal",
    url: "/dining",
  },

  {
    image: "../../../assets/images/zomato-pro.png",
    content: "Zomato Pro",
    url: "",
  },

  {
    image: "../../../assets/images/night-life.jpeg",
    content: "Nightlife & Clubs",
    url: "",
  },
]

export const collectionOptionList: collectionOptions[] = [
  {
    image: "../../../assets/images/trending-this-week.png",
    content: "Trending this week",
    visits: 30,
    url: "/trending",
  },

  {
    image: "../../../assets/images/best-of-chennai.png",
    content: "Best of Chennai",
    visits: 76,
    url: "",
  },

  {
    image: "../../../assets/images/frozen-delights.png",
    content: "Frozen Delights",
    visits: 14,
    url: "",
  },

  {
    image: "../../../assets/images/brilliant-briyanis.png",
    content: "Brilliant Briyanis",
    visits: 13,
    url: "",
  }
]

export const placesList: places[] = [
  {
    place: "T.Nagar",
    count: 438,
  },

  {
    place: "Nungambakkam",
    count: 348,
  },

  {
    place: "Velachery",
    count: 606,
  },

  {
    place: "Adyar",
    count: 268,
  },

  {
    place: "Anna Nagar East",
    count: 448,
  },

  {
    place: "Thuraipakkam",
    count: 384,
  },

  {
    place: "Mylapore",
    count: 227,
  },

  {
    place: "Alwarpet",
    count: 176,
  },

  {
    place: "Anna Nagar West",
    count: 561,
  },

  {
    place: "Besant Nagar",
    count: 182,
  },

  {
    place: "Semmancheri",
    count: 98,
  },

  {
    place: "Vadapalani",
    count: 228,
  },

  {
    place: "Perungudi",
    count: 343,
  },

  {
    place: "Medavakkam",
    count: 609,
  },

  {
    place: "Egmore",
    count: 226,
  },

  {
    place: "Royapettah",
    count: 191,
  },

  {
    place: "Sholinganallur",
    count: 275,
  },

  {
    place: "Guindy",
    count: 126,
  },

  {
    place: "Kilpauk",
    count: 249,
  },

  {
    place: "Porur",
    count: 854,
  },

  {
    place: "Kodambakkam",
    count: 242,
  },

  {
    place: "Gopalapuram",
    count: 70,
  },

  {
    place: "Ashok Nagar",
    count: 233,
  },

  {
    place: "Teynampet",
    count: 242,
  },

  {
    place: "Pallavaram",
    count: 417,
  },

  {
    place: "Ramapuram",
    count: 406,
  },

  {
    place: "RA Puram",
    count: 51,
  },

  {
    place: "Chrompet",
    count: 437,
  },

  {
    place: "Neelangarai",
    count: 66,
  },

  {
    place: "Navallur",
    count: 265,
  },
]

export const cuisineList = ["BBQ", "Bakery", "Beverages", "Biriyani", "Burger", "Chettinad", "Chinese", "Desserts",
  "Ice Cream", "Juices", "Lebanese", "Mughlai", "North Indian", "Pizza", "Rolls", "Sandwich",
  "Seafood", "Shake", "South Indian", "Street"];

export const restaurantList = ["Bakeries", "Bars", "Beverage Shops", "Bhojanalya", "Cafés", "Casual Dining",
  "Clubs", "Confectioneries", "Dessert Parlors", "Dhabas", "Fine Dining", "Food Courts", "Food Trucks", "Irani Cafes",
  "Kiosks", "Lounges", "Meat Shops", "Paan Shop", "Pubs", "Quick Bites", "Sweet Shops"];

export const restaurantChainList = ["Burger King", "Domino's", "Faasos", "KFC", "Krispy Kreme", "McDonald's",
"Moti Mahal Delux", "Paradise Biriyani", "Pizza Hut", "WOW! Momo"];

export const citiesList = ["Delhi NCR", "Kolkata", "Mumbai", "Bengaluru", "Pune", "Hyderbad",
"Chennai", "Lucknow", "Kochi", "Jaipur", "Ahemdabad", "Chandigarh" ,"Goa", "Indore",
"Nashik", "Ooty", "Shimla", "Ludhiana", "Guwahati", "Amritsar", "Kanpur", "Allahabad",
"Aurangabad", "Bhopal", "Ranchi", "Visakhapatnam", "Bhuvaneshwar", "Coimbatore", 
"Mangalore", "Vadodara", "Napur", "Agra", "Dehradun", "Mysore", "Puducherry", "Surat",
"Varanasi", "Patna", "Udaipur", "Cuttack", "Trivandrum", "Haridwar", "Leh", "Pushkar",
"Rajkot", "Madurai", "Kozhikode", "Alappuzha", "Thrissur", "Manipur", "Vijayawada",
"Jodhpur", "Kota", "Ajmer", "Mussoorie", "Rishikesh", "Jalandhar", "Jammu", "Manali",
"Dharamshala", "Raipur", "Gorakhpur", "Palakkad"];

export const diningOutItemsList: diningOutItems[] = [
  {
    image: "../../../assets/images/dining-out/dining-out-1.png",
    title: "East Coast At Madras Square",
    rating: 4.6,
    type: "Italian, Continental, North Indian",
    cost: "₹1,700 for two",
    place: "Neelangarai, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-2.png",
    title: "The Thief",
    rating: 4.1,
    type: "North Indian, Continental, Italia",
    cost: "₹1,800 for two",
    place: "Nungambakkam, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-3.png",
    title: "The Mayflower",
    rating: 4.3,
    type: "Italian, Continental, North Indian",
    cost: "₹1,700 for two",
    place: "Teynampet, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-4.png",
    title: "Coal Barbecues",
    rating: 4.4,
    type: "North Indian, Chinese",
    cost: "₹1,400 for two",
    place: "T. Nagar, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-5.png",
    title: "The Wedding Biryani",
    rating: 3.7,
    type: "Biryani, Beverages",
    cost: "₹400 for two",
    place: "Velachery, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-6.png",
    title: "27 Culinary Street",
    rating: 4.3,
    type: "Chinese, Street Food, Fast Food",
    cost: "₹800 for two",
    place: "Mylapore, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-7.png",
    title: "Bay 6",
    rating: 3.8,
    type: "Continental, Asian, North Indian",
    cost: "₹1,500 for two",
    place: "Akkarai, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-8.png",
    title: "Fromage",
    rating: 4.4,
    type: "Cafe, Italian, French, Europe",
    cost: "₹1,000 for two",
    place: "MRC Nagar, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-9.png",
    title: "The Big Barbeque",
    rating: 4.4,
    type: "Biryani, North Indian, Mughlai",
    cost: "₹1,400 for two",
    place: "OMR, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-10.png",
    title: "Dank",
    rating: 4.3,
    type: "Continental, North Indian",
    cost: "₹2,000 for two",
    place: "T. Nagar, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-11.png",
    title: "Soy Soi",
    rating: 4.7,
    type: "Chinese, Asian, Desserts, ",
    cost: "₹1,400 for two",
    place: "Kotturpuram, Chennai",
  },

  {
    image: "../../../assets/images/dining-out/dining-out-12.png",
    title: "Mount Road Social",
    rating: 4.2,
    type: "North Indian, Chinese, Burger",
    cost: "₹1,500 for two",
    place: "E Hotel, Royapettah, Chennai",
  },
]

export const trendingItemsList: trendingItems[] = [

  {
    image: "../../../assets/images/trending/trending-1.png",
    title: "Sadhana Hotel",
    diningRating: 3.7,
    deliveryRating : 3.6,
    type: "Biryani, South Indian",
    place: "Tambaram, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-2.png",
    title: "Hot Chips",
    diningRating: 2.9,
    deliveryRating : 4.9,
    type: "South Indian, North Indian",
    place: "T. Nagar, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-3.png",
    title: "Perambur Sri Srinivasa",
    diningRating: 3.0,
    deliveryRating : 4.2,
    type: "Fast Food, Pizza, Sandwich",
    place: "Chromepet, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-4.png",
    title: "Perambur Sri Srinivasa",
    diningRating: 3.1,
    deliveryRating : 4.2,
    type: "Fast Food, Pizza, Sandwich, Ice Cream",
    place: "Anna Nagar East, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-5.png",
    title: "Chai Kings",
    diningRating: 3.9,
    deliveryRating : 4.3,
    type: "Tea, Beverages, Street Food",
    place: "Velachery, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-6.png",
    title: "WOW! China",
    diningRating: 3.3,
    deliveryRating : 3.7,
    type: "Chinese, Asian",
    place: "Kodambakkam, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-7.png",
    title: "Al Beck",
    diningRating: 4.0,
    deliveryRating : 4.1,
    type: "Seafood, Biryani, North Indian",
    place: "Avadi, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-8.png",
    title: "Godavari Andhra Mess",
    diningRating: 4.0,
    deliveryRating : 3.4,
    type: "Andhra, North Indian, Biryani",
    place: "GST Road, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-9.png",
    title: "Desert Shawarma",
    diningRating: 4.3,
    deliveryRating : 4.4,
    type: "Lebanese, Burger, Pizza, Ice Cream",
    place: "Ramapuram, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-10.png",
    title: "Masaledaar Dhaba",
    diningRating: 3.8,
    deliveryRating : 4.1,
    type: "North Indian, Chinese, Beverages",
    place: "Saligramam, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-11.png",
    title: "Aghraharam",
    diningRating: 3.7,
    deliveryRating : 3.9,
    type: "South Indian, North Indian, Chinese",
    place: "Perambur, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-12.png",
    title: "Nayeem Biryani Stall",
    diningRating: 3.9,
    deliveryRating : 4.2,
    type: "Biryani",
    place: "Vepery, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-13.png",
    title: "Namma Veedu Vasanta Bhavan",
    diningRating: 3.3,
    deliveryRating : 3.7,
    type: "South Indian, North Indian, Chinese",
    place: "Maduravoyal, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-14.png",
    title: "Hotel Gopal",
    diningRating: 3.6,
    deliveryRating : 4.1,
    type: "South Indian, Chinese, Street Food",
    place: "Porur, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-15.png",
    title: "Bismillah Beef Biryani",
    diningRating: 4.0,
    deliveryRating : 3.8,
    type: "Biryani, South Indian",
    place: "Alandur, Chennai",
  },

{
    image: "../../../assets/images/trending/trending-16.png",
    title: "Eat N Drink",
    diningRating: 3.4,
    deliveryRating : 4.3,
    type: "Chinese, Burger, Wraps, Fast Food",
    place: "Porur, Chennai",
  },
]
