import Barchart from '../components/BarChart';
import AreaChart from '../components/AreaChart';
import React from 'react'
import {AiOutlineAreaChart } from 'react-icons/ai';
import {FaChartBar, FaTable } from 'react-icons/fa';
import DashTable from '../components/DashTable';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className='w-100 overflow-y-scroll' style={{"height":"91vh"}}>
            <div>
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                     
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <AiOutlineAreaChart className='mx-2'/>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body"><AreaChart/></div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                    <FaChartBar className='mx-2'/>
                                        Bar Chart Example
                                    </div>
                                    <div className="card-body"><Barchart/></div>
                                </div>
                            </div>
                        </div>
                       {/* <DashTable/> */}
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <Link href="/" className='mx-2'>Privacy Policy</Link>
                                &middot;
                                <Link href="/" className='mx-2'>Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>


    </>
  )
}

export default Home