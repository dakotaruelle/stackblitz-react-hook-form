import * as React from 'react';
import { Nav } from './nav';

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
  return <><div>Hello</div></>
}
