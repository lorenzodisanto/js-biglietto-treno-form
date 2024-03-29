# Calcolo del prezzo del biglietto del treno

## Descrizione:

Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### MILESTONE 1:

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

### MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale (cioè il biglietto) andranno quindi stampati in pagina. Il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo.

#### BONUS:

Visualizzare il biglietto solo dopo che l'utente ha cliccato sul bottone.

## Svolgimento

- chiedo all'utente di inserire nell'input nome e cognome;
- chiedo all'utente di inserire nell'input i km che vuole percorrere;
- chiedo all'utente la fascia d'età;

- definisco il prezzo base del biglietto;

- SE (età utente minore di 18)
  applico sconto del 20%;
  stampo biglietto;

  - ALTRIMENTI SE (età utente maggiore di 65)
    applico sconto del 40%;
    stampo biglietto;

  - ALTRIMENTI
    applico prezzo base;
    stampo biglietto;
