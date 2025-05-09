const events = [

    
        {
            date: '2024-08-26',
            title: 'Upprop',
            time: '13:00 - 14:00',
            description: 'Upprop för nya studenter på M:A och M:C.',
            location: 'M:A och M:C',
            dressCode: ''
        },
        {
            date: '2024-08-26',
            title: 'Phøreläsning',
            time: '14:00 - 15:00',
            description: 'Phøret håller en phøreläsning om studentlivet på LTH samt allmänt bra saker att veta under sin studietid. Phaddergrupperna kommer också att tilldelas här.',
            location: 'M:A',
            dressCode: ''
        },
        {
            date: '2024-08-26',
            title: 'Phaddermys och ouvveprovning',
            time: '15:00 - 20:00',
            description: 'När phaddergrupperna har tilldelats kommer du få hänga med din phaddergrupp, få en rundtur av LTH samt prova ouvve för första gången!',
            location: 'Maskinparken',
            dressCode: ''
        },
        {
            date: '2024-08-27',
            title: 'Burger Night',
            time: '17:30 - 21:30',
            description: 'Burger Night är Nollningens första evenemang. Vårt kära Sexmästeri kommer laga de världskända maskinburgarna och phaddrarna kommer att spexa inför alla nollor. Häng med er phaddergrupp, käka gott och ha kul. Tänk även på att samla poäng till nollningens poängjakt som drar igång den kvällen!!',
            location: 'Smörjis',
            dressCode: 'Ouvve + phadderoutfit'
        },
        {
            date: '2024-08-27',
            title: 'Monumentmålning',
            time: '21:30 - 23:30',
            description: 'Maskinsektionens vackra, röda färg ska spridas över LTHs alla monument!',
            location: 'Runt om Campus',
            dressCode: ''
        },
        {
            date: '2024-08-28',
            title: 'Sittning-Sittning',
            time: '17:30 - 23:00',
            description: 'Nu är det dags för nollans första sittning! Ännu en gång är vårt Sexmästeri i farten och bjuder på en hejdundrandes festmåltid med sång och spex. Under sittningens gång kommer sångphörmännen lära dig allt du behöver vet om sittningar på maskin samtidigt som du får njuta av god mat och trevligt sällskap!',
            location: 'Gasque',
            dressCode: 'Bruten ouvve'
        },
        {
            date: '2024-08-29',
            title: 'M-kampen med Alfa Laval',
            time: '14:00 - 17:00',
            description: 'Under denna aktivitetsdag kommer du tillsammans med din phaddergrupp tävla mot andra phaddergrupper i olika grenar.',
            location: 'Maskinparken',
            dressCode: 'Ouvve + phadderoutfit och oömma skor'
        },
        {
            date: '2024-08-29',
            title: 'TD-grillning och phaddermys',
            time: '18:30 - 21:00',
            description: 'TD-gruppen bjuder in till grillning för alla TD-studenter. För övriga är detta ett perfekt tillfälle för lite skönt häng med phaddergruppen!',
            location: '',
            dressCode: 'Ouvve + phadderoutfit'
        },
        {
            date: '2024-08-30',
            title: 'Utskottsmingel',
            time: '13:00 - 17:30',
            description: 'Vilka utskott finns på Maskinsektionen? Vad finns det för poster? Hur blir man aktiv? Allt detta kommer du få svar på när du möter sektionens olika utskott!',
            location: 'M:A, Maskinparken och Bordeauxparken',
            dressCode: 'Ouvve + phadderoutfit'
        },
        {
            date: '2024-08-30',
            title: 'Phaddermys',
            time: '18:00 - 21:00',
            description: 'Härligt häng med phaddergruppen!',
            location: '',
            dressCode: 'Ouvve + phadderoutfit'
        },
        {
            date: '2024-08-31',
            title: 'Räkfrossan',
            time: '16:30 - 20:00',
            description: 'Gillar du räkor? Då har du hittat rätt! Räkfrossan är en av Maskinsektionens anrikaste traditioner där det bjuds på räkor i stora lass.',
            location: 'Lophtet',
            dressCode: 'Ouvve + phadderoutfit'
        },
        {
            date: '2024-08-31',
            title: 'Pepparfest',
            time: '18:00 - 21:00',
            description: 'Phøret tillsammans med peppare på andra sektioner anordnar en phør-/mellanfest inför UtEDischot! Detta är ett perfekt tillfälle att klippa och byta ouvveremsor med nollor från andra sektioner.',
            location: 'AK-parken',
            dressCode: 'Ouvve + phadderoutfit'
        },
        {
            date: '2024-08-31',
            title: 'UtEDischot',
            time: '21:00 - 02:00',
            description: 'Tagga till inför en maxad konsert med alla andra sektioner på LTH och dansa till tonerna av en välbekant artist! Observera att saxar inte är tillåtna på UtEDischot-området.',
            location: 'E-husets parkering',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-01',
            title: 'Nollesøndag',
            time: '09:00 - 17:00',
            description: 'Magiskt. Episkt. Storslaget. Nollesøndagen är något man bara måste uppleva själv! Så sätt på dig din ouvve, möt upp din phaddergrupp och förbered dig på en fantastisk dag.',
            location: 'Bysten',
            dressCode: 'Ouvve + phadderoutfit'
        },
        {
            date: '2024-09-02',
            title: 'Uppdragsceremoni / uppdragshäng',
            time: '17:00 - 19:00',
            description: 'Tiden är inne att lära känna fler nollor i din klass. Du får en uppdragsgrupp, där fokus ligger på tävlingar och utmaningar mot andra sektioner.',
            location: 'M:A',
            dressCode: ''
        },
        {
            date: '2024-09-03',
            title: 'I <3 M',
            time: '17:00 - 02:00',
            description: 'Idag kommer du för första gången få gå på sittning med I-sektionen då sektionernas sexmästerier bjuder in till finsittning i gasquesalen!',
            location: '',
            dressCode: 'Mörk Kostym'
        },
        {
            date: '2024-09-04',
            title: 'Hemlig händelse',
            time: '17:00 - 18:00',
            description: 'Phøset gör ett uttalande. Det här vill ni inte missa!',
            location: 'M:A',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-04',
            title: 'Draggning',
            time: '18:00 - 20:00',
            description: 'En dramatisk tävling i sjön Sjøn, där sjöns botten rensas från skräp och växtligheter där sektionen som rensar mest vinner',
            location: 'Sjön Sjøn',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-04',
            title: 'Pepping',
            time: '20:00 - 22:00',
            description: 'LTHs glada peppare/phør arrangerar en konsert i Maskinparken! Flera band, däribland vårt GRYMMA M-band kommer att spela och nollan utlovas bra musik och bra häng!!',
            location: 'Maskinparken',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-04',
            title: 'INGvasion',
            time: '22:00 - 02:00',
            description: 'ING-sektionen (högskoleingenjörerna från Campus Helsingborg) styr en fest i Gasque-salen där nollor från alla sektioner är välkomna',
            location: 'Gasque',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-05',
            title: 'Studiekväll / Uppdragshäng',
            time: '17:00 - 22:00',
            description: 'En lugn kväll där du får möjlighet att lära dig mer om studieteknik, och sedan får umgås med din uppdragsgrupp.',
            location: '',
            dressCode: ''
        },
        {
            date: '2024-09-06',
            title: 'Ölresan/Ölmilen',
            time: '00:01 - 23:59',
            description: ' Ølresan är ølisarnas egna event där de tar med er på en resa om ja, øl! Nollan hoppar på en buss mot okänd destination med mycket stoj och stim!',
            location: '',
            dressCode: 'Klädkod: Ouvve'
        },
        {
            date: '2024-09-07',
            title: 'FlyING',
            time: '10:00 - 21:00',
            description: 'Hela LTH intar Helsingborgs gator i en stor parad som avslutas med tävling mellan alla sektionernas FlyING-grupper. Vem lyckas flyga närmast Danmark? Lunch finns att köpa på plats men det går givetvis bra att ta med matlåda också. På kvällen firar vi givetvis maskinsektionens överlägsna seger på en nation tillbaka i Lund.',
            location:'Helsingborg',
            dressCode: 'Klädkod: Ouvve'
        },
        {
            date: '2024-09-07',
            title: 'TryING',
            time: '22:00 - 02:00',
            description: 'Ikväll blir det eftersläpp tillsammans med V-sektionen på nation i Lund.',
            location: 'Lund',
            dressCode: 'Klädkod: Ouvve'
        },
        {
            date: '2024-09-08',
            title: 'Nollan vilar, Märkespicknik',
            time: '11:00 - 14:00',
            description: 'Lyser märkena på ouvven ännu med sin frånvaro! Då är detta ett perfekt tillfälla att ändra på det! Samtliga sektioner kommer vara på plats och sälja märken, så ta tillfället i akt att fynda på märken! Ta även tillfället i akt att vila upp er ordentligt! Passa på att laga matlådor, tvätta kläder och få koll på plugget inför nästa vecka <3',
            location: 'MH-gräset',
            dressCode: ''
        },
        {
            date: '2024-09-09',
            title: 'Studiekväll/uppdragshäng',
            time: '17:00 - 22:00',
            description: ' Ett bra tillfälle för studier efter en lång helg där du kan ta hjälp av dina klasskompisar och phaddrar. Du får också tid att hänga med uppdragsgruppen och jobba på ert uppdrag.',
            location: '',
            dressCode: ''
        },
        {
            date: '2024-09-10',
            title: 'VM',
            time: '17:00 - 02:00',
            description: 'På kvällen är det dags för en sittning tillsammans med vår kära syskonsektion från V i Gasque-salen. Det börjar med förhäng med phaddergrupperna och glider över till en av årets roligaste sittningar. Efter sittningen kommer phøret, tillsammans med V-pepp, hålla i en mellanphest innan eftersläppet börjar! ',
            location: '',
            dressCode: 'Tema: VeM är VeM? VeM är en V-ingenjör? Lantare? Brandare? Klädsel: Ouvve och temaenlig klädsel'
        },
        {
            date: '2024-09-11',
            title: 'Phaddermys',
            time: '17:00 - 22:00',
            description: 'Dagen kommer att bjuda på en mysig kväll med din phaddergrupp och ifall vädret tillåter kommer alla vara välkomna till utebio i smörjis! ',
            location: '',
            dressCode: ''
        },
        {
            date: '2024-09-12',
            title: 'Uppdragshäng',
            time: '17:00 - 22:00',
            description: 'Uppdrag + häng = sant',
            location: '',
            dressCode: ''
        },
        {
            date: '2024-09-13',
            title: 'Nollefredagen',
            time: '17:00 - 22:00',
            description: 'En dag av tagg! Øverphøsen har i uppdrag att ta sig runt ØverphøsHinderbanan på så kort tid som möjligt och det utlovas en hel del kreativa hinder! Hinderbanan varvas med Cheer-gruppernas framträdanden! En perfekt kväll som kommer äga rum i Sankt Hans backar ',
            location: 'Sankt Hans backar',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-14',
            title: 'Nollelördag',
            time: '09:00 - 15:00',
            description: 'Vi tävlar mot de andra sektionerna i Lådbilsrace, Showdown och Ballongistapult där Maskinsektionen självklart kommer segra. Klädkod: ouvve',
            location: 'Lundagård',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-14',
            title: 'Fotografering',
            time: '15:00 - 17:00',
            description: 'Fotografering av phaddergrupper',
            location: 'Amphiteatern',
            dressCode: ''
        },
        {
            date: '2024-09-14',
            title: 'Revyn',
            time: '17:00 - 17:30',
            description: 'Revygruppen bjuder in till ett spex utan dess like. Detta är något ni inte vill missa!',
            location: 'Kåraulan',
            dressCode: ''
        },
        {
            date: '2024-09-14',
            title: 'Gasque',
            time: '17:30 - 03:00',
            description: 'Gasque är den stora avslutningen på maskins nollning och markerar även dagen då nollorna blir ettor. Det är en finsittning som inte ens I<3M kan mäta sig med där sexet slår på stort! Inget någon vill missa!',
            location: 'Gasque',
            dressCode: ' Klädkod: Mörk kostym (frack är även uppmuntrat)'
        },
        {
            date: '2024-09-15',
            title: 'Regattan',
            time: '10:0 - 15:00',
            description: 'Efter att vi har tågat genom staden och visat upp Regattagruppernas mästerverk, samlas regattagruppen och cheergruppen vid sjön Sjøn för att göra upp i det stora Regattaslaget där Regattagrupperna tävlar mot varandra i vattnet och Cheer hejar på för hela sektionen. ',
            location: 'Sjön Sjøn',
            dressCode: 'Ouvve'
        },
        {
            date: '2024-09-16',
            title: 'Studiekväll',
            time: '17:00 - 20:00',
            description: 'Måndagkväll, STUDIEKVÄLL! Ett ypperligt tillfälle att lägga lite tid på studierna efter en intensiv helg. Under kvällen kommer det även att bjudas på fika!',
            location: 'Maskineriet',
            dressCode: ''
        },
        {
            date: '2024-09-17',
            title: 'AW-Mästerskap',
            time: '17:00 - 21:00',
            description: 'Det är dags att visa vad maskinare går för i denna turnering mot A och W.P.S. kom ihåg att sikta på kungen!',
            location: 'Bysten ',
            dressCode: ''
        },
        {
            date: '2024-09-18',
            title: 'Nollan vilar',
            time: '00:01 - 23:59',
            description: '',
            location: '',
            dressCode: ''
        },
        {
            date: '2024-09-19',
            title: 'Biokväll med M-brace',
            time: '18:00 - 20:00',
            description: 'Finns det något bättre sätt att ladda upp inför en intensiv helg än en filmkväll? Ta med dig lite gott snacks och mys framför en film i Smörjgropen tillsammans med andra maskinare!',
            location: 'Smörjis',
            dressCode: ''
        },
        {
            date: '2024-09-20',
            title: 'Ettasittning',
            time: '17:00 - 22:00',
            description: 'Nollningens sista evenemang anordnas av uppdragsgruppen med samma namn och de kommer bjuda på en sittning utöver det vanliga på lophtet. Självklart är alla maskinare välkomna till denna unika festlighet där endast uppdragsgruppens fantasi sätter gränserna för vad som kan hända.',
            location: 'Lophtet',
            dressCode: ''
        },
        {
            date: '2024-09-21',
            title: 'Phørevent',
            time: '17:00 - 21:00',
            description: '',
            location: '',
            dressCode: ''
        },
        {
            date: '2024-09-22',
            title: 'Nollan vilar',
            time: '00:01 - 23:59',
            description: '',
            location: '',
            dressCode: ''
        },
    
    
    
    
    
    
    
    
];

console.log(events);