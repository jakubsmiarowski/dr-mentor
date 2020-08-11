var typed = new Typed('.type', {
    strings: [
        'Diagnoza i szybka pomoc',
        'Doradztwo B2B i B2C',
        'Grupowo, indywidualnie, f2f i online',
        'Doctor - Mentor ludzi korporacji'
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});


$(document).ready(function() {
    $('.slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});



const testimonials = [{
    "id": 21,
    "name": "Ewa Muszyńska",
    "title": "Strategy Lead Diabetes Europe East & South w Novo Nordisk",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQEAAkK_uNzEBw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=zDL0m1dFRPLFKLSm_hSLF32r6e3-wuEIAtUa7HxCe5g",
    "text": "Praca z Arturem pomogła mi w bardzo poważnym kryzysie zawodowym. Artur jest kopalnią wiedzy i doświadczeń nt. relacji interpersonalnych w korporacji. Potrafi pokonać  opory, które rodzą sie w stresie. Brak wiary, złość i lęk mijaja, gdy pomaga odnaleźć wyjście z sytuacji bez wyjścia. DoctorMentor to mądra inwestycja, która szybko się zwraca 🙂",
    "link": "https://www.linkedin.com/in/ewa-muszynska-85162240/"
}, {
    "id": 1,
    "name": "Antoni Żarski",
    "title": "General Manager w Bristol Myers Squib",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQFJOa3lsAZzCw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=cMDWZJHEejo-Ya3PhANsWW7izHSWHwpACzWaoIaRdfc",
    "text": "Artur, zapytany powiedziałbym o Tobie: umie rozmawiać z ludźmi i dostrzegać ich potencjał oraz obszary do rozwoju, potrafi wzmacniać silne strony, pomaga uzmysławiać ludziom ich cele i do nich prowadzi, umie budować efektywne zespoły i tworzyć ich tożsamość. Wiele nauczyłem się od Ciebie i jeśli miałbym polecić mentora, to DoctoraMentora.",
    "link": "https://www.linkedin.com/in/antoni-zarski-2b86241/"
}, {
    "id": 2,
    "name": "Radosław Pilipczuk",
    "title": "Sales Director w Salveo CEE",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQE74-X8dtRuCg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=b2bTGSziHbUE4EVAAjgqSHZt-AVXzgv5cuc2DktQlW4",
    "text": "Odczuwasz większą satysfakcję, dochodząc sedna problemu samodzielnie? Oczywiście! Co jednak zrobić, gdy trafisz na obszar zupełnie dla Ciebie nowy? Osobiście rekomenduję wybór doświadczonego przewodnika. Mentora który już był tam, gdzie Ty się dopiero wybierasz. W moim przypadku takim projektem była współpraca międzynarodowa i różnice kulturowe wpływające na realizację wspólnych projektów. Arturze, raz jeszcze dziękuję. Było warto!",
    "link": "https://www.linkedin.com/in/rados%C5%82aw-pilipczuk-123041113/"
}, {
    "id": 3,
    "name": "Monika Gałecka",
    "title": "District Manager Hospital PRO.MED.PL",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQGL5ozw3yifIw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=eZwc4XINqtWCKbMa_SviBqcfajjzK7KKBpUaW6nC6hk",
    "text": "Doktorze😊Słuchałes i rozumiałes mnie w najtrudniejszych momentach - porażki zawodowej. Pomogłeś mi z tego wyjść, pokazałes mi czego można się z tego nauczyć i jak pójść dalej. Pomogłeś mi podjąć trudną decyzję wyboru. Rozwój to niekoniecznie awans, to sztuka znalezienia dla siebie miejsca. Uczysz jak być dobrym liderem będąc sobą. Jak budować swoją pozycję i wizerunek. Dajesz mi spokój i optymizm.",
    "link": "https://www.linkedin.com/in/monika-ga%C5%82ecka-b5264038/"
}, {
    "id": 4,
    "name": "Jacek Dmowski",
    "title": "Field Force Lead w BMS",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQH9ASitMm2P7g/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=F6Qa7EttZx2WNNvqnZZuh7JWd39IrKXGW02sr8NN6V0",
    "text": "Arturze, tworzysz atmosferę zaufania i otwartości. Słuchasz naprawdę aktywnie, trafne pytania, parafrazy itd. Po prostu chce się mówić. Dobrze się Ciebie słucha. Ton głosu, pewność i spokój. Mówisz prosto i zrozumiale, umiesz się dopasować do rozmówcy. I oczywiście to co mówisz - wiesz o czym mówisz. Wierzę w to. Masz też niesamowitą trafność diagnozy i oceny sytuacji. Trafiasz w punkt. Jakbyś czytał między wierszami to, co nie zostało powiedziane. To chyba odczułem najbardziej.🙏",
    "link": "https://www.linkedin.com/in/jacek-dmowski-00346899/"
}, {
    "id": 5,
    "name": "Marcin Andziak",
    "title": "FCCA, Head of Finance and Distribution w Servier",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQFTDhcY-xjECQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=QQRvhdofH4uoFf5xZn3n9j4V1tU0Lsfmp0uJNVlsBzg",
    "text": "Jedno pytanie może zmienić postrzeganie problemu lub pokazać, że leży on zupełnie gdzie indziej. Żeby takie pytanie usłyszeć lub zdać sobie sprawę z błędnego myślenia, warto mieć mentora. Rutyna zabija. Polecam Artura, bo nie jeden raz uświadomił mi, że wchodzę pod pociąg...",
    "link": "https://www.linkedin.com/in/marcin-andziak-fcca-1411151/"
}, {
    "id": 6,
    "name": "Borys Herman",
    "title": "Business Excellence & Strategic Planning Manager Sanofi Pasteur",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQHb_DNRziashw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=zcGBcRcwyL1wyg8zAnU9xIc3bVJsEFpb_tAZ-EtAyms",
    "text": "Do tej pory żadne szkolenie nie pomogło mnie, i moim ludziom popchnąć kluczowych spraw do przodu. Na szczęście korporacyjny budżet pozwala na spojrzenie na trudne sytuacje okiem eksperta z zewnatrz. Polecam Artura zawsze, gdy pojawia się problem z efektywnością zespołu. Doctor zawsze stawia trafną diagnozę. Ludzie go lubią i szanują, więc chętnie wdrażają zmiany.",
    "link": "https://www.linkedin.com/in/borys-herman-43948b4b/"
}, {
    "id": 7,
    "name": "Joanna Szwajkowska",
    "title": "Prezes Zarządu w WUZETEM S.A",
    "image": "https://i.wnp.pl/d/32/52/92/325292_r1_300.jpg",
    "text": "Artur to nie tylko doradca i strateg. Ma też zdolność do stymulowania do działania. To, co chyba cenię w nim najbardziej, to zaangażowanie i pomoc w realizacji ustalonych zadań, i wspieranie w osiągnięciu końcowych rezultatów. Nie przestaje się interesować projektem, mimo, że jego rola kończy się na wcześniejszym etapie. Bierze odpowiedzialność za efekt do końca.",
    "link": "yo"
}, {
    "id": 8,
    "name": "Dr. hab. Piotr Stankiewicz",
    "title": "Łukasiewicz Research Network",
    "image": "https://www.ibe.edu.pl/images/zdjecia_ludzie/IMG_1665.jpg",
    "text": "Jako słuchacz III edycji Leadership Academy of Poland ze zdumieniem stwierdzałem, że zawartość kursu już raz przerobiłem z moim DoctoreMentorem😊 Artur, dziękuję Ci za wszystkie cenne rady i wypracowane rezultaty.",
    "link": "https://www.linkedin.com/in/piotr-stankiewicz-383a4213/"
}, {
    "id": 9,
    "name": "Natalia Łojko",
    "title": "Partner KRK Legal",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQE15vvo8xklUQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=p3foh5Axhoi_87EGpiCqQ3vQU9ezym5UjfKrwGv_3cI",
    "text": "Jak zarządzać zespołem? Jak się sprawnie komunikować? Jak uskrzydlać? Artur to wie i potrafi przekazać. Ważne: wiedza sprawdzona przez Artura praktycznie przez wiele lat pracy z różnymi zespołami.",
    "link": "https://www.linkedin.com/in/natalialojko/"
}, {
    "id": 10,
    "name": "Andrzej Staszewski",
    "title": "National Sales Manager OTC w Takeda",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQGnErQn25tlsA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=juZqnxqQwPlYn4_ZhBzkxpKD1HzbVBtnI1KO4c00ty8",
    "text": "Jestem urodzonym sceptykiem i w podejmowaniu decyzji potrzebuję danych i dowodów. Za doradztwem Artura stoi nie tylko doświadczenie, ale dowód naukowy lub historia, ktora potwierdza trafność diagnozy i strategii działania. Korzystałem i korzystam głównie w zakresie zarządzania i relacji z ludźmi, w górę, i w dół drabiny decyzyjnej. I tu szczególnie polecam. Rezultaty szybkie i trwałe.",
    "link": "https://www.linkedin.com/in/andrzej-staszewski-84106855/"
}, {
    "id": 11,
    "name": "Petia Hadjieva",
    "title": "Founder and CEO Starpharma",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQH13D-xjyWRaQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=eN5u5VL7Xt4vakejVUu7mi4_bCODvu65LheA6Rt5oJo",
    "text": "Artur has been helping me as a business mentor for years. He has always tried to understand well my goals and challenges and has always managed to find the best way to make me believe in what I needed to change. He truly cared for my progress and was always available. He has passion and devotion for what he does, and I owe many good business and life decisions to him.",
    "link": "https://www.linkedin.com/in/petia-hadjieva-22a44311/"
}, {
    "id": 12,
    "name": "Mariusz Ćwik",
    "title": "District Manager w Herbapol Poznań",
    "image": "https://media-exp1.licdn.com/dms/image/C4D35AQE_az4wUHD_VQ/profile-framedphoto-shrink_200_200/0?e=1597219200&v=beta&t=nOV-2cnDrCoAngpZ1sfF-sUxvYElcUfg4Mh6GC9mD8I",
    "text": "Doktorze Mentorze chciałbym podziękować za wszystkie Twoje rady i wskazówki . Każda z nich była w punkt. Byłeś i jesteś profesjonalnym  wsparciem w każdej sytuacji. Gorąco polecam współpracę z Arturem, trafnie zdiagnozuje problem i pomoże wybrać optymalne rozwiązanie.",
    "link": "https://www.linkedin.com/in/mariusz-%C4%87wik-799058171/?originalSubdomain=pl"
}, {
    "id": 13,
    "name": "Joanna Kurek",
    "title": "HR Director CEE w FOX Networks Groups",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQExq5eh5IovOQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=urz7hIFptkv93nU5a0sXs_bnm7E5F4F9cOsMTxBluzE",
    "text": "Polecam Artura wszystkim, którzy oczekują szybkiego zrozumienia istoty problemu i nie lubią czekać na rezultaty. Duże doświadczenie połączone z wyjątkowym zaangażowaniem. DoctorMentor lubi swoich pacjentów i oni to czują. Stąd szybkie efekty pracy. Polecam💪",
    "link": "https://www.linkedin.com/in/joanna-kurek-207624a9/"
}, {
    "id": 14,
    "name": "Danuta Madejska–Wróbel",
    "title": "Marketing Manager w Bausch Health",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQEo5NUbWHMffA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=cxfAjihEfH2GrXxPy5DUMZ0nMeQqd54e-V1iyTdHBpE",
    "text": "Całe szczęście, że poznałam mentora Artura. Były chwile, gdy już myślałam o Bieszczadach…, bo brakowało siły na walkę z absurdem, na ciągłe odbijanie się od ściany, na korpo-ściemę. Artur pomógł mi spojrzeć na nie z innej, zupełnie nowej perspektywy. Wyzwolił tyle pozytywnej energii, zapału i wiary, że się uda. Minęło dużo czasu, efekt pozostał. Dziękuję Arturze!",
    "link": "https://www.linkedin.com/in/danuta-madejska-wr%C3%B3bel-a4625619/"
}, {
    "id": 19,
    "name": "Artur Śmiarowski",
    "title": "Doctor Mentor",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQEZy_y7dH66xQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=GN7EsklaJxdvEkW5BxfnYc2UXipMtbc4a7FctMTxif4",
    "text": "Lubię i polecam siebie za to, że nigdy się nie poddaję w walce o siebie i o Klienta. Moje motto: Kiedy uczeń jest gotowy, nauczyciel przychodzi. Kiedy uczeń jest naprawdę gotowy, nauczyciel odchodzi.",
    "link": "https://www.linkedin.com/in/artur-%C5%9Bmiarowski-39430818/"
}]

console.log(testimonials);

document.getElementById('slick').innerHTML = testimonials.map(user =>
    `<div class="testimonials">
        <a href="${user.link}" target="_blank"><img src="${user.image}" alt="client"></a>
        <h3>${user.name}</h3>
        <h4>${user.title}</h4>
        <hr>
        <p>${user.text}</p>
    </div>`
).join('')


const expandButton = document.getElementById("expand");

expandButton.addEventListener('click', function() {
    const expandText = document.getElementById("expandable")
    const tl = new TimelineMax();
    if (expandText.style.display === "block") {
        expandText.style.display = "none";
        expandButton.innerHTML = "Czytaj więcej"
    } else {
        expandText.style.display = "block";
        tl.fromTo(expandText, 0.5, {
            y: "50",
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        });
        expandButton.innerHTML = "Czytaj mniej"
    }
});