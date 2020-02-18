import React from 'react'
import './Prices.scss'



function Prices() {
    return (
        <div>
             <section id="Prices">
            <h2>Prices</h2>
           <table id="pricetable">
          <tbody><tr>
            <th></th>
            <th>Adults</th>
            <th>Under 12 years</th>
            <th>Groups (+ 10 persons)</th>
            <th>School</th>
          </tr>
          <tr>
            <td>Weekdays excepted Wednesday</td>
            <td>10$</td>
            <td>8$</td>
            <td>Contact us</td>
            <td>Contact us</td>
          </tr>
          <tr>
            <td>Weekend and Wednesday</td>
            <td>14$</td>
            <td>12$</td>
            <td>Contact us</td>
            <td>Contact us</td>
          </tr>

        </tbody></table>
        </section>
        </div>
 )
}

export default Prices