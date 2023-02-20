import { Link } from '@inertiajs/inertia-react';

export default function Footer({}) {
    return (
    <>
      <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-xs text-muted text-lg-start">
              Copyright © 2023 Winozbiory.pl. Wszelkie prawa zastrzeżone.
            
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-xs text-muted" target="_blank">Strona Główna</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-xs text-muted" target="_blank">Regulamin</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/blog" className="nav-link text-xs text-muted" target="_blank">Lista użytkowników</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link text-xs pe-0 text-muted" target="_blank">Kontakt</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
    );
}
