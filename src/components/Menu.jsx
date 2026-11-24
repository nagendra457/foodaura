
import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";

const categories = [
  { id: 1, name: "All", icon: "🍽️" },
  { id: 2, name: "Pizza", icon: "🍕" },
  { id: 3, name: "Burgers", icon: "🍔" },
  { id: 4, name: "Pasta", icon: "🍝" },
  { id: 5, name: "Desserts", icon: "🍰" },
  { id: 6, name: "Drinks", icon: "🥤" },
  {id: 9,name:"Breakfast",icon:"🍲"},
  {id:10,name:"Meals",icon:"🍱"},
  {id:11,name:"Curries",icon:"🥘"}
];

const dishes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    category: "Pizza",
    description: "Fresh mozzarella, tomato and basil.",
    price: 299,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700&auto=format&fit=crop&q=85",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burgers",
    description: "Juicy patty with cheese and fresh vegetables.",
    price: 249,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=85",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    description: "Creamy sauce with herbs and parmesan.",
    price: 279,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&auto=format&fit=crop&q=85",
    tag: "Chef's Choice",
  },
  {
    id: 4,
    name: "Chocolate Dessert",
    category: "Desserts",
    description: "Rich chocolate dessert for sweet moments.",
    price: 159,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=85",
    tag: "Sweet Treat",
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    category: "Pizza",
    description: "Delicious pizza topped with pepperoni.",
    price: 349,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&auto=format&fit=crop&q=85",
    tag: "Popular",
  },
  {
    id: 6,
    name: "Classic French Fries",
    category: "Drinks",
    description: "Crispy golden potato fries.",
    price: 129,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&auto=format&fit=crop&q=85",
    tag: "Favorite",
  },
  {
    id: 7,
    name: "Chocolate Milkshake",
    category: "Drinks",
    description: "Creamy chocolate milkshake.",
    price: 149,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700&auto=format&fit=crop&q=85",
    tag: "Popular",
  },
  {
    id: 8,
    name: "Veggie Burger",
    category: "Burgers",
    description: "Fresh vegetables with a delicious patty.",
    price: 199,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=700&auto=format&fit=crop&q=85",
    tag: "Fresh",
  },
  {
    
  id: 9,
  name: "Uggani",
  category: "Breakfast",
  price: 60,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOEeYgKkRnHi0Pr-rHMdsKiF-Va6qWdA8rE5JJ-o39g&s=10",
  description: "Traditional Rayalaseema puffed rice upma with fresh spices.",
  tag:"Famous"

  },
  {
  id: 17,
  name: "Masala Dosa",
  category: "Breakfast",
  price: 99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1CMDGkew3knCL6qNAmhJvBpi_cZ5WCrAXeMis1A4zA&s=10",
  description: "Crispy golden dosa filled with delicious spiced potato masala.",
  tag:"Yummy"
  },
  {
  id: 18,
  name: "Idly",
  category: "Breakfast",
  price: 40,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PGhp0teq4OoYPMPt4bUNwmahFU3V6b4CWxFYexT9yw&s=10",
  description: "Soft and fluffy steamed idlis served with fresh coconut chutney and hot sambar.",
  tag:"Lovely"
},
{
  id: 19,
  name: "Poori",
  category: "Breakfast",
  price: 60,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ301JAUbz7sloeQ1wLJaBb6fmfMu-ZJeWtjbZzYydDsw&s=10",
  description: "Golden and fluffy deep-fried pooris served with delicious potato masala.",
  tag:"famous"
},
{
  id:20,
  name:"Andhra Meals",
  category:"Meals",
  price:180,
  image:"https://images.openai.com/static-rsc-4/6695UbPFUlM_NbsZx10MrjzPQzSaWMCv05mirxySpV2sged_wwTzPbUT5nqKQlopyQgwLebM01CLsM3OzwP93ijqKL0G9dRB6XmbV9aqoFoadWWHytxeHsDHwg77jqVD0BIbT21e0fh-SmB5gus-hfnRSG3zcp6TDwgqwMIdC7MBK4dXlB4a7VQAeeCH31Bd?purpose=fullsize",
  description:"Andhra Style thali",
  tag:"Famous "
},
{
 id: 24,
  name: "Lemon Rice",
  category: "Meals",
  price: 119,
  description: "South Indian rice with lemon, peanuts and curry leaves.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqz2ksZ5UBgZUb8POhxEMm814_H_8qAortbl_WMncpw&s=10",
  tag:"Must Try"
},
{
  id: 25,
  name: "Curd Rice",
  category: "Meals",
  price: 99,
  description: "Creamy curd rice with a traditional tempering.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RdpUbH9cMFqWHoEwIH58SN-D4TLwyVluXWSgQsKb1Q&s=10",
  tag:"Chief Choice"
},
{
  id: 30,
  name: "Paneer Pulao",
  category: "Meals",
  price: 189,
  description: "Flavorful basmati pulao with soft paneer cubes.",
  image: "https://images.openai.com/static-rsc-4/3s2nSTaKr9vpVHvva7EWuFk2r7iItSx_yW0GDgjpMSXpQKSfm96e7cafhkk8_9vAeQK3Ojf939pUT9bHW3rGOheTt3Ocm4WOaBs9d2wf_vkXvaCgBDl3F26ViNYqrULJVLg-JxvEx7olkqdJQGrPfJDkuBjMKk6Hedkgkf4Gsh3NxJQ5gFTI163E9bXlH3U-?purpose=fullsize",
  tag:"Most popular"
},
{
  id:31,
  name:"Panner Curry",
  category:"Curries",
  price:230,
  image:"https://images.openai.com/static-rsc-4/MbHuGpZc1lYxu_jx4TaMk3xu27xh4kkoC6jD_kkhOoew9zaf8eJYgUBk1LpvuXZNmr0tvqKZrRcykvsT59mpiMu5oz_eQrQJe_TLndqfEgPHe_RtZc1rM_HEfom95ifeTF6qkrYbaU_FM58nlSC8HhF1Co_uE38TAjtcDc7oyM8p44NET6oZ0v4VVcOzJsmD?purpose=fullsize",
  description:"Soft paneer cubes in a rich creamy tomato gravy.",
  tag:"Favorite"
},
{
  id: 39,
  name: "Mushroom Butter Masala",
  category: "Curries",
  price: 229,
  description: "Mushrooms in a rich buttery tomato gravy.",
  image: "https://images.openai.com/static-rsc-4/fZMTUew-CZ8Z_cEYhL_H6kDeJ9D3QB3k95yVcuYACgyQz4d1ScboG7Ray4Io04-1AhpN8RoRL-Cim4NWLHK5hPndgqj7IJfudReQwBok0WllSfgGEgHg2suuGIW3MKbLdZa-OdGimtL5iTMIW6xkaBZwWDjDdj9_FabDDL563QZ9skKhHR7S6--oy_GdRRSi?purpose=fullsize",
  tag:"Famous"
},
{
  id: 40,
  name: "Andhra Tomato Curry",
  category: "Curries",
  price: 129,
  description: "Traditional Andhra-style tangy and spicy tomato curry.",
  image: "https://images.openai.com/static-rsc-4/AApa-epW3lpi4y4MsBPTuOu4yalNZ7KPiXN3esLhnqZf1RhBZ3JM38LDERWOJoSjY7AM8jaCkO93gza0FyfN04eRCv5I7R6G8f2abK4CxnzmE1SmuzzqxCHVFkvI244DOhImlfo3tgvXvkGZ_HBABlpLgslJ9sXvFt1o1TARENHSLxo2MF8223qenjcak_Rl?purpose=fullsize",
  tag:"yummy"
},

];

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get addToCart function from CartContext
  const { addToCart } = useCart();

  // Search and category filtering
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      dish.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="menu-section" id="menu">

      <div className="menu-heading">
        <span className="section-tag">OUR MENU</span>
        <h2>
          Explore Our <span>Delicious Food</span>
        </h2>
        <p>
          Discover freshly prepared dishes made with love.
        </p>
      </div>

      {/* Search Input */}
      <div className="menu-search">
        <input
          type="text"
          placeholder="Search your favourite food..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-card ${
              selectedCategory === category.name ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span>{category.icon}</span>
            <p>{category.name}</p>
          </button>
        ))}
      </div>

      <h3 className="popular-heading">
        Our Popular Dishes
      </h3>

      {/* Food Cards */}
      <div className="dish-grid">
        {filteredDishes.map((dish) => (
          <article className="dish-card" key={dish.id}>

            <div className="dish-image-container">
              <img
                src={dish.image}
                alt={dish.name}
                className="dish-image"
              />
              <span className="dish-tag">
                {dish.tag}
              </span>
            </div>

            <div className="dish-details">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>

              <div className="dish-bottom">
                <strong>₹{dish.price}</strong>

                <button
                  className="add-button"
                  onClick={() => addToCart(dish)}
                >
                  + Add
                </button>
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* No Results */}
      {filteredDishes.length === 0 && (
        <p className="no-results">
          No dishes found. Try another search!
        </p>
      )}

    </section>
  );
}

export default Menu;
