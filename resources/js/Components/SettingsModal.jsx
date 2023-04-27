import { Link, useForm } from '@inertiajs/inertia-react';
import { Rating } from 'react-simple-star-rating';
import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import InputError from '@/Components/InputError';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';

export default function SettingsModal({props, showModal, handleClose}) {
  const sex = Boolean(props) ? (props.sex) : '';
  const avatar = Boolean(props) ? (props.avatar) : '';

  const setClose = () => {
    handleClose();
  }

  const [selectedList, setSelectedList] = useState("information");
  const [renderedList, setRenderedList] = useState(
    <div className="col-12"><div className="h-100 overflow-hidden">
      <ul className="list-group"><UpdateProfileInformationForm handleClose={setClose}/></ul>
      </div></div>
    );

    useEffect(() => {
      if (selectedList == "info") { 
        setSelectedList("information")
      } else if (selectedList == "pass") {
        setSelectedList("password") 
      } else if (selectedList == "del") {
        setSelectedList("delete")
      }
        
    });

  function renderList(id) {
    switch (id) {
      case "information":
      setSelectedList("info");
      setRenderedList(
        <div className="col-12"><div className="h-100 overflow-hidden">
        <ul className="list-group"><UpdateProfileInformationForm handleClose={setClose}/></ul>
        </div></div>);
      break;
      case "password":
        setSelectedList("pass");
        setRenderedList(
          <div className="col-12"><div className="h-100 overflow-hidden">
          <ul className="list-group"><UpdatePasswordForm handleClose={setClose}/></ul>
          </div></div>);
      break;
      case "delete":
        setSelectedList("del");
        setRenderedList(
          <div className="col-12"><div className="h-100 overflow-hidden">
          <ul className="list-group"><DeleteUserForm handleClose={setClose}/></ul>
          </div></div>);
      break;
    }
  };

    return (

      <>
      <Modal size="xl" contentClassName="opinion-modal" backdrop="static" show={showModal} onHide={() => setClose()}>

      <div className="card-header pb-0 p-3">
            <div className="row">
              <div className="col-md-8 col-9">
                <h6 className="mb-0 font-weight-semibold text-lg">Ustawienia konta</h6>
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
          <div className="card-body col-9 col-sm-12 p-3 pt-0 d-flex flex-column">

          <div className="col-auto">
            <div className="avatar avatar-xxl ms-auto me-auto ms-lg-0 me-lg-0 mt-n4 mt-sm-n5 mb-3 mt-lg-n3 mb-lg-n5 d-flex mb-2 rounded-circle border border-gray-100 border-4 shadow-sm">
              <img src={Boolean(avatar) ? `storage/${avatar}` : `storage/images/user-${Boolean(sex == "Kobieta") ? 'female' : 'male'}-icon.png`} alt="profile_image" className="w-100 h-100" />
            </div>
          </div>

          <div className="btn-group ms-auto me-auto d-flex w-100 w-lg-65 w-xl-55" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="listOptions" id="information" autoComplete="off" onChange={(e) => renderList(e.target.id)} checked={selectedList == "information"} />
                  <label className="btn btn-white px-3 mb-0" htmlFor="information"><div className='d-block d-sm-none'>Profil</div><div className='d-none d-sm-block'>Dane profilowe</div></label>
                  <input type="radio" className="btn-check" name="listOptions" id="password" autoComplete="off" onChange={(e) => renderList(e.target.id)} checked={selectedList == "password"} />
                  <label className="btn btn-white px-3 mb-0" htmlFor="password"><div className='d-block d-sm-none'>Hasło</div><div className='d-none d-sm-block'>Zmiana hasła</div></label>
                  <input type="radio" className="btn-check" name="listOptions" id="delete" autoComplete="off" onChange={(e) => renderList(e.target.id)} checked={selectedList == "delete"} />
                  <label className="btn btn-white px-3 mb-0" htmlFor="delete"><div className='d-block d-sm-none'>Usuń</div><div className='d-none d-sm-block'>Usunięcie konta</div></label>
            </div>




              {renderedList}
  

            </div>



        </div>
      </Modal>



    </>
    );
}
