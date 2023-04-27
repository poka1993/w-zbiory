import React, { useState } from "react";
import SexComponent from '@/Components/SexCompontent';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link, useForm } from '@inertiajs/inertia-react';
import PaginationComponent from './PaginationComponent';
import { useEffect } from "react";

export default function FriendsList({ users, ownProfile, handleRefresh }) {
  const { data, setData, delete: destroy, processing, errors, reset } = useForm({
    user_id: null,
  }); 

  const removeFriend = (id) => {
    setData({
      user_id: id
    });
  }

  useEffect(() => {
    if (data.user_id) {
      setData({
        user_id: null
      });
    destroy(`/removeFromFriends`, { params: data, preserveScroll: true, onSuccess: () => { if (handleRefresh) { handleRefresh(data.user_id) } } });
    }
  });

  dayjs.extend(relativeTime);

    return (
        <>
        <div className="col-12">
          <div className="card border shadow-xs overflow-hidden">
            <div className="card-body px-0 py-0">
            <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7">Login / imię</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Płeć</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Miejscowość</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Status</th>
                      {Boolean(ownProfile) ? <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Usuń</th> : null}
                    </tr>
                  </thead>
                  <tbody>
                  {Boolean(users.data.length) ?
                    users.data.map(user => 
                    <tr key={user.id}>
                      <td>
                        <div className="d-flex px-2 py-1">

                          <div className="d-flex align-items-center">
                            <Link type="button" className='avatar avatar-sm me-2 bg-white border-0' href={`/profile-${user.id}-${user.nick.replace(" ", "-")}`} method="get" as="button">
                              <img src={Boolean(user.avatar) ? `storage/${user.avatar}` : `storage/images/user-${Boolean(user.sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} alt="profile_image" className="avatar avatar-sm bg-white border shadow-xs w-100 h-100" />
                            </Link>
                          </div>
                          <div className="d-flex flex-column text-sm justify-content-center">
                          <Link type="button" className='border-0 bg-transparent wine-name-link ms-n1' href={`/profile-${user.id}-${user.nick.replace(" ", "-")}`} method="get" as="button">
                              {user.nick}
                          </Link>
                            <p className="text-sm text-secondary mb-0 ms-1">{user.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <SexComponent sex={user.sex}/>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-normal">{user.locality}</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        {Boolean(user.online)
                        ? <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                        : <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                        }
                      </td>
                      {Boolean(ownProfile) ?
                      <td className="align-middle text-center">
                      <button onClick={() => removeFriend(user.id)} id={user.id} type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 me-auto ms-auto">
                    <span className="btn-inner--icon" id={user.id}>
                    <svg id={user.id} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-x-lg me-1" viewBox="0 0 16 16">
                      <path id={user.id} d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    </span>
                    <span className="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Usuń</span>
                    </button>
                      </td> : null}
                    </tr>)
                    : <tr><td colSpan="100%"><p className='text-center text-xs text-secondary py-2 mt-2 opacity-75'>Brak znajomych.</p></td></tr>}
                  </tbody>
                </table>
              </div>
              {Boolean(users.data.length) ?
                <div className="m-3">
                  <PaginationComponent opinions={users} links={users.links} />
                </div> : null}
              </div>
             </div>
            </div>    
            </>
    );
}
