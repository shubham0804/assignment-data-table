const EntriesPerPage = ({ setEntriesPerPage }) => {
    const onChangeEntries = ({ target }) => {
        setEntriesPerPage(target.value);
    };

    return (
        <div className="d-flex align-items-center">
            <p>Show</p>
            <select
                className="mx-2 bg-light rounded cursor-pointer"
                name="entries"
                id="entries"
                onChange={onChangeEntries}
            >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <p>entries</p>
        </div>
    );
};

export default EntriesPerPage;
