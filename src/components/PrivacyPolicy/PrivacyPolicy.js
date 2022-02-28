import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy = () => {
    const Navigate = useNavigate()
    return (
        <div className='privacyPolicy'>
            <h4>Privacy Policy</h4>
            <article>
                <p>
                    Recetas-Prueba-Final website is owned by Recetas-Prueba-Final, which is a data controller of your personal data.
                </p>
                <p>
                    We have adopted this Privacy Policy, which determines how we are processing the information
                    collected by Recetas-Prueba-Final, which also provides the reasons why we must collect certain
                    personal data about you. Therefore, you must read this Privacy Policy before using
                    Recetas-Prueba-Final website.
                </p>
                <p>
                    We take care of your personal data and undertake to guarantee its confidentiality and security.
                </p>
            </article>
            <h4>Personal information we collect:</h4>
            <article>
                <p>
                    When you visit the Recetas-Prueba-Final, we automatically collect certain information about your
                    device, including information about your web browser, IP address, time zone, and some of the
                    installed cookies on your device. Additionally, as you browse the Site, we collect information
                    about the individual web pages or products you view, what websites or search terms referred you
                    to the Site, and how you interact with the Site. We refer to this automatically-collected information
                    as “Device Information.” Moreover, we might collect the personal data you provide to us
                    &#40;including but not limited to Name, Surname, Address, payment information, etc.&#41;
                    during registration to be able to fulfill the agreement.
                </p>
            </article>
            <h4>Why do we process your data?</h4>
            <article>
                <p>
                    Our top priority is customer data security, and, as such, we may process only minimal user data,
                    only as much as it is absolutely necessary to maintain the website. Information collected
                    automatically is used only to identify potential cases of abuse and establish statistical
                    information regarding website usage. This statistical information is not otherwise aggregated
                    in such a way that it would identify any particular user of the system.
                </p>
                <p>
                    You can visit the website without telling us who you are or revealing any information, by which
                    someone could identify you as a specific, identifiable individual. If, however, you wish to use
                    some of the websites features, or you wish to receive our newsletter or provide other details
                    by filling a form, you may provide personal data to us, such as your email, first name, last name,
                    city of residence, organization, telephone number. You can choose not to provide us with your personal
                    data, but then you may not be able to take advantage of some of the website&#44;s features. For example,
                    you won&#44;t be able to receive our Newsletter or contact us directly from the website. Users who are
                    uncertain about what information is mandatory are welcome to contact us via lmfg06@gmail.com.
                </p>
            </article>
            <h4>Your rights:</h4>
            <article>
                <p>
                    If you are a European resident, you have the following rights related to your personal data:
                </p>
                <ul>
                    <li>The right to be informed.</li>
                    <li>The right of access.</li>
                    <li>The right to rectification.</li>
                    <li>The right to erasure.</li>
                    <li>The right to restrict processing.</li>
                    <li>The right to data portability.</li>
                    <li>The right to object.</li>
                    <li>Rights in relation to automated decision-making and profiling.</li>
                </ul>
                <p>
                    If you would like to exercise this right, please contact us through the contact information below.
                </p>
                <p>
                    Additionally, if you are a European resident, we note that we are processing your information in order
                    to fulfill contracts we might have with you &#40;for example, if you make an order through the Site&#41;, or
                    otherwise to pursue our legitimate business interests listed above. Additionally, please note that your
                    information might be transferred outside of Europe, including Canada and the United States.
                </p>
            </article>
            <h4>Links to other websites:</h4>
            <article>
                <p>
                    Our website may contain links to other websites that are not owned or controlled by us. Please be aware
                    that we are not responsible for such other websites or third parties' privacy practices. We encourage
                    you to be aware when you leave our website and read the privacy statements of each website that may
                    collect personal information.
                </p>
            </article>
            <h4>Information security:</h4>
            <article>
                <p>
                    We secure information you provide on computer servers in a controlled, secure environment, protected from
                    unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical
                    safeguards to protect against unauthorized access, use, modification, and personal data disclosure in
                    its control and custody. However, no data transmission over the Internet or wireless network can be
                    guaranteed.
                </p>
            </article>
            <h4>Legal disclosure:</h4>
            <article>
                <p>
                    We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a
                    subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights,
                    protect your safety or the safety of others, investigate fraud, or respond to a government request.
                </p>
            </article>
            <h4>Contact information:</h4>
            <article>
                <p>
                    If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual
                    rights and your Personal Information, you may send an email to lmfg06@gmail.com.
                </p>
            </article>
            <Button variant="dark"
                onClick={() => {
                    Navigate('/')
                }}
            >Regresar</Button>
        </div>
    )
}

export default PrivacyPolicy