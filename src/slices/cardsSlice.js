import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cards: [
        {
            "id": 1,
            "name": "Itchatl Ontoi",
            "description": "Apasionada por el baile y la poesía.",
            "url": "https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 2,
            "name": "Serena Laflor",
            "description": "Amante del senderismo y la fotografía de naturaleza.",
            "url": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 3,
            "name": "Lucas Maravilla",
            "description": "Enamorado de los libros antiguos y los atardeceres en la playa.",
            "url": "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 4,
            "name": "Matías Luminoso",
            "description": "Explorador de culturas y sabores exóticos alrededor del mundo.",
            "url": "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 5,
            "name": "Eduardo Estrella",
            "description": "Entusiasta del cine clásico y los días lluviosos con una buena taza de café.",
            "url": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 6,
            "name": "Luna Brillante",
            "description": "Artista de corazón que encuentra inspiración en las formas y colores de la naturaleza.",
            "url": "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ],
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setCards: (state, action) => {state.cards = action.payload},
        removeCard: (state, action) => {state.cards = state.cards.filter(x => x.id !== action.payload)}
    }
})

export const {setCards, removeCard} = navSlice.actions

export const selectCards = (state) => state.navCards.cards;
 
export default navSlice.reducer