import React, { useState } from "react";
import SexComponent from '@/Components/SexCompontent';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from '@inertiajs/inertia-react';
import PaginationComponent from './PaginationComponent';

export default function UsersList({ users }) {

  dayjs.extend(relativeTime);
  const [hover, setHover] = useState(false);

    return (
        <>
            <div className="card-body px-0 py-0">
            <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7">Login / imię</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Płeć</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Miejscowość</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Status</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Ulubionych win</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Wystawionych opinii</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Ostatnia aktywność</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Data rejestracji</th>
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
                      <td>
                        <p className="text-sm mb-0 text-center">{user.favorites}</p>
                      </td>
                      <td>
                        <p className="text-sm mb-0 text-center">{user.opinions}</p>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-normal">{Boolean(user.last_seen) ? dayjs(user.last_seen).locale('pl').fromNow() : "Nigdy"}</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-normal">{dayjs(user.created_at).format('DD.MM.YYYY, HH:mm')  }</span>
                      </td>
                    </tr>)
                    : <tr><td className='text-center text-xs text-secondary py-4 opacity-75' colSpan="10">Brak użytkowników.</td></tr>}
                  </tbody>
                </table>
              </div>
                <div className="m-3">
                  <PaginationComponent opinions={users} links={users.links} />
                </div>
              </div>
            </>
    );
}
