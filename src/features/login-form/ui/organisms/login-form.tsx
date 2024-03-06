import { styled } from '@stitches/react';

import { formSubmitted } from '../../model';
import { Field } from '../atoms';
import { FormBottom } from '../molecules';

export const LoginForm = () => {
  return (
    <Form onSubmit={formSubmitted}>
      <Field name='username' type='text' label='Username' />
      <Field name='password' type='password' label='Password' />
      <FormBottom />
    </Form>
  );
};

const Form = styled('form', {
  width: '90%',
  maxWidth: '420px',
  padding: '32px',
  borderRadius: '4px',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});
