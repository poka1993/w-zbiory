import { Link } from '@inertiajs/inertia-react';

export default function NavButtons({  }) {
    return (
        <div class="row">
        <Link type="button" class="card btn btn-white btn-icon px-0 py-0 shadow-xs nav-grapes-logo" href={('/')} method="get" as="button"></Link>
        <a type="button" href="/" target="_blank" class="card btn btn-white btn-icon px-0 py-0 shadow-xs nav-facebook-icon"></a>
        <a type="button" href="/" target="_blank" class="card btn btn-white btn-icon px-0 py-0 shadow-xs nav-instagram-icon"></a>
        </div>
    );
}
