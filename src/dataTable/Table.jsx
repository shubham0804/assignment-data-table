import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Table = ({ data, activeSorting, setActiveSorting, className }) => {
    const headers = [
        {
            name: "Name",
            sort: true,
        },
        {
            name: "Position",
            sort: true,
        },
        {
            name: "Office",
            sort: true,
        },
        {
            name: "Age",
            sort: true,
        },
        {
            name: "Start Date",
            sort: true,
        },
        {
            name: "Salary",
            sort: true,
        },
    ];

    const onSort = ({ type, value }) => {
        let updatedSort = activeSorting;

        // // Add if does not exists
        if (!activeSorting.find((el) => el.type === type && el.value == value)) {
            // Remove if same value and different type
            if (activeSorting.find((el) => el.type !== type && el.value === value)) {
                updatedSort = updatedSort?.filter((el) => el.type === type || el.value !== value);
            }
            updatedSort = [
                ...updatedSort,
                {
                    type,
                    value,
                },
            ];
        } else {
            // Remove if exists
            updatedSort = activeSorting?.filter((el) => el.type !== type || el.value !== value);
        }
        setActiveSorting(updatedSort);
    };

    return (
        <div className={className}>
            <table>
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
        onClick={() => onSort({ type: "asc", value: header.name })}
        className="cursor-pointer"
        color={`${
            activeSorting.find((el) => el.type == "asc" && el.value == header.name)
                ? "#000000"
                : "#dddddd"
        } `}
    />
);

const SortDesc = ({ onSort, activeSorting, header }) => (
    <FaCaretDown
        onClick={() => onSort({ type: "desc", value: header.name })}
        className="cursor-pointer"
        color={`${
            activeSorting?.find((el) => el.type == "desc" && el.value == header.name)
                ? "#000000"
                : "#dddddd"
        }  `}
    />
);

export default Table;
