function mostrar() {
  // Obtener el div con el ID "Flore"
  var divFlore = document.getElementById("Flore");
  
  // Mostrar el contenido del div
  if (divFlore.style.display === "none") {
      divFlore.style.display = "block";
  } else {
      divFlore.style.display = "none";
  }
}

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

