import { useUnit } from 'effector-react';

import { sendFormFx } from '../../model';
import { Loader, SubmitButton } from '../atoms';

export const FormBottom = () => {
  const isLoading = useUnit(sendFormFx.pending);

  return <>{isLoading ? <Loader /> : <SubmitButton />}</>;
};
