import { Button, Container, TextField } from '@material-ui/core';
import React from 'react'
import { useQuery } from "react-query";
import {useParams} from 'react-router-dom'
import './index.css'

const fetchUser = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    const response = await fetch(`http://localhost:3004/users/${id}`)
  
    if (!response.ok) {
      throw new Error(response.statusText)
    }
  
    return response.json()
  }
  

const SingleUser = () => {


    const { id } = useParams()
    const { data, error, isLoading, isError, status } = useQuery(
        ['user', { id }],
        fetchUser
      )

      console.log(data)
    
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
