import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    return { userId };
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log("Upload complete for file:", file.name);
    }),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log("Upload complete for file:", file.name);
    }),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "16GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log("Upload complete for file:", file.name);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
