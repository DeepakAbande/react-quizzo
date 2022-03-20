import React from "react";

const Card = () => {
  return (
    <div class="App-header">
    <div class="bg-white hover:bg-gray-500 shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-row items-center justify-center transition-all duration-500 ease-in-out">
      <div class="relative mt-2 mx-2">
        <div class="h-56 rounded-2xl overflow-hidden">
          <div class="pt-20 pb-6 w-full text-4xl hover:bg-blue-800 px-6">
            <a class="" href="#">
            <span ><ion-icon name="add-circle-outline"></ion-icon></span>
                 
            </a>
            
           
          
            <h1 class="font-medium leading-none text-base tracking-wider text-gray-400"></h1>
          

          </div>
          <div class="font-medium content-center">
            Add Quiz 
            </div>
         
        </div>
        
            
      </div>
        
   
      {/* <div class="pt-10 pb-6 w-full px-4">
      
      </div> */}
    </div>
    </div>
  );
};

export default Card;