import { Provider } from 'react-redux'
import { createStore } from 'redux'

import "../css/tailwind.css";

import rootReducer from '../slices'

const store = createStore(rootReducer)

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
