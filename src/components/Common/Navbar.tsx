import { role } from "@/utils/role"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-[--ac-fg] flex items-center justify-between p-4">
      <div className="left-sec">
        <h3 className="text-2xl font-semibold"><span className="text-[--ac-dark]">Edu</span><span className="text-[--ac-light]">Stream</span></h3>
      </div>
      <div className="right-sec flex items-center gap-x-4">
        <ul className="flex items-center gap-x-4 text-[--ac-dark] font-semibold">
          <Link href={"/"}><li>Courses</li></Link>
          <Link href={"/mycourses"}><li>My Courses</li></Link>
          <Link href={"/categories"}><li>Browse Categories</li></Link>
        </ul>
        <Link href={"/profile"}>
          <div className="profile h-12 w-12 bg-gray-300 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/83662512?s=200&v=4" className="object-fit w-full h-full"/>
            {/* user profile pic here */}
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
