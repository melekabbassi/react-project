import React from 'react'

const Form = () => {
  return (
    <div >
        <h1>Add a new Movie</h1>
        <form>
            <label>
                Title:
                <input type="text" className="Title" placeholder="Type Title" />
            </label>
            <label>
                Year:
                <input type="text" className="Year" placeholder="Type Year" />
            </label>
            <label>
                Genre:
                <input type="text" className="Genre" placeholder="Type Genre" />
            </label>
            <label>
                Image:
                <input type="file" className="Image"></input>
            </label>
            <label>
                Description:
                <input type="text" className="Description" placeholder="Type Description" />
            </label>
        
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form
