export const updateDataTable = ({
    data,
    entriesPerPage,
    currentPageNo,
    search,
    activeSorting,
    setTotalEntries,
}) => {
    const searchFilteredData = searchFilter({ data, search });
    setTotalEntries(searchFilteredData.length);
    const sortedData = sortFilter({ data: searchFilteredData, activeSorting });
    const paginatedData = pagination({
        data: sortedData,
        entriesPerPage,
        currentPageNo,
    });
    return paginatedData;
};

const searchFilter = ({ data, search }) => {
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

const sortFilter = ({ data, activeSorting }) => {
    if (!activeSorting.type) {
        return data;
    }
    let sortedData = data;
    const sortOn = activeSorting.value;
    const sortType = activeSorting.type;
    sortedData.sort((a, b) => {
        if (a[sortOn] > b[sortOn]) {
            return sortType === "asc" ? 1 : -1;
        }
        if (a[sortOn] < b[sortOn]) {
            return sortType === "asc" ? -1 : 1;
        }
        return 0;
    });
    return sortedData;
};

const pagination = ({ data, entriesPerPage, currentPageNo }) => {
    const parsedEntriesPerPage = typeof (entriesPerPage == "string")
        ? parseInt(entriesPerPage)
        : entriesPerPage;
    const firstEntryOfPage = (currentPageNo - 1) * parsedEntriesPerPage + 1;
    const lastEntryOfPage = firstEntryOfPage + parsedEntriesPerPage - 1;
    return data.slice(firstEntryOfPage - 1, lastEntryOfPage);
};
