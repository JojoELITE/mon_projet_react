import React from 'react';

const Password = () => {
    return (
        <div>
              <div class="flex h-[100vh]">

            <div class="w-1/2 p-16 mt-10 lg:w-1/2 w-full">

                    <p className='bg-gray-100 text-sm text-indigo-700 font-bold rounded-lg px-3 py-5 w-[52px] h-[60px]'>
                        E241
                    </p>

                    <h1 class="font-bold mt-10 text-2xl">
                        Mot de passe oublié
                    </h1>

                    <p className='py-2 lg:block md:block hidden'>
                        Saisissez votre email pour récuperer votre mot de passe, <br></br>vous allez recevoir une email confirmer la demande de <br></br>réinitialisation.
                    </p>

                    <p className='py-2 sm:block lg:hidden'>
                        Saisissez votre email pour récuperer votre mot de passe,vous allez recevoir une email confirmer la demande de réinitialisation.
                    </p>
  
                    <div class="">
                            <form class="">
                                <div class="py-6"> 

                                    <label for="email" class="text-sm font-bold">
                                        Email
                                    </label>

                                        <input id="email" name="email" type="email" autocomplete="email" require 
                                        class="bg-gray-100 px-4 w-full rounded-lg p-4 border border-gray-300 bg-gray-100"
                                        placeholder="saipul@gmail.com"/>

                                </div>
             
  
                               <div class="py-4">

                                        <button type="submit"
                                            class="w-full text-sm font-bold rounded-lg p-4 text-white bg-indigo-700">
                                                <a href="https://mon-projet-react.vercel.app/réinitialiser">

                                                    Confirmer

                                                </a>   
                                        </button>
                                    
                                </div>
                            </form>

                            <div class="mt-6">

                                <p className='text-center py-2'>
                                    Je me souviens de mon mot de passe?
                                    <span class="text-indigo-700 font-bold">
                                        <a href="https://mon-projet-react.vercel.app/connexion"> Connexion !</a>
                                    </span>
                                </p>

                            </div>
                    </div>
                </div>


                <div class="w-1/2 bg-indigo-700 lg:block md:hidden hidden">

                  <img class="py-20" src="image2.png" alt="image"/>


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

export default Password;