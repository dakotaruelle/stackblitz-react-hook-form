import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { Controller, ControllerRenderProps, useForm } from 'react-hook-form';
import { Nav } from './nav';

export function Page2() {
  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Custom onChange</h1>
      </div>

      <CustomOnChangeForm />
    </div>
  );
}

function CustomOnChangeForm() {
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
    defaultValues: { firstname: 'BOB', lastname: 'ANDERSON' },
  });

  const onSubmit = (data: FormProps) => console.log(data);

  function onChange(
    newValue: string,
    field: ControllerRenderProps<FormProps, keyof FormProps>
  ) {
    field.onChange(newValue.toUpperCase());
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstname"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              error={!!errors.firstname}
              helperText={errors.firstname && 'This field is required'}
              onChange={(e) => onChange(e.target.value, field as any)}
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
                {...field}
                label="Last Name"
                error={!!errors.lastname}
                helperText={errors.lastname && 'This field is required'}
                onChange={(e) => onChange(e.target.value, field as any)}
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
