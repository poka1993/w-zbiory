import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';

export default function NotificationComponent (props) {
    dayjs.extend(relativeTime);
    const { data, setData, get, patch, processing, errors, reset } = useForm({
      notification_id: null,
      route: null
    }); 
    
    const setNotificationId = (id, route) => {
        setData({
          ...data,
          notification_id: id,
          route: route
        });
    }

    useEffect(() => {
      if (data.notification_id) {
        patch(`/readNotification`, { params: data, preserveScroll: true });

        get(`${data.route}`);
        setData({
          ...data,
          notification_id: null,
          route: null
        });
      }
  });

    const [hover, setHover] = useState(false);
    const notifications = props.data;
    const profileId = props.profile;

    return (
    <>
        
        {(() => {
          return notifications.map((notification) => {
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
                  <div key={notification.id} className="mb-2" id={notification.id} onClick={() => {setNotificationId(notification.id, route)}}> 
                  <div className={`dropdown-item border-radius-md `}
                                    onMouseEnter={() => {Boolean(props.hover) ? setHover(notification.id) : false}}
                                    onMouseLeave={() => {Boolean(props.hover) ? setHover(false) : false}}
                                    style={{backgroundColor: Boolean(hover == notification.id) ? `rgba(100,116,139,.1)` : null}} >
                    <div className="d-flex py-1">
                      <div className={`my-auto ${Boolean(props.hover) ? "ms-2" : null}`}>
                        <div type="button" className="nav-link text-body p-0">
                        {Boolean(notification.user_id !== profileId) ?
                        <img src={Boolean(notification.user_avatar) ? `storage/${notification.user_avatar}` : `storage/images/user-${Boolean(notification.user_sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} alt="profile_image" className="me-3 avatar avatar-sm bg-white border shadow-xs w-100 h-100" />
                        : 
                        <img src='storage/img/logo-grape.png' alt="winozbiory_image" className="me-3 avatar avatar-sm bg-white border shadow-xs w-100 h-100" />}
                        </div>
                      </div>
                      <div role="button" className="d-flex flex-column justify-content-center">
                        <h6 className={`text-sm font-weight-normal mb-1 ${Boolean(props.hover) ? "text-wrap" : null}`}>                          
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
                </div>
                );
          });




        })()}


          <div className='text-xs'>
          <Link type="button" className='border-0 bg-transparent w-100 text-center' href={`/notifications`} method="get" as="button">
              <div role="button" className="dropdown-item border-radius-md"
              onMouseEnter={() => {Boolean(props.hover) ? setHover("archive") : false}}
              onMouseLeave={() => {Boolean(props.hover) ? setHover(false) : false}}
              style={{backgroundColor: Boolean(hover == "archive") ? `rgba(100,116,139,.1)` : null}}>
                <div className="d-flex py-1">
                  <div className="my-auto ms-auto me-auto opacity-75">
                    {Boolean(props.data.length) ? "Archiwum powiadomień" : "Brak powiadomień"}
                  </div>
                </div>
              </div>
            </Link>
          </div>


    </>
    );
}
