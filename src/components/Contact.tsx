import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formState.name,
            email: formState.email,
            message: formState.message,
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      toast.success('Message sent successfully!');
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormState({ name: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="contact" className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <Toaster position="top-right" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-[#96C93C] transition-all duration-300 hover:text-[#C1FF72] hover:shadow-[0_0_10px_#96C93C] animate-pulse px-4 py-2 rounded-md border border-[#96C93C] hover:bg-[#96C93C] hover:text-white cursor-pointer w-fit mx-auto">
        Get in Touch
      </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          "Have questions or need assistance? We're here to help! Reach out to us and let’s make things happen." 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90EE90] focus:border-transparent transition-all duration-200"
                    placeholder="Name"
                    required
                  />
                </motion.div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90EE90] focus:border-transparent transition-all duration-200"
                    placeholder="email"
                    required
                  />
                </motion.div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90EE90] focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project..."
                    required
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2
                  ${submitStatus === 'loading' ? 'bg-gray-400 cursor-wait' :
                    submitStatus === 'success' ? 'bg-green-500' :
                    submitStatus === 'error' ? 'bg-red-500' :
                    'bg-[#90EE90] hover:bg-[#7FDD7F] active:bg-[#6ECC6E]'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitStatus === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Sent Successfully!</span>
                  </>
                ) : submitStatus === 'error' ? (
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:pl-12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#90EE90]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Visit Us</p>
                    <p className="text-gray-600">8B.F2 ,VNR Apartment,11th West Cross Street,</p>
                    <p className="text-gray-600"> Metha Nagar, Kundrathur, Chennai 600069</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#90EE90]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <p className="text-gray-600">9884138359</p>
                    <p className="text-gray-600">9840000529</p>
                    
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#90EE90]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <p className="text-gray-600">athiscorp@gmail.com</p>

                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;