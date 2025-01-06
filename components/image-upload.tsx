"use client";

import { UploadButton } from "@/lib/uploadtthing";
import Image from "next/image";
import { useState } from "react";

const ImageUpload = () => {
  const [imageUrl, setimageUrl] = useState<string>("");
  return (
    <div>
      <UploadButton
        className="text-white font-bold py-2 px-4 rounded"
        endpoint="imageUploader"
        onBeforeUploadBegin={(files) => {
          console.log(`Uploading files ${files}`)
          return files;
        }}
        onUploadBegin={(name) => {
          console.log(`Upload started for ${name}`)
        }}
        onUploadAborted={() => {
          console.log("Upload aborted")
        }}
        onUploadProgress={(p) => {
          console.log(`Upload progress: ${p}%`)
        }}
        onClientUploadComplete={(res) => {
          console.log("Files", res);
          alert("Files uploaded");
          setimageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length ? (
        <div>
          <h2>Image Preview</h2>
          <Image src={imageUrl} alt="Uploaded Image" width={500} height={300} />
        </div>
      ) : 'nothing here, no image uploaded yet'}
    </div>
  );
};

export default ImageUpload;