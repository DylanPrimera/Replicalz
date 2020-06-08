import React from 'react';
import m from './img/mujer.jpg'
import h from './img/hombre.jpg'
import j from './img/jordan.jpg'
import g from './img/m1.jpg'
import g1 from './img/dbz.jpg'
import n1 from './img/m5.jpg'
import v from './img/vasn1.jpg'
import p from './img/m6.jpg'
import sw from './img/swg.png'
import './styles/zap.css'
class zap extends React.Component{
    render(){
        return <div>
            
            <div className="fila">
                <div className="z">
                   
                    <img src={m} width="190" height="190" id="img"></img>
                   
                    <div className="tes">
                        
                        <h4>Adidas Stan Smith Tornasol</h4>
                    
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">4U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary" id="uni2">1U</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="vertical-line"></div>

                <div className="z">
                    
                    <img src={h} width="190" height="190"></img>
                    
                    <div className="tes">
                        <h4>Adidas Yeezy Boost 2020</h4>
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">7U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary">4U</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="z">
                    <img src={j} width="190" height="190" ></img>
                    <div className="tes">
                       
                        <h4>Jordan Retro 4</h4>
        
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">9U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary">5U</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="fila">
                <div className="z">
                    
                    <img src={g} width="190" height="190"></img>
                    
                    <div className="tes">
                        
                            <h4>Adidas X-PLR</h4>
                    
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">1U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary">0U</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="z">
                   
                    <img src={g1} width="190" height="190"></img>
                   
                    <div className="tes">
                        
                            <h4>Adidas Zx 500 Goku</h4>
                    
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">1U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary">0U</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="z">
                    
                    <img src={n1} width="190" height="190"></img>
                    
                    <div className="tes">
                        <h4>Tenis 3MC</h4>
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">1U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary">5U</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="fila">
                <div className="z">
                        <img src={v} width="190" height="190" ></img>
                        <div className="tes">
                        
                            <h4>Vans Classic</h4>
            
                        </div>
                        <div className="cuadro">
                            <div className="pages">
                                <button type="button" class="btn btn-outline-danger">
                                    El outlet <span class="badge badge-secondary" id="uni">4U</span>
                                </button>

                                <button type="button" class="btn btn-outline-info" id="sbut">
                                    Sale Importaciones <span class="badge badge-secondary">1U</span>
                                </button>
                            </div>
                        </div>
                </div>
                <div className="vertical-line"></div>
                <div className="z">
                    <img src={p} width="190" height="190" ></img>
                    <div className="tes">
                       
                        <h4>Adidas Magmur Runner</h4>
        
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">5U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary">2U</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="z">
                    
                    <img src={sw} width="190" height="190"></img>
                    
                    <div className="tes">
                        <h4>Adidas Swift Run Gris</h4>
                    </div>
                    <div className="cuadro">
                        <div className="pages">
                            <button type="button" class="btn btn-outline-danger">
                                El outlet <span class="badge badge-secondary" id="uni">7U</span>
                            </button>

                            <button type="button" class="btn btn-outline-info" id="sbut">
                                Sale Importaciones <span class="badge badge-secondary">4U</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    }
}
export default zap;