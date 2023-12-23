import { CardWrapper } from "./components/CardWrapper.tsx";
import { Header } from "./components/Header.tsx";

function App() {
  return (
    <div className="bg-neutral-900 rounded-[50px] h-[95%] w-[420px] px-5 py-12">
      <Header />
      <CardWrapper />
    </div>
  );
}

export default App;
