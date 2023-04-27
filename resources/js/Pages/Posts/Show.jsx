import React, {useState} from 'react'
// import Pagination from 'react-js-pagination'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import PaginationComponent from '@/Components/PaginationComponent'
import { useForm, Head } from '@inertiajs/inertia-react'
import Post from '@/Components/Post'

const Show = ({auth, post}) => {

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Post' />
            <div className='max-w-2x1 mx-auto p4 sm:p-6 lg:p-8'>
                stronka
            </div>
        </AuthenticatedLayout>
    )
}

export default Show