import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Have a question, feedback, or an issue with your order?
        Fill out the form below or email us at
        support@vennelamart.com
      </p>

      <form className="space-y-6">

        <div>
          <label className="block font-semibold mb-2">
            Name
          </label>

          <input
            type="text"
            placeholder="Your full name"
            className="w-full border p-4 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border p-4 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Message
          </label>

          <textarea
            rows="6"
            placeholder="How can we help you?"
            className="w-full border p-4 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
        >
          Submit
        </button>

      </form>

    </div>
  );
};

export default Contact;