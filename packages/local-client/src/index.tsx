import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CellList from './components/cellList/cell-list';
import { Provider } from 'react-redux';
import { store } from './state';


const App = () => {
    
    return (
        <Provider store={store}>
            <CellList />
        </Provider>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)