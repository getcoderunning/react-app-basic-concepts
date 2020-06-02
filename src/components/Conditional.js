import React from "react"

function Conditional(props) {
    //using if else condition
    // if(props.isLoading === true) {
    //     return(
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Some cool stuff about Conditional rendering</h1>
    //         </div>
    //     )
    // }

    //using ternary function
    //condition ? statement if true : statement if false
//    return (
//         <div>
//             <h1>NavBar</h1>
//             {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff with
//                 conditional rendering</h1>}
//             <h1>Footer</h1>
//         </div>
//     )

    //optimized ternary function
    return <h1>Some cool stuff with conditional rendering</h1>
}

export default Conditional