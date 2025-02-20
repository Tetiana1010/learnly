"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode
} from "react-icons/fc";
import { IconType } from "react-icons/lib";

interface CategoriesProps {
  items: Category[];
};

const iconMap: Record<Category["name"], IconType> = {
  "Music": FcMusic,
  "Photography": FcOldTimeCamera,
  "Fitness": FcSportsMode,
  "Accounting": FcSalesPerformance,
  "Filming": FcFilmReel,
  "Engineering": FcEngineering,
  "Web Development": FcMultipleDevices
};


// to do: write a CategoryItme
export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
    </div>
  );
};