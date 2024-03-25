import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children, ...props }) => {
    return (
      <span data-testid={props['data-testid']}>
        {children}
      </span>
    );
  }
}));