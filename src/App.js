import { and } from './helpers';
import { useKey } from './hooks/useKey';

function App() {
  const pressed = and(useKey('control'), useKey('m'));

  return (
    <div className="App">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>{pressed ? 5 : 'hold "Ctrl" && "t" to see "5"'}</p>
    </div>
  );
};

export default App;
