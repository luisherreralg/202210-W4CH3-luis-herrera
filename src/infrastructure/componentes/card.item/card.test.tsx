import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './card';
import { characters } from '../../models/characters';

describe('Given Card component', () => {
    describe('When the component is rendered', () => {
        const dataTest = [...characters];
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<Card itemArr={dataTest[0]}></Card>);
        });

        test('Then it should display "Joffrey"', () => {
            const element = screen.getByText(/joffrey/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display "Edad: 40"', () => {
            const element = screen.getByText(/40/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should display "Estado: Vivo"', () => {
            const element = screen.getByText(/vivo/i);
            expect(element).toBeInTheDocument();
        });
    });
});
