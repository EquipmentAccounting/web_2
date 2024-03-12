import { Equipment } from '@/entities';
import { styled } from '@stitches/react';
import { useUnit } from 'effector-react';

import { Header } from '..';
import { $items } from '../../model';
import { Filter } from './filter';

// TODO: добавить сортировку
export const EquipmentList = () => {
  const equipmentList = useUnit($items);

  return (
    <StyledContainer>
      <Filter />
      <Header />
      {equipmentList.map((equipment) => (
        <Equipment equipment={equipment} key={equipment.id} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
