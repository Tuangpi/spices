import React from "react";
import pic1 from "../../../assets/1.webp";
import pic2 from "../../../assets/2.webp";
import { Link } from "react-router-dom";

const Content = () => {
  const contents = [
    {
      id: 1,
      img: pic1,
      title: "Mohinga",
      content:
        "Considered the national dish of Myanmar, Mohinga is a flavorful fish soup served with rice noodles, fish broth, and an array of garnishes such as hard-boiled eggs, cilantro, fried onions, and crispy fritters. It’s commonly enjoyed as a breakfast dish but can be found throughout the day.",
      detail:
        "Considered the national dish of Myanmar, Mohinga is a flavorful fish soup served with rice noodles, fish broth, and an array of garnishes such as hard-boiled eggs, cilantro, fried onions, and crispy fritters. It’s commonly enjoyed as a breakfast dish but can be found throughout the day.",
    },
    {
      id: 2,
      img: pic2,
      title: "Lahpet Thoke (Tea Leaf Salad)",
      content:
        "Lahpet Thoke is a unique and iconic dish in Myanmar cuisine. It features fermented tea leaves mixed with crunchy nuts, fried garlic, sesame seeds, tomato slices, and dried shrimp. It offers a burst of contrasting flavors and textures.",
      detail:
        "Lahpet Thoke is a unique and iconic dish in Myanmar cuisine. It features fermented tea leaves mixed with crunchy nuts, fried garlic, sesame seeds, tomato slices, and dried shrimp. It offers a burst of contrasting flavors and textures.",
    },
    {
      id: 3,
      img: pic1,
      title: "Ohn No Khao Swè",
      content:
        "This is a comforting and flavorful coconut chicken noodle soup served with yellow egg noodles, tender chicken pieces, and garnished with fried garlic, cilantro, and lime. It’s a popular dish enjoyed across Myanmar.",
      detail:
        "This is a comforting and flavorful coconut chicken noodle soup served with yellow egg noodles, tender chicken pieces, and garnished with fried garlic, cilantro, and lime. It’s a popular dish enjoyed across Myanmar.",
    },
    {
      id: 4,
      img: pic2,
      title: "Shan Noodles",
      content:
        "Originating from the Shan State in eastern Myanmar, Shan noodles are a beloved dish consisting of thin rice noodles topped with a savory meat sauce made from minced pork or chicken, tomatoes, garlic, and chili oil. It’s often served with a side of fresh herbs and lime.",
      detail:
        "Originating from the Shan State in eastern Myanmar, Shan noodles are a beloved dish consisting of thin rice noodles topped with a savory meat sauce made from minced pork or chicken, tomatoes, garlic, and chili oil. It’s often served with a side of fresh herbs and lime.",
    },
    {
      id: 5,
      img: pic1,
      title: "Burmese Biryani",
      content:
        "Burmese Biryani reflects the influence of Indian cuisine in Myanmar. It features fragrant long-grain rice cooked with spices, tender chunks of meat (often chicken or mutton), and garnished with crispy fried onions, boiled eggs, and fresh cucumber slices.",
      detail:
        "Burmese Biryani reflects the influence of Indian cuisine in Myanmar. It features fragrant long-grain rice cooked with spices, tender chunks of meat (often chicken or mutton), and garnished with crispy fried onions, boiled eggs, and fresh cucumber slices.",
    },
    {
      id: 6,
      img: pic2,
      title: "Htamin Jin (Burmese Fermented Rice)",
      content:
        "Htamin Jin is a traditional Burmese dish made with fermented rice mixed with a variety of ingredients such as crispy fried fish, garlic, onions, and cilantro. It’s typically served as a salad and is popular during festivals and special occasions.",
      detail:
        "Htamin Jin is a traditional Burmese dish made with fermented rice mixed with a variety of ingredients such as crispy fried fish, garlic, onions, and cilantro. It’s typically served as a salad and is popular during festivals and special occasions.",
    },
    {
      id: 7,
      img: pic1,
      title: "Nan Gyi Thoke (Rice Noodle Salad)",
      content:
        "Nan Gyi Thoke is a hearty and satisfying noodle salad made with thick rice noodles tossed in a flavorful sauce made from tamarind, fish sauce, and chili, mixed with shredded chicken, crispy fried onions, crushed peanuts, and lime.",
      detail:
        "Nan Gyi Thoke is a hearty and satisfying noodle salad made with thick rice noodles tossed in a flavorful sauce made from tamarind, fish sauce, and chili, mixed with shredded chicken, crispy fried onions, crushed peanuts, and lime.",
    },
    {
      id: 8,
      img: pic2,
      title: "Mont Lin Ma Yar (Sticky Rice Cake)",
      content:
        "Mont Lin Ma Yar is a popular Burmese dessert made from sticky rice flour, coconut milk, and palm sugar. It’s steamed in banana leaves, resulting in a soft, sweet, and aromatic cake that’s often enjoyed as a snack or dessert.",
      detail:
        "Mont Lin Ma Yar is a popular Burmese dessert made from sticky rice flour, coconut milk, and palm sugar. It’s steamed in banana leaves, resulting in a soft, sweet, and aromatic cake that’s often enjoyed as a snack or dessert.",
    },
  ];
  return (
    <section className="w-[90%] m-auto sm:w-[86%] mt-8 font-Montserrat">
      {contents &&
        contents.map((content, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 lg:gap-x-9">
              <div className="sm:col-span-4 md:col-span-3">
                <img
                  src={content.img}
                  alt="content1"
                  className="rounded-md w-full"
                />
              </div>
              <div className="self-start sm:col-span-8 md:col-span-6">
                <h3 className="my-2.5 sm:mt-0 mt-4 font-medium text-xl">
                  {content.title}
                </h3>
                <p className="text-lg ">{content.content}</p>
                <Link
                  to="/content/detail"
                  state={content}
                  className="px-3 mt-4 cursor-pointer inline-block py-1.5 bg-secondary rounded-md outline-none shadow-sm text-sm text-black border border-slate-200"
                >
                  Read More
                </Link>
              </div>
              <div className="md:col-span-3">ads</div>
            </div>
            <div className="w-3/4 bg-slate-100 h-0.5 rounded-full my-6"></div>
          </React.Fragment>
        ))}
    </section>
  );
};

export default Content;
