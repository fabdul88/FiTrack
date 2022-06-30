import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Landing } from '../index';

test('Landing Page should have a button element for the user that is intended to programmatically navigate them to create a new user', () => {
  render(
    /* MemoryRouter usage can be referenced in the react-router-dom
    documentation https://v5.reactrouter.com/web/guides/testing */
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );
  const landingProgrammaticButton = screen.getByTestId(
    'landing programmatic button'
  );
  expect(landingProgrammaticButton).toBeInTheDocument();
});

test('Landing Page button text should read get started', () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );
  const landingButton = screen.getByText(/get started/i);
  expect(landingButton).toBeInTheDocument();
});

test('Landing Page should have a link element present that is intended to change the URL path to /createuser ', () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );
  const landingLink = screen.getByRole('link');
  expect(landingLink).toBeInTheDocument();
});

test('Landing Page link should contain a href attribute /createuser that would navigate the user to create a user name', () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );
  const landingLinkHref = screen.getByRole('link');
  expect(landingLinkHref).toHaveAttribute('href', '/createuser');
});
