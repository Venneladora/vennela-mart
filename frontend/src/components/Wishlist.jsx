import React from "react";

const Wishlist = ({
  wishlist,
  removeFromWishlist
}) => {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Wishlist ❤️
      </h1>
<button
  onClick={() => {
    localStorage.removeItem("wishlist");
    window.location.reload();
  }}
  className="bg-red-500 text-white px-4 py-2 rounded-lg mb-5"
>
  Clear Wishlist ❤️
</button>
      {wishlist.length === 0 ? (

        <h2>No Wishlist Items</h2>

      ) : (

        <div className="grid md:grid-cols-3 gap-6">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-white shadow p-5 rounded-xl"
            >
            <img
  src={item.image}
  alt={item.name}
  className="w-full h-40 object-cover rounded-lg"
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/300x200?text=No+Image";
  }}
/>
              <h2 className="font-bold mt-4">
                {item.name}
              </h2>

              <p className="text-green-600">
                ₹{item.price}
              </p>
                <button
  onClick={() => removeFromWishlist(item.id)}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-3"
>
  Remove ❤️
</button>
            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Wishlist;