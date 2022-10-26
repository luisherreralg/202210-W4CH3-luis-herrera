import React from 'react';
import { render, screen } from '@testing-library/react';
import { List } from './list';

describe('Given List component', () => {
    describe('When the component is rendered', () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<List></List>);
        });

        test('Then it should display "Joffrey"', () => {
            const element = screen.getByText(/joffrey/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display "Jaime"', () => {
            const element = screen.getByText(/jaime/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display "Daenerys"', () => {
            const element = screen.getByText(/daenerys/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display "Tyrion"', () => {
            const element = screen.getByText(/Tyrion/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display "Bronn"', () => {
            const element = screen.getByText(/Bronn/i);
            expect(element).toBeInTheDocument();
        });
    });
});
