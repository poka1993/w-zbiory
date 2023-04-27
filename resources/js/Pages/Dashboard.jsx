import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filter from '@/Components/Filter'
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import Wines from '@/Components/Wines/Wines'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';



export default function Dashboard(props) {
  const title = "Strona główna";
    return (
      <>
        {/* // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // > */}
        
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

