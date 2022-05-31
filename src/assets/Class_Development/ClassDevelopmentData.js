//Week 2 of Class
import PokemonApp from "../../PokemonApp";
import CardApp from "../../W2/S1/CardApp";
import ParentApp from "../../W2/S3/ParentApp";
//Week 3 of Class
import ParadigApp from "../../W3/S1/ParadigApp";
export const ClassData = {
    week_one: [
        { id: 1, class_name: "Bienvenido a React", component:""}, 
        { id: 2, class_name: "Qué es React?", component:""},
    ],
    week_two: [
        { id: 4, class_name: "Create React App", component:CardApp},
        { id: 5, class_name: "Pokemon Card", component:PokemonApp,},
        { id: 6, class_name: "Twitter Login Project", component:ParentApp},
    ],
    week_three: [
        { id: 7, class_name: "Paradigmas de Estilo en React", component:ParadigApp},
        { id: 8, class_name: "Stateful Class Components", component:""},
        { id: 9, class_name: "Clase de Repaso", component:""},
    ]
}