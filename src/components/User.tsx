import { UserProps } from "../types/user"
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"
import classes from "./User.module.css"
import UserLoader from "./UserLoader.tsx"
import { useEffect } from "react"
import { useState } from "react"

const User = ({ login, avatar_url, followers, following, location }: UserProps) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    if (isLoading) {
        return <UserLoader />
    }

    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p className={classes.location}>
                    <MdLocationPin />
                    <span> {location}</span>
                </p>
            )}
            <div className={classes.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={classes.number}>{following}</p>
                </div>
            </div>
            <Link to={`https://github.com/${login}?tab=repositories&q=&type=&language=&sort=stargazers`} >Ver melhores projetos!</Link>
        </div>
    )
}

export default User