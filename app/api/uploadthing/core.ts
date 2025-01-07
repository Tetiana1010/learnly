import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB" }
  })
    .middleware(() => {
      return {}; // simplified for testing
    })
    .onUploadComplete((data) => {
      console.log("Upload complete", data);
      return { url: data.file.url };
    })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;