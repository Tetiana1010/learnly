"use client";

import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import Image from "next/image"; 

interface ImageUploadProps {
  onChange: (url?: string) => void;
  value: string;
}

const ImageUpload = ({
  onChange,
  value
}: ImageUploadProps) => {
  return (
    <div className="space-y-4 w-full flex flex-col items-center justify-center">
      {value && (
        <div className="relative w-40 h-40">
          <Image
            fill
            src={value}
            alt="Upload"
            className="rounded-full object-cover"
          />
        </div>
      )}
      <UploadDropzone<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

export default ImageUpload;