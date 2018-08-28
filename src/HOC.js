import * as React from 'react'

 const HigherOrderComponent = (Hoc) => {
 const colours = ['red', 'yellow', 'pink', 'green']
 const randomise = colours[Math.floor(Math.random() *4 )]
 const className = randomise 

return (props) => {
 return (
  <div style={{color: className}}>
    <Hoc {...props} />
  </div>
 )
}
}
export default HigherOrderComponent 