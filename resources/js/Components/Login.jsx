import { Link } from '@inertiajs/inertia-react';
import LoginPanel from '@/Pages/Auth/Login';
import ForgotPassword from '@/Pages/Auth/ForgotPassword';
import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

export default function Login({props, showModal, handleClose}) {
    const [forgotten, setForgotten] = useState(false);

    const handleForgotten = () => {
      setForgotten(!forgotten);
    }

    if (props) {
      handleClose();
    }

    const setClose = () => {
      handleClose();
      setForgotten(false);
    }

    return (
    <>     
    {/* <Button className="nextButton" onClick={handleShow}>
            Open Modal
          </Button> */}
          <Modal show={showModal} onHide={() => setClose()}>
          <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className="mb-0 font-weight-semibold text-lg">Panel logowania</h6>
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
                {forgotten ? <ForgotPassword /> : <LoginPanel props={props}/>}
                <div className='text-center d-flex'>
                <div className="mb-0 text-xs mx-auto text-center d-flex flex-nowrap mt-3">
                {forgotten ? "Chcesz się zalogować?" : "Zapomniałeś hasła?"}
                    <p type="button" className="mb-0 text-xs mx-auto mb-1 text-center text-dark font-weight-bold ms-1" onClick={handleForgotten}>{forgotten ? "Wróć do formularza logowania." : "Zresetuj je."}</p>
                  </div>
                </div>
            </div>
            </div>
          </Modal>

<div className="modal fade" id="loginModal" z-index="-1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
   <div className="modal-dialog">
    <div className="modal-content">
    <div className="card border shadow-xs h-100">
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className="mb-0 font-weight-semibold text-lg">Panel logowania</h6>
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
                {forgotten ? <ForgotPassword /> : <LoginPanel props={props}/>}
                <div className='text-center d-flex'>
                <div className="mb-0 text-xs mx-auto text-center d-flex flex-nowrap">
                {forgotten ? "Chcesz się zalogować?" : "Zapomniałeś hasła?"}
                    <p type="button" className="mb-0 text-xs mx-auto mb-1 text-center text-dark font-weight-bold ms-1" onClick={handleForgotten}>{forgotten ? "Wróć do formularza logowania." : "Zresetuj je."}</p>
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
