const container = document.getElementById("malla-container");

for (let i = 1; i <= 20; i++) {
  const celda = document.createElement("div");
  celda.classList.add("celda");
  celda.innerText = `Asignatura ${i}`;
  celda.addEventListener("click", () => {
    alert(`Hiciste clic en Asignatura ${i}`);
  });
  container.appendChild(celda);
}
