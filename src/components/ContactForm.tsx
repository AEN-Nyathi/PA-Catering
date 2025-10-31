'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your API
      console.log('Form submitted:', data);
      
      // For demo, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We&apos;ll get back to you soon.'
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    const message = 'Hello, I have a question about your services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
          <p className="mb-6 text-gray-200">
            Have questions or feedback? We&apos;d love to hear from you. Fill out the form or reach out directly.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-red-500/95 text-xl" />
              <span className="text-white">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-red-500/95 text-xl" />
              <span className="text-white">info@centraleatery.com</span>
            </div>
            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {submitStatus && (
            <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
              <p className={submitStatus.success ? 'text-green-200' : 'text-red-200'}>
                {submitStatus.message}
              </p>
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">Phone</label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-300">{errors.phone.message}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              {...register('message')}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              placeholder="Your message..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-500/95 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
