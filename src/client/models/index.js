import { types } from 'mobx-state-tree'

const Coin = types.model('Coin', {
    id: types.number,
    name: types.string,
    price: types.number,
})

const CoinList = types
    .model('Store', {
        list: types.array(Coin),
    })
    .actions(self => ({
        add(coin) {
            self.list.push(coin);
        },
    }))

export default (initialState) => CoinList.create({ list: initialState })
