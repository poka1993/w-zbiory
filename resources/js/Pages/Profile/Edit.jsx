import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Navigation from '@/Components/Navigation'
import Profile from '@/Components/Profile'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <>        
        <Head title="Profil użytkownika" />
              
  {/* menu boczne */}
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
  <Navigation props={auth}/>
  <Profile />
      {/* <!-- End Navbar --> */}
      <div className="container-fluid py-4 px-3">

        <Footer />  
      </div>
    </main>                  
    </>
    // </AuthenticatedLayout>
      );
  }