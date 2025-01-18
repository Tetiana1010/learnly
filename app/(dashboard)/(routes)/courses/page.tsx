import React from 'react';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Courses Dashboard</h1>
        <p className="text-lg text-slate-700 mb-4">Welcome to the courses dashboard. Here you can manage all your courses.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-800">Course 1</h2>
            <p className="text-slate-600">Description of Course 1.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-800">Course 2</h2>
            <p className="text-slate-600">Description of Course 2.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-800">Course 3</h2>
            <p className="text-slate-600">Description of Course 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;