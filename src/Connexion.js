import React from 'react';

function Connexion() {
    return (
        <div className='Connexion'>

           <section class="flex justify-between">

              <div class="p-16">

                  <h1 class="font-bold text-2xl">
                    Connexion
                  </h1>

                  <h6 class="py-2 text-sm">
                    Saisissez votre mot de passe pour avoir <br></br>accès au Dashboard
                  </h6>

                  <div class="bg-white">
                      <from class="" action="#" method="POST">

                        <div class="py-4">
                          <label for="email" class="block text-sm font-bold text-gray-700">
                            Email
                          </label>

                          <div class="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" required
                              class="appearance-none rounded-md relative block w-full px-8 py-2 placeholder-gray-500 bg-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="saipul@gmail.com"/>
                          </div>
                        </div>

                        <div class="py-2"> 

                          <div class="flex justify-between">
                            <div>

                              <label for="password" class="block text-sm font-bold text-gray-700">
                                Mot de passe
                              </label>

                            </div>
                      

                            <div class="text-sm">
                                <a href="#" class="font-bold text-indigo-700">
                                  Mot de passe oublié?
                                </a>
                            </div>

                          </div>
                

                          <div class="mt-1">
                              <input id="password" name="password" type="password" autocomplete="current-password" required
                                class="appearance-none rounded-md relative block w-full px-8 py-2 placeholder-gray-500 bg-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="************************"/>
                          </div>

                        </div>

             
                        <div class="flex items-center py-2">
                              <input id="remember_me" name="remember_me" type="checkbox"
                                class="h-4 w-4 focus:ring-indigo-500 border-gray-300 rounded"/>
                              <label for="remember_me" class="ml-2 block text-sm font-bold">
                                Se souvenir de moi
                              </label>
                        </div>

                        <div class="py-2">
                            <button type="submit"
                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Connexion
                            </button>
                        </div>
                      </from>

                      <div class="mt-6">

                          <p class="text-sm">
                              Vous n'avez pas un compte?
                                <span class="text-indigo-700 font-bold">
                                  <a href="#">Créez un c'est gratuit !</a>
                                </span>
                          </p>

                      </div>
                  </div>
              
            </div>


            <div class="bg-indigo-800 py- mt-10 w-[28%]">

                <img class="mt-20" src="group_9__1_.png" alt="image"/>

                <p class="px-16 mt-16 text-gray-400 text-sm">
                    ECOLE241 BUSINESS
                </p>

                <h1 class="px-16 text-white text-sm">
                    Etudier en ligne devient plus facile - <br></br>vous pouvez toujours étudier avec Ecole <br></br>241 Business
                </h1>

            </div>

          </section>

        </div>
    );
}

export default Connexion;