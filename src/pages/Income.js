import React, { useState } from "react";
import DashTable from "../components/DashTable";

const Income = () => {
  const [TableColums, setTableColums] = useState([
    {
      Header: "Income Date",
      accessor: "income_date",
    },
    {
      Header: "Income From",
      accessor: "income_from",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
  ]);

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Expense</h1>
      <DashTable
        heading={"Income Table"}
        tableParams={{ income_date: "", income_from: "", amount: "" }}
        updataApi="http://127.0.0.1:8000/api/income/update"
        delApi="http://127.0.0.1:8000/api/income/delete"
        api="http://127.0.0.1:8000/api/income"
        TableColums={TableColums}
        AddApi={"http://127.0.0.1:8000/api/income/add"}
      />
    </div>
  );
};

export default Income;
