//Radiología
let radiologia = [
    {   hora: "11:00", especialista: "IGNACIO SCHULZ",        paciente: "FRANCISCA ROJAS", rut: "9878782-1",  prevision: "FONASA",},
    {   hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA",  rut: "15345241-3", prevision: "ISAPRE",},
    {   hora: "15:00", especialista: "FERNANDO WURTHZ",       paciente: "ARMANDO LUNA",    rut: "16445345-9", prevision: "ISAPRE",},
    {   hora: "15:30", especialista: "ANA MARIA GODOY",       paciente: "MANUEL GODOY",    rut: "17666419-0", prevision: "FONASA",},
    {   hora: "16:00", especialista: "PATRICIA SUAZO",        paciente: "RAMON ULLOA",     rut: "14989389-K", prevision: "FONASA",},
];


let primerPacienteRadio = radiologia.find(function(paciente){
    return paciente.hora == '11:00'
});
    
let ultimoPacienteRadio = radiologia.find(function(paciente){
    return paciente.hora == '16:00'
});
    
document.getElementById('radiologia-pacientes').innerHTML = 
`Primera atención: ${primerPacienteRadio.paciente} - ${primerPacienteRadio.prevision} <br> Última atención: ${ultimoPacienteRadio.paciente} - ${ultimoPacienteRadio.prevision} `
    
    
    var texto = `
        <tr>
            <th>HORA</th>
            <th>ESPECIALISTA</th>
            <th>PACIENTE</th>
            <th>RUT</th>
            <th>PREVISION</th>
        </tr>
    
    `
    for(var i = 0; i< radiologia.length; i++){
        
        texto+=`
    
        <tr>
            <td>${radiologia[i].hora}</td>
            <td>${radiologia[i].especialista}</td>
            <td>${radiologia[i].paciente}</td>
            <td>${radiologia[i].rut}</td>
            <td>${radiologia[i].prevision}</td>
        </tr>
        `
        
    };
    
    document.getElementById("radiologia-tabla").innerHTML = texto;




//Traumatología
let traumatologia = [
    { hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ",   rut: "15554774-5", prevision: "FONASA",},
    { hora: "10:00", especialista: "RAUL ARAYA",          paciente: "ANGÉLICA NAVAS",  rut: "15444147-9", prevision: "ISAPRE",},
    { hora: "10:30", especialista: "MARIA ARRIAGADA",     paciente: "WALTER WHITE",    rut: "17879423-9", prevision: "ISAPRE",},
    { hora: "11:00", especialista: "ALEJANDRO BADILLA",   paciente: "FELIPE MARDONES", rut: "1547423-6",  prevision: "ISAPRE",},
    { hora: "11:30", especialista: "CECILIA BUDNIK",      paciente: "DIEGO MARRE",     rut: "16554741-K", prevision: "FONASA",},
    { hora: "12:00", especialista: "RAGNAR LODBROK",      paciente: "CECILIA MENDEZ",  rut: "9747535-8",  prevision: "ISAPRE",},
    { hora: "12:30", especialista: "ANDRES KANACRI",      paciente: "MARCIAL SUAZO",   rut: "11254785-5", prevision: "ISAPRE",},
];


let primerPacienteTrauma = traumatologia.find(function(paciente){
    return paciente.hora == '08:00';
});
    
let ultimoPacienteTrauma = traumatologia.find(function(paciente){
    return paciente.hora == '12:30';
});
    
document.getElementById('traumatologia-pacientes').innerHTML = 
`Primera atención: ${primerPacienteTrauma.paciente} - ${primerPacienteTrauma.prevision} <br> Última atención: ${ultimoPacienteTrauma.paciente} - ${ultimoPacienteTrauma.prevision} `
    
    
    var texto = `
        <tr>
            <th>HORA</th>
            <th>ESPECIALISTA</th>
            <th>PACIENTE</th>
            <th>RUT</th>
            <th>PREVISION</th>
        </tr>
    
    `
    for(var i = 0; i< traumatologia.length; i++){
        
        texto+=`
    
        <tr>
            <td>${traumatologia[i].hora}</td>
            <td>${traumatologia[i].especialista}</td>
            <td>${traumatologia[i].paciente}</td>
            <td>${traumatologia[i].rut}</td>
            <td>${traumatologia[i].prevision}</td>
        </tr>
        `
        
    };
    
    document.getElementById("traumatologia-tabla").innerHTML = texto;

//Dental
let dental = [
    { hora: "08:30", especialista: "ANDREA ZUÑIGA",          paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE",},
    { hora: "11:00", especialista: "TYRION LANNISTER",       paciente: "ANGEL MUÑOZ",     rut: "9878789-2",  prevision: "ISAPRE",},
    { hora: "11:30", especialista: "SCARLETT WITTING",       paciente: "MARIO KAST",      rut: "7998789-5",  prevision: "FONASA",},
    { hora: "13:00", especialista: "SUPER DANIEL REBOLLEDO", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA",},
    { hora: "13:30", especialista: "EDUARDO VIÑUELA",        paciente: "HUGO SANCHEZ",    rut: "17665461-4", prevision: "FONASA",},
    { hora: "14:00", especialista: "TOMMY SHELBY",           paciente: "ANA SEPULVEDA",   rut: "14441281-0", prevision: "ISAPRE",},
];

let primerPacienteDental = dental.find(function(paciente){
    return paciente.hora == '08:30';
});
    
let ultimoPacienteDental = dental.find(function(paciente){
    return paciente.hora == '14:00';
});
    
document.getElementById('dental-pacientes').innerHTML = 
`Primera atención: ${primerPacienteDental.paciente} - ${primerPacienteDental.prevision} <br> Última atención: ${ultimoPacienteDental.paciente} - ${ultimoPacienteDental.prevision} `
    
    
    var texto = `
        <tr>
            <th>HORA</th>
            <th>ESPECIALISTA</th>
            <th>PACIENTE</th>
            <th>RUT</th>
            <th>PREVISION</th>
        </tr>
    
    `
    for(var i = 0; i< dental.length; i++){
        
        texto+=`
    
        <tr>
            <td>${dental[i].hora}</td>
            <td>${dental[i].especialista}</td>
            <td>${dental[i].paciente}</td>
            <td>${dental[i].rut}</td>
            <td>${dental[i].prevision}</td>
        </tr>
        `
        
    };
    
    document.getElementById("dental-tabla").innerHTML = texto;


