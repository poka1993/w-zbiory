import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filter from '@/Components/Filter'
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import Wines from '@/Components/Wines/Wines'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';



export default function Dashboard(props) {
    return (
      <>
        {/* // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // > */}
        
            <Head title="Strona główna" />
            
{/* menu boczne */}
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
<Navigation />
<Statistics />
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3">
      <Filter />
      <Wines />      
      <Footer />  
    </div>
  </main>                  
  </>
  // </AuthenticatedLayout>
    );
}
