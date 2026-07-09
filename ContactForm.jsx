import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Github, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your name.';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
    } else if (!emailPattern.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) tempErrors.message = 'Please write a message.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Simulate sending data (API submission mockup)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1800); // 1.8 seconds simulator
  };

  // Adjusting timeout for simulation so the user doesn't wait indefinitely, wait, 1.8 million milliseconds is 30 minutes!
  // I must correct that to 1800 ms (1.8 seconds)! Yes, 1800 is the correct simulation delay. Let's fix that.
  // 1800 instead of 1800000! Let's write the file.

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      {/* Contact Form Bento-styled Wrapper */}
      <div className="bg-white border border-rich-charcoal/10 rounded-3xl p-6 sm:p-10 shadow-sm">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-10 space-y-4"
          >
            <div className="p-4 bg-soft-blush border border-deep-cherry/10 rounded-full text-deep-cherry">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="font-display font-bold text-2xl text-rich-charcoal">
              Transmission Established
            </h3>
            <p className="text-sm text-rich-charcoal/70 max-w-md">
              Thank you, your message has been sent successfully. I will review it and get back to you shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 bg-deep-cherry hover:bg-muted-burgundy text-warm-ivory rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Send Another Signal
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal/70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`px-4 py-3 bg-warm-ivory border ${
                    errors.name ? 'border-red-500' : 'border-rich-charcoal/10'
                  } rounded-2xl text-sm text-rich-charcoal focus:outline-none focus:border-deep-cherry transition-colors duration-300`}
                />
                {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal/70">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`px-4 py-3 bg-warm-ivory border ${
                    errors.email ? 'border-red-500' : 'border-rich-charcoal/10'
                  } rounded-2xl text-sm text-rich-charcoal focus:outline-none focus:border-deep-cherry transition-colors duration-300`}
                />
                {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal/70">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration opportunity, project inquiry, etc."
                className={`px-4 py-3 bg-warm-ivory border ${
                  errors.subject ? 'border-red-500' : 'border-rich-charcoal/10'
                } rounded-2xl text-sm text-rich-charcoal focus:outline-none focus:border-deep-cherry transition-colors duration-300`}
              />
              {errors.subject && <span className="text-xs text-red-500 font-medium">{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Details of your request..."
                className={`px-4 py-3 bg-warm-ivory border ${
                  errors.message ? 'border-red-500' : 'border-rich-charcoal/10'
                } rounded-2xl text-sm text-rich-charcoal focus:outline-none focus:border-deep-cherry transition-colors duration-300 resize-none`}
              />
              {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 py-4 bg-deep-cherry hover:bg-muted-burgundy disabled:bg-deep-cherry/60 text-warm-ivory rounded-2xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm focus:outline-none"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Signal</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Social Links & Info Grid */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white border border-rich-charcoal/10 hover:border-deep-cherry rounded-full hover:text-deep-cherry transition-all duration-300 group"
        >
          <Github className="w-4 h-4 text-rich-charcoal/70 group-hover:text-deep-cherry" />
          <span className="font-semibold text-xs uppercase tracking-wider">GitHub</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white border border-rich-charcoal/10 hover:border-deep-cherry rounded-full hover:text-deep-cherry transition-all duration-300 group"
        >
          <Linkedin className="w-4 h-4 text-rich-charcoal/70 group-hover:text-deep-cherry" />
          <span className="font-semibold text-xs uppercase tracking-wider">LinkedIn</span>
        </a>
        <a
          href="mailto:tharun.p@example.com"
          className="flex items-center gap-2 px-6 py-3 bg-white border border-rich-charcoal/10 hover:border-deep-cherry rounded-full hover:text-deep-cherry transition-all duration-300 group"
        >
          <Mail className="w-4 h-4 text-rich-charcoal/70 group-hover:text-deep-cherry" />
          <span className="font-semibold text-xs uppercase tracking-wider">Email</span>
        </a>
      </div>
    </div>
  );
}
