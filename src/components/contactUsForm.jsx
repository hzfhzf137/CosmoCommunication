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
    <div className="bg-blue-900 w-screen md:w-1/2 p-8 flex flex-col justify-center">
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit} // Use JavaScript to handle form submission
      >
        <h1 className="text-lg md:text-xl font-bold text-white mb-6 text-center">
          Send Us a Message
        </h1>

        <label className="font-semibold text-white" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          className="p-3 border border-gray-600 rounded bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="font-semibold text-white" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your Email"
          className="p-3 border border-gray-600 rounded bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="font-semibold text-white" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          className="p-3 border border-gray-600 rounded bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="6"
        />

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send'}
          </button>
        </div>
      </form>
      {submitMessage && (
        <div className="mt-4 text-center text-white">{submitMessage}</div>
      )}
    </div>
  );
};

export default ContactUsForm;
