import React from "react";

const Lab2 = () =>{
    return (
        <div>
        <div>
        <h1>
        Hello this is my Lab2 which will have an implementation of tables.
        </h1>
        </div>
         <div id="wd-tables">
         <h4>Table Tag</h4>
         <table border={1} width="100%">
           <thead>
             <tr>
               <th>Quiz</th>
               <th>Topic</th>
               <th>Date</th>
               <th>Grade</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Q1</td>
               <td>HTML</td>
               <td>2/3/21</td>
               <td>85</td>
             </tr>
             <tr>
               <td>Q2</td>
               <td>CSS</td>
               <td>2/10/21</td>
               <td>90</td>
             </tr>
             <tr>
               <td>Q3</td>
               <td>JavaScript</td>
               <td>2/17/21</td>
               <td>95</td>
             </tr>
           </tbody>
           <tfoot>
             <tr>
               <td colSpan={3}>Average</td>
               <td>90</td>
             </tr>
           </tfoot>
         </table>
       </div>
       <div id="wd-images">
         <h4>Image tag</h4>
         <p>Loading an image from the internet:</p>
         <br />
         <img
           id="wd-starship"
           width="400px"
           alt="A starship"
           src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
         />
       </div>
       </div>   
        
    )
}
export default Lab2;