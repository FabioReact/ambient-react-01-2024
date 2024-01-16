import { useState } from "react";

const UseStatePage = () => {
  const [counter, setCounter] = useState(0);

  // Si l'etat future depend de la valeur actuelle, il faut passer par la fonction callback car les useState sont asynchrones
  const onIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1); // 0 + 1
    setCounter((prevCounter) => prevCounter + 1); // 1 + 1
  };
  return (
    <section>
      <h1>Comprendre UseState</h1>
      <button onClick={onIncrement}>Incrémenter - {counter}</button>
    </section>
  );
};

export default UseStatePage;
