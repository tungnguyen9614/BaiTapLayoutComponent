import React, { Component } from 'react'
import "./item.css"

export default class Item extends Component {
  render() {
    return (
      <div>
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="item-content">
                    <div className="item">
                        <div className="card" >
                            <div className="card-head">
                                <p>500x325</p>
                            </div>
                            <div className="card-body">
                              <h4 className="card-title">Card Title</h4>
                              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, incidunt debitis voluptatibus id veritatis temporibus ipsam eius amet ducimus iusto.</p>                          
                            </div>
                            <div className="card-footer">
                                <a className="btn btn-primary">Find Out More !</a>
                            </div>
                          </div>
                    </div>
                    <div className="item">
                        <div className="card" >
                            <div className="card-head">
                                <p>500x325</p>
                            </div>
                            <div className="card-body">
                              <h4 className="card-title">Card Title</h4>
                              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, incidunt debitis voluptatibus id veritatis temporibus ipsam eius amet ducimus iusto.</p>                            
                            </div>
                            <div className="card-footer">
                                <a className="btn btn-primary">Find Out More !</a>
                            </div>
                          </div>
                    </div>
                    <div className="item">
                        <div className="card" >
                            <div className="card-head">
                                <p>500x325</p>
                            </div>
                            <div className="card-body">
                              <h4 className="card-title">Card Title</h4>
                              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, incidunt debitis voluptatibus id veritatis temporibus ipsam eius amet ducimus iusto.</p>                   
                            </div>
                            <div className="card-footer">
                                <a className="btn btn-primary">Find Out More !</a>
                            </div>
                          </div>
                    </div><div className="item">
                        <div className="card" >
                            <div className="card-head">
                                <p>500x325</p>
                            </div>
                            <div className="card-body">
                              <h4 className="card-title">Card Title</h4>
                              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, incidunt debitis voluptatibus id veritatis temporibus ipsam eius amet ducimus iusto.</p>                            
                            </div>
                            <div className="card-footer">
                                <a className="btn btn-primary">Find Out More !</a>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
