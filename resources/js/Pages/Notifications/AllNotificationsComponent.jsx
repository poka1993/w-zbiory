import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';
import PaginationComponent from '@/Components/PaginationComponent';

export default function AllNotificationsComponent (props) {
    dayjs.extend(relativeTime);
    const { data, setData, get, patch, processing, errors, reset } = useForm({
      notification_id: null,
      route: null,
      only_readed: false
    }); 
    
    const setNotificationId = (id, route) => {
        setData({
          ...data,
          notification_id: id,
          route: route
        });
    }

    const setReaded = (id) => {
      setData({
        ...data,
        notification_id: id,
        only_readed: true,
      });
    }

    useEffect(() => {
      if (data.notification_id) {
        patch(`/readNotification`, { params: data, preserveScroll: true });
        if (!data.only_readed) {
          get(`${data.route}`);
        }
        setData({
          ...data,
          notification_id: null,
          route: null,
          only_readed: false
        });
      }
  });

    const notifications = props.data;
    const profileId = props.profile;

    return (
      <div className="card-body px-0 py-0">
      <div className="table-responsive p-0">
          <table className="table align-items-center mb-0">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-secondary text-xs font-weight-semibold flex-grow-3 stretch">Powiadomienie / Data</th>
                <th className="text-secondary text-xs text-end font-weight-semibold opacity-7">Przeczytane</th>
              </tr>
            </thead>
            <tbody>
        
        {Boolean(notifications.data.length) ? (() => {
            return notifications.data.map((notification) => {
            let message;
            let route;
            const user_route = `/profile-${notification.user_id}-${notification.user_nick.replace(" ", "-")}`;
            const wine_route = Boolean(notification.wine_id) ? `/wine-${notification.wine_id}-${notification.wine_name.replace(" ", "-")}` : null;
            switch (notification.message) {
              case "approvedFriend":
                message = <><span className="font-weight-bold">{notification.user_nick}</span> i Ty zostaliście znajomymi.</>;
                route = user_route;
                break;
              case "inviteToFriend":
                message = <><span className="font-weight-bold">{notification.user_nick}</span> zaprasza Cię do znajomych.</>;
                route = user_route;
                break;
              case "addedWine":
                message = <>Wino <span className="font-weight-bold">{notification.wine_name}</span> zostało dodane.</>;
                route = wine_route;
                break;
              case "addedComment":
                message = <><span className="font-weight-bold">{notification.user_nick}</span> umieścił komentarz na Twoim profilu.</>;
                route = user_route;
                break;
              case "recommendsWine":
                message = <><span className="font-weight-bold">{notification.user_nick}</span> poleca Ci spróbować wina <span className="font-weight-bold">{notification.wine_name}</span></>;
                route = wine_route;
                break;
            }
                return (
                  <tr key={notification.id}>
                  <td className="mb-2" id={notification.id} onClick={() => {setNotificationId(notification.id, route)}}> 
                  <div className={`dropdown-item border-radius-md `} >
                    <div className="d-flex py-1">
                      <div className="my-auto ms-2">
                        <a type="button" className="nav-link text-body p-0">
                        {Boolean(notification.user_id !== profileId) ?
                        <img src={Boolean(notification.user_avatar) ? `storage/${notification.user_avatar}` : `storage/images/user-${Boolean(notification.user_sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} alt="profile_image" className="me-3 avatar avatar-sm bg-white border shadow-xs w-100 h-100" />
                        : 
                        <img src='storage/img/logo-grape.png' alt="winozbiory_image" className="me-3 avatar avatar-sm bg-white border shadow-xs w-100 h-100" />}
                        </a>
                      </div>
                      <div role="button" className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1 text-wrap">                          
                          {message}
                        </h6>
                        <div className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          {dayjs(notification.created_at).locale('pl').fromNow()} 
                          {Boolean(!notification.readed) ? 
                          <div className="badge border border-success text-success bg-success border-radius-sm mt-auto mb-auto ms-1">Nowe</div> : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='text-end flex-end'>
                {Boolean(!notification.readed) ?
                <button onClick={() => {setReaded(notification.id)}} type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 ms-auto me-2">

              <span className="btn-inner--text text-nowrap">Oznacz</span>
              </button>
                
                : null}
                </td>    
                </tr>
                );
          });




        })() : <p className='text-center text-xs text-secondary mt-2 opacity-75'>Brak powiadomień.</p>}
</tbody>
</table>


                <div className="m-3">
                  <PaginationComponent opinions={notifications} links={notifications.links} />
                </div>


</div></div>
    );
}
