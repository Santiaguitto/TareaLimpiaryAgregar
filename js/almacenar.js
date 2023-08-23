function cargarElementosGuardados() {
    const elementosGuardados = localStorage.getItem("elementos");
    if (elementosGuardados) {
      const contenedor = document.getElementById("contenedor");
      contenedor.innerHTML = elementosGuardados;
    }
  }
  
 
  function guardarElementos(elementosHTML) {
    localStorage.setItem("elementos", elementosHTML);
  }
  
  
  function agregarItem() {
    const nuevoItem = document.getElementById("item").value;
    if (nuevoItem.trim() !== "") {
      const contenedor = document.getElementById("contenedor");
      const nuevoElemento = document.createElement("li");
      nuevoElemento.className = "list-group-item";
      nuevoElemento.textContent = nuevoItem;
      contenedor.appendChild(nuevoElemento);
      
      
      guardarElementos(contenedor.innerHTML);
      
      
      document.getElementById("item").value = "";
    }
  }
  
  
  function limpiarListado() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    
    
    localStorage.removeItem("elementos");
  }
  
  
  window.addEventListener("load", cargarElementosGuardados);
  
  
  document.getElementById("agregar").addEventListener("click", agregarItem);
  
  
  document.getElementById("limpiar").addEventListener("click", limpiarListado);