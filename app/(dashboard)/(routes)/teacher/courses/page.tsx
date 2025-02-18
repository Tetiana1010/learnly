import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const CoursesPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome to Your Courses
        </h1>
        <p className="mt-2 text-slate-600">
          Explore and manage your courses effortlessly. Create new ones or
          improve existing content.
        </p>

        <div className="mt-6">
          <Link href="/teacher/create">
            <Button className="px-6 py-3 text-lg">New Course</Button>
          </Link>
        </div>

        <DataTable columns={columns} data={courses} />

        <div className="mt-12 flex justify-center">
          <div className="w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
