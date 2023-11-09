import React from 'react';

const Compte = () => {
    return (
        <div>
            <div class="flex justify-between">

<form class="p-14">

    <h1 class="bg-gray-100 rounded-lg text-indigo-700">
        E241
    </h1>

    <h1 class="font-bold text-2xl ">
        Créer un compte 
    </h1>

    <h6 class="py-2 text-sm">
        Ce n'est pas difficile, il suffit de saisir quelques données
    </h6>

    <div class="flex gap-10 py-4">
        <div class="">
            <label class="text-gray-700 text-sm font-bold mb-2"
                for="grid-first-name">
                Nom complet
            </label>
            <input
                class="block bg-gray-200 rounded py-2 px-8 text-sm mt-2"
                id="grid-first-name" type="text" placeholder="Nom"/>
        </div>
        <div class="mt-6">
            <input
                class="block bg-gray-200 rounded py-2 px-8 text-sm mt-2"
                id="grid-last-name" type="text" placeholder="Prénom"/>
        </div>
    </div>


    <div class="py-4">
        <div class="w-full ">
            <label class="text-gray-700 text-sm font-bold"
                for="grid-password">
                Email
            </label>
            <input
                class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-2 px-8"
                id="grid-email" type="email" placeholder="aurelius@rocktmail.com"/>
        </div>
    </div>

    <div class="py-2"> 

          <div>

            <label for="password" class="block text-sm font-bold text-gray-700">
                Mot de passe
            </label>

          </div>          

        <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" required
                class="rounded-md relative block w-full px-8 py-2 placeholder-gray-500 bg-gray-200"
                placeholder="************************"/>
        </div>

    </div>

    <div class="py-4 text-sm">
        <p>
            En vous inscrivant, vous acceptez les conditions d'utilisation et la <br></br>politique de confidentialité de Namanyajugabelajar.io
        </p>
    </div>

    
    <div class="py-2">
        <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              S'inscrire
        </button>
    </div>

    
    <div class="mt-6">

        <p class="text-sm">
          Vous avez déjà un compte?
          <span class="text-indigo-700 font-bold">
            <a href="#">Connectez-vous</a>
          </span>
        </p>

      </div>

</form>



<div class="bg-indigo-800 w-[28%]">

    <img class="mt-32 px-12" src="group_9.png" alt="image"/>

    <p class="px-16 mt-24 text-gray-400 text-sm">
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

export default Compte;