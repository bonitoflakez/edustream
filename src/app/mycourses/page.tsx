import { courseData } from "@/utils/courses";

const MyCourses = () => {
  // Filter courses based on their status
  const completedCourses = courseData.filter(course => course.enrolled && course.completed);
  const pendingCourses = courseData.filter(course => course.enrolled && !course.completed);
  const enrolledCourses = courseData.filter(course => course.enrolled);

  return (
    <div className="mx-64 pb-8">
      <h2 className='text-3xl font-bold'>Completed Courses</h2>
      <div className="grid grid-cols-4 gap-8 mt-8 items-start">
        {completedCourses.map((course) => (
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

      <h2 className='text-3xl font-bold mt-8'>Pending Courses</h2>
      <div className="grid grid-cols-4 gap-8 mt-8 items-start">
        {pendingCourses.map((course) => (
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

      <h2 className='text-3xl font-bold mt-8'>Enrolled Courses</h2>
      <div className="grid grid-cols-4 gap-8 mt-8 items-start">
        {enrolledCourses.map((course) => (
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

export default MyCourses
