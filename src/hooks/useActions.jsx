import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {REMOVE_FEATURE,ADD_FEATURE} from "../store/products/types";

export const useActions = () => {
    const dispatch = useDispatch();
    const removeFeature = useCallback(item=>dispatch({type: REMOVE_FEATURE, payload: item}),[]);
    const addFeature = useCallback(item=>dispatch({type: ADD_FEATURE, payload: item}),[]);

    return [removeFeature, addFeature]
}