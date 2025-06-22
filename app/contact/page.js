"use client";
import { Bounce, Fade, Reveal } from 'react-awesome-reveal';

const whereToFind = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/raj-gupta-ckt'
    },
    {
        name: 'Github',
        url: 'https://www.github.com/rajgupta2'
    },
    {
        name: 'Email',
        url: 'mailto:rajgupta.ckt22@gmail.com'
    }
];

function FindMeHere(props) {
    return (
        props.ContactList.map((e, index) => {
            return (
                    <div className='mt-5 mb-5' key={index}>
                        <a href={e.url} className='btn btn-lg border border-primary w-25'>
                            <span>{e.name}</span>
                        </a>
                    </div>
            );
        })
    );
}
export default function ContactPage() {
    return (
        <>
            <div className="row">
                <h1 className="switching-color"> Contact Me </h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 col-lg-5">
                        <h3> Want to connect with me?</h3>
                        <h3> Find me here...</h3>
                        <FindMeHere ContactList={whereToFind} />
                </div>
                <div className="col-12 col-md-7 col-lg-7">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3611.627179459763!2d80.85214472432999!3d25.148292301044286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMahatma%20Gandhi%20Chitrakoot%20Gramodaya!5e0!3m2!1sen!2sin!4v1715572734501!5m2!1sen!2sin"
                        style={{ border: 0, width: '100%', maxWidth: '100%' }}
                        className="w-full"
                        loading="lazy"
                        height={400}
                    ></iframe>
                </div>
            </div>
        </>
    )
}