import { Select } from '@consta/uikit/Select';
import { useUnit } from 'effector-react';

import { $chosenFilter, $filterSelect, setFilter } from '../../model';

export const Category = () => {
  const [items, chosenFilter, setFilterEvent] = useUnit([
    $filterSelect,
    $chosenFilter,
    setFilter,
  ]);

  return (
    <Select
      items={items}
      value={chosenFilter}
      onChange={(item) => setFilterEvent(item || items[0])}
    />
  );
};
