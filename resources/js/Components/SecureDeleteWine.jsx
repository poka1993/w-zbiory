import { Link, useForm } from '@inertiajs/inertia-react';
import { Rating } from 'react-simple-star-rating';
import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import InputError from '@/Components/InputError';

export default function SecureDeleteWine({props, showModal, handleClose, handleShowFlash, wineId, fetchRate, handleRating}) {
  const { data, setData, delete: destroy, processing, errors, reset } = useForm({
    wine_id: wineId
  }); 
  const { wine_id } = data;

  const deleteWine = () => {
    destroy('/destroyWine', {
      params: data,
      preserveScroll: true,
      }
    );
  }

  if (!props) {
    handleClose();
  }

  const setClose = () => {
    handleClose();
  }

    return (

      <>
      <Modal size="md" contentClassName="opinion-modal" backdrop="static" show={showModal} onHide={() => setClose()}>
      <div className="card-header pb-0 p-3">
            <div className="row">
              <div className="col-md-8 col-9">
                <h6 className="mb-0 font-weight-semibold text-lg">Usuwanie wina</h6>
              </div>
              <div className="col-md-4 col-3 text-end">
                <button type="button" className="btn btn-white btn-icon px-2 py-2" onClick={setClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row'>
          <div className="card-body col-9 col-sm-12 p-3 pt-0 d-flex flex-column mt-n2">
              <p className='text-sm'>Czy na pewno chcesz usunąć te wino z bazy?</p>
                    <div className="mb-3">
                        <div className='d-flex flex-wrap gap-3 mt-n3'>
                          <button type="button" onClick={deleteWine} className="btn btn-sm btn-dark btn-icon d-flex mt-3 mb-n3">
                          <span className="btn-inner--text text-nowrap">Potwierdź</span>
                        </button>
                        <button type="button" onClick={setClose} className="btn btn-sm btn-dark btn-icon d-flex mt-3 mb-n3">
                          <span className="btn-inner--icon">
                          </span>
                          <span className="btn-inner--text text-nowrap">Anuluj</span>
                        </button>
                      </div>
                    </div>
            </div>



        </div>
      </Modal>



    </>
    );
}
