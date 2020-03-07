/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var afbeeldingenNeutraal = ['../images/dierNeutraal2-page-001Klein.jpg', '../images/dierNeutraal2-page-001.jpgMIddel', '../images/dierNeutraal2-page-001.jpg'];

var afbeeldingenBlij = ['../images/dierBlij2-page-001Klein.jpg', '../images/dierBlij2-page-001middel.jpg', '../images/dierBlij2-page-001.jpg'];

var afbeeldingenVerdrietig = ['../images/dierVerdrietig2-page-001Klein.jpg', '../images/dierVerdrietig2-page-001Middel.jpg', '../images/dierVerdrietig2-page-001.jpg'];

var plaatje = document.getElementById('neutraal');

var etenB = document.getElementById('eten');

var aaienB = document.getElementById('aaien');

var groeiToestand = 0; // de toestand van de groei, hij is nu (default) 0, omdat hij nog niks gegroeid is.

var bericht = document.getElementById('bericht');



// functie-het groeien
function groeien() { //de functie die ervoor zorgt dat het diertje groeit.
    if (groeiToestand === 0) { //als het diertje nog niet gegroeid is (en nog geen eten heeft gekregen) dan wordt hij groter.
        groeiToestand = 1;
        plaatje.src = afbeeldingenVerdrietig[1];
    } else if (groeiToestand == 1) { //als het diertje al 1 keer eten heeft gekregen dan kan hij nog een keer eten krijgen en dan wordt hij nog ietsjes groter.
        groeiToestand = 2;
        plaatje.src = afbeeldingenVerdrietig[2];
    } else { //als het diertje al volgroeid is dan kan hij niet meer groter worden.
        plaatje.src = afbeeldingenVerdrietig[2];
    }
}


//functie-het aaien fase 1
function aaien() { // dit is als het dier verdrietig is en opgevrolijkt wil worden(normaal)
    if (plaatje.src == afbeeldingenBlij[2]) { //als diertje blij is dan:
        bericht.textContent = 'Ik ben super blij!';
    } else { //in andere gevallen dan (dus als diertje verdrietig is):
        plaatje.src = afbeeldingenNeutraal[2];
        bericht.textContent = 'Hoi, ik voel me gewoon normaal. Klik nu 2 keer op de knop om mij blij te maken.';
    }
}


//functie-het aaien fase 2
function aaienBlij() { // dit is als het diertje neutraal is maar alsnog blij wil worden
    if (plaatje.src == afbeeldingenBlij[2]) { //als diertje blij is dan:
        bericht.textContent = 'Ik ben super blij!';
    } else { //in andere gevallen dan (dus als diertje neutraal is):
        plaatje.src = afbeeldingenBlij[2];
        bericht.textContent = 'JAAA, ik ben echt super blij! Ik hou ervan als mensen mij aaien.';
    }
}



etenB.addEventListener('click', groeien); // de functie groeien() wordt aangeroepen als er op de knop "Eten" wordt geklikt.

aaienB.addEventListener('click', aaien); // de functie aaien() wordt aangeroepen als er op de knop "Aaien" wordt geklikt.

aaienB.addEventListener('dblclick', aaienBlij); // de functie aaienBlij() wordt aangeroepen als er op de knop "Aaien" dubbelgeklikt wordt.
