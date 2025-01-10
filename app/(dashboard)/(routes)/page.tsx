import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">

      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-800">Welcome to Learnly</h1>
        <p className="text-xl text-slate-600 mb-8">Discover your next skill with our expert-led courses</p>
        <Link 
          href="/courses" 
          className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700"
        >
          Browse Courses
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
        <div className="text-center">
          <p className="text-3xl font-bold text-sky-600">1000+</p>
          <p className="text-slate-600">Active Students</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-sky-600">100+</p>
          <p className="text-slate-600">Expert Instructors</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-sky-600">500+</p>
          <p className="text-slate-600">Courses Available</p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Why Choose Learnly?</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Expert Instructors</h3>
              <p className="text-slate-600">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Flexible Learning</h3>
              <p className="text-slate-600">Study at your own pace with lifetime access to courses</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Project-Based</h3>
              <p className="text-slate-600">Apply your knowledge with hands-on projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}