import { Equipment } from '@/shared/types';
import { Text } from '@consta/uikit/Text';
import { styled } from '@stitches/react';
import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';

import { $place, $showRadius } from '../../model';
import { EquipmentItem } from '../atoms';

const items = [
  {
    id: 1,
    name: 'Router AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    category: 'router',
    releaseDate: '2022-01-01',
    sowftwareStartDate: '2022-02-01',
    sowftwareEndDate: '2025-12-31',
    manufacturer: 'https://www.google.co.uk/',
    place: 'Server Room',
    xCoord: 10,
    yCoord: 28,
    waveRadius: 20,
  },
  {
    id: 2,
    name: 'Router B',
    category: 'router',
    releaseDate: '2022-01-01',
    sowftwareStartDate: '2022-02-01',
    sowftwareEndDate: '2025-12-31',
    manufacturer: 'https://www.google.co.uk/',
    place: 'Server Room',
    xCoord: 80,
    yCoord: 32,
    waveRadius: 30,
  },
  {
    id: 3,
    name: 'Компьютер',
    category: 'desktop',
    releaseDate: '2021-05-15',
    sowftwareStartDate: '2021-06-01',
    sowftwareEndDate: '2024-03-12',
    manufacturer: 'https://www.google.co.uk/',
    place: 'Data Center',
    xCoord: 52,
    yCoord: 70,
  },
  {
    id: 4,
    name: 'Какая-то вещичка',
    category: 'Server',
    releaseDate: '2021-05-15',
    sowftwareStartDate: '2021-06-01',
    sowftwareEndDate: '2023-05-31',
    manufacturer: 'https://www.google.co.uk/',
    place: 'Data Center',
    xCoord: 70,
    yCoord: 70,
  },
];

export const Map = () => {
  const [activeItem, setActiveItem] = useState<Equipment | null>(null);

  const [equipment, setEquipment] = useState<Equipment[]>([]);

  const [place, showRadius] = useUnit([$place, $showRadius]);

  useEffect(() => {
    setEquipment(items);
  }, [place?.id]);

  const handleEquipmentClick = (equipment: Equipment) => {
    setActiveItem(equipment);
  };

  return (
    <div>
      <MapContainer>
        <img src={place?.mapUrl} />
        {equipment.map((equipment) => (
          <EquipmentItem
            key={equipment.id}
            showRadius={showRadius || equipment.id === activeItem?.id}
            equipment={equipment}
            onClick={handleEquipmentClick}
          />
        ))}
      </MapContainer>
      {activeItem && <StyledText align='center'>{activeItem.name}</StyledText>}
    </div>
  );
};

const StyledText = styled(Text, {
  marginTop: '12px',
});

const MapContainer = styled('div', {
  width: 'fit-content',
  position: 'relative',
  marginInline: 'auto',
  overflow: 'hidden',
  border: '1px solid black',
  '& > img': {
    width: '60vw',
    maxWidth: '1000px',
  },
});
