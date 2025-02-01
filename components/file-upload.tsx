"use client";

import { UploadDropzone } from "@uploadthing/react";
import { ourFileRouter, OurFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <div className="space-y-4 w-full flex flex-col items-center justify-center">
      <UploadDropzone<OurFileRouter, typeof endpoint>
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          toast(`ERROR! ${error?.message}`);
        }}
      />
    </div>
  );
};
