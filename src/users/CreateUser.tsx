import React, {useState, Fragment} from 'react'
import {Container} from '@material-ui/core'
import {useMutation} from 'react-query'
import axios from 'axios'


const CreateUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [user, setUser] = useState({})

    interface IUser{
        first_name:string;
        last_name:string;
        email:string;
        gender:string;
    }

    const exampleUser = {
        first_name:firstName,
        last_name:lastName,
        email,
        gender,
    } 

    const postUser = (user:IUser) => axios.post<IUser>('http://localhost:3004/users', user)
    
     const { isLoading, mutate } = useMutation(postUser);
        const onButtonClick = () => {
            mutate(exampleUser)
        };
    

    return (
        <Container>
            <Fragment>
            <div className="post">
            <h1>Create a Post</h1>
                <br />
                <label>FirstName:</label> 
                <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                <br />
                <label>LastName:</label>
                <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)}/> <br />
                <label>Email:</label> 
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <br />
                <label>Gender:</label>
                <input type="text" value={gender} onChange={e=>setGender(e.target.value)}/> <br />
                <button  onClick={onButtonClick} >Create</button>
                <p> Created a new Post ID:</p>
                <div style={{color: 'gray', background: '#234'}}>

               {
                   isLoading && 'Loading'
               }
                </div>
            </div>

         </Fragment>
        </Container>
    )
}

export default CreateUser
