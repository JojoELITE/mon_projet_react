import React from 'react';


function Connexion() {
    return (
        <div className='Connexion'>

              <div class="flex">

                <div className='w-1/2 px-14 py-12'>

                  <p className='bg-gray-100 text-sm text-indigo-700 font-bold rounded-lg px-3 py-5 w-[52px] h-[60px]'>
                    E241
                  </p>

                  <h1 class="font-bold mt-10 text-2xl">
                    Connexion
                  </h1>

                  <p className='py-2'>
                    Saisissez votre email et votre mot de passe pour avoir <br></br>accès au Dashboard
                  </p>

                  <form className='py-6'>
                    
                      <div>

                          <label for="email" class="text-sm font-bold">
                              Email
                          </label>

                          <div class="w-full rounded-lg p-4 bg-gray-100">
                              <input id="email" name="email" type="email" autocomplete="email" require 
                              class="bg-gray-100 px-4"
                              placeholder="saipul@gmail.com"/>
                          </div>

                      </div>

                      <div class="py-4"> 

                          <div className='flex justify-between'>

                              <label for="password" class="text-sm font-bold">
                                  Mot de passe
                              </label>

                              <a className='text-indigo-700 font-bold' href="#">
                                  Mot de passe oublié?
                              </a>
                            
                          </div>
                           
                          <div class="w-full rounded-lg p-4 bg-gray-100">
                              <input id="password" name="password" type="password" autocomplete="current-password" required
                              class="bg-gray-100 px-4"
                              placeholder="************************"/>
                          </div>

                      </div>

                      <div class="flex items-center py-2 gap-2">

                              <input id="remember_me" name="remember_me" type="checkbox"
                                class="h-4 w-4 focus:ring-indigo-500 border-gray-300 rounded"/>

                              <label for="remember_me" class="text-sm font-bold">
                                Se souvenir de moi
                              </label>
                      </div>

                      <div class="py-2">

                          <a href="">
                              <button type="submit"
                                  class="w-full text-sm font-bold rounded-lg p-4 text-white bg-indigo-700">
                                      Connexion
                              </button>
                          </a>
                      </div>

                  </form>

                  <p className='text-center py-2'>
                    Vous n'avez pas un compte ? 
                    <span className='text-indigo-700 font-bold'>
                      Créez un c'est gratuit !
                    </span>
                  </p>

                </div>



                <div class="w-1/2 bg-indigo-700">

                  <img class="py-20" src="image1.png" alt="image"/>



                  <h1 className="px-24 text-gray-400">
                    ECOLE241 BUSINESS
                  </h1>

                  <p class="px-24 text-white font-semibold text-2xl">
                    Etudier en ligne devient plus facile - <br></br>vous pouvez toujours étudier avec Ecole <br></br>241 Business
                  </p>
                
                  
                </div>
                
              </div>

        </div>
    );
}

export default Connexion;