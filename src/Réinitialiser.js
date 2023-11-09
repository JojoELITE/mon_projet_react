import React from 'react';

function Réinitialiser() {
    return (
        <div className='Réinitialiser'>

          <div class="flex h-[100vh]">

            <div class="w-1/2 p-16 mt-10">

              <p className='bg-gray-100 text-sm text-indigo-700 font-bold rounded-lg px-3 py-5 w-[52px] h-[60px]'>
                  E241
              </p>

              <h1 class="font-bold mt-10 text-2xl">
                  Réinitialisation de mot de passe
              </h1>
              
              <p className='py-2'>
                N'utilisez pas de mot de passe difficile à utiliser, ce serait <br></br>un problème pour les gens.
              </p>
  
              <div class="">
                    <form class="">
              
  
                      <div class="py-4"> 

                          <label for="password" class="text-sm font-bold ">
                              Nouveau mot de passe
                          </label>
                      

                              <input id="password" name="password" type="password" autocomplete="current-password" required
                              class="bg-gray-100 px-4 w-full rounded-lg p-4 border border-gray-300 bg-gray-100"
                              placeholder="************************"/>

                      </div>   
                    
                    
                      <div class="py-2"> 


                        <label for="password" class="text-sm font-bold">
                            Réinitialiser le Nouveau mot de passe
                        </label>
                    

                            <input id="password" name="password" type="password" autocomplete="current-password" required
                              class="bg-gray-100 px-4 w-full rounded-lg p-4 border border-gray-300 bg-gray-100"
                              placeholder="************************"/>

                      </div>  

  
                       <div class="py-2">

                          <a href="">
                              <button type="submit"
                                  class="w-full text-sm font-bold rounded-lg p-4 text-white bg-indigo-700">
                                      Confirmer la réinitialisation
                              </button>
                          </a>
                      </div>


                    </form>
              </div>
            </div>


                <div class="w-1/2 bg-indigo-700">

                  <img class="py-20" src="image4.png" alt="image"/>



                  <h1 className="px-10 text-gray-400">
                    ECOLE241 BUSINESS
                  </h1>

                  <p class="px-10 text-white font-semibold text-2xl">
                    Etudier en ligne devient plus facile - <br></br>vous pouvez toujours étudier avec Ecole <br></br>241 Business
                  </p>
                
                  
                </div>
                
          </div>

        </div>
    );
}

export default Réinitialiser;