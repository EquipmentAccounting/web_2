import { styled } from '@stitches/react';

import { Link } from '../../atoms';

export const AsideList = () => {
  return (
    <Nav>
      <Link to='/' text='Оборудование' />
      <Link to='/map' text='Карта' />
    </Nav>
  );
};

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
