import DataTable from "./dataTable/DataTable";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { generateTableData } from "./services/fakeData";

function App() {
    return (
        <div className="my-5 d-flex align-items-center justify-content-center">
            <DataTable data={generateTableData()} />
        </div>
    );
}

export default App;
