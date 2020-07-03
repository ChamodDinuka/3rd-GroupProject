import React from 'react'

/**
* @author
* @function FoodDrink
**/

const FoodDrink = (props) => {
  return(
    <div>
        <section class="Food-drink">
            <div class="container">
                <div class="title-box">
                <h2>Food and Drink</h2>
                </div>
                <div class="title-box ">
                    <h2>Food </h2>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="product-top">
                        <img src="/images/food/rice and cury.jpg" />    
                        </div>
                        <div class="product-bottom text-center">
                            <h2>Rice and Curry</h2>
                        </div>
                    </div>        
                    <div class="col-md-3">
                        <div class="product-top">
                            <img src="/images/food/Ambul-Thiyal.jpg" />
                        </div>
                        <div class="product-bottom text-center">
                            <h2>Ambul Thiyal</h2>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-top">
                            <img src="/images/food/seafood.jpg" />
                        </div>
                        <div class="product-bottom text-center">
                        <h2>Sea Food</h2>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-top">
                            <img src="/images/food/hoppers.jpg" />
                        </div>
                        <div class="product-bottom text-center">
                            <h2>Hoppers</h2>  
                        </div>
                    </div>
                </div>

                {/*food row 2*/}
                <div class="row">
                    <div class="col-md-3">
                        <div class="product-top">
                            <img src="/images/food/fruit achcharu.jpg" />    
                        </div>
                        <div class="product-bottom text-center">
                            <h2>Fruit Achcharu</h2>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-top">
                            <img src="/images/food/iddiappa.jpg" />
                        </div>
                        <div class="product-bottom text-center">
                            <h2>Iddiappan</h2>  
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-top">
                            <img src="/images/food/milk rice.jpg" />
                        </div>
                        <div class="product-bottom text-center">
                            <h2>Milk Rice</h2>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-top">
                            <img src="/images/food/pittu.jpg" />
                        </div>
                        <div class="product-bottom text-center">
                            <h2>Pittu</h2>
                        </div>
                    </div>
                </div>

            {/*drink section*/}
            <div class="title-box text-center">
                <h2>Drink </h2>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="product-top">
                        <img src="/images/drinks/ceylon tea.jpg" />    
                    </div>
                    <div class="product-bottom text-center">
                        <h2>Ceylon Yea</h2>
                    </div>
                </div>
                <div class="col-md-3">
                <div class="product-top">
                    <img src="/images/drinks/kirala juice.jpg" />
                </div>
                <div class="product-bottom text-center">
                    <h2>Kirala juice</h2>
                </div>
                </div>
                <div class="col-md-3">
                    <div class="product-top">
                        <img src="/images/drinks/kola kanda.jpg" />
                    </div>
                    <div class="product-bottom text-center">
                        <h2>Kola kanda</h2>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="product-top">
                        <img src="/images/drinks/palmyra drink.jpg" />
                    </div>
                    <div class="product-bottom text-center">
                        <h2>Palmyra Drink</h2>
                    </div>
                </div>
            </div>
            </div>

        </section>

    </div>
   )

 }

export default FoodDrink