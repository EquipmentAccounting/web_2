import { Header } from '@/shared/ui/molecules';
import { $isSidebarOpen, Aside } from '@/shared/ui/organisms';
import { styled } from '@stitches/react';
import { useUnit } from 'effector-react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  const isSidebarOpen = useUnit($isSidebarOpen);

  return (
    <main>
      <Aside />
      <StyledContent state={isSidebarOpen ? 'open' : undefined}>
        <Header />
        <Outlet />
      </StyledContent>
    </main>
  );
};

const StyledContent = styled('div', {
  paddingLeft: '5rem',
  variants: {
    state: {
      open: {
        paddingLeft: '380px',
      },
    },
  },
});
