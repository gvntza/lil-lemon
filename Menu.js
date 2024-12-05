import React from 'react';
import recipes from './recipes';

const Menu = () => {
   return (

    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This week's specials!</h2>
            <button>Order Menu</button>
        </div>
        <div className='cards'>
            {
                recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt='food from menu'/>
                       <div className='menu-content'>
                        <div className='heading'>
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                        </div>
                       </div>
                       <p>{recipe.description}</p>
                       <button className='orderBtn'>Order Now</button>
                    </div>)
            }

        </div>
    </div>
     );
};

export default Menu;