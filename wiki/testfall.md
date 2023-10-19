## Testfall

| ID | Krav | Testfall | Förväntat resultat | Utfall | Kommentar |
| --- | --- | --- | --- | --- | --- |
| 1 | Appen ska vara en webbapplikation. | 1.1.1 | Webbapplikationen ska öppnas i webbläsaren på localhost:3000. | | |
| 2 | Webbapplikationen ska hantera input i form av text. | 2.1.1 | Webbapplikationen ska ha ett textfält för att ta emot input text av slutanvändaren. När användaren trycler på en knapp ska appen hantera texten. | | |
| 3 | Webbapplikationen ska analysera texten genom att räkna tecken inom olika kategorier. | 3.1.1 | Webbapplikationen ska räkna antal tecken i texten. Webbapplikationen ska visa att det finns 70 tecken. | Characters in total: 70 | Pass |
| 3 | Webbapplikationen ska analysera texten genom att räkna tecken inom olika kategorier. | 3.2.1 | Webbapplikationen ska räkna antal vokaler i texten. | | |
| 3 | Webbapplikationen ska analysera texten genom att räkna tecken inom olika kategorier. | 3.3.1 | Webbapplikationen ska räkna antal konsonanter i texten. | | |
| 3 | Webbapplikationen ska analysera texten genom att räkna tecken inom olika kategorier. | 3.4.1 | Webbapplikationen ska räkna antal övriga tecken (till exempel siffror och skiljetecken) i texten. | | |
| 3 | Webbapplikationen ska analysera texten genom att räkna tecken inom olika kategorier. | 3.5.1 | Webbapplikationen ska räkna antal ord i texten. | | |
| 4 | Webbapplikationen ska visa olika vad texten innehåller inom olika kategoerier. | 4.1.1 | Webbapplikationen ska visa input text. | | |
| 4 | Webbapplikationen ska visa olika vad texten innehåller inom olika kategoerier. | 4.2.1 | Webbapplikationen ska visa vilka vokaler som finns i texten. | | |
| 4 | Webbapplikationen ska visa olika vad texten innehåller inom olika kategoerier. | 4.3.1 | Webbapplikationen ska visa vilka konsonanter som finns i texten. | | |
| 4 | Webbapplikationen ska visa olika vad texten innehåller inom olika kategoerier. | 4.4.1 | Webbapplikationen ska visa vilka övriga tecken som finns i texten. | | |
| 5 | Webbapplikationen ska visa statistik över texten. | 5.1.1 | Webbapplikationen ska föra statistik över vilka tecken som används mest totalt sett. | | |
| 5 | Webbapplikationen ska visa statistik över texten. | 5.2.1 | Webbapplikationen ska föra statistik över vilka vokaler som används mest. | | |
| 5 | Webbapplikationen ska visa statistik över texten. | 5.3.1 | Webbapplikationen ska föra statistik över vilka konsonanter som används mest. | | |
| 5 | Webbapplikationen ska visa statistik över texten. | 5.4.1 | Webbapplikationen ska föra statistik över vilka övriga tecken som används mest. | | |
| 6 | Webbapplikationen ska vara på engelska. | 6.1.1 | Webbapplikationen ska vara på engelska. | | |
| 7 | Webbapplikationen ska vara responsiv. | 7.1.1 | Webbapplikationen ska vara responsiv. | | |
| 8 | Webbapplikationen ska visa en grafisk representation av statistiken. | 8.1.1 | Webbapplikationen ska visa en grafisk representation av statistiken. | | |


## Specificerade testfall

### 1.1.1 - Webbapplikationen ska vara en webbapplikation.
1. Starta igång appen genom kommandot `npm start` i terminalen.
2. Gå till localhost:3000 i webbläsaren (om den inte öppnas automatiskt). 
3. Webbapplikationen ska vara en webbapplikation.

### 2.1.1 - Webbapplikationen ska kunna ta emot input i form av text.
1. Skriv in text i textfältet med följande innehåll: "This is a test text containing vowels, consonants and special characters: 111223.".
2. Tryck på knappen "Analyze".

### 3.1.1 - Webbapplikationen ska räkna antal tecken i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska räkna antal tecken i den angivna texten och visa resultatet.

### 3.2.1 - Webbapplikationen ska räkna antal vokaler i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska räkna antal vokaler i den angivna texten och visa resultatet.

### 3.3.1 - Webbapplikationen ska räkna antal konsonanter i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska räkna antal konsonanter i den angivna texten och visa resultatet.

Skriv in text i textfältet och tryck på knappen "Analyze". Webbapplikationen ska räkna antal konsonanter i texten och visa hur många som finns.

### 3.4.1 - Webbapplikationen ska räkna antal övriga tecken (till exempel siffror och skiljetecken) i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska räkna antal övriga tecken i den angivna texten och visa resultatet.
Skriv in text i textfältet och tryck på knappen "Analyze". Webbapplikationen ska räkna antal övriga tecken i texten och visa hur många som finns.

### 3.5.1 - Webbapplikationen ska räkna antal ord i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska räkna antal ord i den angivna texten och visa resultatet.

Skriv in text i textfältet och tryck på knappen "Analyze". Webbapplikationen ska räkna antal ord i texten och visa hur många som finns.

### 4.1.1 - Webbapplikationen ska visa input text.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa input text.

Skriv in text i textfältet och tryck på knappen "Analyze". Webbapplikationen ska visa input text.

### 4.2.1 - Webbapplikationen ska visa vilka vokaler som finns i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa vilka vokaler som finns i texten.

Skriv in text i textfältet och tryck på knappen "Analyze". Webbapplikationen ska visa vilka vokaler som finns i texten.

### 4.3.1 - Webbapplikationen ska visa vilka konsonanter som finns i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa vilka konsonanter som finns i texten.

### 4.4.1 - Webbapplikationen ska visa vilka övriga tecken som finns i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa vilka övriga tecken som finns i texten.

### 5.1.1 - Webbapplikationen ska visa statistik över texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa statistik över vilka tecken som används mest.

### 5.2.1 - Webbapplikationen ska visa statistik över vilka vokaler som finns i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa statistik över vilka vokaler som finns i texten.

### 5.3.1 - Webbapplikationen ska visa statistik över vilka konsonanter som finns i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa statistik över vilka konsonanter som finns i texten.

### 5.4.1 - Webbapplikationen ska visa statistik över vilka övriga tecken som finns i texten.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa statistik över vilka övriga tecken som finns i texten.

### 6.1.1 - Webbapplikationen ska vara på engelska.
1. Utför stegen i testfall 1.1.1.
2. Webbapplikationen ska vara på engelska.

### 7.1.1 - Webbapplikationen ska vara responsiv.
1. Utför stegen i testfall 1.1.1.
2. Dra i webbläsarfönstret för att ändra storlek.
3. Webbapplikationen ska följa med i storleken på webbläsarfönstret.

### 8.1.1 - Webbapplikationen ska visa en grafisk representation av statistiken.
1. Utför stegen i testfall 2.1.1.
2. Webbapplikationen ska visa en grafisk representation av statistiken över tecken, vokaler och konsonanter.


