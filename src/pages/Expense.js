import React, { useState } from "react";
import DashTable from "../components/DashTable";

const Expense = () => {
  const [TableColums, setTableColums] = useState([
    {
      Header: "Expense Date",
      accessor: "expense_date",
    },
    {
      Header: "Expense On",
      accessor: "expense_on",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
  ]);

  return (
    <>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Expense</h1>
        <DashTable
          heading={"Expense"}
          tableParams={{ expense_date: "", expense_on: "", amount: "" }}
          updataApi="http://127.0.0.1:8000/api/expense/update"
          delApi="http://127.0.0.1:8000/api/expense/delete"
          api="http://127.0.0.1:8000/api/expense"
          AddApi={"http://127.0.0.1:8000/api/expense/add"}
          TableColums={TableColums}
        />
      </div>

   
    </>
  );
};

export default Expense;
