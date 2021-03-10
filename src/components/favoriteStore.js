import React, { Component } from 'react'
import '../style/FavoriteStore.css'
import CardFavouriteStore from "./cardFavouriteStore"

import SortIcon from '@material-ui/icons/Sort';

export default class FavoriteStore extends Component {
    render() {
        return (
            <div className="favoriteStore">
                <div className="headerFavorite">
                    <p className="Title">Favourite Store</p>
                    <p className="sorting">
                        <span className="title">sort by</span>
                        <SortIcon className="icon"/>
                    </p>
                </div>
                <div className="FavoriteEles">
                    <CardFavouriteStore title="Amazon" link="https://amazon.com" checkout="7.855" spent="200,023.00"/>
                    <CardFavouriteStore title="Target" link="https://www.target.com" checkout="7.855" spent="200,023.00"/>
                    <CardFavouriteStore title="Walmart" link="https://www.walmart.com" checkout="7.855" spent="200,023.00"/>
                    <CardFavouriteStore title="Walmart" link="https://www.walmart.com" checkout="7.855" spent="200,023.00"/>
                    <CardFavouriteStore title="Walmart" link="https://www.walmart.com" checkout="7.855" spent="200,023.00"/>
                    <CardFavouriteStore title="Walmart" link="https://www.walmart.com" checkout="7.855" spent="200,023.00"/>
                    <CardFavouriteStore title="Walmart" link="https://www.walmart.com" checkout="7.855" spent="200,023.00"/>
                    <CardFavouriteStore title="Nike" link="https://www.nikestore.com" checkout="7.855" spent="200,023.00"/>
                </div>
            </div>
        )
    }
}
