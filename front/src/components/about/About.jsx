import './About.css'
import Behave from '../../img/Behaviorism.png'
import award from '../../img/awards.png'
const About = () => {
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Behave}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right"> 
            <h1 className='a-title'>About Me</h1>
            <p className="a-sub">
                Behaviorism, also known as the science that studies behavioral psychology.
            </p>
            <p className="a-desc">
                The theory of learning based on the idea that all behaviors are acquired through conditioning, 
                and conditioning occurs through interaction with the environment. 
                Behaviorists believe that our actions are shaped by environmental stimuli.
            </p>
            <div className="a-award">
                <img src={award} alt="" className="a-award-img" />
            </div>
            </div>
        </div>
    )
}

export default About;