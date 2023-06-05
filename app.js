$('#buscar').click(function() {
  let verdura = $('#idVerdura').val();
  fetch('http://localhost:3000/verduras/' + verdura, {
    method: 'GET'})
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let info = $('.info');
      info.empty();
      info.append('<h2>' + data.verdura + '</h2>')
      info.append('<p> Nombre Cientifico: ' + data.n_cientifico + '</p>')
      info.append('<p> Tamaño: ' + data.tam_prom + '</p>')
      info.append('<p> Distribucion Geografica: ' + data.dis_geo + '</p>')
      info.append('<p> Caracteristicas: ' + data.caracteristica + '</p>')
    })
});