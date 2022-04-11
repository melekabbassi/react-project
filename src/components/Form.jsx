import React from 'react'

const Form = () => {
  return (
    <form>
        <h1>Add a new Movie</h1>
        <div className="formGroup">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Enter Title" />
        </div>
        <div className="formGroup">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" placeholder="Enter Description" />
        </div>
        <div className="formGroup">
            <label htmlFor="genre">Genre</label>
            <input type="text" className="form-control" id="genre" placeholder="Enter Genre" />
        </div>
        <div className="formGroup">
            <label htmlFor="image">Image</label>
            <input type="file" className="formControl" id="image" placeholder="Enter Image" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
}

export default Form
