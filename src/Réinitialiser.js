import React from 'react';

function Réinitialiser() {
    return (
        <div className='Réinitialiser'>

          <div class="flex justify-between">

            <div class="p-16 mt-10">

              <h1 class="bg-gray-100 rounded-lg text-indigo-700">
                E241
              </h1>

              <h1 class="bg-gray-100 rounded-lg text-indigo-700">
                E241
              </h1>

              <h1 class="font-bold text-2xl">
                Réinitialisation de mot de passe
              </h1>
              
              <h6 class="py-2 text-sm">
                N'utilisez pas de mot de passe difficile à utiliser, ce serait <br></br>un problème pour les gens.
              </h6>
  
              <div class="">
                <div class="bg-white">
                    <form class="">
              
  
                      <div class="py-4"> 

                          <label for="password" class="block text-sm font-bold text-gray-700">
                              Nouveau mot de passe
                          </label>
                      

                          <div class="mt-1">
                              <input id="password" name="password" type="password" autocomplete="current-password" required
                                class="appearance-none rounded-md relative block w-full px-8 py-2 placeholder-gray-500 bg-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="************************"/>
                          </div>

                      </div>   
                    
                    
                      <div class="py-2"> 


                        <label for="password" class="block text-sm font-bold text-gray-700">
                            Réinitialiser le Nouveau mot de passe
                        </label>
                    

                        <div class="mt-1">
                            <input id="password" name="password" type="password" autocomplete="current-password" required
                              class="appearance-none rounded-md relative block w-full px-8 py-2 placeholder-gray-500 bg-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="************************"/>
                        </div>

                      </div>  

  
                      <div class="py-4">
                          <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              confirmer la réinitialisation
                          </button>
                      </div>
                    </form>
                </div>
              </div>
            </div>


            <div class="bg-indigo-800 py- mt-10 w-[28%]">

              <img class="mt-28 px-12" src="group_11.png" alt="image"/>

              <p class="px-16 mt-20 text-gray-400 text-sm">
                ECOLE241 BUSINESS
              </p>

              <h1 class="px-16 text-white text-sm">
                Etudier en ligne devient plus facile - <br></br>vous pouvez toujours étudier avec Ecole <br></br>241 Business
              </h1>

            </div>

          </div>

        </div>
    );
}

export default Réinitialiser;