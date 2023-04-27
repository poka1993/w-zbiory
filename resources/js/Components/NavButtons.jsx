import { Link } from '@inertiajs/inertia-react';

export default function NavButtons({  }) {
    return (
        <div className="row">
        <Link type="button" className="card btn btn-white btn-icon px-0 py-0 shadow-xs nav-grapes-logo" href={('/')} method="get" as="button"></Link>
        <a type="button" href="https://www.facebook.com/winozbiory/" target="_blank" className="card btn btn-white btn-icon px-0 py-0 shadow-xs nav-facebook-icon"></a>
        <a type="button" href="https://www.instagram.com/winozbiory_pl/" target="_blank" className="card btn btn-white btn-icon px-0 py-0 shadow-xs nav-instagram-icon"></a>
        </div>
    );
}
