import Link from 'next/link'
import classes from '../styles/error.module.css'
export default function ErrorPage(){
    return (
        <>
            <h1 className={classes.error}>404 Page Not Found</h1>
            <p><Link href={'/'}><a>Go back</a></Link> home</p>
            </>
    )
}