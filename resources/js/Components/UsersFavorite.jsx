import { Link, useForm } from '@inertiajs/inertia-react';
import { Rating } from 'react-simple-star-rating';
import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import InputError from '@/Components/InputError';

export default function usersFavorite({totalFavorites, usersFavorite, showModal, handleClose}) {

  // if (!props) {
  //   handleClose();
  // }

  const setClose = () => {
    handleClose();
    setForgotten(false);
  }


    return (

      <>
      <Modal size="xl" contentClassName="opinion-modal" show={showModal} onHide={() => setClose()}>
      <div className="card-header pb-0 p-3">
            <div className="row">
              <div className="col-md-8 col-9">
                <h6 className="mb-0 font-weight-semibold text-lg">Ulubione wino ({totalFavorites})</h6>
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
          <div className="card-body col-12 col-sm-12 p-3 pt-0 d-flex flex-wrap mt-n3">

            
            {usersFavorite.map(user => 
                      <div key={user.user_id} className="list-group-item border-0 d-flex flex-row align-items-center px-0 flex-wrap">
                       <Link type="button" className='border-0 p-0 avatar avatar-xs rounded-circle shadow-xs' href={`/profile-${user.user_id}-${user.nick.replace(" ", "-")}`} method="get" as="button">
                      <img src={Boolean(user.avatar) ? `storage/${user.avatar}` : `storage/images/user-${Boolean(user.sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} className="bg-white" />
                      </Link>
                      <Link type="button" className='border-0 bg-transparent p-0 ms-2 wine-name-link m-3 text-sm' href={`/profile-${user.user_id}-${user.nick.replace(" ", "-")}`} method="get" as="button">
                      {user.nick}
                      </Link>
                      </div>)}
            
        </div>
        
        {Boolean(totalFavorites > 40) ? 
        <div className="card-body col-12 col-sm-12 p-3 pt-0 d-flex flex-wrap mt-n3">
        <h6 className="wine-name-link mb-0 text-sm mb-1">Oraz {totalFavorites - 40} innych użytkowników</h6>
        </div> : null}
      </Modal>



    </>
    );
}
