import {createReducer} from "../../helpers/createReducer";
import {ADD_FEATURE, REMOVE_FEATURE} from "./types";

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        {id: 1, name: 'V-6 engine', price: 1500},
        {id: 2, name: 'Racing detail package', price: 1500},
        {id: 3, name: 'Premium sound system', price: 500},
        {id: 4, name: 'Rear spoiler', price: 250}
    ]
};

const removeFeature = (state, payload) => {
    return {
        ...state,
        additionalPrice: state.additionalPrice = state.additionalPrice - payload.price,
        car: {
            ...state.car,
            features: state.car.features.filter(item => item.id !== payload.id),
        },
        store: [...state.store, payload]
    }
};

const addFeature = (state, payload) => {
    return {
        ...state,
        additionalPrice: state.additionalPrice += payload.price,
        car: {
            ...state.car,
            features: [...state.car.features, payload]
        },
        store: state.store.filter(item => item.id !== payload.id)
    };
};

export default createReducer(initialState, {
    [REMOVE_FEATURE]: removeFeature,
    [ADD_FEATURE]: addFeature
});