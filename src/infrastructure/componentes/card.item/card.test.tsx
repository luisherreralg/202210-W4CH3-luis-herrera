import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Card } from './card';
import { characters } from '../../models/characters';

describe('Given Card component', () => {
    const dataTest = [...characters];
    describe('When the component is rendered', () => {
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

    describe('When the "muere" button is clicked', () => {
        test('Then it should change the "Estado" to "Muerto"', () => {
            render(<Card itemArr={dataTest[0]}></Card>);
            // Guardamos en la variable un elemento de tipo button que tenga de relleno el texto 'muere'
            const button = screen.getByRole('button', {
                name: 'muere',
            });
            // Simulamos un click
            fireEvent.click(button);

            //Esperamos que renderize 'muerto' en alguna parte del documento
            expect(screen.getByText(/Muerto/i)).toBeInTheDocument();
        });
    });
});
