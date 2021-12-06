import React from 'react'
import UserTable from './UserTable'
import { useQuery } from "react-query";
import './index.css'
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
// import {Link} from 'react-router-dom'


const Users = () => {

    const fetchAllUsers = async () =>
    await (await fetch("http://localhost:3004/users")).json();

    const {data, error, status} = useQuery('users', fetchAllUsers)

    return (
        <Container>
        <div
            className='header-container'
        >
            <h2 className='heading'>Basic React Query app</h2>
            {/* <Link to='user/create'> */}
            <Button variant="outlined" color="primary" className='add-button'>
                Add User
            </Button>
            {/* </Link> */}
            <div>
        {status === "error" && <div>Error detected</div>}

        {status === "loading" && <div>Loading...</div>}

        {status === "success" && <UserTable users={data} />}
      </div>
        </div>
        </Container>
    )
}

export default Users
