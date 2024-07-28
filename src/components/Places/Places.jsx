import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/statusofliberty.jpeg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/japan.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Statue of Liberty",
    location: "USA",
    description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in the United States city of New York.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Chureito Pagoda",
    location: "Japan",
    description:
      "Chureito Pagoda is a five-story pagoda located on the mountainside in Fujiyoshida, Japan, offering breathtaking views of Mount Fuji and the surrounding landscape.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "Australia",
    description: "The Sydney Opera House is an iconic performing arts center in Sydney, Australia, celebrated for its unique sail-shaped design and its picturesque location on the Sydney Harbour.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "California,USA",
    description:
      "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry, famed for its iconic Hollywood sign, diverse cultural attractions, and sunny beaches.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "USA",
    description:
      "Las Vegas is a vibrant city in the Mojave Desert of Nevada, famed for its bustling nightlife, 24-hour casinos, luxurious resorts, and world-class entertainment along the iconic Las Vegas Strip.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
