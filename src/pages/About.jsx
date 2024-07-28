import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Welcome to Traveller, your ultimate travel companion for unforgettable adventures! 
          We specialize in crafting personalized trip plans and packages that cater to your unique interests and budget. 
          Whether you're dreaming of a tranquil beach getaway, a cultural city tour, or an exhilarating adventure trip,
           we've got you covered.

            At Traveller, we believe that travel should be accessible and enjoyable for everyone.
            Our dedicated team of travel experts works tirelessly to curate a diverse range of travel packages,
            ensuring each journey is filled with memorable experiences and exceptional value.
             From luxurious escapes to budget-friendly vacations, we offer something for every traveler.
          </p>
          <br />
          <p>
          <strong>Why Choose Us?</strong>
          <ul>
            <li><strong>Tailored Trip Plans:</strong> We understand that every traveler is unique. Our custom trip plans are designed to suit your preferences, ensuring a personalized and stress-free travel experience.</li>
            <li><strong>Reasonable Prices:</strong> Enjoy your dream vacation without breaking the bank. Our competitive pricing and exclusive deals make it possible for you to explore the world affordably.</li>
            <li><strong>Expert Guidance:</strong> Our team of experienced travel consultants is here to assist you at every step, providing expert advice and support to make your trip seamless and enjoyable.</li>
            <li><strong>Wide Range of Destinations:</strong> Whether you wish to explore exotic locales or classic destinations, our extensive selection of travel packages covers it all.</li>
          </ul>
          </p>

        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
