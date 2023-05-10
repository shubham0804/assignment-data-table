const TotalEntriesInfo = ({ entriesPerPage, currentPageNo, totalEntries }) => {
    const parsedEntriesPerPage = () => {
        let noOfEntries;
        if (typeof (entriesPerPage == "string")) {
            noOfEntries = parseInt(entriesPerPage);
        }
        if (totalEntries < noOfEntries) {
            return totalEntries;
        }
        return noOfEntries;
    };
    const firstEntryOfPage = (currentPageNo - 1) * parsedEntriesPerPage() + 1;
    const lastEntryOfPage = firstEntryOfPage + parsedEntriesPerPage() - 1;

    return (
        <div className="d-flex">
            <p className="mx-1">Showing</p>
            <p className="mx-1 fw-bold">{firstEntryOfPage}</p>
            <p className="mx-1">to</p>
            <p className="mx-1 fw-bold">{lastEntryOfPage}</p>
            <p className="mx-1">of</p>
            <p className="mx-1 fw-bold">{totalEntries}</p>
            <p className="mx-1">entries</p>
        </div>
    );
};

export default TotalEntriesInfo;
