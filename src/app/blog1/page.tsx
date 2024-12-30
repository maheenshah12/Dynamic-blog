import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";
import cookies from "@/app/assets/cookies.jpg";
import triangle from "@/app/assets/triangle.jpg";
import cheeseball from "@/app/assets/cheese ball.jpg";
import biscuit from "@/app/assets/biscuits.jpg";

const Blog = () => {
  // Blog data array
  const blogData = [
    {
      id: 1,
      title: "Cake Batter Chocolate Chip Cookies",
      image: cookies,
      link: "/blog1/page1",
    },
    {
      id: 2,
      title: "Chocolate Covered Pretzels",
      image: triangle,
      link: "/blog1/page2",
    },
    {
      id: 3,
      title: "Cranberry Pecan Cheese Ball",
      image: cheeseball,
      link: "/blog1/page3",
    },
    {
      id: 4,
      title: "Sweet Vanilla Bean Biscotti",
      image: biscuit,
      link: "/blog1/page4",
    },
  ];

  return (
    <>
    <Header/>
      <div className="bg-white m-11 mt-[40px] py-12 px-3 lg:px-20">
        {/* <div className="bg-"></div> */}
        {/* Dynamically Render Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogData.map((blog) => (
            <div key={blog.id} className="cursor-pointer">
              <Link href={blog.link}>
                {/* Image */}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Title */}
                <h2 className="text-xl lg:text-2xl mt-4 font-serif font-bold hover:text-pink-900">
                  {blog.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
