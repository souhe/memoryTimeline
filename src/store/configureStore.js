import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        compose( 
            applyMiddleware(thunkMiddleware),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f //FIXME: omly for development
        )
    );
    
    return store;
}