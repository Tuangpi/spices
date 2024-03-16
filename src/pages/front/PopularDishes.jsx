import pic4 from "../../assets/test.jpeg";

const PopularDishes = () => {
  const contents = [
    {
      id: 1,
      img: pic4,
      title: "Mohinga",
      content:
        "Considered the national dish of Myanmar, Mohinga is a flavorful fish soup served with rice noodles, fish broth, and an array of garnishes such as hard-boiled eggs, cilantro, fried onions, and crispy fritters. It’s commonly enjoyed as a breakfast dish but can be found throughout the day.",
      detail:
        "Considered the national dish of Myanmar, Mohinga is a flavorful fish soup served with rice noodles, fish broth, and an array of garnishes such as hard-boiled eggs, cilantro, fried onions, and crispy fritters. It’s commonly enjoyed as a breakfast dish but can be found throughout the day.",
    },
    {
      id: 2,
      img: pic4,
      title: "Lahpet Thoke (Tea Leaf Salad)",
      content:
        "Lahpet Thoke is a unique and iconic dish in Myanmar cuisine. It features fermented tea leaves mixed with crunchy nuts, fried garlic, sesame seeds, tomato slices, and dried shrimp. It offers a burst of contrasting flavors and textures.",
      detail:
        "Lahpet Thoke is a unique and iconic dish in Myanmar cuisine. It features fermented tea leaves mixed with crunchy nuts, fried garlic, sesame seeds, tomato slices, and dried shrimp. It offers a burst of contrasting flavors and textures.",
    },
    {
      id: 3,
      img: pic4,
      title: "Ohn No Khao Swè",
      content:
        "This is a comforting and flavorful coconut chicken noodle soup served with yellow egg noodles, tender chicken pieces, and garnished with fried garlic, cilantro, and lime. It’s a popular dish enjoyed across Myanmar.",
      detail:
        "This is a comforting and flavorful coconut chicken noodle soup served with yellow egg noodles, tender chicken pieces, and garnished with fried garlic, cilantro, and lime. It’s a popular dish enjoyed across Myanmar.",
    },
    {
      id: 4,
      img: pic4,
      title: "Shan Noodles",
      content:
        "Originating from the Shan State in eastern Myanmar, Shan noodles are a beloved dish consisting of thin rice noodles topped with a savory meat sauce made from minced pork or chicken, tomatoes, garlic, and chili oil. It’s often served with a side of fresh herbs and lime.",
      detail:
        "Originating from the Shan State in eastern Myanmar, Shan noodles are a beloved dish consisting of thin rice noodles topped with a savory meat sauce made from minced pork or chicken, tomatoes, garlic, and chili oil. It’s often served with a side of fresh herbs and lime.",
    },
    {
      id: 5,
      img: pic4,
      title: "Burmese Biryani",
      content:
        "Burmese Biryani reflects the influence of Indian cuisine in Myanmar. It features fragrant long-grain rice cooked with spices, tender chunks of meat (often chicken or mutton), and garnished with crispy fried onions, boiled eggs, and fresh cucumber slices.",
      detail:
        "Burmese Biryani reflects the influence of Indian cuisine in Myanmar. It features fragrant long-grain rice cooked with spices, tender chunks of meat (often chicken or mutton), and garnished with crispy fried onions, boiled eggs, and fresh cucumber slices.",
    },
    {
      id: 6,
      img: pic4,
      title: "Htamin Jin (Burmese Fermented Rice)",
      content:
        "Htamin Jin is a traditional Burmese dish made with fermented rice mixed with a variety of ingredients such as crispy fried fish, garlic, onions, and cilantro. It’s typically served as a salad and is popular during festivals and special occasions.",
      detail:
        "Htamin Jin is a traditional Burmese dish made with fermented rice mixed with a variety of ingredients such as crispy fried fish, garlic, onions, and cilantro. It’s typically served as a salad and is popular during festivals and special occasions.",
    },
    {
      id: 7,
      img: pic4,
      title: "Nan Gyi Thoke (Rice Noodle Salad)",
      content:
        "Nan Gyi Thoke is a hearty and satisfying noodle salad made with thick rice noodles tossed in a flavorful sauce made from tamarind, fish sauce, and chili, mixed with shredded chicken, crispy fried onions, crushed peanuts, and lime.",
      detail:
        "Nan Gyi Thoke is a hearty and satisfying noodle salad made with thick rice noodles tossed in a flavorful sauce made from tamarind, fish sauce, and chili, mixed with shredded chicken, crispy fried onions, crushed peanuts, and lime.",
    },
    {
      id: 8,
      img: pic4,
      title: "Mont Lin Ma Yar (Sticky Rice Cake)",
      content:
        "Mont Lin Ma Yar is a popular Burmese dessert made from sticky rice flour, coconut milk, and palm sugar. It’s steamed in banana leaves, resulting in a soft, sweet, and aromatic cake that’s often enjoyed as a snack or dessert.",
      detail:
        "Mont Lin Ma Yar is a popular Burmese dessert made from sticky rice flour, coconut milk, and palm sugar. It’s steamed in banana leaves, resulting in a soft, sweet, and aromatic cake that’s often enjoyed as a snack or dessert.",
    },
  ];

  return (
    <section className="w-[90%] m-auto sm:w-[83%] font-Montserrat">
      {contents?.map((content, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-11 w-full gap-x-10 mt-6 md:mt-20">
              <div className="flex items-center justify-center md:col-span-5">
                <img
                  src={content.img}
                  className="object-cover max-w-full rounded-md"
                />
              </div>
              <div className="md:col-span-6 mt-3.5 md:mt-0">
                <p>{content.content}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col-reverse md:grid md:grid-cols-11 w-full gap-x-10  mt-6 md:mt-24">
              <div className="md:col-span-6 mt-3.5 md:mt-0">
                <p>{content.content}</p>
              </div>
              <div className="flex items-center justify-center md:col-span-5">
                <img
                  src={content.img}
                  className="object-cover max-w-full rounded-md"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
export default PopularDishes;