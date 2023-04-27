import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Navigation from '@/Components/Navigation'
import Profile from '@/Components/Profile'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';

export default function ProfilePage({ flash, auth, mustVerifyEmail, status, user, online, comments, opinions, total_opinions, total_comments, wines, total_wines, selected_list, friends, total_friends, notifications, new_notifications }) {
  const nick = Boolean(user) ? user.nick : null;
  const title = "Profil użytkownika " + nick;
  return (
        <>        
            <Head>
            <title>{title}</title>
            <meta head-key="description" name="description"
            content="Portal internetowy gromadzący najlepsze marki wina oraz opinie na ich temat. Zbiór winogronowych trunków, który pozwala skompletować listę ulubionych produktów." />
            </Head>
              
  {/* menu boczne */}
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto d-flex flex-column min-vh-100">
  <Navigation props={auth.user} notifications={notifications} new_notifications={new_notifications} title={title} userId={user.id}/>  
  <Profile props={auth.user} user={user} online={online} comments={comments} opinions={opinions} total_opinions={total_opinions} total_comments={total_comments} wines={wines} total_wines={total_wines} selected_list={selected_list} friends={friends} total_friends={total_friends} flashServerMessage={flash}/>
      {/* <!-- End Navbar --> */}
      <div className="container-fluid py-4 px-3 flex-grow-1">

      </div>
      <Footer /> 
    </main>                  
    </>
    // </AuthenticatedLayout>
      );
  }