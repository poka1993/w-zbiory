import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <div className='ms-3 me-3'>

            <div className="mb-4 text-sm text-gray-600">
                Zapomniałeś hasła? Żaden problem. Wprowadź swój adres email, a my prześlemy Ci link, który pozwoli je zresetować.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>


            <label>Adres email</label>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Wprowadź swój email"
                        id="password" name="email" value={data.email} isFocused={true} onChange={onHandleChange} />
                    </div>


                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-n3">
                <div class="text-center">
                            <button disabled={processing} type="button" onClick={submit} class="btn btn-dark w-100 mt-4 mb-0">Prześlij link do zresetowania hasła</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
