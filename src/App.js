import React, { useState, useEffect, Fragment } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.info('This is Like componentDidMount or componentDidUpdate')
  })

  useEffect(() => {
    console.info('This is Like componentDidMount')
  },[])

  useEffect(() => {
    console.info('This callback is for name only')
  },[name])

  return (
    <Fragment>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={()=> setState({...state, price: price + 1})}>+1</button>
      <button onClick={()=> setState({...state, price: price - 1})}>-1</button>
      <button onClick={()=> setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value })}/>
    </Fragment>
  )
}

App.defaultProps = {
  name:'',
  price: 1000
}

export default App