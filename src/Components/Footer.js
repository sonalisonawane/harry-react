import React from 'react'

export default function Footer() {
 let footerStyle = { // you can put style like this using object
     color: "pink",
     left:"0",
     bottom:"0",
     width:"100%"
     }

    return ( 
    <footer className = "bg-dark text-light my-3 p-3" style={footerStyle}>
        <p className="text-center"> Copyright&copy; MyTodoList.com </p> 
    </footer>
    )
}