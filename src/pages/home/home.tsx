import waveIcon from '../../assets/icons/waving-hand-svgrepo-com.svg'
import personImage from '../../assets/images/person_image.png'
import './home.css'

const Home = () => {


  return (
    <div className="home-page-container">

      <div className="left-content-container">
        <div>Hey, I'm Yasen <img src={waveIcon} className='wave-icon' alt="wave icon" /></div>
        <div className="role-heading-container">
        <div className="role-heading">
          <div>Front</div><div>end</div>
        </div>
        <div>Developer</div>
        </div>
        
        <p>
          I'm a frontend developer based in Varna, Bulgaria, I'll help your
          <br />
          build beautiful websites your users will love.
        </p>
        <div className="buttons-section">
          <button>Get in Touch</button>
          <button>Browse Projects</button>
        </div>

      </div>


      <div className="right-content-container">
        <img src={personImage} alt='person image' />
      </div>
    </div>
  )
}

export default Home