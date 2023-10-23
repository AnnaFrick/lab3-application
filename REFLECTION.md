# Reflections on Clean Code

Inledningsvis vill jag börja med en egen reflektering över applicering av Clean Clode till detta projekt. Jag tycker själv att färdigställa (utefter Clean Codes riktlinjer) redan skriven kod är en utmaning. Främsta utmaningen är att hitta och sedan optimera redan färdiga lösningar till det bättre. Klart att det är nyttigt och lärorikt med dessa utmaningar, men det blir även en utmaning att känna sig nöjd. Det som leveras mot en deadline kanske inte är det optimala man önskat. Vilket känns frustrerande men som samtidigt får mig att vilja utvecklas och bli en bättre strategisk utvecklare.

## Kapitel 2: Meaningful Names

Kapitel 2 har påverkat mig på det sättet att jag har gjort justeringar på namn i både utveckling av applikationen och modulen. Min modul som först hette `Sign Analysis Module ` har fått det nya namnet `Character Analysis Module`. Ordvalet "sign" har helt och hållet bytts ut mot "character" då sign har en mer diffus betydelse och kan tolkas på olika sätt. Det nya namnet ger en mer tydlighet i vad modulen och applikatioen ska utföra, det har en starkare koppling till just tecken i en text som applikationen och modulen ska analysera. I princip är detta vad hela kapitel 2 handlar om, att namn ska vara tydliga och meningsfulla, men framförallt berör detta avsnittet om att namn ska vara avslöjande (intention-revealing). Inga namn ska behöva förklaras, de ska vara självförklarande. 

![Meaningful Names](./img/meaningful-names.png)

## Kapitel 3: Functions



## Kapitel 4: Comments

Tidigare har jag ofta velat kommentera varje klass, funktion eller klass med en beskrivande kommentar, även om jag själv inte tyckt det medfört något utöver det uppenbara (något som blivit för att inte få lintningsfel(Mandated Comments)). Under denna laboration har jag valt att ta bort i princip alla kommentarer. Just för att gå tillbaka och reflektera om det verkligen behövs eller inte. I många fall har en förklarande namngivning och kort funktion gjort att en kommentar blir överflödig (Redundant). Jag tycker det däremot är svårt att ge djupare innebörd med hjälp av kommentarer, det är svårt att kommentera vad syftet med en funktion är eller hur den ska användas.

I övrigt tycker jag det är bra med kommentarer, jag gillar tydlighet och det tycker jag kommentarer medför. Men då är det på villkoret att kommentarerna är organiserade och har en tydlig struktur.

Scary Noise
Commented-Out Code 

![Comments](./comments.png)

## Kapitel 5: Formatting

Varken modul eller applikation i detta projekt är några tyngdlyftare i densitet av kod. Den vertikala formatteringen är som mest på nästan 130 rader i modulen och drygt 60 rader i applikationen. Med hjälp av att tänka objektorienterat och dela upp koden i klasser har koden lyckats hålla sig relativt kort. Det bidrar även till att koden blir lättare att förstå. 

Horisontellt ligger stort fokus på indentering för att öka läsbarheten av koden. Detta är något jag värderar högt och applicerar i min kod. Personligen har jag svårt att läsa kod som inte är indenterad, det sätts som en spärr i huvudet mig (nästintill allergisk reaktion). Både i modulen och applikationen har jag valt att använda mig av 2 spaces för indentering.

Jag uppskattar det sistnämnda i kapitlet där Uncle Bob's Formatting Rules presenteras. Det är enkla regler som är lätta att applicera och som ger en tydlig struktur i koden. Varför? Jo, för att i exemplet är den vertikala densiteten lagom, den horisontella indenteringen är tydlig och det finns en tydlig struktur i koden.

## Kapitel 6: Objects and Data Structures

När det kommer till objekt och datastrukturer kan man hitta  

## Kapitel 7: Error Handling

Error handling var något jag helt missade i min förra inlämning av modul. Något jag nu ändrat på och har applicerat i modulen för att kunna hantera eventuella fel som kan uppstå. Varje klass kastar ett undantag som fångas upp i try-catch block. I catch blocket fångas undantaget upp och skickas vidare till en funktion som skriver ut ett felmeddelande till användaren. Däremot är det inte några större fel som kan uppstå i modulen vilket gjorde applicering av error hantering ganska enkelt.

## Kapitel 8: Boundaries

I kapitel 8 lyfts vikten av att hantera och integrera extern kod till ett projekt. Precis som kapitlet tar upp öppnar det upp stora möjligheter till att utveckla ett projekt. Dock medför det att man inte har full kontroll över koden som integreras. Lösning blir att lära sig testa och förstå den externa koden. Lite så fick jag göra när jag integrerade Recharts till applikationen. Applikationen har Recharts används som ett "third-party" bibliotek med dess inbyggda metoder för att ta fram ett grafiskt tabelldiagram. 

## Kapitel 9: Unit Tests



## Kapitel 10: Classes

Kapitel 10 tar upp vikten av att klasser ska vara små och ha ett tydligt syfte. Detta är något jag färsäkt applicera i både modul och applikation. I modulen har jag valt att dela upp klasserna med separata ansvarsområden. En klass hanterar att räkna tecken i en text, en klass hanterar att visa olika kategorier av tecken och en klass hanterar statistik för tecken. I och med att applikationen är skriven i React har jag valt att dela upp koden i olika komponenter som speglar klasserna från modulen. En komponent hanterar att visa räknade tecken ur en text, en komponent visar de olika tecken som finns i de olika kategorierna, en komponent hanterar att visa statistik för tecken och en komponent hanterar att visa ett diagram för statistiken. Komponenterna hade kunnat brytits ned till ännu mindre återanvöndbara beståndsdelar. 

## Kapitel 11: Systems

När det gäller kapitel 11 "Systems", har jag inte behövt tänka på systemnivån i varken applikationen eller modulen. Projektet har inte krävt att jag överväger systemnivån eftersom det är relativt enkelt och inte involverar hantering av stora datamängder eller komplexa systemkomponenter. Om projektet däremot skulle växa, vilket det finns ambitioner om i vidare utveckling, skulle det vara en god idé att organisera projektet i systemnivå där varje systemkomponent har ett tydligt syfte och ansvarsområde.
