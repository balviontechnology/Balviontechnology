import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import gemImg from "../assets/GEM.jpeg";   // change name if needed
import aimImg from "../assets/AIM.png";   // change name if needed

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);
  if (resume) {
    formData.append("resume", resume);
  }

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    body: formData, 
  });

  const data = await res.json();

  if (data.success) {
    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setResume(null);
  } else {
    alert("Error sending message");
  }
};


  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-indigo-200 opacity-40 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CTA Section */}
        <motion.div
          className="mt-10 mb-20 bg-gradient-to-r from-blue-600 to-indigo-600 
                     text-white py-12 px-6 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Can’t find the right role?
          </h3>

          <p className="text-lg mb-6">
            We’re always looking for passionate people to join our team.  
            Drop us your CV and we’ll get in touch!
          </p>

          {/* <a
            href="#contact"
            className="bg-white text-blue-700 px-6 py-3 rounded-full 
                       font-semibold hover:bg-blue-100 transition"
          >
            Send Your Resume
          </a> */}
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-blue-600">Touch</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Whether you’re a school looking for robotics education or a company
          seeking HR services — we’d love to connect and collaborate.
        </motion.p>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h3>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              {/* Resume Upload */}
              <input
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                className="border border-gray-300 rounded-xl px-4 py-3 bg-white"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right - Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-blue-600" />
                <span>+91  8110054916</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-600" />
                <span>balvion.tech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-600" />
                <span>
                  Balvion Technologies, no 11, 9/8, Poompukar Nagar Street, VKL Nagar, Thudiyalur, Coimbatore, Tamil Nadu 641034
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="text-blue-600" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-64">
              <iframe
                title="Balvion Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6080751288005!2d76.9413098!3d11.067982499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f728c1cbc9dd%3A0x2c6ffa4e28b7ef8d!2sBalvion%20Technologies!5e0!3m2!1sen!2sin!4v1764609111442!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

  {/* Bottom Images Section */}
<div className="mt-20 grid md:grid-cols-2 gap-6">
  {/* Left Image */}
  <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl">
    <img
      src={gemImg}
      alt="Gem"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Image */}
  <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center bg-white">
    <img
      src={aimImg}
      alt="Aim"
      className="object-contain w-full h-full p-6"
    />
  </div>
</div>



    </section>
  );
}
