
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import store from './redux-practice/store/index.js'
//index.js로 하면 생략가능 
import store from './redux-practice/store'

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <App />
    </Provider>

)
