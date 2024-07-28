import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/japan.jpg";
import Img2 from "../../assets/places/statusofliberty.jpeg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    author: "Abhishek",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in the United States city of New York",
    author: "Abhishek",
    date: "May 15, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Chureito Pagoda is a five-story pagoda located on the mountainside in Fujiyoshida, Japan, offering breathtaking views of Mount Fuji and the surrounding landscape.",
    author: "Abhishek",
    date: "May 26, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
