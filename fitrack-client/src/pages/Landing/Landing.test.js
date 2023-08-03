import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Landing } from '../index';

describe('Landing Page Button', () => {
  it('Should have a button element for the user, to programmatically navigate them to create a new user', () => {
    render(
      /* MemoryRouter usage can be referenced in the react-router-dom
      documentation https://v5.reactrouter.com/web/guides/testing */
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    const buttonElement = screen.getByRole('button', {
      name: 'GET STARTED',
    });
    expect(buttonElement).toBeInTheDocument();
  });
  it('Should read get started', () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    const landingButton = screen.getByText(/get started/i);
    expect(landingButton).toBeInTheDocument();
  });
  // it('should take the user to /createuser page', async () => {
  //   render(
  //     <MemoryRouter>
  //       <Landing />
  //     </MemoryRouter>
  //   );
  //   const button = screen.getByRole('button', { name: 'GET STARTED' });
  //   userEvent.click(button);
  //   await waitFor(() => {
  //     expect(window.location.pathname).toContain('/createuser');
  //   });
  // });
});
