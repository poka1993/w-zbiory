import React, {useState} from 'react'
import { Link } from '@inertiajs/inertia-react';

const PaginationComponent = ({links, phrase, category}) => {

    let paginationPhrase = (Boolean(phrase) ? `&phrase=${phrase}` : "");
    let paginationCategory = (Boolean(category) ? `&category=${category}` : "");

    return (


      <div className="px-3 d-flex w-100 justify-content-center">

        <nav aria-label="..." className="">
          <ul className="pagination pagination-light mb-0 d-flex flex-wrap">
                {links.map((link => (
                    Boolean(link.label == "Poprzednia" || link.label == "Następna")
                    ? (Boolean(links.length < 4) ? null : <Link key={link.label} preserveScroll href={link.url} type="button" className="btn text-xs btn-white me-2 ms-0 ms-sm-1 ps-3 pe-3 flex mt-1 mb-0 mt-sm-0">{link.label}</Link>)
                    : <Link key={link.label} preserveScroll href={Boolean(link.url) ? link.url : null} className={`page-item mt-1 mt-sm-0 ${link.active ? "active bg-primary" : null}page-link ${link.active ? null : "opacity-75"} font-weight-bold`}><div className={`page-link ${link.active ? null : "opacity-75"} font-weight-bold`}>{link.label}</div></Link>

                )
                ))}
          </ul>
        </nav>

      </div>

    )
}

export default PaginationComponent