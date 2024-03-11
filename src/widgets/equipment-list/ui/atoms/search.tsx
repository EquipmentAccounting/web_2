import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { TextField } from '@consta/uikit/TextField';
import { styled } from '@stitches/react';

export const Search = () => {
  return (
    <Input
      type='text'
      placeholder='Поиск'
      view='clear'
      rightSide={IconSearchStroked}
    />
  );
};

const Input = styled(TextField, {
  borderBottom: '1px solid #6b7280',
});
