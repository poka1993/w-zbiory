import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

export default function UpdatePasswordForm({ className, handleClose }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const [showFlash, setShowFlash] = useState(false);
    const handleCloseFlash = () => setShowFlash(false);
    const handleShowFlash = () => {
      setShowFlash(true);  
    };

    const updatePassword = (e) => {
        e.preventDefault();
        setShowFlash(false);
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => (
                reset(),
                handleShowFlash(true)
            ),
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const setClose = () => {
        handleClose();
    }


    return (
        <>
        <div className={`card mt-1 w-lg-75 border shadow-xs p-3 alert-card position-fixed d-flex flex-row ${Boolean(showFlash) ? null : "d-none" }`} >
          <div className='d-flex col-10 align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-success bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <p className="text-sm mb-0 text-gray">Twoje hasło zostało zmienione.</p>
        </div>
        <div className="text-end col-2">
                <div className="dropdown">
                <button type="button" className="btn btn-white btn-icon px-2 mt-n1 mb-n1 me-n1 py-2 m-0 " onClick={handleCloseFlash} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>   

          </div>

        </div>
                  
                  </div>



        <div className='d-flex flex-column col-12'>
            <header className='col-12 d-flex flex-row'>
                <p className="mt-2 text-sm text-gray-600 ms-auto me-auto">
                    Tutaj możesz zmienić swoje hasło dostępu do konta.
                </p>
            </header>
            <div className="col-12 d-flex flex-column flex-lg-row ps-2 pe-2">
            <div className="col-12 col-lg-6 d-sm-inline pe-md-2">
                    <label>Obecne hasło</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Wprowadź obecne hasło" 
                      value={data.current_password} id="current_password" name="current_password" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.current_password} className="mt-2" />
            </div>
            <div className="col-12 col-lg-6 d-sm-inline pe-md-2">
                    <label>Nowe hasło</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Wprowadź nowe hasło" 
                      value={data.password} id="password" name="password" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.password} className="mt-2" />
 
                    <label>Potwierdź nowe hasło</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Wprowadź nowe hasło" 
                      value={data.password_confirmation} id="password_confirmation" name="password_confirmation" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />
            </div>
            </div>
            <div className="col-12 col-lg-6 d-sm-inline pe-md-2">
           <div className="text-center d-flex gap-2 mb-n3 ">
                        <button disabled={processing} type="button" onClick={updatePassword} className="btn btn-dark w-100 mt-2">Zapisz zmiany</button>
                        <button disabled={processing} type="button" onClick={setClose} className="btn btn-dark w-100 mt-2 ">Anuluj</button>
                    </div>
            </div>
        </div>
        </>
    );
}
