import React from 'react';
import { useForm } from 'react-hook-form';

import './formPage.scss';

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            className={errors.firstName ? 'error' : ''}
            placeholder="bill"
            {...register('firstName', { required: true })}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className={errors.email ? 'error' : ''}
            placeholder="luo@gmail.com"
            {...register('email', { required: true })}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
