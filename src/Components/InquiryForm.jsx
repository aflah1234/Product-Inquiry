import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import '../styles/InquiryForm.css';  // Import the form styles

const InquiryForm = () => {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const newErrors = validateForm(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData(data);
    form.reset();
    navigate('/');  // Redirect if needed or stay on the page
  };

  return (
    <div>
      {!formData ? (
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your inquiry!</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
