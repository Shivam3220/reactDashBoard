import React, { useState,useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddModal = ({tableParams,title,AddApi,fetchData,id}) => {
    const [EditEntity, setEditEntity] = useState(tableParams)
    const closeModal = useRef();

    const AddClickButton=async()=>{
        const data ={...EditEntity,"user_id":id}
        try {
            const dataFetch = await fetch(
                AddApi,
                {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-type": "application/json",
                  },
                }
              );
              const jsonRes =await dataFetch.json()
              console.log(jsonRes,"from add response")
              if(jsonRes.code==200){
                fetchData()
                setEditEntity(tableParams)
                toast.success(jsonRes.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  closeModal.current.click()
              }else{
                const msg = jsonRes.message;
                let toastMsg = Object.values(msg);
                toastMsg.map((e) => {
                  toast.error(e[0], {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                });
              }
        } catch (error) {
            
        }
    }

  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    <div className="my-2 d-flex justify-content-end">
      <button
        data-bs-toggle="modal"
        className="btn btn-info"
        data-bs-target="#exampleModal"
      >
        Add New {title}
      </button>
    </div>

    <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {/* Edit--{editProduct.data.product} */}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="my-4">
                  <div className="mb-3 row dropdown-center flex-fill col dropdown">
                    <label
                      htmlFor="ProductName"
                      className="col-sm-3 col-form-label text-center"
                    >
                      {Object.keys(tableParams)[0]}
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="date"
                        className="form-control"
                        id="product"
                        placeholder="Date"
                        value={EditEntity[Object.keys(tableParams)[0]]}
                        onChange={(e) => {
                          setEditEntity({
                            ...EditEntity,
                            [Object.keys(tableParams)[0]]: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="price"
                      className="col-sm-3  col-form-label text-center"
                    >
                      {Object.keys(tableParams)[1]}
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="source"
                        value={EditEntity[Object.keys(tableParams)[1]]}
                        onChange={(e) => {
                          setEditEntity({
                            ...EditEntity,
                            [Object.keys(tableParams)[1]]: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="mrp"
                      className="col-sm-3  col-form-label text-center"
                    >
                      {Object.keys(tableParams)[2]}
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        className="form-control"
                        id="mrp"
                        placeholder="Amount"
                        value={EditEntity[Object.keys(tableParams)[2]]}
                        onChange={(e) => {
                          setEditEntity({
                            ...EditEntity,
                            [Object.keys(tableParams)[2]]: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-info text-black fw-bold border border-dark mx-2"
                onClick={() => {
                  AddClickButton();
                }}
              >
                Add 
              </button>
             
            </div>
          </div>
        </div>
      </div>
      {/* modal end */}
    </>
  );
};

export default AddModal;
