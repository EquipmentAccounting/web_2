import { styled } from '@stitches/react';

import { Link } from '../../atoms/nav-link';

export const AsideList = () => {
  return (
    <Nav>
      <Link to='/aquipment' text='Оборудование' />
      <Link to='/map' text='Карта' />
    </Nav>
  );
};

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
