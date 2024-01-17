import { useState } from "react"
import SelectPlayer from "../components/SelectPlayer"
import { Hero } from "../types/hero"
import HeroCard from "../components/HeroCard"

const Battle = () => {
  const [playerOne, setPlayerOne] = useState<Hero|null>(null)
  const [playerTwo, setPlayerTwo] = useState<Hero|null>(null)
  return (
    <section className="flex flex-col items-center">
      <h1>Battle</h1>
      <div className="flex justify-center gap-24">
        <SelectPlayer label='one' setPlayer={setPlayerOne} />
        <SelectPlayer label='two' setPlayer={setPlayerTwo} />
      </div>
      {playerOne && playerTwo &&
        <button>Start Battle</button>}
      <div className="flex justify-center gap-24">
        {playerOne && <HeroCard hero={playerOne} />}
        {playerTwo && <HeroCard hero={playerTwo} />}
      </div>
    </section>
  )
}

export default Battle
