import * as React from 'react'
import HigherOrderComponent from './HOC'

const App = () => ( 
 <p>I am affected by the HOC</p>
)

export default HigherOrderComponent(App)