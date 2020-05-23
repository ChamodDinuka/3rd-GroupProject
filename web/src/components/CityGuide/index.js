import React from 'react'
import './style.css'

/**
* @author
* @function CityGuid
**/

const CityGuid = (props) => {
  return(
    <div>
        <section class="city-guide">
            <div class="container">
                <div class="title-box">
                    <h2>City Guide</h2>
                </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="product-top">
                                <img src="/images/cityGuide/sigiriya.jpg" />    
                            </div>
                            <div class="product-bottom text-center">
                                <h2>sigiriya</h2>
                                <p>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale
                                    District near the town of Dambulla in the Central Province, Sri Lanka.The name 
                                    refers to a site of historical and archaeological significance that is dominated 
                                    by a massive column of rock nearly 200 metres high.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="product-top">
                                <img src="/images/cityGuide/ella.jpg" />
                            </div>
                            <div class="product-bottom text-center">
                                <h2>The nine arch Bridge</h2>
                                <h5>Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed
                                    by an Urban Council. It is approximately 200 kilometres east of Colombo and is 
                                    situated at an elevation of 1,041 metres above sea level. The area has a rich 
                                    bio-diversity, dense with numerous varieties of flora and fauna.
                                </h5>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="product-top">
                                <img src="/images/cityGuide/galle fort.jpg" />
                            </div>
                            <div class="product-bottom text-center">
                                <h2>Galle Fort</h2>
                                <h5>Anuradhapura is a major city in Sri Lanka. It is the capital city of North Central 
                                    Province, Sri Lanka and the capital of Anuradhapura District. Anuradhapura is one 
                                    of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an
                                    ancient Sinhala civilization.
                                </h5>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="product-top">
                                <img src="/images/cityGuide/hikkaduwa.jpg" />
                            </div>
                            <div class="product-bottom text-center">
                            <h2>Hikkaduwa Beach</h2>
                            <h5>Poḷonnaruwa is the main town of Polonnaruwa District in North Central Province, Sri Lanka.
                                Kaduruwela area is the Polonnaruwa New Town and the other part of Polonnaruwa remains as
                                the royal ancient city of the Kingdom of Polonnaruwa
                            </h5>
                            </div>
                        </div>
                    </div>
            </div>
    </section>

    </div>
   )

 }

export default CityGuid