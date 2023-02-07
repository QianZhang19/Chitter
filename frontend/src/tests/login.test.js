import Login from '../Components/Login';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Login tests', () => {

    const mockSetUserData = jest.fn();

    beforeEach(() => {
        render(<MemoryRouter><Login setUserData={mockSetUserData} /></MemoryRouter>);
    });

    describe('should render login component', () => {

        it(`it should render an email input`, () => {
            expect(screen.getByPlaceholderText(`Your email`)).toBeInTheDocument();
        });

        it(`it should render a password input`, () => {
            expect(screen.getByPlaceholderText(`Your password`)).toBeInTheDocument();
        });

        it(`it should render a Login button`, () => {
            expect(screen.getByText(`Log in`)).toBeInTheDocument();
        });

    });
})
