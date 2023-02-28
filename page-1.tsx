import * as React from 'react';
import { Nav } from './nav';
import { Controller, useForm } from 'react-hook-form';

export function Page1() {
  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Basic Form</h1>
      </div>
      <BasicForm />
    </div>
  );
}

function BasicForm() {
  type FormProps = {
    firstname: string;
    lastname: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: { firstname: 'Bob', lastname: 'Anderson' },
  });

  const onSubmit = (data: FormProps) => console.log(data);

  console.log(watch('firstname')); // watch input value by passing the name of it

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <Controller
            name="firstname"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div style={{ marginTop: '20px' }}>
          <div>
            <label>Lastname</label>
          </div>
          <input {...register('lastname', { required: true })} />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.lastname && <span>This field is required</span>}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <input style={{ color: 'black' }} type="submit" />
        </div>
      </form>
    </div>
  );
}
