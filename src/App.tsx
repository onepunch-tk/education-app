import { CardWrapper } from "./components/CardWrapper.tsx";

function App() {
  return (
    <div>
      <header>
        <ul>
          <li>All</li>
          <li>Advertising</li>
          <li>Dev & Research</li>
          <li>Goals</li>
        </ul>
      </header>
      <CardWrapper />
    </div>
  );
}

export default App;
