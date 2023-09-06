import React from 'react';
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useCategoriasStore } from './State';

export default function Drinks(): JSX.Element{
    const selectedCategoria = useCategoriasStore((state) => state.selectedCategoria);

    const categoriasBebidas = {
        'Bebidas Alcoólicas': [
            'Cerveja', 'Vinho tinto', 'Vinho branco', 'Vodka', 'Whisky', 'Rum', 'Tequila', 'Gin'
        ],
        'Bebidas Não Alcoólicas': [
            'Água', 'Refrigerante', 'Suco de laranja', 'Suco de maçã',
            'Chá gelado', 'Limonada', 'Água de coco', 'Café descafeinado'
        ],
        'Bebidas Quentes': [
            'Café', 'Chá preto', 'Chá verde', 'Chocolate quente',
            'Cappuccino', 'Café expresso', 'Chá de camomila', 'Chai latte'
        ],
        'Bebidas Energéticas': [
            'Red Bull', 'Monster Energy', 'Rockstar Energy', '5-hour Energy',
            'Bang Energy', 'XS Energy', 'NOS Energy Drink', 'G Fuel'
        ]
    };

    const bebidasDaCategoria = categoriasBebidas[selectedCategoria as keyof typeof categoriasBebidas] || [];

    return (
        <Box>
            <Text>
                Bebidas da Categoria: {selectedCategoria}
            </Text>

            <UnorderedList>
                {bebidasDaCategoria.map((bebida: string) => (
                    <ListItem key={bebida}>{bebida}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
};

