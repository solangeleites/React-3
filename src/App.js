import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>  
      <Router />
       </Provider> 
      <GlobalStyle />
    </>
  );
}

export default App;
