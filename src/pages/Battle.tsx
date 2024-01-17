import { queryOptions, useQuery } from "@tanstack/react-query"
import { useRef } from "react"
import { searchHeroes } from "../api/heroes"
import Loading from "../components/Loading"

type SelectPlayerProps = {
    label?: string
}

const SelectPlayer = ({ label = '' }: SelectPlayerProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const { data, isLoading, isFetching, isError, refetch } = useQuery(queryOptions({
        queryKey: ['heroesByName', inputRef.current?.value],
        queryFn: () => searchHeroes(inputRef.current?.value || ''),
        enabled: !!inputRef.current?.value,
    }))

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        if (inputRef.current?.value) refetch()
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor={`select-player-${label}`}>Select Player {label}</label>
                <input type="text" id={`select-player-${label}`} name={`select-player-${label}`} ref={inputRef} />
                <button type='submit'>Search</button>
            </form>
            {isError && <p className="text-red-500">An error occured</p>}
            <Loading isLoading={isLoading || isFetching}>
                {data?.map(hero => <p><span>{hero.id}</span>{hero.name}</p> )}
            </Loading>
        </div>
    )
}

const Battle = () => {
    return (
        <section>
            <h1>Battle</h1>
            <SelectPlayer label="one" />
            <SelectPlayer label="two" />
        </section>
    )
}

export default Battle