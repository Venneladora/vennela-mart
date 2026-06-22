import React, { useEffect, useState } from "react";
import axios from "axios";
import dragonfruit from "../assets/images/dragonfruit.png";
import sapota from "../assets/images/sapota.png";
import jackfruit from "../assets/images/jackfruit.png";
import plum from "../assets/images/plum.png";
import starfruit from "../assets/images/starfruit.png";
import mulberry from "../assets/images/mulberry.png";
import gooseberry from "../assets/images/gooseberry.png";
import raspberry from "../assets/images/raspberry.png";
import blackberry from "../assets/images/blackberry.png";
import avocado from "../assets/images/avocado.png";
import pear from "../assets/images/pear.png";
import spinach from "../assets/images/vegetables/spinach.png";
import fenugreek from "../assets/images/vegetables/fenugreek.png";
import coriander from "../assets/images/vegetables/coriander.png";
import mint from "../assets/images/vegetables/mint.png";
import broccoli from "../assets/images/vegetables/broccoli.png";
import mushroom from "../assets/images/vegetables/mushroom.png";
import greenpeas from "../assets/images/vegetables/greenpeas.png";
import springonion from "../assets/images/vegetables/springonion.png";
import carrot from "../assets/images/vegetables/carrot.png";
import cauliflower from "../assets/images/vegetables/cauliflower.png";
import cucumber from "../assets/images/vegetables/cucumber.png";
import milk from "../assets/images/dairy/milk.png";
import curd from "../assets/images/dairy/curd.png";
import butter from "../assets/images/dairy/butter.png";
import cheese from "../assets/images/dairy/cheese.png";
import paneer from "../assets/images/dairy/paneer.png";
import ghee from "../assets/images/dairy/ghee.png";
import lassi from "../assets/images/dairy/lassi.png";
import buttermilk from "../assets/images/dairy/buttermilk.png";
import dairymilk from "../assets/images/chocolates/dairymilk.png";
import kitkat from "../assets/images/chocolates/kitkat.png";
import snickers from "../assets/images/chocolates/snickers.png";
import fivestar from "../assets/images/chocolates/fivestar.png";
import perk from "../assets/images/chocolates/perk.png";
import munch from "../assets/images/chocolates/munch.png";
import milkybar from "../assets/images/chocolates/milkybar.png";
import galaxy from "../assets/images/chocolates/galaxy.png";
import hersheys from "../assets/images/chocolates/hersheys.png";
import bournville from "../assets/images/chocolates/bournville.png";
import mars from "../assets/images/chocolates/mars.png";
import temptations from "../assets/images/chocolates/temptations.png";
import orangejuice from "../assets/images/drinks/orangejuice.png";
import applejuice from "../assets/images/drinks/applejuice.png";
import mangojuice from "../assets/images/drinks/mangojuice.png";
import vanilla from "../assets/images/icecreams/vanilla.png";
import chocolateicecream from "../assets/images/icecreams/chocolateicecream.png";
import strawberryicecream from "../assets/images/icecreams/strawberryicecream.png";
import butterscotch from "../assets/images/icecreams/butterscotch.png";
import kulfi from "../assets/images/icecreams/kulfi.png";
import mangoicecream from "../assets/images/icecreams/mangoicecream.png";
import blackcurrant from "../assets/images/icecreams/blackcurrant.png";
import coneicecream from "../assets/images/icecreams/coneicecream.png";
import chocobar from "../assets/images/icecreams/chocobar.png";

import pepsi from "../assets/images/drinks/pepsi.png";
import cocacola from "../assets/images/drinks/cocacola.png";
import sprite from "../assets/images/drinks/sprite.png";
import fanta from "../assets/images/drinks/fanta.png";
import maaza from "../assets/images/drinks/maaza.png";
import bread from "../assets/images/bakery/bread.png";
import brownbread from "../assets/images/bakery/brownbread.png";
import burgerbun from "../assets/images/bakery/burgerbun.png";
import cake from "../assets/images/bakery/cake.png";
import donut from "../assets/images/bakery/donut.png";

import croissant from "../assets/images/bakery/croissant.png";
import garlicbread from "../assets/images/bakery/garlicbread.png";
import muffin from "../assets/images/bakery/muffin.png";
import cookies from "../assets/images/bakery/cookies.png";
import creamroll from "../assets/images/bakery/creamroll.png";
import sevenup from "../assets/images/drinks/sevenup.png";
import limca from "../assets/images/drinks/limca.png";
import thumbsup from "../assets/images/drinks/thumbsup.png";
import redbull from "../assets/images/drinks/redbull.png";
import coconutwater from "../assets/images/drinks/coconutwater.png";
import {
  FaStar,
  FaShoppingCart,
  FaHeart
} from "react-icons/fa";

const Products = ({
  addToCart,
  search,
  addToWishlist
}) => {
  const [selectedCategory, setSelectedCategory] =
  useState("Fruits");
const productImages = {
  Apple: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
  Banana: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
  Orange: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400",
  Mango: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=400",
  Pineapple: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400",
  Grapes: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400",
  Watermelon: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400",

  Guava: "https://upload.wikimedia.org/wikipedia/commons/0/02/Guava_ID.jpg",

  Papaya: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=400",

  Pomegranate: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400",

  Kiwi: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400",

  "Dragon Fruit": dragonfruit,
Sapota: sapota,
Jackfruit: jackfruit,
Plum: plum,
Fenugreek: fenugreek,
Coriander: coriander,
Mint: mint,
Broccoli: broccoli,
Mushroom: mushroom,
"Green Peas": greenpeas,
"Spring Onion": springonion,
"Star Fruit": starfruit,
Mulberry: mulberry,
Gooseberry: gooseberry,
Raspberry: raspberry,
Blackberry: blackberry,
Avocado: avocado,
Milk: milk,
Curd: curd,
Butter: butter,
Cheese: cheese,
Paneer: paneer,
Ghee: ghee,
Lassi: lassi,
Buttermilk: buttermilk,
Pear: pear,
Carrot: carrot,
Cauliflower: cauliflower,
Cucumber: cucumber,
"Dairy Milk": dairymilk,
KitKat: kitkat,
Snickers: snickers,
"Five Star": fivestar,
Perk: perk,
Munch: munch,
"Milky Bar": milkybar,
Galaxy: galaxy,
Hersheys: hersheys,
Bournville: bournville,
Mars: mars,
Temptations: temptations,
"Orange Juice": orangejuice,
"Apple Juice": applejuice,
"Mango Juice": mangojuice,
"Vanilla Ice Cream": vanilla,
"Chocolate Ice Cream": chocolateicecream,
"Strawberry Ice Cream": strawberryicecream,
"Butterscotch Ice Cream": butterscotch,
Kulfi: kulfi,
"Mango Ice Cream": mangoicecream,
"Black Currant": blackcurrant,
"Cone Ice Cream": coneicecream,
"Choco Bar": chocobar,
Pepsi: pepsi,
"Coca Cola": cocacola,
Sprite: sprite,
Fanta: fanta,
Maaza: maaza,
Bread: bread,
"Brown Bread": brownbread,
"Burger Bun": burgerbun,
Cake: cake,
Donut: donut,
Spinach: spinach,
Croissant: croissant,
"Garlic Bread": garlicbread,
Muffin: muffin,
Cookies: cookies,
"Cream Roll": creamroll,
"7UP": sevenup,
Limca: limca,
"Thumbs Up": thumbsup,
"Red Bull": redbull,
"Coconut Water": coconutwater,
Tomato:
"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400",

Potato:
"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",

Onion:
"https://images.unsplash.com/photo-1508747703725-719777637510?w=400",

Cabbage:
"https://images.unsplash.com/photo-1611105637889-3afd7295bdbf?w=400",

Beans:
"https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400",

Capsicum:
"https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400",

Beetroot:
"https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=400",

};
  const [products, setProducts] = useState([]);
  useEffect(() => {

    axios.get("https://vennela-mart-production.up.railway.app/products")

      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => {
        console.log(error);
      });

  }, []);

  const filteredProducts = products.filter((product) => {

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes(search.toLowerCase());

 const matchesCategory =
  product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
return (
    <section
  id="products"
  className="py-20 px-6 md:px-12 bg-gray-50 min-h-screen"
>

      {/* Heading */}
      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold text-gray-800">
          Grocery Store 🛒
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">

  {[
    "Fruits",
    "Vegetables",
    "Dairy",
    "Chocolates",
    "Drinks",
    "Ice Creams",
    "Bakery"
  ].map((category) => (

    <button
      key={category}
      onClick={() =>
        setSelectedCategory(category)
      }
      className={
  selectedCategory === category
    ? "bg-green-600 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-md"
    : "bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-full text-lg font-semibold hover:bg-green-50"
}
    >
      {category}
    </button>

  ))}

</div>


      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-3xl p-5 shadow-lg border hover:shadow-2xl hover:scale-105 transition duration-300"
          >

            {/* Wishlist */}
            <div className="flex justify-end">

          <button
onClick={() =>
  addToWishlist({
    ...product,
    image: productImages[product.name] || product.image
  })
}
  className="bg-pink-500 text-white px-4 py-2 rounded-xl"
>
  ❤️ Wishlist
</button>

            </div>

           {/* Image */}
<div className="flex justify-center">

  <img
    src={productImages[product.name] || product.image}
    alt={product.name}
    className="w-40 h-40 object-cover rounded-2xl"
  />

</div>

            {/* Content */}
            <div className="mt-5">

              <h2 className="text-lg font-bold text-gray-800">

                {product.name}

              </h2>

              <p className="text-sm text-gray-500 mt-1">

                {product.category}

              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 mt-2">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>
<p className="text-sm text-gray-500 mt-1">
  {product.category}
</p>

<p className="text-sm text-blue-600 font-semibold">
  {product.weight}
</p>
              {/* Price */}
              <div className="flex justify-between items-center mt-5">

                <p className="text-2xl font-bold text-green-600">

                  ₹{product.price}

                </p>

                <button
                 onClick={() =>
  addToCart({
    ...product,
    image: productImages[product.name] || product.image
  })
}
                >

                  <FaShoppingCart />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Products;