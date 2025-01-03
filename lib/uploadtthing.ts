import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

import {  type OurFileRouter } from "@/app/api/uploadthing/core";

export const { UploadButton, UploadDropzone } =
  {
    UploadButton: generateUploadButton<OurFileRouter>(),
    UploadDropzone: generateUploadDropzone<OurFileRouter>()
  }
