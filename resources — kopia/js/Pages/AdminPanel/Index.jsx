import React, {useState} from 'react'
// import Pagination from 'react-js-pagination'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/inertia-react'

const Index = ({auth}) => {

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Posts' />
            <div>
                hej
            </div>
        </AuthenticatedLayout>
    )
}

export default Index