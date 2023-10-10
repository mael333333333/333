// Funktion zum automatischen horizontalen Scrollen des .popups-Elements

 // function scrollPopupsHorizontally() {
  var popupsElement = document.querySelector('.popups');
  
  popupsElement.scrollLeft += 4; // Ändere die Scrollgeschwindigkeit nach Bedarf
  
  // Wenn das Ende des Inhalts erreicht ist, setze den scrollLeft auf 0
  if (popupsElement.scrollLeft + popupsElement.clientWidth >= popupsElement.scrollWidth) {
      popupsElement.scrollLeft = 0;
  }
}

// Intervall für das automatische horizontale Scrollen festlegen (alle 50 Millisekunden)
setInterval(scrollPopupsHorizontally, 50);
