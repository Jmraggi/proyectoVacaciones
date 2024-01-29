// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const vacationDataScript = document.getElementById('vacation-data');
  
    loadJSON(vacationDataScript.src, function (vacationData) {
      // Accede a los datos y actualiza la interfaz
      updateInterface(vacationData);
    });
  });
  
  function loadJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }
  
  function updateInterface(vacationData) {
    const totalDaysElement = document.getElementById('totalDays');
    const corridosDaysElement = document.getElementById('corridosDays');
    const habilesDaysElement = document.getElementById('habilesDays');
    const motivosParticularesDaysElement = document.getElementById('motivosParticularesDays');
  
    // Accede a la cantidad de días de vacaciones
    const totalDays = vacationData.vacationDays.totalDays;
    const corridosDays = vacationData.vacationDays.corridos;
    const habilesDays = vacationData.vacationDays.habiles;
    const motivosParticularesDays = vacationData.vacationDays.motivosParticulares;
  
    // Actualiza el contenido en la interfaz
    totalDaysElement.textContent = `: ${totalDays} Días `;
    corridosDaysElement.textContent = `${corridosDays} Corridos`;
    habilesDaysElement.textContent = `${habilesDays} Hábiles`;
    motivosParticularesDaysElement.textContent = `${motivosParticularesDays} Motivos Particulares`;
  }
  