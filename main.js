function updateRelogio() {
    //Mostrar a hora exata.
    var horas = new Date().getHours();
    var minutos = new Date().getMinutes();
    var segundos = new Date().getSeconds();
    var dia = new Date().getDay();
    var data = new Date().getDate();
    var mes = new Date().getMonth();
    var ano = new Date().getFullYear();

    //Armazenar os dias da semana e os meses do ano em uma array.

    var mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];

    //Formatação data e hora.
    //Garante que nunca seja 00 hora.(Formato AM:PM)
    horas = horas % 12 || 12;
     

    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    data = data < 10 ? '0' + data : data;

    // Display data e hora.
    var horasAMPM = horas > 12 ? ' PM' : ' AM'; 
    relogio__hora.innerHTML = horas + ':' + minutos + ':' + segundos + horasAMPM;
    relogio__data.innerHTML = diasSemana[dia - 1] + ', ' + mesesAno[mes] + ', ' + data + ', ' + ano; 

} 

updateRelogio();
setInterval(updateRelogio, 1000);


