export interface Course {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  user:User;
  price: Price;
  rating: number;
  tags: string[];
}

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  roles: string;
  mobileNumber: string;
  gender: string;
  country: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
  profileImg: string;
}

export interface Price {
  currentPrice: number;
  originalPrice: number;
}

export interface SingleCourse {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  user: User;
  duration: number;
  category: string[];
  level: string[];
  price: Price;
  rating: number;
  isPublished: boolean;
  bestSeller: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
