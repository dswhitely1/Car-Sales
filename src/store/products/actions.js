import {REMOVE_FEATURE, ADD_FEATURE} from "./types";

const addFeature = value => {
    return {
        type: ADD_FEATURE,
        payload: value
    }
};

const removeItem = value => {
    return {
        type: REMOVE_FEATURE,
        payload: value
    }
};

export {addFeature, removeItem};

