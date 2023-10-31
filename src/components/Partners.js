import React from 'react'
import paperz from './images/paperz.svg'
import dorfus from './images/dorfus.svg'
import martino from './images/martino.svg'
import square from './images/square.svg'
import gobana from './images/gobona.svg'

const Partners = () => {
  return (
    <section class="partners">
        <div class="content">
            <a target="_blank" href="https://paperz.com"><img src={paperz}/></a>
            <a target="_blank" href="https://dorfus.com"><img src={dorfus}/></a>
            <a target="_blank" href="https://martino.com"><img src={martino}/></a>
            <a target="_blank" href="https://square.com"><img src={square}/></a>
            <a target="_blank" href="https://gobana.com"><img src={gobana}/></a>
        </div>
    </section>
  )
}

export default Partners