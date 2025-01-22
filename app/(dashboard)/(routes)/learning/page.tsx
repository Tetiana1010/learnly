import Link from "next/link";

export default function LearningPage() {
  return (
    <div className="min-h-screen">
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-800">
          Welcome to Your Learning Page
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Track your progress and continue learning
        </p>
        <Link
          href="/courses"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700"
        >
          Browse Courses
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
        <div className="text-center">
          <p className="text-3xl font-bold text-sky-600">5</p>
          <p className="text-slate-600">Courses in Progress</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-sky-600">10</p>
          <p className="text-slate-600">Completed Courses</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-sky-600">20</p>
          <p className="text-slate-600">Total Courses</p>
        </div>
      </div>
    </div>
  );
}
