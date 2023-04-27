import { Link, Head } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import Wines from '@/Components/Wines/Wines'
import Footer from '@/Components/Footer'


export default function Welcome(props) {
    const stats = {
        addedWines: Boolean(props.added_wines) ? props.added_wines : "0",
        registeredUsers: Boolean(props.registered_users) ? props.registered_users : "0",
        addedOpinions: Boolean(props.added_opinions) ? props.added_opinions : "0",
        addedRates: Boolean(props.added_rates) ? props.added_rates : "0"
    }
    
    return (
        <>      
            <Head>
            <title>Wyszukiwarka win</title>
            <meta head-key="description" name="description"
            content="Portal internetowy gromadzący najlepsze marki wina oraz opinie na ich temat. Zbiór winogronowych trunków, który pozwala skompletować listę ulubionych produktów." />
            </Head>
            
{/* menu boczne */}
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto">
<Navigation props={props.auth.user} search_phrase={props.search_phrase} notifications={props.notifications} new_notifications={props.new_notifications}/>   
<Statistics stats={stats}/>
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3">
        <div className="col-12">
            <div className="d-lg-flex align-items-center mt-n3 mb-4">
            <div className="flex-grow mb-md-0 mb-4">
                <h5 className="font-weight-semibold mb-1 ms-4">Znalezionych win: {props.total_wines}</h5>
                <p className="text-sm mb-0 ms-4">Jeżeli brakuje wina, które zasługuje na znalezienie się w naszej bazie prosimy o je dodanie {props.auth.user ? "za pomocą formularza." : "po uprzednim zalogowaniu się na konto."}</p>
            </div>
                {props.auth.user ? 
                <Link type="button" className='btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 me-4 mt-2 ms-4 ms-sm-auto' href={`/addwine`} method="get" as="button">
                    <span className="btn-inner--icon">
                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                    </span>
                    <span className="btn-inner--text">Dodaj wino</span>
                </Link>
                : null}
            </div>
        </div>
      <hr />
      <Wines wines={props.wines} props={props.auth.user} flashServerMessage={props.flash}/>         
      <Footer />  
    </div>
  </main>                  


        </>
    );
}
