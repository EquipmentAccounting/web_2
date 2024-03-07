import { isLinkActive } from '@/shared/lib/is-link-active';
import { styled } from '@stitches/react';
import { NavLink } from 'react-router-dom';

export type LinkProps = {
  to: string;
  text?: string;
};

export const Link = ({ to, text }: LinkProps) => {
  return (
    <StyledLink to={to} type={isLinkActive(to) ? 'active' : undefined}>
      {text}
    </StyledLink>
  );
};

const StyledLink = styled(NavLink, {
  padding: '8px 16px',
  color: '#FFFFFF',
  textDecoration: 'none',
  variants: {
    type: {
      active: {
        backgroundColor: 'background: rgba(255, 255, 255, 0.1);',
      },
    },
  },
  '&:hover': {
    backgroundColor: 'background: rgba(255, 255, 255, 0.1);',
  },
});
