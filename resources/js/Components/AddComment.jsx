import { Link, useForm } from '@inertiajs/inertia-react';
import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import InputError from '@/Components/InputError';

export default function AddComment({props, showModal, handleClose, handleShowFlash, userId}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    comment: null,
    commented_user: userId
  }); 
  const { comment, commented_user } = data;

  const setComment = (e) => {
    const { value } = e.target;
    setData({
      commented_user,
      comment: value
    });
  }

  const storeComment = () => {
    post('/storeComment', {
      params: data,
      preserveScroll: true,
      onSuccess: () => {
        setData({
          commented_user,
          comment: null
        });
        handleClose();
        handleShowFlash();
      }
    });
  }



  const setClose = () => {
    handleClose();
  }

    return (
    <>
      <Modal size="xl" contentClassName="opinion-modal" backdrop="static" show={showModal} onHide={() => setClose()}>
      <div className="card-header pb-0 p-3">
            <div className="row">
              <div className="col-md-8 col-9">
                    <h6 className="mb-0 font-weight-semibold text-lg">Dodaj komentarz</h6>
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
              <div className="card-body col-9 col-sm-12 p-3 pt-0">
              <label>Treść komentarza</label>
                    <div className="mb-3">
                    <textarea className="form-control w-100" id="message-text" rows="6" onChange={setComment} value={comment || ""} />
                    <InputError message={errors.comment} className="mt-2 mb-n1" />
                        <div className='d-flex gap-3'>
                        <button type="button" onClick={storeComment} className="btn btn-sm btn-dark btn-icon d-flex mt-3 mb-n3">
                          <span className="btn-inner--icon">
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>
                          </span>
                          <span className="btn-inner--text text-nowrap">Dodaj komentarz</span>
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
