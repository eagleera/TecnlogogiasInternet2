var studentsArray = [
    {
        nombreCompleto: {nombre: "Alejandro", app: "Romo", apm: "Gonzales"},
        numControl:"235990",
        materias: ["Fisica","Resistencia de Materiales","Calculo Vectorial"],
        edad:"22",
        promedioCalif:"85"
    },
    {
        nombreCompleto: {nombre: "Daniela", app: "Lopez", apm: "Martinez"},
        numControl:"214356",
        materias: ["Arquitectura","Etica Laboral","Taller Emprendedor"],
        edad:"18",
        promedioCalif:"75"
    },
    {
        nombreCompleto: {nombre: "Karen", app: "Palomino", apm: "Herrera"},
        numControl:"456743",
        materias: ["Psicologia","Comportamiento Humano","Taller Emprendedor"],
        edad:"29",
        promedioCalif:"88"
    },
    {
        nombreCompleto: {nombre: "Cesar", app: "Lopez", apm: "Malo"},
        numControl:"199912",
        materias: ["Diseño de pantalla","Experiencia de Usuario","Edicion de videos"],
        edad:"32",
        promedioCalif:"95"
    }
];
db.alumnos.insert(studentsArray);