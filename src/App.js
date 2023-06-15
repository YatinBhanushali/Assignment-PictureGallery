import React, { useState } from 'react'
import axios from 'axios'
function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=JeR9b49BEcf5NeFuIIjlHI-CV_ceP4uGIyA-rnpiluQ`)
            .then((response) => {
                setResult(response.data.results);
            })
    }
    return (
        <>
            <div className='container text-center my-5'>
                <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </div>

            <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value ,index) => {
                        return (
                          <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                            <div className='card h-100 d-flex  flex-column'>
                              <img style={{height : '250px'}} className="card-img-top img-fluid img-thumbnail " src={value.urls.small} alt='' />
                              <div className="card-body text-center">
                                <h5 className="mt-2 card-title">Author- '{value.user.username}'</h5>
                                <p className="font-weight-light card-text">{value.alt_description}</p>
                                
                                <a  href={value.urls.raw} className="mt-auto   btn btn-primary">Image link</a>
                              </div>
                            </div>
                          </div>
                           
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App