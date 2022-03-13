import React from 'react'
import {
    IconGitHub,
    IconLinkedin,
    IconHackTheBox,
    IconDefault
} from 'components/icons'

const Icon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <IconGitHub />
        case 'Linkedin':
            return <IconLinkedin />
        case 'HackTheBox':
            return <IconHackTheBox />
        default:
            return <IconDefault />
    }
}

export default Icon