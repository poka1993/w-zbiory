import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';

export default function DeleteUserForm({ className, handleClose }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const setClose = () => {
        handleClose();
    }

    return (
        <div className='d-flex flex-column col-12'>
            <header className='col-12 d-flex flex-column'>
                <p className="mt-2 text-sm text-gray-600 ms-auto me-auto ">
                Tutaj możesz usunąć swoje konto z serwisu, pamiętaj jednak że ten proces jest nieodwracalny.</p>
                <p className="mt-n2 text-sm text-gray-600 ms-auto me-auto ">
                Aby uwierzytelnić chęć trwałego wykasowania swojego konta wraz ze wszystkimi jego zasobami należy wprowadzić hasło
                i zatwierdzić rozstanie.
                </p>
            </header>
            <div className="col-12 d-flex flex-column flex-lg-row ps-2 pe-2">
            <div className="col-12 col-lg-6 d-sm-inline pe-md-2">
                    <label>Hasło</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Wprowadź hasło" 
                      value={data.current_password} id="password" name="password" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.password} className="mt-2 mb-2" />
            </div>
            </div>
            <div className="col-12 col-lg-6 d-sm-inline pe-md-2">
           <div className="text-center d-flex gap-2 mb-n3 ">
                        <button disabled={processing} type="button" onClick={deleteUser} className="btn btn-dark w-100 mt-2">Zapisz zmiany</button>
                        <button disabled={processing} type="button" onClick={setClose} className="btn btn-dark w-100 mt-2 ">Anuluj</button>
                    </div>
            </div>
        </div>
    );
}
