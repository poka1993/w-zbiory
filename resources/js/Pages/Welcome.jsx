import { Link, Head } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filter from '@/Components/Filter'
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import Wines from '@/Components/Wines/Wines'
import Footer from '@/Components/Footer'
import Cookies from 'js-cookie';


export default function Welcome(props, message) {
    const title = "Strona główna";
    let data;
    if (document.cookie.indexOf('user_filter') == -1 ) {
        data = props.filter;
    } else {
        data = JSON.parse(Cookies.get('user_filter'));
    }

    const stats = {
        addedWines: Boolean(props.added_wines) ? props.added_wines : "0",
        registeredUsers: Boolean(props.registered_users) ? props.registered_users : "0",
        addedOpinions: Boolean(props.added_opinions) ? props.added_opinions : "0",
        addedRates: Boolean(props.added_rates) ? props.added_rates : "0"
    }
    
    return (
        <>      
            <Head>
            <title>{title}</title>
            <meta head-key="description" name="description"
            content="Portal internetowy gromadzący najlepsze marki wina oraz opinie na ich temat. Zbiór winogronowych trunków, który pozwala skompletować listę ulubionych produktów." />
            </Head>
            
{/* menu boczne */}
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto d-flex flex-column min-vh-100">
<Navigation props={props.auth.user} notifications={props.notifications} new_notifications={props.new_notifications} title={title}/>    
<Statistics stats={stats}/>
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3 flex-grow-1">
      <Filter wines={props.wines} totalWines={props.total_wines} props={props.auth.user} paramsFilter={data}/>
      <Wines wines={props.wines} props={props.auth.user} flashServerMessage={props.flash}/>     
      </div> 
      <Footer />  
  </main>                  
        </>
    );
}
