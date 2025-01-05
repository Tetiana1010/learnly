import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = async (req: Request) => {
  const { userId } = await auth();
  if (!userId) throw new UploadThingError("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      const { userId } = await handleAuth(req);
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
    }),

  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(async ({ req }) => {
      const { userId } = await handleAuth(req);
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
    }),

  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "16GB" } })
    .middleware(async ({ req }) => {
      const { userId } = await handleAuth(req);
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
