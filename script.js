const estadoSelect = document.getElementById("uf");

fetch("estados.json")
  .then(response => response.json())
  .then(estados => {
    estados.forEach(estado => {
      const option = document.createElement("option");
      option.value = estado.uf;
      option.textContent = estado.nome;
      estadoSelect.appendChild(option);
    });
  });