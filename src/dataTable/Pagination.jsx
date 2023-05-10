const Pagination = ({ currentPageNo = 1, setCurrentPageNo, entriesPerPage, totalEntries }) => {
    const totalPages = Math.ceil(totalEntries / entriesPerPage);
    const allPagesArray = Array(totalPages)
        .fill()
        .map((a, i) => i + 1);
    const isPreviousDisabled = currentPageNo == 1;
    const isNextDisabled = currentPageNo == totalPages;

    const onPageChange = (pageNo) => {
        setCurrentPageNo(pageNo);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div className="d-flex align-items-center my-1">
            <button
                className={`me-2 bg-white border-0 ${!isPreviousDisabled && "cursor-pointer"} ${
                    isPreviousDisabled && "text-muted"
                }`}
                onClick={() => !isPreviousDisabled && onPageChange(currentPageNo - 1)}
            >
                Previous
            </button>
            {allPagesArray?.map((page, i) => (
                <button
                    key={i}
                    className={`border-0 px-2 py-1 mx-1 fw-bold rounded cursor-pointer ${
                        currentPageNo == page ? "text-white bg-primary shadow-sm" : "bg-white"
                    }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`bg-white border-0 ms-2 ${!isNextDisabled && "cursor-pointer"} ${
                    isNextDisabled && "text-muted"
                }`}
                onClick={() => !isNextDisabled && onPageChange(currentPageNo + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
