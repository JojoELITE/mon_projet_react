import React from 'react';

const Password = () => {
    return (
        <div>
            <div class="flex justify-between">

                <div class="p-16 mt-10">

                    <h1 class="bg-gray-100 rounded-lg text-indigo-700">
                        E241
                    </h1>

                    <h1 class="font-bold text-2xl">
                        Mot de passe oublié
                    </h1>

                    <h6 class="py-2 text-sm">
                        Saisissez votre email pour récuperer votre mot de passe, <br></br>vous allez recevoir une email confirmer la demande de <br></br>réinitialisation.
                    </h6>
  
                    <div class="">
                        <div class="bg-white">
                            <form class="" action="#" method="POST">
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
                                    <a href="Réinitialiser.js">
                                        <button type="submit"
                                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Continuer
                                        </button>
                                    </a>
                                </div>
                            </form>

                            <div class="mt-6">

                                <p class="text-sm">
                                    Je me souviens de mon mot de passe?
                                    <span class="text-indigo-700 font-bold">
                                        <a href="#">Connexion !</a>
                                    </span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-indigo-800 py- mt-10 w-[28%]">

                    <img class="mt-20 " src="group_10.png" alt="image"/>

                    <p class="px-16 mt-8 text-gray-400 text-sm">
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

export default Password;