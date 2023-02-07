import Signup from "../Components/Signup";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('signup test', () => {

    beforeEach(() => {
        render(<MemoryRouter><Signup /></MemoryRouter>);
    });

    describe('should render signup component', () => {

        it(`it should render a first name input`, () => {
            expect(screen.getByPlaceholderText(`first name`)).toBeInTheDocument();
        });

        it(`it should render a last name input`, () => {
            expect(screen.getByPlaceholderText(`last name`)).toBeInTheDocument();
        });

        it(`it should render an email input`, () => {
            expect(screen.getByPlaceholderText(`email`)).toBeInTheDocument();
        });

        it(`it should render a password input`, () => {
            expect(screen.getByPlaceholderText(`password`)).toBeInTheDocument();
        });

        it(`it should render the same password input as above`, () => {
            expect(screen.getByPlaceholderText(`confirmPassword`)).toBeInTheDocument();
        });

        it(`it should render a Sign Up button`, () => {
            expect(screen.getByText(`Sign up`)).toBeInTheDocument();
        });

    });
})