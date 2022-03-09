import React, { useState } from 'react'

export default function GetPost(ed) {

    const [inputId, setinputId] = useState();
    
    const [getPost, setGetPost] = useState([]);

    const onChangeHandler = (event) => {
        setinputId(event.target.value);
    }

    const submitHandler = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${inputId}`)
            .then(resp => resp.json())
            .then(resp => setGetPost(resp))
        console.log(getPost);
    }


    return (
        <div>
            <input type="number" name="" id="" onChange={onChangeHandler} className="form-control" value={inputId} />

            <button className="btn-primary btn btn-sm" onClick={submitHandler}>Get Data</button>

            <h4>Result {getPost.length !=0 ? <h4 style={{color : "red"}}>{getPost.title}</h4>: <h4></h4>}</h4>
        </div>


    )
}
