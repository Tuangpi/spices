import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section className="font-Montserrat mt-6 sm:mt-3">
      <form onSubmit={handleSubmit} className="w-11/12 sm:max-w-md mx-auto">
        <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm sm:text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded px-3 py-2 text-sm sm:text-base"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded px-3 py-2 text-sm sm:text-base"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm sm:text-base">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Enter Your Message"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded px-3 py-2 text-sm sm:text-base"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default ContactUs;
