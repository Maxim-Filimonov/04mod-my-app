import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./components/Basket.js";

function App() {

  const [startItems, setStartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/items.json')
      .then(res => res.json())
      .then((res) => {
        setIsLoaded(true);
        setStartItems(res);
      }, (error) => {
        setIsLoaded(true);
        setError(error);
      })
  }, [])

  let basketPlace = null;
  if (error) {
    basketPlace = <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    basketPlace = <div>Загрузка...</div>;
  } else {
    basketPlace = <Basket items={startItems} />
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Корзина</h1>

        {basketPlace}
      </header>
    </div>
  );
}

export default App;
