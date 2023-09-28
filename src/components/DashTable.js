import React from 'react'
import DataTable from './Table/DataTable'



const DashTable = () => {
  return (
    <div className="card mb-4">
    <div className="card-header">
        <i className="fas fa-table me-1"></i>
        DataTable Example
    </div>
    <div className="card-body overflow-x-auto">
       <DataTable/>
    </div>
</div>
  )
}

export default DashTable