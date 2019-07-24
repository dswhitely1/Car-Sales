import {REMOVE_FEATURE, ADD_FEATURE} from "./types";

const addFeature = value => {
    return {
        type: ADD_FEATURE,
        payload: value
    }
};

const removeFeature = value => {
    return {
        type: REMOVE_FEATURE
    }
};

export {addFeature, removeFeature};

