import SocialDataModel from '../models/socialDataModel'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const linkedin: SocialDataModel = {
    link: "https://linkedin.com/in/marcuspeh",
    image: LinkedInIcon
}

const github: SocialDataModel = {
    link: "https://github.com/marcuspeh",
    image: GitHubIcon
}

const email: SocialDataModel = {
    link: "mailto:hkmpeh@gmail.com",
    image: EmailIcon
}

const SocialData: SocialDataModel[] = [
    linkedin,
    github,
    email
]

export default SocialData
