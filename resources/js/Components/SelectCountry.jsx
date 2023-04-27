import { Link } from '@inertiajs/inertia-react';
import React, { useState } from "react";
import FlagSelector from '@/Components/FlagSelector';

export default function SelectCountry ({}) {
  const [selected, setSelected] = useState("");

    return (
    <>
<div className="modal fade" id="countryModal" tabIndex="-1" aria-labelledby="exampleCOuntryLabel" aria-hidden="true">

   <div className="modal-dialog modal-lg">
    <div className="modal-content">
    <div className="card border shadow-xs h-100">
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className="mb-0 font-weight-semibold text-lg">Filter krajów</h6>
                  </div>
                  <div className="col-md-4 col-3 text-end">
                    <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-row'>
              <div className="card-body col-9 col-sm-12 p-3 pt-0">
              <label>Filter krajów</label>
              <div className="mb-3">

              </div>
              <label>Dodaj do filtra</label>

                    <div className="mb-3">

<div className="input-group input-group d-flex flex-nowrap">
<span className="input-group-text d-none d-sm-block" id="basic-addon1">Wybierz kraj</span>  
<span className="btn btn-white d-sm-none mb-0 px-1 rounded-start border-end-0" id="basic-addon1"></span>  
<FlagSelector />
</div>






                        <div className='d-flex gap-3'>
                          <button type="button" className="btn btn-sm btn-dark btn-icon d-flex mt-3 mb-n3">
                          <span className="btn-inner--icon">
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>
                          </span>
                          <span className="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Dodaj do filtra</span>
                        </button>
                        <button type="button" className="btn btn-sm btn-dark btn-icon d-flex mt-3 mb-n3">
                          <span className="btn-inner--icon">
                          </span>
                          <span className="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Anuluj</span>
                        </button>
                      </div>
                    </div>
            </div>
            </div>
            </div>
    </div>
  </div>
</div>
    </>
    );
}
