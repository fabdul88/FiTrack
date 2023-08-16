import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CreateUser } from '../index';

describe('Create User, input', () => {
  it('Should initially be empty', () => {
    render(
      <MemoryRouter>
        <CreateUser />
      </MemoryRouter>
    );
    const inputPlaceholder = screen.getByLabelText('USERNAME');
    expect(inputPlaceholder.value).toBe('');
  });
  it('Should have a placeholder', () => {
    render(
      <MemoryRouter>
        <CreateUser />
      </MemoryRouter>
    );
    const inputPlaceholder = screen.getByLabelText('USERNAME');
    expect(inputPlaceholder).toHaveAttribute('placeholder', 'Ex. John Doe');
  });
});

describe('Create User, button', () => {
  it('should be in the Create User page', () => {
    render(
      <MemoryRouter>
        <CreateUser />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'CREATE' });
    expect(button).toBeInTheDocument();
  });
});
