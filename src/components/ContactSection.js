import React from "react"

const ContactSection = () => {
  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-10">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
