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
    <div className="bg-blue-900 w-screen md:w-1/2 p-4 flex flex-col justify-center md:h-1/2">
      <form 
        className="flex flex-col space-y-3 ml-4 mr-4"
        onSubmit={handleSubmit} // Use JavaScript to handle form submission
      >
        <h1 className="text-md md:text-lg lg:text-xl font-bold text-white mb-4 text-center">SEND YOUR MESSAGE HERE</h1>
        
        <label className="font-semibold text-white" htmlFor="name">NAME</label>
        <input 
          type="text" 
          id="name"
          name="name"
          required 
          placeholder="Name" 
          style={{ 
            padding: '0.5rem', 
            borderColor: '#4a5568', 
            borderRadius: '0.75rem', 
            backgroundColor: '#2b6cb0', 
            color: 'white', 
            width: '75%', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}
        />

        <label className="font-semibold text-white" htmlFor="email">EMAIL</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          placeholder="Email" 
          style={{ 
            padding: '0.5rem', 
            borderColor: '#4a5568', 
            borderRadius: '0.75rem', 
            backgroundColor: '#2b6cb0', 
            color: 'white', 
            width: '75%', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}
        />

        <label className="font-semibold text-white" htmlFor="message">MESSAGE</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Message"
          required 
          style={{ 
            padding: '0.5rem', 
            borderColor: '#4a5568', 
            borderRadius: '0.75rem', 
            backgroundColor: '#2b6cb0', 
            color: 'white', 
            height: '6rem', 
            width: '75%', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}
        />
        
        <div className="flex justify-center mt-4">
          <button 
            type="submit" 
            style={{  
              color: 'white', 
              width: '50%', 
              borderRadius: '0.75rem', 
              padding: '0.5rem 1rem', 
              marginTop: '0.5rem' 
            }}
            className="bg-orange-400 hover:bg-orange-600 transition-colors duration-200"
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
