# LOGBOG

Brug denne logbog til at holde styr på dine commits.

Udfyld hver dag. Det er vigtigt at du overholder denne logbog - du kan risikere at dumpe, hvis du ikke bruger den.  
Skriv tidspunkt for dit commit ud for hver dag, både morgen og aften.  
Husk, at du ikke må arbejde på din opgave mellem kl. 16:00 og kl. 8:00.

## Dag 1

Morgen - (9:40 - 11:32)
har fået lavet de meste af forside delen med baggrunds billede, har også fået login ind i men har ikke noget css på det i nu.
kavet en component folder `frontpage` med en index.jsx file og css file.
index.jsx er sat up til at jeg kan putte heroimage som baggrund på en div og importer en masse andre dele ind some skal brugs så som logo, log ind og scroll ned pillene.

log ind består af to filer i folderen logindForm.
`LoginForm.jsx` er en client component mens `action.js` er server component.
den laver et api-kald `/auth/login` som bliver valideret af zod, hvis log ind er 
vellykket, bliver der oprettet en cookie.


Eftermiddag - (12:13 - 12:28)
så blev jeg helt førdig med css'en til hero billede delen af forsiden. det eneste der mangler er logoet.
jeg lavet hele designet med hjælp af display grid. logo har fået minimal styling lige nu da den ikke er inde.

(12:30 - 13:30)
fik lavet all holdtyper og stylet dem, tænker at hvis jeg for tid at jeg vil kigge på om det kan blive lavet anderledes.
lige nu er den sat up med en aktivitet i deres eget jsx file, importet ind i en index file.

rettet også font style til den fra figma filen.

(13:35 - 13:58)
startet på newsletter både med layout my html tags og action.js. tænker imorgen vil jeg gøre det at jeg hopper mellem newsletter og testimonials api arbejdet.
`index.jsx` i folderen `newsletter` er en simple form component som bruger fromAction fra `action.js` fra samme folder til at checke om du har skrevet din mail med hjælp af zod.

## Dag 2

Morgen - (8:25 - 8:50)  
rettet på logbog fra igår da jeg ikke havdet skrevet den mængde infomation som der var håbet for.

(8:52 - 9:15)
rettet `action.js` for newsletter og login.
begge havde nogle fejl i sig som gjort at de ikke virket.
fejlen for login var at jeg havdet skrevet email når jeg brugt username og det var det forkert api jeg postet til.
newsletter havdet fejl ved fetchen hvor jeg prøvet at få json data som fik hele siden til at fejle.

(9:17 - 9:37)
tag mig en pause, men er gået igang med styling for login
har også gjort activities page'en klar så jeg kan redirecte til den når man har logget ind

(9:45 - 10:03)
css'en til login form er færdig, var meget simplet at lave.

(10:05 - 11:30)
lavet aktiviter og detail visning af aktiviter
puttet begge fetch point is `src/lib/dal.js`
importet det ind i `page.js` og `[id]/page.jsx`

på importtet af component puttet jeg en prop på for at fortælle koden at den skal tage resulterne som gemmes som `ACTIVITY` som en prop hvor jeg så brugte `ACTIVITY` til detailvisning og `a` til listevisningen.

Eftermiddag - (12:47 - 14:54)
fik ikke committet meget i denne del men der dukket konstant fejl op.
skulle rette på noget css i detailevisning så det var responsive, specifikt til `DetailBtnBox`

fik lavet navgations menu, active virker dog ikke men alt andet virker og er responsive
menu er sat op med et link rundt om en div me icon'et og navnet på menu knappen.
div'en er der for at hjælpe med at på icon og text over hinanden og i midten.

`.NavligationSec` er den som gøre menu'en fixed i bunden af siden, og `.NavWrapper` gør så den har en baggrund.

jeg rettet også lidt i global styling så der er en bottom padding, så menu'en ikke dækker noget infomation.


(15:05 - 15:18)
har kun gjort lidt klar til at lave testmonial delen af velkommen siden, der ikke noget code og fortælle om i dette commit da jeg kun har lave component mappen med to filer og importet det ind i `page.js`
## Dag 3

Morgen - (8:21 - 10:28)  
lavet hele testimonial med carousel ved jeg af embla carousel som jeg installeret i terminal.
med hjælp fra embla var det meget nemmere og ser meget pænner ud at se på.

i min `dal.js` puttet jeg min fetch for dataen i, hvor jeg også console.log data så jeg var sikker på fetchen virket inden brug.
`testmonialCards.jsx` bliver importet ind i `testimonials.jsx` som bliver importet ind i `page.js` min homepage.

i `page.js` er der en const før return som awaiter dataen fra mit fetch
 gave component en prop `testimonial` som bliver ændret til `T` i `testimonialCards.jsx`.

 skrev "export default function TestimonialCards({ testimonial = [] })" for at forhenter rendering fejlen "Each child in a list should have a unique "key" prop."

 (10:47 - 11:20)
 glemte at lave css for newsletter for gik igang med det.
 tingene sidder hvor de skal men når man laver skærmen mindre ødelægger alle andre componments layout.
 har tænkt mig at fixe det til næste commit.

Eftermiddag - (tidspunkt)

## Dag 4

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 5

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)
