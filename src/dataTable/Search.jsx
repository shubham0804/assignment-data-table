const Search = ({ setSearch }) => {
    const onChangeSearch = ({ target }) => {
        setSearch(target.value);
    };

    return (
        <div className="d-flex">
            <p className="mx-2">Search: </p>
            <input
                className="h-75 rounded"
                type="text"
                name="search"
                id="search"
                onChange={onChangeSearch}
            />
        </div>
    );
};

export default Search;
