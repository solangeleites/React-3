import GlobalStyle from './styles/GlobalStyle';
import Todo from './components/Todo/Todo';
import { TodoProvider } from './components/context/context';
function App() {
  return (
    <>
    <TodoProvider>
    <Todo>
    </Todo>
    </TodoProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
