import { exportEqupment } from '@/shared/lib/export-equipment';
import { printEqupment } from '@/shared/lib/print-equipment';
import { styled } from '@stitches/react';
import { useUnit } from 'effector-react';

import { $items } from '../../model';

export const FileInteraction = () => {
  const equpmentList = useUnit($items);

  return (
    <Container>
      <Link onClick={() => exportEqupment(equpmentList)}>Экспорт</Link>
      <Link onClick={() => printEqupment(equpmentList)}>Печать</Link>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '48px',
});

const Link = styled('span', {
  cursor: 'pointer',
  color: '#2563eb',
});
