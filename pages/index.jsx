import {useRef} from 'react'

export default () => {
    const home = useRef()
    const about = useRef()
    const subsidiaries = useRef()
    const directors = useRef()
    const contact = useRef()

    return (
        <section>
            <header className = 'po-sticky top-0 left-0 bg-white shadow' style = {{zIndex: 1000}}>
                <div className = 'container'>
                    <div className = 'row j-c-space-between a-i-c py-4'>
                        <div className = 'col-lg-auto'>
                            <div className = 'row a-i-c'>
                                <div className = 'mr-3 col-md-d-none col-auto'>
                                    <button className = 'bg-clear outline-0 border-0 p-2 bi bi-filter-left fa-3x'></button>
                                </div>  
                                <a href = '/' className = 'col-auto'>
                                    <img src = '/img/ollymann-group.png' width = '100' />
                                </a>
                            </div>
                        </div>
                        <div className = 'col-d-none col-md-d-block col-lg-auto'>
                            <div>
                                <button className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>home</button>
                                <button className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>about</button>
                                <button className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>subsidiaries</button>
                                <button className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>directors</button>
                                <button className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className = 'hero-bg'>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-12'>
                            
                        </div>
                    </div>
                </div>
            </div>
            <main className = 'px-4'>
                <div className = 'container pt-5'>
                    <div className = 'row py-5 my-5'>
                        <div className = 'col-lg-4 col-md-8 col-sm-12 mb-5'>
                            <div className = 'pb-4'>
                                <p className = 'text-uppercase text-muted'>features</p>
                                <h2 className = 'text-capitalize bold text-dark line-height-120pcent'>our awesome features</h2>
                                <p className = 'pb-4 text-capitalize text-muted pt-3'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer adipising lorem ipsum dolor</p>
                                <button className = 'text-capitalize btn btn-primary px-5 py-3 shadow letter-spacing-1'>get started</button>
                            </div>
                        </div>
                        <div className = 'col-lg-8 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-sm-12 col-md-6'>
                                    <div className = 'mb-5'>
                                        <div className = 'mb-4'>
                                            <span className = 'text-shadow fa-stack fa-2x'>
                                                <span className = 'fa fa-circle text-primary fa-stack-2x'></span>
                                                <span className = 'fa fa-bolt text-white fa-stack-1x'></span>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className = 'bold mb-4 text-muted text-capitalize'>adipising lorem ipsum sit</h5>
                                            <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer adipising lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-sm-12 col-md-6'>
                                    <div className = 'mb-5'>
                                        <div className = 'mb-4'>
                                            <span className = 'text-shadow fa-stack fa-2x'>
                                                <span className = 'fa fa-circle text-primary fa-stack-2x'></span>
                                                <span className = 'fa fa-bolt text-white fa-stack-1x'></span>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className = 'bold mb-4 text-muted text-capitalize'>adipising lorem ipsum sit</h5>
                                            <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer adipising lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-sm-12 col-md-6'>
                                    <div className = 'mb-5'>
                                        <div className = 'mb-4'>
                                            <span className = 'text-shadow fa-stack fa-2x'>
                                                <span className = 'fa fa-circle text-primary fa-stack-2x'></span>
                                                <span className = 'fa fa-bolt text-white fa-stack-1x'></span>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className = 'bold mb-4 text-muted text-capitalize'>adipising lorem ipsum sit</h5>
                                            <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer adipising lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-sm-12 col-md-6'>
                                    <div className = 'mb-5'>
                                        <div className = 'mb-4'>
                                            <span className = 'text-shadow fa-stack fa-2x'>
                                                <span className = 'fa fa-circle text-primary fa-stack-2x'></span>
                                                <span className = 'fa fa-bolt text-white fa-stack-1x'></span>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className = 'bold mb-4 text-muted text-capitalize'>adipising lorem ipsum sit</h5>
                                            <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer adipising lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'container'>
                    <div className = 'row py-5 my-5' style = {{flexDirection: 'row-reverse'}}>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'pb-4'>
                                <p className = 'text-uppercase text-muted'>about</p>
                                <h2 className = 'text-capitalize bold text-dark line-height-120pcent col-lg-10 px-0'>let's track your business very quick</h2>
                                <p className = 'pb-4 text-capitalize text-muted pt-3'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer adipising lorem ipsum dolor</p>
                                <div className = 'row pt-4'>
                                    <div className = 'col-md-6'>
                                        <div>
                                            <h4 className = 'text-primary mb-4'>100+</h4>
                                            <h4 className = 'bold mb-3 text-capitalize text-dark'>adipising lorem sectuer</h4>
                                            <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</p>
                                        </div>
                                    </div>
                                    <div className = 'col-md-6'>
                                        <div>
                                            <h4 className = 'text-primary mb-4'>573+</h4>
                                            <h4 className = 'bold mb-3 text-capitalize text-dark'>adipising lorem sectuer</h4>
                                            <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = ''>
                                <img src = '/img/feature-2.png' className = 'd-block w-100' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'container'>
                    <div className = 'row py-5 my-5'>
                        <div className = 'col-12'>
                            <div className = 'mb-5 pb-4'>
                                <p className = 'text-uppercase text-center text-muted'>features</p>
                                <h2 className = 'text-capitalize bold text-dark text-center line-height-120pcent px-0'>how it works</h2>
                            </div>
                        </div>
                        <div className = 'col-lg-4'>
                            <div className = 'text-center'>
                                <div>
                                    <span className = 'fa-stack fa-2x'>
                                        <span className = 'bi text-light text-shadow bi-circle-fill fa-stack-2x'></span>
                                        <span className = 'bi text-primary fo-s-22 bi-moon-stars fa-stack-1x'></span>
                                    </span>
                                </div>
                                <h5 className = 'py-4 bold text-dark text-capitalize'>premium product</h5>
                                <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem</p>
                            </div>
                        </div>
                        <div className = 'col-lg-4'>
                            <div className = 'text-center'>
                                <div>
                                    <span className = 'fa-stack fa-2x'>
                                        <span className = 'bi text-light text-shadow bi-circle-fill fa-stack-2x'></span>
                                        <span className = 'bi text-primary fo-s-22 bi-hand-thumbs-up fa-stack-1x'></span>
                                    </span>
                                </div>
                                <h5 className = 'py-4 bold text-dark text-capitalize'>premium product</h5>
                                <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem</p>
                            </div>
                        </div>
                        <div className = 'col-lg-4'>
                            <div className = 'text-center'>
                                <div>
                                    <span className = 'fa-stack fa-2x'>
                                        <span className = 'bi text-light text-shadow bi-circle-fill fa-stack-2x'></span>
                                        <span className = 'bi text-primary fo-s-22 bi-folder-plus fa-stack-1x'></span>
                                    </span>
                                </div>
                                <h5 className = 'py-4 bold text-dark text-capitalize'>premium product</h5>
                                <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'container'>
                    <div className = 'row py-5 my-5'>
                        <div className = 'col-12'>
                            <div className = 'mb-5 pb-4'>
                                <p className = 'text-uppercase text-center text-muted'>directors</p>
                                <h2 className = 'text-capitalize bold text-dark text-center line-height-120pcent px-0'>our creative members</h2>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-3.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-2.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-1.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-3.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'container'>
                    <div className = 'row py-5 my-5'>
                        <div className = 'col-12'>
                            <div className = 'mb-5 pb-4'>
                                <p className = 'text-uppercase text-center text-muted'>directors</p>
                                <h2 className = 'text-capitalize bold text-dark text-center line-height-120pcent px-0'>our creative members</h2>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-3.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-2.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-1.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-6 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-4 mb-3'>
                                    <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                        <img src = '/img/member-3.jpg' className = 'd-block w-100' />
                                    </div>
                                </div>
                                <div className = 'col-md-8'>
                                    <div>
                                        <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                        <p className = 'text-primary text-capitalize'>managing director</p>
                                        <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                        <div className = 'pt-4'>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                            <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className = 'py-5 theme-bg px-4'>
                <div className = 'container py-4'>
                    <div className = 'row'>
                        <div className = 'col-12'>
                            <div>
                                <img src = '/img/ollymann-group.png' width = '120' />
                            </div>
                        </div>
                        <div className = 'col-lg-5 mb-5'>
                            <div>
                                <div className = 'pb-4 text-capitalize text-white'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem</div>
                                <div className = 'pt-4 row'>
                                    <div className = 'col-auto'>
                                        <div>
                                            <a href = '' className = 'bi text-white mr-4 fo-s-22 bi-linkedin'></a>
                                        </div>
                                    </div>
                                    <div className = 'col-auto'>
                                        <div>
                                            <a href = '' className = 'bi text-white mr-4 fo-s-22 bi-instagram'></a>
                                        </div>
                                    </div>
                                    <div className = 'col-auto'>
                                        <div>
                                            <a href = '' className = 'bi text-white mr-4 fo-s-22 bi-facebook'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-7 mb-5'>
                            <div className = 'row'>
                                <div className = 'col-md-6 col-lg-4'>
                                    <div>
                                        <h5 className = 'bold text-white mb-5'>Company</h5>
                                        <div className = 'text-capitalize text-white'>
                                            <a className = 'd-block mb-3' href = '/'>about us</a>
                                            <a className = 'd-block mb-3' href = '/'>features</a>
                                            <a className = 'd-block mb-3' href = '/'>our blog</a>
                                            <a className = 'd-block mb-3' href = '/'>integrations</a>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-md-6 col-lg-4'>
                                    <div>
                                        <h5 className = 'bold text-white mb-5'>Marketing</h5>
                                        <div className = 'text-capitalize text-white'>
                                            <a className = 'd-block mb-3' href = '/'>terms of service</a>
                                            <a className = 'd-block mb-3' href = '/'>privacy policy</a>
                                            <a className = 'd-block mb-3' href = '/'>cooking setting</a>
                                            <a className = 'd-block mb-3' href = '/'>community</a>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-md-6 col-lg-4'>
                                    <div>
                                        <h5 className = 'bold text-white mb-5'>About</h5>
                                        <div className = 'text-capitalize text-white'>
                                            <a className = 'd-block mb-3' href = '/'>integrations</a>
                                            <a className = 'd-block mb-3' href = '/'>use case</a>
                                            <a className = 'd-block mb-3' href = '/'>customers</a>
                                            <a className = 'd-block mb-3' href = '/'>designer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
                .hero-bg{
                    background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/img/hero-bg.jpg);
                    background-position: center;
                    background-size: cover;
                    min-height: 80vh;
                }
                .line-height-120pcent{
                    line-height: 130%;
                }
                .text-shadow{
                    text-shadow: 0px 0px 10px grey;
                }
            `}</style>
        </section>
    )
}
