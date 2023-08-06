import ContactDataModel from "@/models/contactDataModel"

import EmailImage from "@/public/contact/mail.svg"
import LinkedInImage from "@/public/contact/linkedin.svg"
import GitHubImage from "@/public/contact/github.svg"

const email: ContactDataModel = {
    pic: EmailImage,
    link: "mailto:hkmpeh@gmail.com",
    text: "Email",
    id: "email_contact"
}

const linkedin: ContactDataModel = {
    pic: LinkedInImage,
    link: "https://linkedin.com/in/marcuspeh",
    text: "LinkedIn",
    id: "linkedin_contact"
}

const github: ContactDataModel = {
    pic: GitHubImage,
    link: "https://github.com/marcuspeh",
    text: "GitHub",
    id: "linkedin_contact"
}


const ContactData: ContactDataModel[] = [
    linkedin,
    github,
    email
]

export default ContactData