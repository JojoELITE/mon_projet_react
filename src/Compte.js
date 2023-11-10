import React from 'react';

const Compte = () => {
    return (
        <div>
              <div class="flex h-[100vh]">

                <form className='w-1/2 px-14 py-6 lg:w-1/2 w-full'>

                    <p className='bg-gray-100 text-sm text-indigo-700 font-bold rounded-lg px-3 py-5 w-[52px] h-[60px]'>
                        E241
                    </p>

                    <h1 class="font-bold mt-8 text-2xl">
                        Créer un compte 
                    </h1>

                    <p className='py-2'>
                        Ce n'est pas difficile, il suffit de saisir quelques données
                    </p>

                    <div class="py-2">

                        <label for="name" class="text-sm font-bold">
                                Nom complet
                        </label>


                        <div class="flex ">
                            

                            <div>

                                <input class="rounded-lg py-4 w-5/6 px-8 text-sm mt-2 border border-gray-300 bg-gray-100"
                                type="text" placeholder="Nom"/>
                                
                            </div>


                            <div className=''>

                                <input class="rounded-lg py-4 w-5/6 px-8 text-sm mt-2 border border-gray-300 bg-gray-100"
                                type="text" placeholder="Prénom"/>
                                
                            </div>
                            

                        </div> 


                    </div>


                        <div class="py-2"> 

                                    <label for="email" class="text-sm font-bold">
                                        Email
                                    </label>

                                        <input id="email" name="email" type="email" autocomplete="email" require 
                                        class="bg-gray-100 px-8 w-full rounded-lg p-4 border border-gray-300 bg-gray-100"
                                        placeholder="aurelius@rocketmail.com"/>

                        </div>

                      <div class="py-2"> 
                      
                              <label for="password" class="text-sm font-bold">
                                  Mot de passe
                              </label>
                            
                           
                              <input id="password" name="password" type="password" autocomplete="current-password" required
                              class="bg-gray-100 px-8 w-full rounded-lg p-4 border border-gray-300 bg-gray-100"
                              placeholder="************************"/>

                      </div>

                        <div class="py-2 text-sm lg:block hidden">
                             <p >
                                 En vous inscrivant, vous acceptez les conditions d'utilisation et la <br></br>politique de confidentialité de Namanyajugabelajar.io
                            </p>

                        </div>

                        <div class="py-2 text-sm sm:block lg:hidden">
                             <p >
                                 En vous inscrivant, vous acceptez les conditions d'utilisation et la politique de confidentialité de Namanyajugabelajar.io
                            </p>

                        </div>

    
                                <div class="py-2">

                                        <button type="submit"
                                            class="w-full text-sm font-bold rounded-lg p-4 text-white bg-indigo-700">
                                                <a href="https://mon-projet-react.vercel.app/dashboard">

                                                    S'inscrire

                                                </a>                             
                                        </button>


                                </div>
    
                                <div class="">

                                    <p className='text-center py-2'>
                                        Vous avez déjà un compte?
                                            <span class="text-indigo-700 font-bold">
                                                <a href="https://mon-projet-react.vercel.app/connexion"> Connectez-vous</a>
                                            </span>
                                    </p>

                                </div>

                </form>



                <div class="w-1/2 bg-indigo-700 lg:block md:hidden hidden">

                  <img class="items-center py-24" src="image3.png" alt="image"/>



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

export default Compte;