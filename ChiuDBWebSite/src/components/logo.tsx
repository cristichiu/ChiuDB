import { useState } from 'react'
import '../../setPublic/scss/loading.scss'
import { LogoSVG } from '../../setPublic/svg/logo'

const Logo = ({loading}: loading) => {
    window.addEventListener('load', () => {
        const path = document.getElementsByTagName('path')
        for(let i=0; i<path.length; i++) {
            path[i].style.strokeDasharray = path[i].getTotalLength().toString()
            path[i].style.strokeDashoffset = path[i].getTotalLength().toString()
            path[i].style.setProperty('--delay', (i * 0.1).toString() + 's')
        }
    })
    return (
        <div className="loadingContainer centerChild">
            <LogoSVG loading={loading} />
        </div>
    )
}
export default Logo