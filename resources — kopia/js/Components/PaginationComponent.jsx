import React, {useState} from 'react'

const PaginationComponent = ({links, phrase, category}) => {

    let paginationPhrase = (Boolean(phrase) ? `&phrase=${phrase}` : "");
    let paginationCategory = (Boolean(category) ? `&category=${category}` : "");

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex mt-3">
                {links.map((link => <li key={link.label} className="page-item"><a className="page-link" href={link.url + paginationPhrase + paginationCategory}>{link.label}</a></li>))}
            </ul>
        </nav>
    )
}

export default PaginationComponent