import Head from 'next/head'
import Image from 'next/image'
import {TiMail, TiPhoneOutline, TiMap} from 'react-icons/ti'
import styles from '../styles/main.module.css'

export  async function  Data(ctx)  {

    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    const person = data.results[0]
    return {
        props:{
            gender: person.gender,
            title: person.name.title,
            firstName: person.name.first,
            lastName: person.name.last,
            loc: person.location.country,
            mail: person.email,
            phone: person.phone,
            image: person.picture.medium
        }

    }
}

export default function Home({props}) {

    return (
        <>
            <Head>
                <title>Random User</title>
            </Head>
            <main className={styles.main}>

                <div className={styles.card}>
                    <div className={styles.person}>
                        <Image src={props.image} width={144} height={144} className={styles.image} />
                        <div className={styles.user}>
                            <span>{props.title}</span> {props.firstName} <span>{props.lastName}</span>
                            <p>{props.gender}</p>

                        </div>

                    </div>
                    <div className={styles.contact}>
                        <p className={styles.content}><TiMail className={styles.icons} /> {props.mail} </p>
                        <p className={styles.content}><TiPhoneOutline className={styles.icons} /> {props.phone} </p>
                        <p className={styles.content}><TiMap className={styles.icons} /> {props.loc} </p>
                    </div>
                </div>

            </main>

        </>
    )

}

Home.getInitialProps = Data