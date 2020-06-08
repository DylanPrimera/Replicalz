import React from 'react'
import uno from './img/pri.png'
import dos from './img/gym.png'
import tre from './img/amigos.png'
import './styles/slider.css'
class slider extends React.Component{
    render(){
        return <div >
            <div className="slider">
                <div  id="slider" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" className="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src={uno} />
                            
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={dos} />
            
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={tre} />
            
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> 
            </div>
                
        </div>
    }
}
export default slider;