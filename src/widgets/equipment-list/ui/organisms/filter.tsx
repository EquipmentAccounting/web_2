import { styled } from '@stitches/react';

import { Search } from '../atoms';
import { Category } from '../atoms/category';
import { FileInteraction } from '../molecules';

export const Filter = () => {
  return (
    <Container>
      <Search />
      <FileInteraction />
      <Category />
    </Container>
  );
};

const Container = styled('div', {
  marginBottom: '32px',
  display: 'grid',
  gridTemplateColumns: '3fr 1fr 1fr',
  gap: '20%',
});
