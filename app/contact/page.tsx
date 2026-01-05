"use client";

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ChevronDown, Mail, MapPin, Pencil, Phone, Send, Smartphone, User } from "lucide-react"
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  };

  return (
    <main className="bg-gray-50 pt-30 lg:pt-40">
      <Header theme="light" />

      <div>
        <h1 className="text-center font-outfit text-2xl md:text-4xl lg:text-5xl">Contact Us</h1>
        <ChevronDown className="mx-auto" />
      </div>

      {/* Grid Sectin */}
      <section className="grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-15 pt-6 px-6 md:px-10 xl:px-20 mb-30">
        <div>
          <p className="font-outfit text-gray-700 font-bold text-[13px] lg:text-md">CONTACT US</p>

          <h1 className="font-outfit text-2xl md:text-4xl lg:text-5xl mt-3">
            Have questions? Get in touch!
          </h1>

          <p className="font-jsl text-gray-500 mt-3 md:mt-4 text-[15px] md:text-[16px]">
            We are always open to collaboration, patnerships, and forward-thinking conversations.
          </p>

          <p className="font-jsl text-gray-500 mt-4 text-[15px] md:text-[16px]">
            Whether you are interested in our work, exploring a patnership, or simply want to learn more about what we do, we would love to hear from you.
          </p>

          <div className="font-jsl text-gray-500 text-[15px] md:text-[16px] flex-start gap-3 mt-8">
            <MapPin />
            <p>
              785 15h Street, Office 478 Berlin
            </p>
          </div>

          <div className="text-gray-500 text-[15px] md:text-[16px] flex-start gap-3 mt-6">
            <Smartphone />
            <p className="font-inter font-bold text-black">
               +1 800 555 25 69
            </p>
          </div>

          <div className="font-jsl text-gray-500 text-[15px] md:text-[16px] flex-start gap-3 mt-4">
            <Mail />
            <p>
              orbitrixng@gmail.com
            </p>
          </div>
          
        </div>

        {/* form */}
        <form>
          <div className="relative">
            <User className="absolute top-[12px] md:top-[16px] left-2 text-gray-500" size={20} />
            <input 
              type="text" 
              name="name"
              className="contact-input"
              placeholder="Name"
              value={form.name}
              onChange={handleInput}
            />
          </div>

          <div className="relative mt-8">
            <Mail className="absolute top-[12px] md:top-[16px] left-2 text-gray-500" size={20} />
            <input 
              type="email" 
              name="email"
              className="contact-input"
              placeholder="Email"
              value={form.email}
              onChange={handleInput}
            />
          </div>

          <div className="relative mt-8">
            <Phone className="absolute top-[12px] md:top-[16px] left-2 text-gray-500" size={20} />
            <input 
              type="text" 
              name="phone"
              className="contact-input"
              placeholder="Phone"
              value={form.phone}
              onChange={handleInput}
            />
          </div>

          <div className="relative mt-8">
            <HiInformationCircle className="absolute top-[12px] md:top-[16px] left-2 text-gray-500" size={22} />
            <input 
              type="text" 
              name="subject"
              className="contact-input"
              placeholder="Subject"
              value={form.subject}
              onChange={handleInput}
            />
          </div>

          <div className="relative mt-8">
            <Pencil className="absolute top-[12px] md:top-[16px] left-2 text-gray-500" size={20} />
            <textarea 
              rows={4}
              name="message"
              className="contact-input resize-none pt-8"
              value={form.message}
              onChange={handleInput}
            ></textarea>
          </div>

          <button 
            className="flex-center gap-3 font-jsl text-sm text-white py-3 px-6 bg-stone-500 hover:bg-stone-600 cursor-pointer rounded-full mt-8"
          >
            <Send size={18} />
            <span>Get in touch</span>
          </button>
        </form>
      </section>


      <Footer />
    </main>
  )
}

export default ContactPage