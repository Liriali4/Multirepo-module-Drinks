"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
function Drinks(_a) {
    var selectedCategoria = _a.selectedCategoria;
    var categoriasBebidas = {
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
    var bebidasDaCategoria = categoriasBebidas[selectedCategoria] || [];
    return (react_1.default.createElement(react_2.Box, null,
        react_1.default.createElement(react_2.Text, null,
            "Bebidas da Categoria: ",
            selectedCategoria),
        react_1.default.createElement(react_2.UnorderedList, null, bebidasDaCategoria.map(function (bebida) { return (react_1.default.createElement(react_2.ListItem, { key: bebida }, bebida)); }))));
}
exports.default = Drinks;
;
