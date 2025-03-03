"use client";

import { Button } from "@/components/ui/button";

interface CourseEnrollButtonPropd {
  courseId: string;
  price: number;
}

export const CourseEnrollButton = ({
  courseId,
  price,
}: CourseEnrollButtonPropd) => {
  return <Button></Button>;
};
