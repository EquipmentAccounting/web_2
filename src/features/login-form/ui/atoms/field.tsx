import { FieldProps } from '@/shared/types';
import { TextField } from '@consta/uikit/TextField';
import { useStoreMap } from 'effector-react';

import { $form, fieldUpdate, FieldUpdateType } from '../../model';

const handleChange = fieldUpdate.prepend((event: FieldUpdateType) => ({
  key: event.name,
  value: event.value,
}));

export const Field = ({ name, type, label }: FieldProps) => {
  const value = useStoreMap({
    store: $form,
    keys: [name],
    fn: (values) => values[name] ?? '',
  });

  return (
    <TextField
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={(value) => handleChange({ name, value: value || '' })}
      withClearButton
    />
  );
};
