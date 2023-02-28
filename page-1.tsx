import * as React from 'react';
import { Nav } from './nav';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

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

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstname"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="First Name"
              error={!!errors.firstname}
              helperText={errors.firstname && 'This field is required'}
              {...field}
            />
          )}
        />

        <div style={{ marginTop: '20px' }}>
          <Controller
            name="lastname"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Last Name"
                error={!!errors.lastname}
                helperText={errors.lastname && 'This field is required'}
                {...field}
              />
            )}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
