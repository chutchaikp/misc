import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './formPage.scss';

export default function FormPage() {
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setSaving(false);
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            className={errors.firstName ? 'error' : ''}
            placeholder="hello"
            {...register('firstName', { required: true })}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className={errors.email ? 'error' : ''}
            placeholder="hello@gmail.com"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
        </div>

        <input type="submit" />
      </form>

      <div className="btn">
        <button
          className={saving ? 'loading' : ' '}
          onClick={handleSubmit(async (d) => {
            try {
              setSaving(true);
              console.log(d);
              await new Promise((r) => setTimeout(r, 5000));
              onSubmit(d);
            } catch (error) {
              setSaving(false);
            }
          })}
        >
          SAVING
        </button>
      </div>
    </div>
  );
}
