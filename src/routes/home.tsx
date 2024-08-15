
import Search from '../components/search'
import { useState } from 'react'
import { UserProps } from '../types/user'
import User from '../components/User'
import Error from '../components/Error'

const home = () => {

    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)

    const loadUser = async(username: string) => {
        setError(false)

        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json()  
        
        if(res.status === 404) {
            setError(true)
            return
        }
        const {avatar_url, login, location, followers, following} = data
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        }        

        setUser(userData)
    }

  return (
    <div>
        <Search loadUser = {loadUser}></Search>
        {user && <User{...user}/>}
        {error && <Error></Error>}
    </div>
  )
}

export default home