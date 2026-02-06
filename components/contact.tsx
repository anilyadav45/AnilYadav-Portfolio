"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Instagram, Youtube, Twitter } from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#475569] dark:text-[#CBD5E1]">
            Feel free to reach out to me for collaborations or just a friendly
            chat.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 space-y-6"
          >
            {/* Contact Cards */}
            {[
              {
                icon: <Mail className="h-6 w-6 text-white" />,
                title: "Email",
                value: "rebelanil885@gmail.com",
              },
              {
                icon: <Phone className="h-6 w-6 text-white" />,
                title: "Phone",
                value: "+91 8125305482",
              },
              {
                icon: <MapPin className="h-6 w-6 text-white" />,
                title: "Location",
                value: "Chitoor, Ap, India",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 
                           bg-white/70 dark:bg-white/5 
                           backdrop-blur-xl 
                           border border-black/10 dark:border-white/10
                           shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                           hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] 
                           transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-full shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-[#475569] dark:text-[#CBD5E1]">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/anilyadav45"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 
                           bg-white/70 dark:bg-white/5 
                           backdrop-blur-md 
                           border border-black/10 dark:border-white/10
                           hover:bg-[#3B82F6] hover:text-white 
                           dark:hover:bg-[#60A5FA] 
                           transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anilyadav4577/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 
                           bg-white/70 dark:bg-white/5 
                           backdrop-blur-md 
                           border border-black/10 dark:border-white/10
                           hover:bg-[#3B82F6] hover:text-white 
                           dark:hover:bg-[#60A5FA] 
                           transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/anil.yadav_045/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 
               bg-white/70 dark:bg-white/5 
               backdrop-blur-md 
               border border-black/10 dark:border-white/10
               hover:bg-[#E1306C] hover:text-white 
               transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Instagram className="h-6 w-6" />
              </a>

              <a
                href="https://www.youtube.com/@Yadutech45"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 
               bg-white/70 dark:bg-white/5 
               backdrop-blur-md 
               border border-black/10 dark:border-white/10
               hover:bg-red-600 hover:text-white 
               transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Youtube className="h-6 w-6" />
              </a>

              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 
               bg-white/70 dark:bg-white/5 
               backdrop-blur-md 
               border border-black/10 dark:border-white/10
               hover:bg-sky-500 hover:text-white 
               transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <form
              action="https://formsubmit.co/rebelanil885@gmail.com"
              method="POST"
              target="dummyIframe"
              onSubmit={() => {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 5000);
              }}
              className="rounded-2xl p-8 
                         bg-white/70 dark:bg-white/5 
                         backdrop-blur-xl 
                         border border-black/10 dark:border-white/10
                         shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New message from your portfolio!"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg 
                             bg-white/80 dark:bg-white/10 
                             backdrop-blur-md 
                             border border-black/10 dark:border-white/10
                             outline-none transition focus:ring-2 focus:ring-blue-500/50"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full p-3 rounded-lg 
                             bg-white/80 dark:bg-white/10 
                             backdrop-blur-md 
                             border border-black/10 dark:border-white/10
                             outline-none transition focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="mb-6">
                <input
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg 
                             bg-white/80 dark:bg-white/10 
                             backdrop-blur-md 
                             border border-black/10 dark:border-white/10
                             outline-none transition focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  required
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full p-3 rounded-lg resize-none
                             bg-white/80 dark:bg-white/10 
                             backdrop-blur-md 
                             border border-black/10 dark:border-white/10
                             outline-none transition focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-white 
                           bg-gradient-to-r from-blue-500 to-cyan-500 
                           hover:from-blue-600 hover:to-cyan-600 
                           transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>

            <iframe name="dummyIframe" style={{ display: "none" }} />

            {/* Popup */}
            {showPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="rounded-2xl p-8 text-center max-w-sm w-full 
                                bg-white/90 dark:bg-[#1E293B]/90 
                                backdrop-blur-xl 
                                border border-black/10 dark:border-white/10
                                shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <h2 className="text-2xl font-bold text-[#3B82F6] dark:text-[#60A5FA] mb-2">
                    Thanks for reaching out! 🙌
                  </h2>
                  <p className="text-[#475569] dark:text-[#CBD5E1] mb-4">
                    I appreciate your message and will get back to you soon.
                  </p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-2 px-4 py-2 rounded-md text-white 
                               bg-gradient-to-r from-blue-500 to-cyan-500 
                               hover:from-blue-600 hover:to-cyan-600 
                               transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
