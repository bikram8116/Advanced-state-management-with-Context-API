import ChildA from './ChildA';
import ChildB from './ChildB';
import { InputProvider } from './InputProvider';

function App() {
  console.log("Called APP")

  return (
    <InputProvider>
      <ChildA />
      <ChildB />
    </InputProvider>
  );
}

export default App;
