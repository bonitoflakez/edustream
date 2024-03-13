'use client';

import React, { useState } from 'react';
import { courseData } from "@/utils/courses"

const ViewCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const handleCourseClick = (courseId: number) => {
    if (selectedCourse === courseId) {
      setSelectedCourse(null); // Close if already selected
    } else {
      setSelectedCourse(courseId);
    }
  };

  const backToCourses = () => {
    setSelectedCourse(null);
  }

  return (
    <div>
      {selectedCourse ? (
        <div className="col-span-4">
          <h2 className='text-3xl font-bold'>Course Content</h2>
          <button className='px-2 py-0.5 bg-[--ac-light] text-[--ac-fg] rounded-md mt-2' onClick={backToCourses}>(Go Back to Courses)</button>
          <div className="grid grid-cols-4 gap-8 mt-4">
            {courseData.find((course) => course.id === selectedCourse)?.content.map((content) => (
              <div key={content.contentID} className='h-52 rounded-lg'>
                {content.contentType === 'video' && (
                  <iframe
                    className='object-cover h-full w-full rounded-lg'
                    title={content.contentID.toString()}
                    width="560"
                    height="315"
                    src={content.contentURL}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h2 className='text-3xl font-bold'>All Courses</h2>
          <div className="grid grid-cols-4 gap-8 mt-8 items-start">
            {courseData.map((course) => (
              <button key={course.id} onClick={() => handleCourseClick(course.id)}>
                <div className="rounded-lg bg-gray-300 p-4">
                  <div className="h-64 w-full rounded-lg bg-gray-800">
                    <img src={course.imgURL} alt="course-display" className="object-cover h-full w-full rounded-lg" height={300} width={300} />
                  </div>
                  <div className="mt-2 text-left">
                    <h3 className="font-bold text-lg">{course.courseName}</h3>
                    <p className="line-clamp-3 text-sm">{course.description}</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold text-left">{course.instructor}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.category.map((category, index) => (
                      <button key={index} className="bg-gray-500 text-white px-2 py-1 rounded-md text-sm">{category}</button>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div></>
      )}
    </div>
  );
};

export default ViewCourses;
