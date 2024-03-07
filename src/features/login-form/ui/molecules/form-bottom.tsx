import { useUnit } from 'effector-react';

import { Loader, SubmitButton } from '../atoms';
import { loginFx } from '../../model';

export const FormBottom = () => {
  const isLoading = useUnit(loginFx.pending);

  return <>{isLoading ? <Loader /> : <SubmitButton />}</>;
};
