"use client"

import React, { useState } from 'react';
import { categoriesData, courseData } from "@/utils/courses";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    // Toggle selection
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter(item => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  return (
    <div className='mx-64'>
      <h2 className='text-3xl font-bold'>Categories</h2>
      <div className="flex mt-4">
        {categoriesData.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`mr-4 px-4 py-2 rounded-md ${selectedCategory.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <h2 className='text-3xl font-bold mt-8'>Courses</h2>
      <div className="grid grid-cols-4 gap-8 mt-8 items-start">
        {courseData.filter(course => selectedCategory.some(tag => course.category.includes(tag))).map((course) => (
          <button key={course.id}>
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
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;

