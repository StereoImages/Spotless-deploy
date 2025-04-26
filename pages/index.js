'use client';

import React, { useRef } from "react";
//import { Button } from "./components/ui/button";
//import { Card, CardContent } from "./components/ui/card";
//import { Input } from "./components/ui/input";
import { motion } from "framer-motion";

export default function CarDetailingLanding() {
    const quoteRef = useRef(null);
    const servicesRef = useRef(null);
    const Button = ({ className, children, ...props }) => (
      <button className={`rounded-xl px-4 py-2 font-semibold ${className}`} {...props}>
        {children}
      </button>
    );
    const Card = ({ children, className }) => (
      <div className={`border rounded-xl overflow-hidden ${className}`}>{children}</div>
    );
    const scrollToQuote = () => {
      quoteRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToServices = () => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const CardContent = ({ children, className }) => (
      <div className={className}>{children}</div>
    );
    const Input = ({ className, ...props }) => (
      <input
        className={`border border-gray-300 rounded-lg px-4 py-2 ${className}`}
        {...props}
      />
    );
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-primary-500 to-primary-100 text-primary-800 px-4 sm:px-6 max-w-screen-xl mx-auto mt-0">
        <header className="flex flex-col sm:flex-row justify-between items-center py-1 gap-1 sm:gap-0 bg-primary-00 text-white px-4 sm:px-6 rounded-2xl">
          <motion.div
            className="flex items-center gap-1 py-0 mb-0 mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/logo.png" alt="Spotless Logo" className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="text-center sm:text-left mt-2 sm:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Button onClick={scrollToQuote} className="bg-primary-500 text-white hover:bg-primary-900 w-full sm:w-auto">Book Now</Button>
          </motion.div>
        </header>
        <style jsx>{`
          header + .mt-12 {
            margin-top: 1rem; /* Adjust this value to make the gap smaller */
          }
        `}</style>
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/feature-image.jpg" alt="Featured Car" className="rounded-xl shadow-lg w-full max-w-4xl h-auto mt-0" />
        </motion.div>
  
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-9">
          <motion.div 
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, scale : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Bring Your Car Back to Life</h2>
            <p className="text-base sm:text-lg text-white">
              Premium detailing services for all vehicle types. Interior, exterior, and full-service packages available.
            </p>
            <Button onClick={scrollToServices} className="bg-primary-500 hover:bg-primary-800 text-white px-6 py-2 text-base sm:text-lg w-full sm:w-auto">
              View Services
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <img src="/car-detailing.jpg" alt="Car Detailing" className="rounded-2xl shadow-lg w-full h-auto mt-7" />
          </motion.div>
        </main>
  
        
         
            <section className="mt-10 text-center">
          <h3 className="font-heading text-3xl font-bold mb-6 text-white">About Us</h3>
          <p className="text-base sm:text-lg text-white">
              I am a mobile detailer with over 1 year of experience. I have a passion for cars and take pride in my work. I use only the best products and techniques to ensure your car looks its best. Whether you need a quick wash or a full detail, I am here to help.
            </p>
            
        </section>
         
         
  
  
        <section ref={servicesRef} className="mt-10">
          <h3 className="font-heading text-3xl font-bold mb-6 text-center text-white">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Exterior Detailing", "Interior Cleaning", "Full Service Package", "Headlight Restoration"].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <Card className="bg-white rounded-2xl shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-center">{service}</h4>
                    <p className="text-sm text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel purus sit amet nisi cursus.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
  
        <motion.section
          ref={quoteRef}
          className="mt-20 bg-blue-100 p-6 sm:p-10 rounded-2xl shadow-inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl font-semibold text-center mb-6">Get a Free Quote</h3>
          <form
              className="max-w-xl mx-auto grid gap-4"
              action="https://formspree.io/f/mwpokgwr"
              method="POST"
            >
              <Input type="text" name="name" placeholder="Your Name" className="w-full" />
              <Input type="phone" name="Phone Number" placeholder="(000) 000-000" className="w-full" />
              <Input type="email" name="email" placeholder="Email Address" className="w-full" />
              <Input type="text" name="car" placeholder="Car Make & Model" className="w-full" />
              <textarea name="message" placeholder="Additional Information" className="w-full border border-gray-300 rounded-lg px-4 py-2" rows="4"></textarea>
              <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white w-full sm:w-auto">Submit</Button>
          </form>
        </motion.section>
  
        <section className="mt-10 text-center text-blue-900">
          <h4 className="text-xl font-bold mb-2">Contact Us</h4>
          <p className="mb-1">📞 Phone: (224) 315-3130</p>
          <p className="mb-1">📧 Email: contact@spotlessdetailing.com</p>
          <div className="mt-2 flex justify-center gap-4 text-blue-700">
            <a href="https://www.instagram.com/spotlessmobiledetailing" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href="https://www.tiktok.com/@spotlessmobiledetailing" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
          </div>
        </section>
  
        <footer className="mt-20 text-center text-sm text-blue-600">
          &copy; {new Date().getFullYear()} Spotless Mobile Detailing. All rights reserved.
        </footer>
      </div>
    );
  }
  