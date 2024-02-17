import React from 'react'
import './LandingPage.css'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
const LandingPage = () => {
  return (
    <div class="mainLanding">
        <div className='outerdiv'>
            <div className='leftLanding'>
                <h1>Flexible Connections for your Educational journey</h1>
                <p>Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.</p>
                <button id='abt-btn' className='btn1'>Read more about us <ArrowForwardRoundedIcon style={{margin:"0px 6px"}}/></button>
            </div>
            <div className='rightLanding'></div>
        </div>
    </div>
  )
}

export default LandingPage
