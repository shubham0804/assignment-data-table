export const updateDataTable = ({
    data,
    entriesPerPage,
    currentPageNo,
    search,
    activeSorting,
    setTotalEntries,
}) => {
    let filteredData = [];

    const searchFilteredData = searchFilter({ data, search });
    setTotalEntries(searchFilteredData.length);
    const paginatedData = pagination({
        data: searchFilteredData,
        entriesPerPage,
        currentPageNo,
    });
    return paginatedData;
};

export const searchFilter = ({ data, search }) => {
    if (!search) {
        return data;
    }
    let filteredData = [];
    data.map((entry) => {
        entry.age = entry.age.toString();
        entry.start_date = new Date(entry.start_date).toLocaleDateString();
        Object.values(entry).map((value) => {
            if (value?.toLowerCase().match(search.toLowerCase())) {
                const splitDate = "28/01/2019".split("/");
                entry.start_date = splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2];
                filteredData.push(entry);
            }
        });
    });
    return filteredData;
};

export const pagination = ({ data, entriesPerPage, currentPageNo }) => {
    const parsedEntriesPerPage = typeof (entriesPerPage == "string")
        ? parseInt(entriesPerPage)
        : entriesPerPage;
    const firstEntryOfPage = (currentPageNo - 1) * parsedEntriesPerPage + 1;
    const lastEntryOfPage = firstEntryOfPage + parsedEntriesPerPage - 1;
    return data.slice(firstEntryOfPage - 1, lastEntryOfPage);
};
