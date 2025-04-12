import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { supabase } from "../lib/supabase";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      toast.success("Message sent successfully!");
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormState({ name: "", email: "", message: "" });
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      toast.error("Failed to send message. Please try again.");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div id="contact" className="pt-16 relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 overflow-hidden">
      <Toaster position="top-right" />

      {/* Full width top image */}
      <div className="relative w-full">
        <img
          src="/img/contact.jpeg"
          alt="City"
          className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 md:px-8">
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[100px] md:pt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-6 inline-block px-6 py-3 rounded-full border-2 border-transparent hover:bg-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer hover:text-white">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            "Have questions or need assistance? We're here to help! Reach out to us and let’s make things happen." 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-green-100 transition-shadow duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field === "name" ? "Your Name" : "Email Address"}
                  </label>
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formState[field as "name" | "email"]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90EE90] focus:border-transparent transition-all duration-300 shadow-sm"
                    placeholder={field === "name" ? "John Doe" : "john@example.com"}
                    required
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <motion.textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90EE90] focus:border-transparent transition-all duration-300 shadow-sm"
                  placeholder="Tell us about your project..."
                  required
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus === "loading" || submitStatus === "success"}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  submitStatus === "loading"
                    ? "bg-gray-400 cursor-wait"
                    : submitStatus === "success"
                    ? "bg-green-500"
                    : submitStatus === "error"
                    ? "bg-red-500"
                    : "bg-green-600 hover:bg-[#7FDD7F] active:bg-[#6ECC6E]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitStatus === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Sent Successfully!</span>
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Error Sending</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:pl-12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6 text-[#90EE90]" />,
                    title: "Visit Us",
                    lines: [
                      "8B.F2, VNR Apartment, 11th West Cross Street,",
                      "Metha Nagar, Kundrathur, Chennai 600069",
                    ],
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-[#90EE90]" />,
                    title: "Call Us",
                    lines: ["9884138359", "9840000529"],
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-[#90EE90]" />,
                    title: "Email Us",
                    lines: ["athiscorp@gmail.com"],
                  },
                ].map((info, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="pt-1">{info.icon}</div>
                    <div>
                      <p className="font-medium text-gray-900">{info.title}</p>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;