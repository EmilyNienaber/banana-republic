import React, { useState } from 'react';
import styles from './Form.module.css'
import ExtraContent from '../extraContent/ExtraContent';

const Form = ({ extraContentOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    dob: '',
    mobile: '',
    customerId: '',
    membership: 'Classic',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      gender: 'male',
      dob: '',
      mobile: '',
      customerId: '',
      membership: 'Classic',
    });
  };

  const handleSave = () => {
    const alertMessage = JSON.stringify(formData, null, 2);
    alert(alertMessage);
  };

  return (
    <div className={styles.main}>
      <ExtraContent open={extraContentOpen} />
      <form className={styles.form}>
        <div className={styles.formElement}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formElement}>
          <label>Gender:</label>
          <div className={styles.choices}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>
        <div className={styles.formElement}>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formElement}>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formElement}>
          <label>Customer ID:</label>
          <input
            type="text"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formElement}>
          <label>Membership:</label>
          <div className={styles.choices}>
            <label>
              <input
                type="radio"
                name="membership"
                value="Classic"
                checked={formData.membership === 'Classic'}
                onChange={handleChange}
              />
              Classic
            </label>
            <label>
              <input
                type="radio"
                name="membership"
                value="Silver"
                checked={formData.membership === 'Silver'}
                onChange={handleChange}
              />
              Silver
            </label>
            <label>
              <input
                type="radio"
                name="membership"
                value="Gold"
                checked={formData.membership === 'Gold'}
                onChange={handleChange}
              />
              Gold
            </label>
          </div>
        </div>
        <div>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;