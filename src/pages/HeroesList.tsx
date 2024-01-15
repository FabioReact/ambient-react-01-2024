import { useEffect, useState } from "react";
import { Hero } from "../types/hero";
import { getHeroesByLetter } from "../api/heroes";

const arrayOfLetters: string[] = [];
for (let index = 65; index < 91; index++) {
  const letter = String.fromCharCode(index);
  arrayOfLetters.push(letter);
}

// Regles fonction pure
// input A en entree, on a toujours B en sortie
// Pas d'asynchrone, pas d'appel reseau
// Ne modifie pas le scope

const getActiveClassName = (condition: boolean) => {
  return condition ? "text-red-600 cursor-pointer" : "cursor-pointer"
}

const HeroesList = () => {
  // Declaration des useState
  const [selectedLetter, setSelectedLetter] = useState<string>("A");
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [counter, setCounter] = useState(0);

  // Declaration des useEffect
  useEffect(() => {
    const controller = new AbortController()
    getHeroesByLetter("A", { signal: controller.signal }).then((data) => {
      setHeroes(data)
    })
    return () => {
      controller.abort()
    }
  }, [])

  // Si l'etat future depend de la valeur actuelle, il faut passer par la fonction callback car les useState sont asynchrones
  const onIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1) // 0 + 1
    setCounter((prevCounter) => prevCounter + 1) // 1 + 1
  }

  const onClickHandler = (letter: string) => {
    getHeroesByLetter(letter).then((data) => {
      setSelectedLetter(letter);
      setHeroes(data);
    });
  };

  return (
    <section>
      <h1>Heroes List</h1>
      <button onClick={onIncrement}>Incrémenter - {counter}</button>
      <ul className="flex justify-center gap-3 text-xl font-semibold">
        {arrayOfLetters.map((letter) => (
          <li key={letter} onClick={() => onClickHandler(letter)} className={getActiveClassName(letter === selectedLetter)}>
            {letter}
          </li>
        ))}
      </ul>
      <p>Vous avez cliqué sur la lettre: {selectedLetter}</p>
      {heroes.map((hero) => (
        <div key={hero.id}>
          <p>
            {hero.id} - {hero.name}
          </p>
        </div>
      ))}
    </section>
  );
};

export default HeroesList;
