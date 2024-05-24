import axios from 'axios';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !message) {
      toast.error('All fields are required');
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        'http://localhost:4000/send/mail',
        { name, email, message },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setName('');
      setEmail('');
      setMessage('');
      toast.success(data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>Contact Us</h1>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label='Name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label='Email'
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label='Message'
          />
        </div>
        <button
          type='submit'
          disabled={loading}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          {loading && <ClipLoader size={20} color='white' />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
