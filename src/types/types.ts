import { IconType } from "react-icons";

export interface CourseWithRatingCounter {
  id: number;
  imgSrc: string;
  title: string;
  subTitle: string;
  author: string;
  rating: string;
  ratingIcons: { id: number; icon: IconType }[];
  ratingCounter: string; // This property exists
  currentPrice: string;
  beforePrice: string;
  mostSell: string;
}

export interface CourseWithoutRatingCounter {
  id: number;
  imgSrc: string;
  title: string;
  subTitle: string;
  rating: string;
  totalRating: string; // This property exists instead of ratingCounter
  currentPrice: string;
  beforePrice: string;
  mostSell: string;
}
export type Course = CourseWithRatingCounter | CourseWithoutRatingCounter;