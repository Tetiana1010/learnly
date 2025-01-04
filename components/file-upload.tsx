"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadtthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";
import { useState } from 'react';

// interface FileUploadProps {
//   onChange: (url?: string) => void;
//   endpoint: keyof typeof ourFileRouter;
// }

export const FileUpload = () => {
  const [imgUrl, setImgUrl] = useState('');
  return (
    <UploadButton
      endpoint='courseImage'
      onClientUploadComplete={(res) => {
        setImgUrl(res[0].url)
      }}
      onUploadError={(error) => {
      alert(`ERROR! ${error.message}`);
      }}
    />
    // <UploadDropzone
    //   endpoint={endpoint}
    //   onClientUploadComplete={(res) => {
    //     console.log(res);
    //     if (res && res.length > 0) {
    //       onChange(res[0].url);
    //     } else {
    //       toast.error("No file URL received!");
    //     }
    //   }}      
    //   onUploadError={(error: Error) => {
    //     toast.error(error.message);
    //   }}
    // />
  );
};
