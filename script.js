const ramos = [
  {
     background: #fff0f5; /* Fondo rosado muy claro */
    semestre: "Semestre I",
    asignaturas: [
      "Fundamentos de Kinesiología",
      "Anatomía de Sistemas",
      "Bases Químico-Biológicas de la Célula",
      "Corporalidad y Actividad Física",
      "Habilidades Comunicativas",
      "Rehabilitación e Inclusión con Enfoque de Derechos Humanos",
      "Inglés I"
    ]
  },
  {
    semestre: "Semestre II",
    asignaturas: [
      "Anatomía del Sistema Músculo Esquelético",
      "Fisiología General y Neurofisiología",
      "Fundamentos del Movimiento Humano",
      "Desarrollo Sensoriomotor en Kinesiología",
      "Salud Pública",
      "Inglés II"
    ]
  },
  {
    semestre: "Semestre III",
    asignaturas: [
      "Fisiología de Sistema",
      "Kinesiología y Movimiento Humano",
      "Epistemología y Metodología de la Investigación",
      "Razonamiento en Kinesiología",
      "Inglés III"
    ]
  },
  {
    semestre: "Semestre IV",
    asignaturas: [
      "Fisiopatología",
      "Control Motor y Análisis Kinesiológico del Movimiento Humano",
      "Análisis Cualitativo y Cuantitativo",
      "Integración en Kinesiología I",
      "Inglés IV"
    ]
  },
  {
    semestre: "Semestre V",
    asignaturas: [
      "Fisiología del Ejercicio",
      "Ciclo Vital y Funcionamiento Humano",
      "Políticas en Rehabilitación e Inclusión",
      "Atención Primaria y Salud Familiar",
      "Pensamiento Crítico",
      "Diagnóstico Interdisciplinario en Rehabilitación con Perspectiva Inclusiva"
    ]
  },
  {
    semestre: "Semestre VI",
    asignaturas: [
      "Evaluación y Diagnóstico en Kinesiología Músculo Esquelético",
      "Evaluación y Diagnóstico en Neurokinesiología",
      "Evaluación y Diagnóstico en Kinesiología Cardiorrespiratoria",
      "Agentes Físicos",
      "Administración y Gestión en Salud"
    ]
  },
  {
    semestre: "Semestre VII",
    asignaturas: [
      "Intervención en Kinesiología Músculo Esquelética",
      "Intervención en Neurokinesiología",
      "Intervención en Kinesiología Cardiorrespiratoria",
      "Proceso Investigativo para Licenciatura I"
    ]
  },
  {
    semestre: "Semestre VIII",
    asignaturas: [
      "Kinesiología en Áreas de Especialidad",
      "Actividad Física y Prescripción del Ejercicio para la Salud",
      "Proceso Investigativo para Licenciatura II",
      "Integración en Kinesiología II",
      "Proyectos, Innovación y Emprendimiento en Kinesiología",
      "Intervención Interdisciplinaria en Rehabilitación con Perspectiva Inclusiva"
    ]
  },
  {
    semestre: "Semestre IX",
    asignaturas: [
      "Práctica Profesional I",
      "Práctica Profesional II"
    ]
  },
  {
    semestre: "Semestre X",
    asignaturas: [
      "Práctica Profesional III",
      "Práctica Profesional IV"
    ]
  }
];

// Renderizado de la malla en la web
const container = document.getElementById("malla-container");

ramos.forEach((bloque) => {
  const titulo = document.createElement("h2");
  titulo.textContent = bloque.semestre;
  container.appendChild(titulo);

  const grid = document.createElement("div");
  grid.className = "grid-semestre";

  bloque.asignaturas.forEach((asig) => {
    const celda = document.createElement("div");
    celda.className = "celda";
    celda.textContent = asig;

    celda.onclick = () => {
      alert(`Asignatura: ${asig}`);
    };

    grid.appendChild(celda);
  });

  container.appendChild(grid);
});
