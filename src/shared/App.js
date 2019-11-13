import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './app.styl';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */

import { inject, observer, Provider } from 'mobx-react'
import CoinList from '../client/models'

const coins = [{
    id: 1,
    name: 'Bitcoin',
    price: 8815.52,
}, {
    id: 2,
    name: 'Ethereum',
    price: 187.41,
}, {
    id: 3,
    name: 'XRP',
    price: 0.2739,
}, {
    id: 4,
    name: 'EOS',
    price: 3.49,
}]
let i = 4
const App = inject('store')(observer(({ store }) => {
    return (
        <div>
            <Helmet>
                <title>App Component | React Universal</title>
            </Helmet>
            
            <h1>Welcome to React Fiber.</h1>
            
            <button onClick={() => {
                console.log(i)
                if(i) {
                    store.add(coins[i - 1])
                    --i
                } else {
                    return null
                }
            }}
            >add coin
            </button>
            
            <ul>{
                store.list.map(({ id, name, price }) => (
                    <li key={id}><b>{name}</b> {price}</li>
                ))}</ul>
        </div>
    )
}))

export default App
