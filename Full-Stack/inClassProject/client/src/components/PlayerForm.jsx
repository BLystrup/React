import React from 'react';

const PlayerForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }


    return(
        <div>
            <h1 className="col-md-6 offset-2">Add a Player</h1>
            <form action="" className="col-md-6 offset-2">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' name='name' id='name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="preferredPosition">Preferred Position</label>
                    <input type="text" className='form-control' name='preferredPosition' id='preferredPosition'/>
                </div>
                <button className="btn btn-info">Create Player</button>
            </form>
        </div>
    )
}

export default PlayerForm