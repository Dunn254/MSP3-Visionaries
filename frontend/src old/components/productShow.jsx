const React = require('react')
const { Sequelize } = require('sequelize')



function Show({ glasses }) {
    return (
        <Default>
            <h3>{glasses.name}</h3>
            <img src={glasses.picture} alt={glasses.name}/>
            <p>{glasses.features}</p>
            <p>{glasses.specifications}</p>
            <p>{glasses.price}</p>
            <li>
                <a href='/home'>Home</a>
            </li>
            <li>
                <a href='/cart'>Add to Cart</a>
            </li>
            <h3>Do you love our Visionary Products</h3>
            
            <form action={`/review/${reviews.review_id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE'/>
            </form>
        </Default>
    )
}


module.exports = Show