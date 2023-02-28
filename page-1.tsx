import * as React from 'react';
import { Nav } from './nav';
import { useForm } from 'react-hook-form';

export function Page1() {
  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Basic Form</h1>

        <BasicForm />
      </div>
    </div>
  );
}

function BasicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
