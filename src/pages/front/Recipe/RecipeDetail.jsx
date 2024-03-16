import { useLocation, useParams } from "react-router-dom";
import recepes1 from "../../../assets/1.jpg";

const detail = [
  {
    img: recepes1,
    title: "Mohinga",
    title_pre:
      "Mohinga is a beloved and iconic dish in Myanmar cuisine, often enjoyed as a breakfast staple but also served throughout the day. While the exact recipe can vary by region and personal preference, here's a basic recipe for preparing Mohinga:",
    ingredient: "Ingredients:",
    ingredient_list: [
      {
        title: "For the Fish Broth:",
        ingredients: [
          "500g white fish fillets (such as catfish or tilapia)",
          "2 onions, chopped",
          "4 cloves garlic, minced",
          "2-inch piece of ginger, sliced",
          "2 stalks lemongrass, bruised",
          "1 teaspoon ground turmeric<",
          "1 teaspoon paprika or chili powder",
          "6 cups water",
          "Salt to taste",
        ],
      },
      {
        title: "For the Soup Base:",
        ingredients: [
          "2 tablespoons peanut oil or vegetable oil",
          "2 onions, finely chopped",
          "4 cloves garlic, minced",
          "2-inch piece of ginger, grated",
          "1 tablespoon fish sauce",
          "1 teaspoon shrimp paste (optional)",
          "2 tablespoons chickpea flour or rice flour",
          "1 tablespoon ground rice powder (to thicken the soup)",
          "1 teaspoon ground turmeric",
          "1 teaspoon paprika or chili powder",
          "Salt to taste",
        ],
      },
      {
        title: "For Serving:",
        ingredients: [
          "Cooked rice vermicelli noodles ",
          "Sliced hard-boiled eggs",
          "Sliced onions",
          "Chopped cilantro",
          "Thinly sliced green onions",
          "Thinly sliced lime or lemon",
          "Crushed crispy fried lentils or chickpeas (optional)",
          "Fish sauce and chili flakes or powder for seasoning",
        ],
      },
    ],
    instruction: "Instructions:",
    instruction_list: [
      {
        title: "Prepare the Fish Broth:",
        instruction_p: [
          "In a large pot, combine the fish fillets, chopped onions, minced garlic, sliced ginger, lemongrass, ground turmeric, paprika or chili powder, and water.",
          "Bring the mixture to a boil, then reduce the heat and let it simmer for about 30-40 minutes until the fish is cooked and the flavors have infused into the broth.",
          "Once done, remove the fish fillets from the broth and set aside. Strain the broth through a fine-mesh sieve, discarding the solids.",
        ],
      },
      {
        title: "Prepare the Soup Base:",
        instruction_p: [
          "In a separate pot, heat the oil over medium heat. Add the finely chopped onions, minced garlic, and grated ginger. Sauté until the onions are soft and translucent.",
          "Stir in the fish sauce, shrimp paste (if using), chickpea flour or rice flour, ground rice powder, ground turmeric, and paprika or chili powder. Cook for a few minutes until fragrant and well combined.",
          "Gradually pour in the strained fish broth, stirring continuously to prevent lumps from forming. Bring the mixture to a gentle simmer and let it cook for another 20-30 minutes, stirring occasionally, until the soup thickens slightly. Adjust the seasoning with salt as needed.",
        ],
      },
      {
        title: "Assemble the Mohinga:",
        instruction_p: [
          "Flake the cooked fish fillets into bite-sized pieces and add them back into the soup base. Let the soup simmer for a few more minutes to allow the flavors to meld together.",
          "To serve, place a portion of cooked rice vermicelli noodles in each bowl. Ladle the hot soup over the noodles, making sure to include plenty of fish and broth.",
          "Garnish each bowl with sliced hard-boiled eggs, sliced onions, chopped cilantro, thinly sliced green onions, and a squeeze of lime or lemon juice.",
          "Optionally, sprinkle crushed crispy fried lentils or chickpeas over the top for added texture and flavor.",
          "Serve the Mohinga hot, with fish sauce and chili flakes or powder on the side for diners to adjust the seasoning according to their taste preferences.",
          "Enjoy your homemade Mohinga, a delicious and comforting taste of Myanmar's culinary heritage!",
        ],
      },
    ],
  },
  {
    img: recepes1,
    title: "Lahpet Thoke (Tea Leaf Salad)",
    title_pre:
      "Lahpet Thoke, also known as Tea Leaf Salad, is a unique and flavorful dish from Myanmar that combines fermented tea leaves with various crunchy and savory ingredients. Here's a traditional recipe for preparing Lahpet Thoke:",
    ingredient: "Ingredients:",
    ingredient_list: [
      {
        title: "For the Salad:",
        ingredients: [
          "1 cup fermented tea leaves (available in Asian grocery stores or online)",
          "2 tomatoes, diced",
          "1/2 cup shredded cabbage",
          "1/4 cup shredded carrots",
          "1/4 cup chopped green beans",
          "1/4 cup roasted peanuts, roughly chopped",
          "2 tablespoons toasted sesame seeds",
          "2 tablespoons fried garlic slices",
          "2 tablespoons fried yellow split peas (optional)",
          "2-3 fresh green chilies, thinly sliced (adjust to taste)",
          "2 tablespoons fish sauce",
          "2 tablespoons lime juice",
          "2 tablespoons peanut oil or vegetable oil",
        ],
      },
    ],
    instruction: "Instructions:",
    instruction_list: [
      {
        title: "Prepare the Fermented Tea Leaves:",
        instruction_p: [
          "If using whole fermented tea leaves, rinse them under cold water to remove excess salt and bitterness. Squeeze out any excess moisture and set aside. If the tea leaves are in a tightly packed block, gently separate them with your fingers or a fork.",
        ],
      },
      {
        title: "Prepare the Salad Ingredients:",
        instruction_p: [
          "In a large mixing bowl, combine the fermented tea leaves, diced tomatoes, shredded cabbage, shredded carrots, chopped green beans, chopped green chilies, chopped peanuts, toasted sesame seeds, fried garlic slices, and fried yellow split peas (if using). Toss gently to combine.",
        ],
      },
      {
        title: "Make the Dressing:",
        instruction_p: [
          "In a small bowl, whisk together the fish sauce, lime juice, and peanut oil until well combined. Adjust the seasoning to taste, adding more fish sauce or lime juice if desired.",
        ],
      },
      {
        title: "Assemble the Salad:",
        instruction_p: [
          "Pour the dressing over the salad mixture and toss gently to coat the ingredients evenly with the dressing.Allow the salad to sit for about 10-15 minutes to allow the flavors to meld together.",
        ],
      },
      {
        title: "Serve the Lahpet Thoke:",
        instruction_p: [
          "Transfer the prepared Lahpet Thoke to a serving dish or individual plates. Garnish with additional toasted sesame seeds, chopped peanuts, and fried garlic slices if desired. Lahpet Thoke is traditionally served at room temperature or slightly chilled. Enjoy as a refreshing and flavorful appetizer or side dish. Lahpet Thoke offers a unique combination of textures and flavors, with the tangy and slightly bitter notes of the fermented tea leaves complementing the crunchy vegetables and savory dressing. It's a must-try dish for anyone exploring the diverse flavors of Myanmar cuisine!",
        ],
      },
    ],
  },
  {
    img: recepes1,
    title: "Ohn No Khao Swè (Coconut Chicken Noodle Soup)",
    title_pre:
      "Ohn No Khao Swè, also known as Coconut Chicken Noodle Soup, is a comforting and flavorful dish from Myanmar. Here's a traditional recipe for preparing Ohn No Khao Swè:",
    ingredient: "Ingredients:",
    ingredient_list: [
      {
        title: "For the Soup Base:",
        ingredients: [
          "500g boneless chicken breast or thighs, thinly sliced",
          "4 cups coconut milk",
          "4 cups chicken broth",
          "2 onions, finely chopped",
          "4 cloves garlic, minced",
          "2-inch piece of ginger, grated",
          "2 tablespoons vegetable oil",
          "2 teaspoons ground turmeric",
          "1 teaspoon paprika or chili powder",
          "2 tablespoons fish sauce",
          "Salt to taste",
        ],
      },
      {
        title: "For Serving:",
        ingredients: [
          "Cooked egg noodles or rice noodles",
          "Sliced hard-boiled eggs",
          "Thinly sliced onions",
          "Chopped cilantro",
          "Fried garlic slices",
          "Lime wedges",
          "Chili flakes or powder (optional)",
        ],
      },
    ],
    instruction: "Instructions:",
    instruction_list: [
      {
        title: "Prepare the Soup Base:",
        instruction_p: [
          "In a large pot, heat the vegetable oil over medium heat. Add the chopped onions, minced garlic, and grated ginger. Sauté until the onions are soft and translucent.",
          "Add the thinly sliced chicken to the pot and cook until lightly browned on all sides. Stir in the ground turmeric and paprika or chili powder, coating the chicken and onions evenly with the spices.",
          "Pour in the coconut milk and chicken broth, stirring to combine. Bring the mixture to a gentle simmer and let it cook for about 15-20 minutes until the chicken is cooked through and tender.",
          "Stir in the fish sauce and season with salt to taste. Adjust the seasoning as needed.",
        ],
      },
      {
        title: "Prepare the Noodles:",
        instruction_p: [
          "While the soup is simmering, cook the egg noodles or rice noodles according to the package instructions until al dente. Drain and set aside.",
        ],
      },
      {
        title: "Assemble the Ohn No Khao Swè:",
        instruction_p: [
          "To serve, place a portion of cooked noodles in each serving bowl.",
          "Ladle the hot coconut chicken soup over the noodles, making sure to include plenty of chicken and broth.",
          "Garnish each bowl with sliced hard-boiled eggs, thinly sliced onions, chopped cilantro, and fried garlic slices.",
          "Squeeze a wedge of lime over the top of each bowl and sprinkle with chili flakes or powder if desired.",
          "Serve the Ohn No Khao Swè hot, with additional lime wedges and chili flakes on the side for diners to adjust the seasoning according to their taste preferences.",
          "Enjoy the comforting and aromatic flavors of Ohn No Khao Swè, a classic dish that captures the essence of Myanmar's culinary heritage!",
        ],
      },
    ],
  },
];

const RecipeDetail = () => {
  const param = useParams();
  return (
    <section className="w-[90%] m-auto sm:w-[88%] md:w-[85%] lg:w-[80%] font-Montserrat">
      {param.id && (
        <>
          <div>{detail[param.id].title}</div>
          <div>{detail[param.id].title_pre}</div>
          <div>
            <img src={detail[param.id].img} />
          </div>
          <h2>{detail[param.id].ingredient}</h2>

          {detail[param.id].ingredient_list?.map((ingredient, index) => (
            <div key={index}>
              <h3>{ingredient.title}</h3>
              <ul>
                {ingredient.ingredients.map((l, index) => (
                  <li key={index}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
          <h2>{detail[param.id].instruction}</h2>
          {detail[param.id].instruction_list.map((instruction, i) => (
            <div key={i}>
              <h3>{instruction.title}</h3>
              {instruction.instruction_p.map((ins, i) => (
                <p key={i}>{ins}</p>
              ))}
            </div>
          ))}
        </>
      )}
    </section>
  );
};
export default RecipeDetail;
