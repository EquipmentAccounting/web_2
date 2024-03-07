export const getCurLocationText = (path: string) => {
  switch (path.toLowerCase()) {
    case '/':
      return 'Оборудование';
    case '/map':
      return 'Карта';
    default:
      return 'Вы потерялись';
  }
};
