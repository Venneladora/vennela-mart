import React from "react";

const Profile = () => {

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-6">
        My Profile 👤
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <p><b>Name:</b> {name}</p>

        <p><b>Email:</b> {email}</p>

      </div>

    </div>
  );
};

export default Profile;