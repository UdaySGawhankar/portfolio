"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      // Replace with your actual Render API URL
      const response = await fetch("https://portfolio-yeh1.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setButtonText("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setButtonText("Failed to send.");
      }
    } catch (error) {
      setButtonText("Network Error.");
    }
    
    // Reset button after 3 seconds
    setTimeout(() => setButtonText("Send Message"), 3000);
  };

  return (
    <section id="contact" className="py-24 px-8 md:px-24 bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-50">
          <span className="text-emerald-400 font-mono text-2xl mr-2">04.</span> 
          Get In Touch
        </h2>
        <p className="text-slate-400 mb-12 leading-relaxed">
          I am currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is open!
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-emerald-400 mb-2">Name</label>
            <input 
              type="text" id="name" required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-mono text-emerald-400 mb-2">Email</label>
            <input 
              type="email" id="email" required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-mono text-emerald-400 mb-2">Message</label>
            <textarea 
              id="message" rows={5} required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold py-3 px-8 rounded-md transition-colors disabled:opacity-50"
            disabled={buttonText !== "Send Message"}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}