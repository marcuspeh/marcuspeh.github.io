import { SvgIconProps } from '@mui/material/SvgIcon'
import * as React from 'react'

interface SocialDataModel {
    link: string,
    image: (props: SvgIconProps) => JSX.Element
}

export default SocialDataModel