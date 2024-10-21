import React from 'react'

const MainSection = () => {
    return (
       <main className='' style={{margin:'auto',height:'auto'}}>
       <div className='row container' style={{marginTop:'7rem',marginLeft:'auto'}}>
        <div className='  col-6'>
            <img className='image' src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033983.jpg?size=626&ext=jpg&uid=R155751979&ga=GA1.1.499466454.1729482530&semt=ais_hybrid" alt="Hel" width={'300px'} />
        </div>
        <div className='content d-flex flex-column justify-content-start col-6'>
            <h2>Ranjini V</h2>
            <hr />
            <h4>Full Stack Developer</h4>
            <h5>BE Computer Science and Engineering</h5>
            <p>Contact:+916385434507</p>
            <p>Email: ranjivenkatasan@gmail.com</p>
        </div>
        </div> 

    </main>

  )
}

export default MainSection
