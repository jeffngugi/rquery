import { Button, Container, TextField } from '@material-ui/core';
import React from 'react'
import { useQuery } from "react-query";
import {useParams} from 'react-router-dom'
import './index.css'
import axios from 'axios'


  async function fetchUser({queryKey}){
    const [_key, { id }] = queryKey
    const {data} = await axios.get(`http://localhost:3004/users/${id}`)    
    return data
}

  

const SingleUser = () => {


    const { id } = useParams()
    const { data, error, isLoading, isError, status } = useQuery(['user', { id }],fetchUser)

    
    return (    
        <Container>
             {status === "error" && <div>Error detected</div>}

            {status === "loading" && <div>Loading...</div>}

            {status === "success" && 
                (
                    <Container>
                        <form className='userform'>
                        <TextField 
                            id="outlined-basic" 
                            label="firstname" 
                            variant="outlined" 
                            value={data.first_name}
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="lastname" 
                            variant="outlined" 
                            value={data.last_name}
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="email" 
                            variant="outlined" 
                            value={data.email}
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="gender" 
                            variant="outlined" 
                            value={data.gender}
                        />

                        <Button variant="outlined" color="primary" className='add-button'>
                            Edit User
                        </Button>
                        </form>
                    </Container>
                )
            }
        </Container>
    )
}

export default SingleUser
