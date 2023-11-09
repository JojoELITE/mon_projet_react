import React from 'react';

const Compte = () => {
    return (
        <div>
            <div class="flex">

                <form className='w-1/2 px-14 py-12'>

                    <p className='bg-gray-100 text-sm text-indigo-700 font-bold rounded-lg px-3 py-5 w-[52px] h-[60px]'>
                        E241
                    </p>

                    <h1 class="font-bold mt-10 text-2xl">
                        Créer un compte 
                    </h1>

                    <p className='py-2'>
                        Ce n'est pas difficile, il suffit de saisir quelques données
                    </p>

                    <div class="flex gap-10 py-4">
                        <div class="">
                            <label for="name" class="text-sm font-bold">
                                Nom complet
                            </label>
                            
                            <input class="bg-gray-100 rounded py-4 px-8 text-sm mt-2"
                                type="text" placeholder="Nom"/>
                        </div>

                        <div class="mt-6">
            
                            <input class="bg-gray-100 rounded py-4 px-8 text-sm mt-2"
                                 type="text" placeholder="Prénom"/>
                        </div>
                    </div>


                                <div class="py-6"> 

                                    <label for="email" class="text-sm font-bold">
                                        Email
                                    </label>

                                    <div class="w-full rounded-lg p-4 bg-gray-100">
                                        <input id="email" name="email" type="email" autocomplete="email" require 
                                        class="bg-gray-100 px-4"
                                        placeholder="aurelius@rocketmail.com"/>
                                    </div>

                                </div>

                      <div class="py-4"> 
                      
                              <label for="password" class="text-sm font-bold">
                                  Mot de passe
                              </label>
                            
                           
                          <div class="w-full rounded-lg p-4 bg-gray-100">
                              <input id="password" name="password" type="password" autocomplete="current-password" required
                              class="bg-gray-100 px-4"
                              placeholder="************************"/>
                          </div>

                      </div>

                        <div class="py-4 text-sm">
                             <p>
                                 En vous inscrivant, vous acceptez les conditions d'utilisation et la <br></br>politique de confidentialité de Namanyajugabelajar.io
                            </p>
                        </div>

    
                                <div class="py-4">

                                    <a href="">
                                        <button type="submit"
                                            class="w-full text-sm font-bold rounded-lg p-4 text-white bg-indigo-700">
                                                S'inscrire
                                        </button>
                                    </a>
                                </div>

    
                                <div class="mt-6">

                                    <p className='text-center py-2'>
                                        Vous avez déjà un compte?
                                            <span class="text-indigo-700 font-bold">
                                                <a href="#"> Connectez-vous</a>
                                            </span>
                                    </p>

                                </div>

                </form>



                <div class="w-1/2 bg-indigo-700">

                  <img class="mt-48" src="image3.png" alt="image"/>



                  <h1 className="px-10 mt-6 text-gray-400">
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

export default Compte;