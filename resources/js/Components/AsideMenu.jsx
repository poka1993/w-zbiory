import Dropdown from '@/Components/Dropdown';
import { Link} from '@inertiajs/inertia-react';
import React, { useState } from "react";

export default function AsideMenu(props) {
  const title = Boolean(props.pageTitle) ? props.pageTitle : "";
  const authId = Boolean(props.auth) ? props.auth.id : null;
  const userId = props.userId;

  const [hoverDashbord, setHoverDashbord] = useState(false);
  const [hoverRules, setHoverRules] = useState(false);
  const [hoverAddWine, setHoverAddWine] = useState(false);
  const [hoverUsers, setHoverUsers] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  const [hoverCheckWine, setHoverCheckWine] = useState(false);

  const [hoverRegister, setHoverRegister] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);

  const [hoverProfile, setHoverProfile] = useState(false);
  const [hoverSettings, setHoverSettings] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);

    return (
        <aside className="offcanvas offcanvas-start sidenav navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start " id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="sidenav-header overflow-hidden">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand d-flex align-items-center">
          <img className="ms-n2" src="storage/img/white-logo-font.png" width="150" />
            <button type="button" className="ps-6 btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </a>
        </div>
        <div className="overflow-hidden collapse navbar-collapse px-4 w-auto h-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
          <li className="nav-item mt-4">
              <div className="d-flex align-items-center nav-link ">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                <span className="font-weight-normal text-md ms-2">Menu główne</span>
              </div>
            </li>

            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverDashbord || Boolean(title == "Strona główna")) ? "active" : null }`} onMouseEnter={() => {setHoverDashbord(true)}} onMouseLeave={() => {setHoverDashbord(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
  <path className="color-foreground" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
</svg>
                </div>
                <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href='/' method="get" as="button">
                <span className="nav-link-text ms-1">Strona główna</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${Boolean(hoverRules || Boolean(title == "Regulamin serwisu"))  ? "active" : null }`} onMouseEnter={() => {setHoverRules(true)}} onMouseLeave={() => {setHoverRules(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                  <path className="color-foreground" fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path className="color-foreground" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path className="color-foreground" d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                </div>
                <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href='/rules' method="get" as="button">
                <span className="nav-link-text ms-1">Regulamin</span>
                </Link>
              </a>
            </li>
            {Boolean(props.auth) ?
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverAddWine || Boolean(title == "Dodaj wino")) ? "active" : null }`} onMouseEnter={() => {setHoverAddWine(true)}} onMouseLeave={() => {setHoverAddWine(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                </div>
                <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href='/addwine' method="get" as="button">
                <span className="nav-link-text ms-1">Dodaj wino</span>
                </Link>
              </a>
            </li> : null}
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverUsers || Boolean(title == "Lista użytkowników")) ? "active" : null }`} onMouseEnter={() => {setHoverUsers(true)}} onMouseLeave={() => {setHoverUsers(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                </svg>
                </div>
                <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href='/users' method="get" as="button">
                <span className="nav-link-text ms-1">Lista użytkowników</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverContact || Boolean(title == "Kontakt")) ? "active" : null }`} onMouseEnter={() => {setHoverContact(true)}} onMouseLeave={() => {setHoverContact(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                  <path className="color-foreground" d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                </svg>
                </div>
                <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href='/contact' method="get" as="button">
                <span className="nav-link-text ms-1">Kontakt</span>
                </Link>
              </a>
            </li>

            {Boolean(props.auth && (props.auth.admin == 1)) ?
            <><li className="nav-item mt-4">
              <div className="d-flex align-items-center nav-link ">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
              </svg>
                <span className="font-weight-normal text-md ms-2">Panel administratora</span>
              </div>
            </li>
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverCheckWine || Boolean(title == "Wina oczekujące")) ? "active" : null }`} type="button" onMouseEnter={() => {setHoverCheckWine(true)}} onMouseLeave={() => {setHoverCheckWine(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center ps-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database-check" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                  <path className="color-foreground" d="M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777ZM3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4Z"/>
                </svg>
                </div>
                <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href='/admin' method="get" as="button">
                <span className="nav-link-text ms-1">Wina oczekujące</span>
              </Link>
              </a>
            </li></>
            : null}










            <li className="nav-item mt-4">
              <div className="d-flex align-items-center nav-link ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ms-2">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
                <span className="font-weight-normal text-md ms-2">Panel użytkownika</span>
              </div>
            </li>
            {Boolean(props.auth) ?
            <>
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverProfile || Boolean(userId == authId)) ? "active" : null }`} onMouseEnter={() => {setHoverProfile(true)}} onMouseLeave={() => {setHoverProfile(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                </svg>
                </div>
                <Link type="button" className='nav-link nav-link position-relative bg-transparent border-0 ms-0 ps-1' href={`/profile-${props.auth.id}-${props.auth.nick.replace(" ", "-")}`} method="get" as="button">
              <span className="nav-link-text ms-1">Twój profil</span>
            </Link>
              </a>
            </li>
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverSettings) ? "active" : null }`} type="button" onClick={() => props.settingsButton()} onMouseEnter={() => {setHoverSettings(true)}} onMouseLeave={() => {setHoverSettings(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-gear" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
                </svg>
                </div>
                <span className="nav-link-text ms-2 text-normal">Ustawienia konta</span>
              </a>
            </li>
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverLogout) ? "active" : null }`} type="button" onMouseEnter={() => {setHoverLogout(true)}} onMouseLeave={() => {setHoverLogout(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center ps-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path className="color-foreground" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </div>
                <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href={(route('logout'))} method="post" as="button">
                <span className="nav-link-text ms-1">Wyloguj się</span>
              </Link>
              </a>
            </li></> :
            <>
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverRegister) || Boolean(title == "Rejestracja konta") ? "active" : null }`} onMouseEnter={() => {setHoverRegister(true)}} onMouseLeave={() => {setHoverRegister(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                </svg>
                </div>
              <Link className="nav-link position-relative bg-transparent border-0 ms-0 ps-1" href='/register' method="get" as="button">
              <span className="nav-link-text ms-1">Załóż konto</span>
              </Link>
              </a>
            </li>
            <li className="nav-item">
            <a className={`nav-link ${Boolean(hoverLogin) ? "active" : null }`} type="button" onClick={() => props.loginButton()} onMouseEnter={() => {setHoverLogin(true)}} onMouseLeave={() => {setHoverLogin(false)}}>
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-gear" viewBox="0 0 16 16">
                  <path className="color-foreground" d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
                </svg>
                </div>
                <span className="nav-link-text ms-2">Zaloguj się</span>
              </a>
            </li>
            </>}
          </ul>
        </div>

      </aside>
    );
}
