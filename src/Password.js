import React from 'react';

const Password = () => {
    return (
        <div>
            <div class="flex">

            <div class="w-1/2 p-16 mt-10">

                    <p className='bg-gray-100 text-sm text-indigo-700 font-bold rounded-lg px-3 py-5 w-[52px] h-[60px]'>
                        E241
                    </p>

                    <h1 class="font-bold mt-10 text-2xl">
                        Mot de passe oublié
                    </h1>

                    <p className='py-2'>
                        Saisissez votre email pour récuperer votre mot de passe, <br></br>vous allez recevoir une email confirmer la demande de <br></br>réinitialisation.
                    </p>
  
                    <div class="">
                            <form class="">
                                <div class="py-6"> 

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

                                    <a href="">
                                        <button type="submit"
                                            class="w-full text-sm font-bold rounded-lg p-4 text-white bg-indigo-700">
                                                Confirmer
                                        </button>
                                    </a>
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

                <div class="w-1/2 bg-indigo-700">

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