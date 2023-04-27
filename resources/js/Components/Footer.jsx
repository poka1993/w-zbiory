import { Link } from '@inertiajs/inertia-react';

export default function Footer({}) {
    return (
    <>
      <footer className="footer footer-bs pt-3 bottom mt-auto mb-3">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-xs text-muted text-lg-start">
              <Link className=" bg-transparent border-0 pe-3 text-muted text-xs" href='/' method="get" as="button">
                Copyright © 2023 Winozbiory.pl. Wszelkie prawa zastrzeżone.        
              </Link>    
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                <Link className="nav-link position-relative bg-transparent border-0 text-muted text-xs" href='/' method="get" as="button">
                  Strona główna
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link position-relative bg-transparent border-0 text-muted text-xs" href='/rules' method="get" as="button">
                  Regulamin
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link position-relative bg-transparent border-0 text-muted text-xs" href='/users' method="get" as="button">
                  Lista użytkowników
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link position-relative bg-transparent border-0 text-muted text-xs" href='/contact' method="get" as="button">
                  Kontakt
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
    );
}
