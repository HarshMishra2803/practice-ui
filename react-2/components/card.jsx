import React from 'react'


const card = (props) => {
  return (
    <div>
        <div className="card"> 
            <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjByZW5kZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
            <h1>{props.user} {props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>View Profile</button>

        </div>
    </div>
  )
}

export default card