import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import SearchInput from './searchInput';

describe('SearchInput Component', () => {
  it('renders the search input', () => {
    render(<SearchInput handleSearch={vi.fn()} />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('updates the input value on typing', () => {
    render(<SearchInput handleSearch={vi.fn()} />);

    const input = screen.getByPlaceholderText(/search/i);

    fireEvent.change(input, { target: { value: 'inception' } });
    expect(input).toHaveValue('inception');
  });

  it('calls handleSearch value when form is submitted', () => {
    const mockHandleSearch = vi.fn();

    render(<SearchInput handleSearch={mockHandleSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'inception' } });
    fireEvent.submit(form);

    expect(mockHandleSearch).toHaveBeenCalledWith('inception');
  });
});
