import Wines from '@/Components/Wines/Wines';
import AddComment from '@/Components/AddComment';
import Comments from '@/Components/Comments';
import FriendsList from '@/Components/FriendsList'
import OpinionsProfile from '@/Components/OpinionsProfile';
import React, {useState, useEffect} from 'react';
import NavButtons from './NavButtons';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link, useForm } from '@inertiajs/inertia-react';
import SettingsModal from '@/Components/SettingsModal';

export default function Profile({props, user, online, comments, opinions, total_opinions, total_comments, wines, total_wines, selected_list, friends, total_friends, flashServerMessage}) {
  const { data, setData, get, post, patch, delete: destroy, processing, errors, reset } = useForm({
    selectedList: selected_list,
    user_id: user.id
  }); 
  const { selectedList } = data;
  dayjs.extend(relativeTime);
  const handleRefresh = (wineId) => setRefresh(true);
    const [changeList, setChangeList] = useState(false);
    const [renderedList, setRenderedList] = useState(

      Boolean(selectedList == "opinions") ?
      <div className="col-12"><div className="card border shadow-xs h-100 overflow-hidden border-top-0"><OpinionsProfile opinions={opinions}/></div></div>
      : (Boolean(selectedList == "wines") ? <Wines wines={wines} props={props} handleRefresh={handleRefresh} flashServerMessage={flashServerMessage}/> : <FriendsList users={friends} ownProfile={Boolean(props && props.id == user.id)} handleRefresh={handleRefresh} />)

      
    );
    const [renderedHeader, setRenderedHeader] = useState(Boolean(selectedList == "opinions") ?
      `Wystawionych opinii: ${total_opinions}` :
      (Boolean(selectedList == "wines") ? `Ulubionych win: ${total_wines}` : `Liczba znajomych: ${total_friends}`)
    );

  const [showSettings, setShowSettings] = useState(false);
  const handleCloseSettings = () => setShowSettings(false);
  const handleShowSettings = () => setShowSettings(true);

  const [refresh, setRefresh] = useState(false);

  // if (refresh) {
  //   propsWines.data.filter(wine => wine.id !== refresh);
  //   setRefresh(null);

  //   setRenderedList(<Wines wines={propsWines} handleRefresh={handleRefresh} />);
  //   setRenderedHeader(`Ulubionych win: ${total_wines}`);
  // }

  function renderList(id) {
    setChangeList(true);
    // switch (id) {
    //   case "opinions":
    //   setChangeList(true);
    //   break;
    //   case "wines":
    //   setChangeList(true);
    //   break;
    //   case "friends":
    //   setRenderedList(        
    //   <div className="col-12"><div className="card border shadow-xs mb-4 overflow-hidden">
    //   <FriendsList />
    //   </div></div>);
    //   setRenderedHeader("Liczba znajomych: 18");
    //   break;
    // }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setShowFlash(false);
  };

  const [showFlash, setShowFlash] = useState(false);
  const handleCloseFlash = () => setShowFlash(false);
  const handleShowFlash = () => {
    setShowFlash("Twój komentarz został opublikowany, dziękujemy.");
  };

  const inviteToFriend = () => {
    return post(`/inviteToFriend`, { params: user.id, preserveScroll: true, onSuccess: () => {setShowFlash("Zaproszenie do znajomych zostało wysłane.")} });
  }

  const approveFriend = () => {
    return patch(`/approveFriend`, { params: user.id, preserveScroll: true, onSuccess: () => {setShowFlash("Zaakceptowano zaproszenie do znajomych.")} });
  }

  const cancelInviteToFriend = () => {
    return destroy(`/removeFromFriends`, { params: user.id, preserveScroll: true, onSuccess: () => {setShowFlash("Cofnięto zaproszenie do znajomych.")} });
  }

  const removeFromFriends = () => {
    return destroy(`/removeFromFriends`, { params: user.id, preserveScroll: true, onSuccess: () => {setShowFlash("Usunięto użytkownika ze znajomych.")} });
  }

  const declineFriend = () => {
    return destroy(`/removeFromFriends`, { params: user.id, preserveScroll: true, onSuccess: () => {setShowFlash("Nie przyjęto zaproszenia do znajomych.")} });
  }

   const friendship = user.friendship;
  const [friendshipLabel, setFriendshipLabel] = useState();

  const friendshipFunction = (relation) => {
    switch(relation) {
      case 'friends':
        return removeFromFriends();
      case 'invited':
        return approveFriend();
      case "sender":
        return cancelInviteToFriend();
      default:
        return inviteToFriend();
    };
  }

  useEffect(() => {
    if (refresh) { 
      if (selectedList == "wines") {
        setRenderedList(<Wines wines={wines} props={props} handleRefresh={handleRefresh} flashServerMessage={flashServerMessage}/>);
        setRenderedHeader(`Ulubionych win: ${total_wines}`);
        setRefresh(false);    
      } else {
        setRenderedList(<FriendsList users={friends} ownProfile={Boolean(props.id == user.id)} handleRefresh={handleRefresh} />);
        setRenderedHeader(`Liczba znajomych: ${total_friends}`);
        setShowFlash("Usunięto użytkownika ze znajomych.")
        setRefresh(false);
      };
    };

    if (changeList) {
      get(`/profile-${user.id}-${user.nick.replace(" ", "-")}`, { params: data, preserveScroll: true });
      setChangeList(false);
    };

    switch(friendship) {
      case 'friends':
        setFriendshipLabel("Usuń ze znajomych");
        return;
      case 'sender':
        setFriendshipLabel("Cofnij zaproszenie");
        return;
      case 'invited':
        setFriendshipLabel("Akceptuj zaproszenie");
        return;
      default:
        setFriendshipLabel("Zaproś do znajomych");
        return;
    };
});


    return (
      <>
              <div className={`card border shadow-xs p-3 alert-card position-fixed d-flex flex-row ${Boolean(showFlash) ? null : "d-none" }`} >
          <div className='d-flex col-10 align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-success bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<p className="text-sm mb-0 text-gray">{showFlash}</p>
</div>
<div className="text-end col-2">
                <div className="dropdown">
                <button type="button" className="btn btn-white btn-icon px-2 mt-n1 mb-n1 me-n1 py-2 m-0 " onClick={handleCloseFlash} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>   

          </div>

        </div>
                  
                  </div>
      {props ? <SettingsModal showModal={showSettings} props={props} handleClose={handleCloseSettings} /> : null}
     <AddComment showModal={show} props={props} userId={user.id} handleClose={handleClose} handleShowFlash={handleShowFlash}/>
        <div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md'>
        <div className="col-12">
        <div className="card shadow-xs border mb-1 pb-3 nav-grapes pt-5 pb-6 z-1">
          <div className='nav-grapes-img'></div>        
        </div>
      </div>
      <div className='d-flex row'>
      <div className='w-20'> 

      <NavButtons />

      </div>

</div>
    <div className='d-flex align-items-center justify-content-center'>
    <div className="w-95"> 
    
    {/* container */}

      <div className="card card-body py-2 bg-transparent shadow-none">
        <div className="row">
          <div className="col-auto">
            <div className="avatar avatar-2xl rounded-circle position-relative mt-n7 border border-gray-100 border-4 shadow-sm bg-white">
            <img src={Boolean(user.avatar) ? `storage/${user.avatar}` : `storage/images/user-${Boolean(user.sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} alt="profile_image" className="w-100 h-100" />
            </div>
          </div>
          <div className="col-auto my-auto">
            <div className="h-100">
              <div className="mb-0 font-weight-bold d-flex flex-row">
                <h3 className='mt-auto mb-auto'>{user.nick}</h3>
              
                <div className="align-middle text-center text-lg mt-auto mb-auto ms-2">
                  {Boolean(online) 
                  ? <span className="badge badge-sm border border-success text-success bg-success">Online</span> 
                  : <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>}                  
                </div>
              </div>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3 text-sm-end d-flex flex-row">
          {Boolean(props && props.id !== user.id) ?
          <button type="button" onClick={() => friendshipFunction(user.friendship)} className="btn btn-sm btn-dark btn-icon d-flex ms-sm-auto me-n4">
                    <span className="btn-inner--icon me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                    </span>
                    <span className="btn-inner--text text-wrap">{friendshipLabel}</span>
            </button> : null}
          {Boolean(props && props.id !== user.id && user.friendship == "invited") ?
          
          <button type="button" onClick={() => declineFriend()} className="btn btn-sm btn-dark btn-icon d-flex ms-5 me-n4">
                    <span className="btn-inner--text text-wrap">Odrzuć zaproszenie</span>
            </button>

          : null}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    <div className="container-fluid px-3">
      <div className='row'>
      <div className="col-12 col-lg-4 mb-4">
            <div className="card border shadow-xs h-100">
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className="mb-0 font-weight-semibold text-lg">Dane profilowe</h6>
                    {/* <p className="text-sm mb-1">Edit the information about you.</p> */}
                  </div>
                  {Boolean(props && props.id == user.id) ?
                  <div className="col-md-4 col-3 text-end">
                    <button type="button" onClick={handleShowSettings} className="btn btn-white btn-icon px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </button>
                  </div> : null}
                </div>
              </div>
              <div className="card-body p-3">
                <p className="text-sm mb-4 mt-n3">
                  {Boolean(user.description) ? user.description : "Brak opisu."} 
                </p>
    
                  <p className="text-sm mb-2">Imię: <b>{user.name}</b></p>
                  <p className="text-sm mb-2">Płeć: <b>{user.sex}</b></p>
                  <p className="text-sm mb-2">Wiek: <b>{dayjs().diff(dayjs(user.birthday), 'year')}</b></p>
                  <p className="text-sm mb-2">Miejscowość: <b>{user.locality}</b></p>
                  <p className="text-sm mb-2">Ostatnia aktywność: <b>{Boolean(user.last_seen) ? dayjs(user.last_seen).locale('pl').fromNow() : "Nigdy"}</b></p>
                  <p className="text-sm mb-2">Data rejestracji: <b>{dayjs(user.created_at).format('DD.MM.YYYY')}</b></p>

              </div>
            </div>
          </div>


          <div className="col-12 col-lg-8 mb-4">
            <div className="card border shadow-xs h-100">
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-sm-8 col-12">
                    <h6 className="mb-0 font-weight-semibold text-lg">Komentarze ({total_comments})</h6>
                    <p className="text-sm mb-1">{props ? "Możesz podzielić się komentarzem na temat tego użytkownika." : "Aby móc podzielić się komentarzem na temat tego użytkownika zaloguj się na swoje konto."}</p>
                  </div>
                  <div className="col-sm-4 mt-2 mt-sm-0 col-12 mb-n2">
                  {props ?
                  <button onClick={handleShow} type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 me-4 mt-2 ms-4 ms-sm-auto">
                    <span className="btn-inner--icon">
                      <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </span>
                    <span className="btn-inner--text text-nowrap">Dodaj komentarz</span>
                    </button>
                  : null}
                  </div>
                </div>
              </div>




              <div className="card-body p-3 pt-0">   
              <hr />                                 
              <ul className="list-group">

              <Comments comments={comments}/>

              </ul>
            </div>
            </div>
          </div>
        </div>

        <div className="col-12">
        <div className="d-lg-flex align-items-center mt-4 mb-4">
          <div className="flex-grow mb-md-0 mb-4">
            <h5 className="font-weight-semibold mb-1 ms-4">{renderedHeader}</h5>
            <p className="text-sm mb-0 ms-4">Jeśli chcesz śledzić poczynania tego użytkownika na stronie, zaproś go do znajomych.</p>
          </div>
          <div className="btn-group align-items-end mb-0 me-sm-4 mt-2 ms-sm-4 ms-sm-auto d-flex col-12 col-lg-6 col-xl-5 col-xxl-4" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="listOptions" id="opinions" autoComplete="off" onChange={(e) => renderList(e.target.id) + setData({selectedList: e.target.id})} checked={selectedList=="opinions"} />
                  <label className="btn btn-white px-3 mb-0" htmlFor="opinions"><div className='d-block d-sm-none'>Opinie</div><div className='d-none d-sm-block'>Wystawione opinie</div></label>
                  <input type="radio" className="btn-check" name="listOptions" id="wines" autoComplete="off" onChange={(e) => renderList(e.target.id) + setData({selectedList: e.target.id})} checked={selectedList=="wines"}/>
                  <label className="btn btn-white px-3 mb-0" htmlFor="wines"><div className='d-block d-sm-none'>Wina</div><div className='d-none d-sm-block'>Ulubione wina</div></label>
                  <input type="radio" className="btn-check" name="listOptions" id="friends" autoComplete="off" onChange={(e) => renderList(e.target.id) + setData({selectedList: e.target.id})} checked={selectedList=="friends"}/>
                  <label className="btn btn-white px-3 mb-0" htmlFor="friends"><div className='d-block d-sm-none'>Znajomi</div><div className='d-none d-sm-block'>Lista znajomych</div></label>
            </div>

        </div>
      </div>
      <hr />
        <div className='mb-n4'>
          {renderedList}
        {/* <ul className="list-group"><Opinions /></ul>
        <div><Wines /></div> */}
        </div>

      

        </div>
      </>
    );
}
