<div class="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-gray-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
    <div class="">
      <div class="p-5 text-white text-center text-3xl bg-gray-900"><span class="text-orange-500">Calcu</span>Torres</div>
      <div class="p-5 pb-5 text-white text-right text-3xl bg-gray-800">
        <input class="input input-ghost bg-gray-800 text-end" bind:value={pantalla}>
      </div>
      
      
 <div class="flex items-stretch bg-gray-900 h-24">
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => procesar("C")}>C</button>
    </div>
  
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("(")}>(</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo(")")}>)</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("÷")}>÷</button>
    </div>
</div>
      
<div class="flex items-stretch bg-gray-900 h-24">
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("7")}>7</button>
    </div>
  
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("8")}>8</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("9")}>9</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("*")}>×</button>
    </div>
</div>
      
<div class="flex items-stretch bg-gray-900 h-24">
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("4")}>4</button>
    </div>
  
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("5")}>5</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("6")}>6</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("-")}>-</button>
    </div>
</div>
      
<div class="flex items-stretch bg-gray-900 h-24">
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("1")}>1</button>
    </div>
  
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("2")}>2</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("3")}>3</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("+")}>+</button>
    </div>
</div>
      

<div class="flex items-stretch bg-gray-900 h-24 mb-4">
    
    <div class="flex-1 pl-7 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-52 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo("0")}>0</button>
    </div>
   
    <div class="flex-1 pl-7 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => agregar_simbolo(".")}>.</button>
    </div>
   
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" on:click={() => procesar("=")}>=</button>
    </div>
</div>
      
      
  </div>
</div>
<script>
  let pantalla = '';

  function agregar_simbolo(simbolo){
    pantalla += simbolo
  }
  function procesar(value) {
    if (value === '=') {
      try {
        pantalla = eval(pantalla);
      } catch (error) {
        pantalla = 'Error';
      }
    } else if (value === 'C') {
      pantalla = '';
    } else {
      pantalla += value;
    }
  }
</script>
