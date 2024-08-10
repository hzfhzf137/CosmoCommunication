import React, { useState } from 'react';

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    setIsSubmitting(true); // Set submitting state
    setSubmitMessage(''); // Clear any previous messages

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formspree.io/f/mldrnwag', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message!');
        event.target.reset(); // Optionally reset the form

        // Show the message for 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      } else {
        const error = await response.json();
        console.error('Form submission error:', error);
        setSubmitMessage('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitMessage('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="bg-blue-900 w-screen md:w-1/2 p-4 flex flex-col justify-center h-screen">
      <form 
        className="flex flex-col space-y-3 ml-5 mr-5"
        onSubmit={handleSubmit} // Use JavaScript to handle form submission
      >
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 text-center">SEND YOUR MESSAGE HERE</h1>
        
        <label className="font-semibold text-white" htmlFor="name">NAME</label>
        <input 
          type="text" 
          id="name"
          name="name"
          required 
          placeholder="Name" 
          className="p-2 border border-gray-400 rounded-xl bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500"
        />

        <label className="font-semibold text-white" htmlFor="email">EMAIL</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          placeholder="Email" 
          className="p-2 border border-gray-400 rounded-xl bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500"
        />

        <label className="font-semibold text-white" htmlFor="subject">SUBJECT</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          placeholder="Subject" 
          className="p-2 border border-gray-400 rounded-xl bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:border-gray-500"
        />

        <label className="font-semibold text-white" htmlFor="message">MESSAGE</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Message"
          required 
          className="p-2 border border-gray-400 rounded-xl bg-blue-800 text-white placeholder-gray-300 h-28 focus:outline-none focus:border-gray-500"
        />
        
        <div className="flex justify-center mt-4">
          <button 
            type="submit" 
            className="bg-orange-400 text-white w-2/3 rounded-xl py-2 px-4 mt-2 hover:bg-orange-600 transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send'}
          </button>
        </div>
      </form>
      {submitMessage && <div className="mt-4 text-center text-white">{submitMessage}</div>}
    </div>
  );
};

export default ContactUsForm;
