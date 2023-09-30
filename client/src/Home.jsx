import React from 'react'
import 'primeicons/primeicons.css';     




function Home() {
    return (
        <div>
        <h2> Welcome User</h2>


  <button >
  <i className="pi pi-github" style={{ fontSize: '2.0rem' }}></i>
  </button>
  
  <a href="https://www.youtube.com/">
    <button>
    <i className="pi pi-youtube" style={{backgroundColor:'#FF0000',fontSize:'2.0rem' }}></i>
    </button>
  </a>
  <a href="https://www.apple.com/">
    <button>
    <i className="pi pi-apple" style={{fontSize: '2.0rem'}}></i>
    </button>
  </a>
  <a href="https://www.google.com/">
    <button>
    <i className="pi pi-google" style={{fontSize: '2.0rem'}}></i>
    </button>
  </a>
  <a href="https://www.linkedin.com/">
    <button>
    <i className="pi pi-linkedin" style={{fontSize: '2.0rem'}}></i>
    </button>
  </a>
  
        </div>
       

    )
}

export default Home;

