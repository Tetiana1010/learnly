// "use client";

// import { useState } from "react";
// import { Course } from "@prisma/client";
// import { Attachment } from "@/components/attachment";
// import { UploadDropzone } from "@/lib/uploadthing";
// import { Button } from "@/components/ui/button";
// import { PlusCircle } from "lucide-react";

// interface AttachmentFormProps {
//   initialData: Course & {
//     attachments: Attachment[];
//   };
//   courseId: string;
// }

// // const formSchema = z.object({
// //   url: z.string().min(1, { message: "Attachment is required" }),
// // });

// export const AttachmentForm = ({
//   initialData,
//   // courseId,
// }: AttachmentFormProps) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [attachments, setAttachments] = useState<Attachment[]>(initialData.attachments);

//   const toggleEdit = () => setIsEditing((current) => !current);

//   // const router = useRouter();

//   const handleUploadComplete = (res: { url: string }[]) => {
//     if (res && res[0]) {
//       const newAttachment: Attachment = {
//         id: new Date().toISOString(),
//         name: res[0].url.split('/').pop() || 'Attachment',
//         url: res[0].url,
//       };
//       setAttachments([...attachments, newAttachment]);
//       toggleEdit();
//     }
//   };

//   return (
//     <div className="mt-6 border bg-slate-100 rounded-md p-4">
//       <div className="font-medium flex items-center justify-between">
//         Course attachment
//         <Button onClick={toggleEdit} variant="ghost">
//           {isEditing ? 'Cancel' : (
//             <>
//               <PlusCircle className="h-4 w-4 mr-2" />
//               Add an attachment
//             </>
//           )}
//         </Button>
//       </div>
//       {!isEditing && (
//         <>
//           {attachments.length === 0 && (
//             <p className="text-sm mt-2 text-slate-500 italic">No attachments</p>
//           )}
//           <ul>
//             {attachments.map((attachment) => (
//               <li key={attachment.id}>
//                 <a href={attachment.url} target="_blank" rel="noopener noreferrer">
//                   {attachment.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </>
//       )}

//       {isEditing && (
//         <div>
//           <UploadDropzone
//             endpoint="imageUploader"
//             onClientUploadComplete={handleUploadComplete}
//             onUploadError={(error: Error) => {
//               console.log(error);
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };
