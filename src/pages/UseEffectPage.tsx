import { useEffect, useRef, useState } from "react"

const UseEffectPage = () => {
    const [counter, setCounter] = useState(0)
    const isMountedRef = useRef<boolean>(false)

    useEffect(() => {
        console.log("Premier rendu de useEffect")
        return () => {
            console.log("Demontage du composant")
        }
    }, [])

    useEffect(() => {
        if (isMountedRef.current) {
            console.log(`Mise à jour de useEffect - avec counter ${counter}`)
        }
        isMountedRef.current = true
        console.log(`Premier rendu OU mise à jour de useEffect - avec counter ${counter}`)
        return () => {
            console.log(`Demontage du composant - avec ${counter}`)
        }
    }, [counter])

    console.log("UseEffectPage - Scope principal")

    return (
        <section>
            <h1>Comprendre useEffect</h1>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Change Counter: {counter}</button>
            <ol>
                <li>Premier rendu (return de la fonction)</li>
                <li>Apres que le composant se soit monté dans l'UI, useEffect est appelé</li>
            </ol>
        </section>
    )
}

export { UseEffectPage }