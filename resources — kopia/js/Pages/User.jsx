import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';


const User = ({users}) => {
    return (
        <div>
            <Fragment>
                <table className="table table-stroked">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                            <td><InertiaLink href="/" className='btn btn-primary'>Edit</InertiaLink></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        </div>
    )
}

export default User;