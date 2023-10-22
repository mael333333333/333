var isPlaying = false; // Variable zur Verfolgung des Abspielstatus
var scrollInterval; // Variable, um das Intervall zu speichern
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');

function togglePlayAndScroll() {
  var popupsElement = document.querySelector('.popups');
  var audioPlayer = document.getElementById('audioPlayer');
  
  if (isPlaying) {
    stopScrolling();
    audioPlayer.pause(); // Sound pausieren
    playButton.innerText = "Play"; // Button-Text auf "Play" ändern
  } else {
    startScrolling();
    audioPlayer.play(); // Sound abspielen
    playButton.innerText = "Pause"; // Button-Text auf "Pause" ändern
  }
  isPlaying = !isPlaying; // Den Abspielstatus umkehren
}

// Funktion zum automatischen horizontalen Scrollen des .popups-Elements
function scrollPopupsHorizontally() {
  var popupsElement = document.querySelector('.popups');
  
  popupsElement.scrollLeft += 4; // Ändere die Scrollgeschwindigkeit nach Bedarf
  
  // Wenn das Ende des Inhalts erreicht ist, setze den scrollLeft auf 0
  if (popupsElement.scrollLeft + popupsElement.clientWidth >= popupsElement.scrollWidth) {
    popupsElement.scrollLeft = 0;
  }
}

// Funktion, um das Scroll-Intervall zu starten
function startScrolling() {
  scrollPopupsHorizontally(); // Sofortiges Scrollen
  scrollInterval = setInterval(scrollPopupsHorizontally, 50); // Intervall starten
}

// Funktion, um das Scroll-Intervall zu stoppen
function stopScrolling() {
  clearInterval(scrollInterval); // Intervall stoppen
}

// Event Listener für den Button hinzufügen
playButton.addEventListener('click', togglePlayAndScroll);


  // Funktion zum allmählichen Ändern der Bannerfarbe über 3 Minuten
  function changeBannerColor() {
    var banner = document.querySelector('.banner-title');
    var currentColor = getComputedStyle(banner).color; // Aktuelle Farbe
    var rgb = currentColor.match(/\d+/g); // RGB-Werte extrahieren
    var grayValue = parseInt(rgb[0]); // Nur Rotwert für Graustufen

    if (grayValue < 255) {
        grayValue++; // Farbwert erhöhen (von Schwarz zu Weiß)
        banner.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`; // Farbe aktualisieren
        setTimeout(changeBannerColor, 1000); // Nach 1 Minute erneut aufrufen (insgesamt 3 Minuten)
    }
}

// Timer starten, um die Farbe des Banners allmählich zu ändern
setTimeout(changeBannerColor, 0); // Sofort starten