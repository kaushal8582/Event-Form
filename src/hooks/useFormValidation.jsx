import React, { useState } from 'react';

const useFormValidation = (formData, attendWithGuest) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (formData.name.trim() === "") {
      errors.name = "Please enter a full name.";
    }

    if (attendWithGuest === null) {
      errors.attendWithGuest = "Please select whether you are attending with a guest.";
    }

    if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (Number(formData.age) <= 0) {
      errors.age = "Please enter a valid age.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return [errors, validate];
};

export default useFormValidation;
