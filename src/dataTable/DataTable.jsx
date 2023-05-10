import { useState, useEffect } from "react";

import EntriesPerPage from "./EntriesPerPage";
import Search from "./Search";
import Table from "./Table";
import TotalEntriesInfo from "./TotalEntriesInfo";
import Pagination from "./Pagination";
import { updateDataTable, searchFilter, pagination } from "../services/dataTable";

const DataTable = ({ data }) => {
    const [updatedData, setUpdatedData] = useState(data);
    const [entriesPerPage, setEntriesPerPage] = useState("10");
    const [search, setSearch] = useState("");
    const [activeSorting, setActiveSorting] = useState([]);
    const [currentPageNo, setCurrentPageNo] = useState(1);
    const [totalEntries, setTotalEntries] = useState(data.length);

    useEffect(() => {
        const filtedData = updateDataTable({
            data,
            entriesPerPage,
            currentPageNo,
            search,
            activeSorting,
            setTotalEntries,
        });
        setUpdatedData(filtedData);
        setCurrentPageNo(1);
    }, [entriesPerPage, search, activeSorting]);

    useEffect(() => {
        const filtedData = updateDataTable({
            data,
            entriesPerPage,
            currentPageNo,
            search,
            activeSorting,
            setTotalEntries,
        });
        setUpdatedData(filtedData);
    }, [currentPageNo]);

    return (
        <div className="w-50">
            <div className="d-flex justify-content-between align-items-center">
                <EntriesPerPage setEntriesPerPage={setEntriesPerPage} />
                <Search search={search} setSearch={setSearch} />
            </div>
            <Table
                data={updatedData}
                activeSorting={activeSorting}
                setActiveSorting={setActiveSorting}
                className="my-3 mb-4"
            />
            <div className="d-flex justify-content-between align-items-center">
                <TotalEntriesInfo
                    totalEntries={totalEntries}
                    entriesPerPage={entriesPerPage}
                    currentPageNo={currentPageNo}
                />
                <Pagination
                    totalEntries={totalEntries}
                    currentPageNo={currentPageNo}
                    setCurrentPageNo={setCurrentPageNo}
                    entriesPerPage={entriesPerPage}
                />
            </div>
        </div>
    );
};

export default DataTable;
