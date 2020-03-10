import React from 'react';
import {useSelector} from 'react-redux';
import {StoreProvider} from "./context/StoreFunctions";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {useActions} from "./hooks/useActions";

const App = () => {
    const state = useSelector(state => state.products);
    const [removeFeature, buyItem] = useActions();

    return (
        <StoreProvider value={{removeFeature, buyItem}}>
            <div className='boxes'>
                <div className='box'>
                    <Header car={state.car}/>
                    <AddedFeatures car={state.car}/>
                </div>
                <div className='box'>
                    <AdditionalFeatures store={state.store}/>
                    <Total car={state.car} additionalPrice={state.additionalPrice}/>
                </div>
            </div>
        </StoreProvider>
    );
};

export default App;
