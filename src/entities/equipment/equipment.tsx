import { getDaysBetweenDates } from '@/shared/lib/get-days-between-dates';
import { Equipment as EquipmentType } from '@/shared/types';
import { Text } from '@consta/uikit/Text';
import { styled } from '@stitches/react';

type EquipmentProps = {
  equipment: EquipmentType;
};

enum Types {
  warning = 'warning',
  alert = 'alert',
}

const getType = (sowftwareEndDate: string): Types | undefined => {
  const daysBetween = getDaysBetweenDates(
    new Date(),
    new Date(Date.parse(sowftwareEndDate)),
  );
  if (daysBetween < 0) {
    return Types.alert;
  } else if (daysBetween <= 14) {
    return Types.warning;
  }

  return undefined;
};

export const Equipment = ({ equipment }: EquipmentProps) => {
  const type = getType(equipment.sowftwareEndDate);

  return (
    <EquipmentContainer type={type}>
      <Text>{equipment.id}#</Text>
      <Text>{equipment.name}</Text>
      <Text>{equipment.releaseDate}</Text>
      <Text>{equipment.sowftwareStartDate}</Text>
      <Text>{equipment.sowftwareEndDate}</Text>
      <Text>
        <EquipmentLink href={equipment.manufacturer}>
          Производитель
        </EquipmentLink>
      </Text>
      <Text>{equipment.place}</Text>
    </EquipmentContainer>
  );
};

const EquipmentContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 1fr 1fr 1fr 1fr 1fr',
  padding: '16px',
  borderBottom: '1px solid rgba(107, 114, 128, 0.19)',
  variants: {
    type: {
      warning: {
        backgroundColor: 'rgba(251, 191, 36, 0.14)',
      },
      alert: {
        backgroundColor: 'rgba(220, 38, 38, 0.14)',
      },
    },
  },
});

const EquipmentLink = styled('a', {
  color: '#2563eb',
  textDecoration: 'none',
});
