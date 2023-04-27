import { Link, Head } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import Wines from '@/Components/Wines/Wines'
import Footer from '@/Components/Footer'
import NavButtons from '@/Components/NavButtons';
import React, { useState, useEffect } from 'react';

export default function Welcome(props) {

    const title = "Regulamin serwisu";

    return (
        <>
         
         <Head>
            <title>{title}</title>
            <meta head-key="description" name="description"
            content="Portal internetowy gromadzący najlepsze marki wina oraz opinie na ich temat. Zbiór winogronowych trunków, który pozwala skompletować listę ulubionych produktów." />
            </Head>
              
  {/* menu boczne */}
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto d-flex flex-column min-vh-100">
  <Navigation props={props.auth.user} notifications={props.notifications} new_notifications={props.new_notifications} title={title}/>      
  <div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md'>
  <div className="col-12">
          <div className="card shadow-xs border mb-1 pb-3 nav-grapes pt-5 pb-6 z-1">
            <div className='nav-grapes-img'></div>        
          </div>
        </div>
        <div className='d-flex row'>
  
      <div className='w-20'> 
  
          <NavButtons />
  
      </div>
  
      </div>
      <div className='d-flex'>
        <div className="w-100"> 
        <div className="row m-n3 m-sm-0 mt-sm-n7 mt-n8 align-items-center justify-content-center">
            <div className="col-11 d-sm-inline">
                <div className="card blur border border-white mb-4 shadow-xs d-flex flex-row row">         
                <div className="col d-flex flex-column">
          <div className="card card-plain mt-2">
            <div className="card-header pb-0 text-left bg-transparent">
              <h3 className="font-weight-black text-dark display-6 ms-4 mb-3">Regulamin platformy internetowej</h3>
              <div className="text-sm mb-0 ms-4">
              <p className='text-sm h-100'>
                Użytkownicy, jako Administrator Platformy Internetowej oraz Usługodawca oddaję w Państwa
ręce Regulamin Korzystania z Platformy Internetowej znajdującej się pod adresem domenowym https://
winozbiory.pl, który w dalszej części dokumentu będziemy nazywać „Regulaminem”.
</p>
<p className='text-sm'>Regulamin dostarczyniezbędnych informacji dotyczących między innymi zasad funkcjonowania Platformy Internetowej, zasad
świadczenia Usług przez Usługodawcę oraz zasad korzystania przez Użytkowników z Platformy
Internetowej. Do powyższego regulaminu dołączony został załącznik w postaci Polityki Prywatności,
która zawiera niezbędne informację dotyczące zasad przetwarzania danych osobowych, których
podstawą jest Ogólne Rozporządzenie Parlamentu Europejskiego i Rady o ochronie danych osobowych z
dnia 27 kwietnia 2016 r. (RODO).</p>
<p className='text-md font-weight-black'>
§1 POSTANOWIENIA OGÓLNE
</p>


<p className='text-sm'>1) Platforma Internetowa będąca portalem społecznościowym udostępnia na rzecz Użytkowników
infrastrukturę teleinformatyczną za pomocą której następuje kontakt i wymiana Treści pomiędzy
Użytkownikami na zasadach określonych w Regulaminie.</p>
<p className='text-sm'>2) Regulamin został przygotowany w oparciu o przepisy ustawy z dnia 18 lipca 2002 r. o świadczeniu usług
drogą elektroniczną, Kodeksu Cywilnego oraz Ogólnego Rozporządzenia Parlamentu Europejskiego i
Rady o ochronie danych osobowych z dnia 27 kwietnia 2016 r.</p>
<p className='text-sm'>3) W Regulaminie użyto poniższych pojęć, które należy rozumieć w następujący sposób:</p>

<p className='text-sm ps-3'>a. Administrator danych osobowych - organ, jednostka organizacyjna, podmiot lub
osoba, decydujący o celach i środkach przetwarzania danych osobowych zgodnie z
definicją zawartą w Ogólnym Rozporządzeniu Parlamentu Europejskiego i Rady o
ochronie danych osobowych z dnia 27 kwietnia 2016 r.</p>
<p className='text-sm ps-3'>b. Adres mailowy – adres poczty elektronicznej właściwy do kontaktu z Usługodawcą tj.
kontakt@winozbiory.pl</p>
<p className='text-sm ps-3'>c. Użytkownik - Użytkownik będący osobą fizyczną, osobą prawną lub jednostką
organizacyjną niebędąca osobą prawną, której przepisy szczególne przyznają zdolność
prawną dokonujący rejestracji na Platformie Internetowej oraz publikującą na Platformie
Internetowej określone Treści.</p>
<p className='text-sm ps-3'>d. Konto Użytkownika – przestrzeń Platformy Internetowej, dostępna po rejestracji,
specjalnie przygotowana dla określonego Użytkownika w ramach infrastruktury
teleinformatycznej Usługodawcy.</p>
<p className='text-sm ps-3'>e. Platforma Internetowa / winozbiory.pl - Serwis internetowy / portal społecznościowy
prowadzony przez Usługodawcę, udostępniający na rzecz Użytkowników infrastrukturę
teleinformatyczną za pomocą której następuje kontakt i wymiana Treści pomiędzy
Użytkownikami na zasadach określonych w Regulaminie.</p>
<p className='text-sm ps-3'>f. Powiadomienie – wiadomość elektroniczna przesłana na adres mailowy Użytkownika,
zawierająca określoną informację.</p>
<p className='text-sm ps-3'>g. Usługa – usługa świadczona drogą elektroniczną przez Usługodawcę polegająca na
prowadzeniu Konta Użytkownika, udostępnianiu na rzecz Użytkowników infrastruktury
teleinformatycznej za pomocą której następuje kontakt i wymiana Treści pomiędzy
Użytkownikami na zasadach określonych w Regulaminie.</p>

<p className='text-sm ps-3'>h. Treść – jakikolwiek materiał/ treść zamieszczona lub przesłana przez Użytkownika za
pośrednictwem Platformy Internetowej w dowolnej formie (przykładowo taka jak:
informacja, tekst, grafika, nagranie wideo, plik etc.)</p>
<p className='text-sm ps-3'>i. Usługodawca – Jakub Ciszek, kontakt@winozbiory.pl</p>
<p className='text-sm'>4) Administratorem danych osobowych przekazanych przez Użytkownika w wyniku korzystania z Platformy
Internetowej jest Usługodawca.</p>
<p className='text-sm'>5) W celu uzyskania informacji na temat metod ochrony danych osobowych stosowanych przez
Usługodawcę zapraszamy do zapoznania się z Polityką Prywatności stanowiącą Załącznik nr. 1 do
Regulaminu.</p>
<p className='text-sm'>6) Warto wiedzieć, że momentem zawarcia umowy o świadczenie Usług drogą elektroniczną w postaci
prowadzenia Konta Użytkownika jest moment kliknięcia w link aktywacyjny otrzymany w
powiadomieniu po dokonaniu Rejestracji.</p>
<p className='text-md font-weight-black'>
§2 REJESTRACJA NA PLATFORMIE INTERNETOWEJ
</p>

<p className='text-sm'>1) Korzystanie przez Użytkowników z Platformy Internetowej jest bezpłatne lecz wymaga założenia Konta
Użytkownika i logowania się w ramach Platformy Internetowej.</p>
<p className='text-sm'>2) Aby rozpocząć rejestrację na Platformie Internetowej należy kliknąć w opcję ZAŁÓŻ KONTO dostępną w
prawym górnym rogu strony głównej. Klikniecie w przycisk uruchomi interaktywny formularz rejestracji.</p>
<p className='text-sm'>3) W pierwszej kolejności Użytkownik jest proszony o uzupełnienie interaktywnego formularza wpisując
wskazane dane osobowe. Niezbędne jest również zaznaczenie stosownych oświadczeń zawartych w
formularzu rejestracji. Po ich zaznaczeniu należy kliknąć przycisk ZAKOŃCZ REJESTRACJĘ.</p>
<p className='text-sm'>4) Potwierdzeniem rejestracji będzie otrzymanie Powiadomienia na adres e-mail podany w toku rejestracji.
Kliknięcie w link aktywacyjny otrzymany w Powiadomieniu jest równoznaczne z zawarciem umowy o
świadczenie Usług prowadzenia konta Użytkownika drogą elektroniczną.</p>
<p className='text-md font-weight-black'>
§3 ZASADY KORZYSTANIA Z PLATFORMY INTERNETOWEJ
</p>
<p className='text-sm'>1) W ramach funkcjonalności Platformy Internetowej każdy Użytkownik po dokonaniu rejestracji ma
możliwość kontaktu z innymi Użytkownikami, publikowania Treści oraz wymiany tych Treści pomiędzy
Użytkownikami na zasadach określonych w Regulaminie.</p>
<p className='text-sm'>2) Użytkownik ponosi pełną odpowiedzialność za Treści wprowadzone lub opublikowane w ramach
Platformy Internetowej.</p>
<p className='text-sm'>3) Zabrania się Użytkownikowi działań za pośrednictwem Platformy Internetowej w formie przekazywania
Treści, które są obraźliwe lub agresywne w stosunku do innych Użytkowników, nawołują do agresji,
obrażają osoby trzecie, przejawiają niski poziom kultury osobistej, treści erotycznych oraz
pornograficznych, treści które zawierają informacje obarczające niesprawdzonymi zarzutami inne osoby,
obrażają inne narodowości, religie, rasy ludzkie, przyczyniają się do łamania praw autorskich, zawierają
jakiekolwiek linki do stron internetowych, treści reklamujących produkty i usługi, naruszają przepisy
prawa, normy społeczne bądź obyczajowe lub Regulamin.</p>
<p className='text-sm'>4) Wprowadzone lub publikowane przez Użytkownika Treści nie są w jakikolwiek sposób
weryfikowane przez Usługodawcę.</p>
<p className='text-md font-weight-black'>
§5 OCHRONA PRAW AUTORSKICH
</p>
<p className='text-sm'>1) Układ treści zawarty na stronach Platformy Internetowej jak i jego poszczególne części, takie jak
materiały pisemne, zdjęcia, grafika, aplikacja i inne, korzystają na ogólnych zasadach z ochrony udzielanej
przez przepisy prawa autorskiego.</p>
<p className='text-sm'>2) Wszelkie znaki towarowe, handlowe oraz firmowe, które występują na stronie Platformy Internetowej
podlegają ochronie prawnej na zasadach przewidzianych w odpowiednich przepisach.</p>
<p className='text-sm'>3) Poprzez korzystanie z treści udostępnionych na stronie Platformy Internetowej Użytkownicy nie
nabywają żadnych praw jak również nie uzyskują licencji do tych treści.</p>
<p className='text-sm'>4) Zabronione jest zwielokrotnianie, modyfikowanie, wtórne wykorzystywanie w całości i w części,
blokowanie, publiczne odtworzenie i publiczne udostępnianie treści opublikowanych na stronie Platformy
Internetowej za wyjątkiem przypadków wskazanych w niniejszym Regulaminie oraz obowiązujących w
tym zakresie przepisach prawa.</p>
<p className='text-md font-weight-black'>
§6 ZASADY ODPOWIEDZIALNOŚCI
</p>
<p className='text-sm'>1) Użytkownik ponosi pełną odpowiedzialność za wprowadzone oraz udostępnione w ramach Platformy
Internetowej Treści.</p>
<p className='text-sm'>2) Wprowadzając jakikolwiek Treści Użytkownik oświadcza, że:</p>
<p className='text-sm ps-3'>a. przysługują mu do nich odpowiednie prawa autorskie bądź licencje umożliwiające ich
wykorzystanie w celu korzystania z Usług;</p>
<p className='text-sm ps-3'>b. oświadcza, iż treść i forma wprowadzanych Treści nie narusza praw ani dóbr osób trzecich, w tym
w szczególności praw autorskich oraz nie narusza obowiązujących przepisów;</p>

<p className='text-sm'>3) W przypadku naruszenia jakichkolwiek praw przez wprowadzenie do infrastruktury internetowej
Platformy Internetowej Treści, Użytkownik przejmuje na siebie w całości koszty ewentualnego
postępowania sądowego, koszty zastępstwa procesowego oraz zasądzonych lub ustalonych w drodze
ugody odszkodowań. Użytkownik zobowiązuje się do pokrycia wszelkich szkód poniesionych przez
Usługodawcę na skutek wprowadzenia Treści w sposób niezgodny z Regulaminem, obowiązującymi
przepisami lub naruszającego prawa osób trzecich.</p>
<p className='text-sm'>4) W przypadku wystąpienia przez osoby trzecie z jakimikolwiek roszczeniami w stosunku do Usługodawcy
z tytułu naruszenia jakichkolwiek ich praw przez Treści wprowadzone przez Użytkownika, Użytkownik
ten zobowiązuje się do wstąpienia do sprawy w miejsce Usługodawcy lub przystąpienia do sprawy w
charakterze interwenienta ubocznego.</p>
<p className='text-sm'>5) W celu wypełnienia obowiązków określonych w art. 14 Ustawa z dnia 18 lipca 2002 r. o świadczeniu
usług drogą elektroniczną Usługodawca w ramach jej funkcjonalności opracował procedurę zgłaszania
naruszeń prawa spowodowanych wprowadzaniem przez Użytkowników do jego infrastruktury
informatycznej Treści o bezprawnym charakterze lub związanej z nimi działalności.</p>
<p className='text-sm'>6) Każdy Użytkownik, którego prawa zostały naruszone ma możliwość zgłoszenia tego faktu poprzez
skontaktowanie się z Administratorem za pośrednictwem formularza kontaktowego.</p>
<p className='text-md font-weight-black'>
§7 POSTANOWIENIA KOŃCOWE
</p>
<p className='text-sm'>1) Platforma Internetowa działa w oparciu o obowiązujące przepisy prawa polskiego. Do wszystkich
kwestii, które nie zostały poruszone w Regulaminie stosujemy odpowiednie przepisy powszechnie
obowiązującego prawa polskiego.</p>
<p className='text-sm'>2) Pod adresem http://ec.europa.eu/consumers/odr dostępna jest platforma internetowego systemu
rozstrzygania sporów pomiędzy konsumentami i przedsiębiorcami na szczeblu unijnym (platforma
ODR). Platforma ODR stanowi interaktywną i wielojęzyczną stronę internetową z punktem
kompleksowej obsługi dla konsumentów i przedsiębiorców dążących do pozasądowego rozstrzygnięcia
sporu dotyczącego zobowiązań umownych wynikających z internetowej umowy sprzedaży lub umowy o
świadczenie usług.</p>
<p className='text-sm mb-5'>3) Niniejszy Regulamin obowiązuje od dnia 28 lutego 2019 roku do odwołania.</p>
<p className='text-lg font-weight-black'>
ZAŁĄCZNIK DO REGULAMINU: POLITYKA PRYWATNOŚCI PLATFORMY INTERNETOWEJ WINOZBIORY.PL
</p>
<p className='text-md font-weight-black'>
§1 ZASADY PRZETWARZANIA DANYCH OSOBOWYCH
</p>
<p className='text-sm'>1. Administratorem Państwa danych osobowych przekazywanych na niniejszej stronie internetowej
jest Jakub Ciszek, kontakt@winozbiory.pl</p>
<p className='text-sm'>2. Zgodnie z art. 13 ust. 1 i ust. 2 ogólnego rozporządzenia o ochronie danych osobowych z dnia 27
kwietnia 2016 r. poniżej znajdą Państwo informację niezbędne ze względu na przetwarzanie
danych osobowych przez Administratora.</p>
<p className='text-sm'>3. Dane osobowe przetwarzane na poniższej stronie mogą być wykorzystywane w celu:</p>
<p className='text-sm ps-3'>a. zawarcia oraz wykonania zawartej przez Ciebie z Administratorem Danych Osobowych
umowy świadczenia Usług (podstawa z art. 6 ust. 1 lit. b RODO),</p>
<p className='text-sm ps-3'>b. ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami, co jest naszym
prawnie uzasadnionym interesem (podstawa z art. 6 ust. 1 lit. f RODO),</p>
<p className='text-sm ps-3'>c. oferowania Ci przez nas produktów i usług bezpośrednio, co jest naszym prawnie
uzasadnionym interesem (podstawa z art. 6 ust. 1 lit. f RODO),</p>
<p className='text-sm ps-3'>d. oferowania Ci bezpośrednio produktów i firm z nami współpracujących, co jest naszym i
naszych partnerów prawnie uzasadnionym interesem (podstawa z art. 6 ust. 1 lit. f RODO)</p>
<p className='text-sm ps-3'>e. przesyłania informacji handlowych o Produktach i Usługach Administratora Danych
Osobowych na podstawie Twojej zgody (podstawa art. 6 ust. 1 lit. a RODO);</p>
<p className='text-sm ps-3'>f. realizacji ciążącego na nas obowiązku prawnego, np. związany z rachunkowością (art. 6
ust. 1 lit. c RODO)</p>

<p className='text-sm'>4. Będziemy przetwarzać kategorie Twoich danych osobowych takie jak:</p>
<p className='text-sm ps-3'>a. podstawowe dane identyfikacyjne;</p>
<p className='text-sm ps-3'>b. płeć;</p>
<p className='text-sm ps-3'>c. data urodzenia;</p>
<p className='text-sm ps-3'>d. dane dotyczące możliwości kontaktu z Tobą;</p>
<p className='text-sm ps-3'>e. dane tyczące Twojego miejsca zamieszkania;</p>

<p className='text-sm'>5. Twoje dane osobowe możemy udostępniać następującym kategoriom podmiotów:</p>
<p className='text-sm ps-3'>a. podwykonawcom, czyli podmiotom, z których korzystamy przy ich przetwarzaniu;</p>
<p className='text-sm ps-3'>b. partnerom handlowym, których oferta uzupełnia naszą ofertę;</p>
<p className='text-sm'>6. Nie przekazujemy Twoich danych poza teren EU/EOG.</p>

<p className='text-sm'>7. Twoje Dane osobowe będą przetwarzane i przechowywane od momentu ich uzyskania przez
Administratora Danych Osobowych do czasu zakończenia świadczenia na Twoją rzecz Usług, a
także po upływie tego terminu w celach:</p>
<p className='text-sm ps-3'>a. dochodzenia roszczeń w związku z wykonywaniem umowy;</p>
<p className='text-sm ps-3'>b. wykonania obowiązków wynikających z przepisów prawa, w tym w szczególności
podatkowych i rachunkowych;</p>
<p className='text-sm ps-3'>c. marketingowych do czasu, aż zgłosisz sprzeciw względem ich przetwarzania w tym celu,
cofniesz zgodę, lub sami ustalimy, że się zdezaktualizowały.</p>

<p className='text-sm'>8. Podanie danych jest dobrowolne ale ich nie podanie będzie równoznaczne z brakiem możliwości
świadczenia Usług na Twoją rzecz, brakiem możliwości udzielenia odpowiedzi na pytanie,
brakiem możliwości kontaktu oraz brakiem możliwości otrzymywania informacji o charakterze
marketingowym.</p>
<p className='text-sm'>9. Administrator danych osobowych zapewnia, że dane są gromadzone, przetwarzane i
wykorzystywane zgodnie z przepisami ustawy o ochronie danych osobowych właściwych dla
kraju, w którym dane są gromadzone.</p>
<p className='text-md font-weight-black'>
§2 PRAWA ZWIĄZANE Z PRZETWARZANIEM DANYCH OSOBOWYCH PRZEZ ADMINISTRATORA
</p>

<p className='text-sm'><b>WAŻNE!</b> Warto pamiętać, że masz prawo wniesienia skargi do UODO gdy uznasz, iż przetwarzanie danych
osobowych narusza przepisy ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia
2016 r.</p>
<p className='text-sm'>W związku z przetwarzaniem danych osobowych przez Administratora przysługuje Ci prawo:</p>
<p className='text-sm'>1. dostępu do swoich danych osobowych i otrzymania ich kopii;</p>
<p className='text-sm'>2. do sprostowania (poprawiania swoich danych);</p>
<p className='text-sm'>3. do usunięcia danych</p>
<p className='text-sm'><b>WAŻNE!</b> Jeżeli Twoim zdaniem nie ma podstaw do tego, abyśmy przetwarzali Twoje dane, możesz żądać
abyśmy je usunęli.</p>
<p className='text-sm'>4. do ograniczenia przetwarzania danych osobowych;</p>
<p className='text-sm'>WAŻNE! Możesz zażądać, abyśmy ograniczyli przetwarzanie danych Twoich danych osobowych
wyłącznie do ich przechowywania lub wykonywania uzgodnionych z Tobą działań, jeżeli Twoim zdaniem
mamy nieprawidłowe dane na Twój temat lub przetwarzamy je bezpodstawnie; lub nie chcesz, żebyśmy je
usunęli, bo są Ci potrzebne do ustalenia, dochodzenia lub obrony roszczeń; lub na czas wniesionego przez
ciebie sprzeciwu względem przetwarzania danych.</p>
<p className='text-sm'>5. do wniesienia sprzeciwu wobec przetwarzania danych osobowych;</p>
<p className='text-sm'>6. do przenoszenia danych;</p>
<p className='text-sm'><b>WAŻNE!</b> Masz prawo otrzymać od nas w ustrukturyzowanym, powszechnie używanym formacie
nadającym się do odczytu maszynowego. Możesz też zlecić nam przesłanie tych danych bezpośrednio
innemu podmiotowi.</p>
<p className='text-sm'>7. prawo do wniesienia skargi do organu nadzorczego;</p>
<p className='text-sm'>8. prawo do cofnięcia zgody na przetwarzanie danych osobowych</p>

<p className='text-sm'><b>WAŻNE!</b> W celu realizacji jakiegokolwiek z wyżej wymienionych uprawnień jesteś proszony o
przesłanie stosownej wiadomości e-mail na adres Administratora Danych Osobowych. Twoje
zgłoszenie zostanie rozpatrzone niezwłocznie.</p>
<p className='text-md font-weight-black'>
§3 ZAKRES PRZETWARZANIA DANYCH
</p>
<p className='text-sm'>
Podczas korzystania ze Platformy Internetowej niektóre dane są automatycznie zachowywane na
serwerach Usługodawcy dla celów administracji systemu albo dla celów statystycznych bądź wykonania
kopii zapasowych. Powyższe dane obejmują:</p>

<p className='text-sm'>1) nazwę Państwa dostawcy dostępu do Internetu;</p>
<p className='text-sm'>2) adres IP;</p>
<p className='text-sm'>3) wersję oprogramowania przeglądarki;</p>
<p className='text-sm'>4) system operacyjny komputera;</p>
<p className='text-sm'>5) logi systemowe;</p>

<p className='text-sm'>Administrator Danych Osobowych przetwarza dane osobowe Użytkownika takie jak:</p>

<p className='text-sm'>1) Imię;</p>
<p className='text-sm'>2) miejsce zamieszkania;</p>
<p className='text-sm'>3) płeć;</p>
<p className='text-sm'>4) data urodzenia;</p>
<p className='text-sm'>5) adres poczty elektronicznej;</p>
<p className='text-md font-weight-black'>
§4 PLIKI COOKIES
</p>
<p className='text-sm'>1) Platforma Internetowa korzysta z plików cookies.</p>
<p className='text-sm'>2) Pliki cookies (tzw. ciasteczka) stanowią dane informatyczne, w szczególności pliki tekstowe,
które przechowywane są w urządzeniu końcowym Użytkownika Platformy Internetowej i
przeznaczone są do korzystania ze stron internetowych Platformy Internetowej. Cookies
zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na
urządzeniu końcowym oraz unikalny numer.</p>
<p className='text-sm'>3) Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Platformy Internetowej
pliki cookies oraz uzyskującym do nich dostęp jest Usługodawca.</p>
<p className='text-sm'>4) Pliki cookies wykorzystywane są w następujących celach:</p>
<p className='text-sm ps-3'>a. Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Platformy
Internetowej korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i
zawartości,</p>
<p className='text-sm ps-3'>b. utrzymanie sesji Użytkownika Platformy Internetowej (po zalogowaniu), dzięki której
Użytkownik nie musi na każdej podstronie Platformy Internetowej ponownie wpisywać
loginu i hasła,</p>
<p className='text-sm ps-3'>c. określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w
sieciach reklamowych, w szczególności sieci Google.</p>

<p className='text-sm'>5) W ramach Platformy Internetowej stosowane są dwa zasadnicze rodzaje plików cookies:
„sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami
tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu
wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki
internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika
przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez
Użytkownika.</p>
<p className='text-sm'>6) Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj
domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
Użytkownicy Platformy Internetowej mogą dokonać zmiany ustawień w tym zakresie.
Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne
blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera pomoc lub
dokumentacja przeglądarki internetowej.</p>
<p className='text-sm'>7) Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na
stronach internetowych Platformy Internetowej</p>
<p className='text-sm'>8) Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Platformy Internetowej i
wykorzystywane mogą być również przez współpracujących z Usługodawcą reklamodawców
oraz partnerów.</p>
<p className='text-sm'>9) Zalecamy przeczytanie polityki ochrony prywatności tych firm, aby poznać zasady korzystania z
plików cookie wykorzystywane w statystykach: Polityka ochrony prywatności Google Analytics.</p>
<p className='text-sm'>10) Pliki cookie mogą być wykorzystane przez sieci reklamowe, w szczególności sieć Google, do
wyświetlenia reklam dopasowanych do sposobu, w jaki użytkownik korzysta z Platformy
Internetowej. W tym celu mogą zachować informację o ścieżce nawigacji użytkownika lub czasie
pozostawania na danej stronie.</p>
<p className='text-sm'>11) W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google
użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy
narzędzia: <a target="_blank" href="https://www.google.com/ads/preferences/">https://www.google.com/ads/preferences/</a></p>
<p className='text-sm'>12) Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</p>
<p className='text-sm ps-3'>a. Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia
przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla
procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może
utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www</p>
<p className='text-sm ps-3'>b. W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę
internetową/ system i postępuj zgodnie z instrukcjami:</p>
<p className='text-sm ps-3'>- Internet Explorer - <a target="_blank" href="https://support.microsoft.com/pl-pl/office/w%C5%82%C4%85czanie-plik%C3%B3w-cookie-6b018d22-1d24-43d9-8543-3d35ddb2cb52">https://support.microsoft.com/pl-pl/office/w%C5%82%C4%85czanie-plik%C3%B3w-cookie-6b018d22-1d24-43d9-8543-3d35ddb2cb52</a></p>
<p className='text-sm ps-3'>- Chrome - <a target="_blank" href="https://support.google.com/chrome/answer/95647?hl=pl">https://support.google.com/chrome/answer/95647?hl=pl</a></p>
<p className='text-sm ps-3'>-  Safari - <a target="_blank" href="https://support.apple.com/kb/PH5042?locale=pl_PL">https://support.apple.com/kb/PH5042?locale=pl_PL</a></p>
<p className='text-sm ps-3'>- Firefox - <a target="_blank" href="https://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%
82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">https://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%
82%C4%85czanie%20obs%C5%82ugi%20ciasteczek</a></p>
<p className='text-sm ps-3'>- Opera - <a target="_blank" href="http://help.opera.com/Windows/12.10/pl/cookies.html">http://help.opera.com/Windows/12.10/pl/cookies.html</a></p>

<p className='text-sm ps-3'>c. Każdy Użytkownik ma prawo kierować opinię, uwagi i pytania dotyczące zachowania poufności
informacji oraz polityki prywatności do Administratora Danych Osobowych. W tym celu należy je
kierować pod adres mailowy: kontakt@winozbiory.pl</p>

              </div>
            </div>
            

            </div>
          
          </div>
  
           </div></div>
           
          </div>
          
        </div>
  
      </div>
      
      </div>
      

      
    <div className="container-fluid py-4 px-3">
    </div>
  <Footer />  
  </main>  
      {/* </GuestLayout> */}
      </>
  );
  }
  