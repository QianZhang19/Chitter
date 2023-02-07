import PostPeep from "../components/postPeeps";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Postpeep tests', () => {

    beforeEach(() => {
        render(<MemoryRouter><PostPeep /></MemoryRouter>);
    });

    describe('should render post peep component', () => {

        it(`it should render a peep input`, () => {
            expect(screen.getByPlaceholderText(`write your peep here ...`)).toBeInTheDocument();
        });

        it(`it should render a peep Submit button`, () => {
            expect(screen.getByText(`Peep`)).toBeInTheDocument();
        });

    })
})