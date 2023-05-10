import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Table = ({ data, activeSorting, setActiveSorting, className }) => {
    const headers = [
        {
            name: "Name",
            identifier: "name",
            sort: true,
        },
        {
            name: "Position",
            identifier: "position",
            sort: true,
        },
        {
            name: "Office",
            identifier: "office",
            sort: true,
        },
        {
            name: "Age",
            identifier: "age",
            sort: true,
        },
        {
            name: "Start Date",
            identifier: "start_date",
            sort: true,
        },
        {
            name: "Salary",
            identifier: "salary",
            sort: true,
        },
    ];

    const onSort = ({ type, value }) => {
        setActiveSorting({
            type,
            value,
        });
    };

    return (
        <div className={className}>
            <table className="w-100">
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i}>
                                <div className="d-flex justify-content-between">
                                    {header.name}
                                    <div className="d-flex flex-column">
                                        <SortAsc
                                            onSort={onSort}
                                            activeSorting={activeSorting}
                                            header={header}
                                        />
                                        <SortDesc
                                            onSort={onSort}
                                            activeSorting={activeSorting}
                                            header={header}
                                        />
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, i) => (
                        <tr key={i}>
                            <td>{row.name}</td>
                            <td>{row.position}</td>
                            <td>{row.office}</td>
                            <td>{row.age}</td>
                            <td>{new Date(row.start_date).toLocaleDateString()}</td>
                            <td>{row.salary}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start Date</th>
                        <th>Salary</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

const SortAsc = ({ onSort, activeSorting, header }) => (
    <FaCaretUp
        onClick={() => onSort({ type: "asc", value: header.identifier })}
        className="cursor-pointer"
        color={`${
            activeSorting?.type == "asc" && activeSorting?.value == header.identifier
                ? "#000000"
                : "#dddddd"
        } `}
    />
);

const SortDesc = ({ onSort, activeSorting, header }) => (
    <FaCaretDown
        onClick={() => onSort({ type: "desc", value: header.identifier })}
        className="cursor-pointer"
        color={`${
            activeSorting?.type == "desc" && activeSorting?.value == header.identifier
                ? "#000000"
                : "#dddddd"
        }  `}
    />
);

export default Table;
