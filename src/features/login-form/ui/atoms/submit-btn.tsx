import { Button } from '@consta/uikit/Button';
import { useForm } from 'effector-forms';
import { loginForm } from '../../model';

export const SubmitButton = () => {
  const {eachValid} = useForm(loginForm);

  return <Button type='submit' label='Войти' disabled={!eachValid} />;
};
