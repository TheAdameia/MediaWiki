type SearchBarProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
    
    return (
        <div className="">
            <input type="text"
                onChange={(event) => {setSearchTerm(event.target.value)}}
                placeholder=""
            />
        </div>
    )
}