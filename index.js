var typed = new Typed('.type', {
    strings: [
        'Diagnoza i szybka pomoc',
        'Likwidacja bólu i leczenie objawów',
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
    "id": 1,
    "name": "Ewa Muszyńska",
    "title": "Strategy Lead Diabetes Europe East & South w Novo Nordisk",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQEAAkK_uNzEBw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=lyAcA8gzCVYwN70XMscQQetpgNPPM4hzZes9Mqi7IJg",
    "text": "Artur is standup guy",
    "link": "https://www.linkedin.com/in/ewa-muszynska-85162240/"
}, {
    "id": 2,
    "name": "Antoni Żarski",
    "title": "General Manager w Bristol Myers Squib",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQFJOa3lsAZzCw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=8Fam6gt00QY4pAPn5LPZI0B5UBT0HnK1AxJTW1q-AZQ",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/antoni-zarski-2b86241/"
}, {
    "id": 3,
    "name": "Radosław Pilipczuk",
    "title": "Sales Director w Salveo CEE",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQE74-X8dtRuCg/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=sh08fZhzZDPpXLledZD8hxngkIGuM3n8tPT-TWVzHoM",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/rados%C5%82aw-pilipczuk-123041113/"
}, {
    "id": 4,
    "name": "Monika Gałecka",
    "title": "District Manager Hospital PRO.MED.PL",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQGL5ozw3yifIw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=6NkwkyQeSqHb2jNpa_CW66QYyPPFZGc-MJ96KIUsyvY",
    "text": "Doktorze😊Słuchałes i rozumiałes mnie w najtrudniejszych momentach - porażki zawodowej. Pomogłeś mi z tego wyjść, pokazałes mi czego można się z tego nauczyć i jak pójść dalej. Pomogłeś mi podjąć trudną decyzję wyboru. Rozwój to niekoniecznie awans, to sztuka znalezienia dla siebie miejsca. Uczysz jak być dobrym liderem będąc sobą. Jak budować swoją pozycję i wizerunek. Dajesz mi spokój i optymizm.",
    "link": "https://www.linkedin.com/in/monika-ga%C5%82ecka-b5264038/"
}, {
    "id": 5,
    "name": "Jacek Dmowski",
    "title": "Field Force Lead w BMS",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQH9ASitMm2P7g/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=XM4OxSm79dv72zV5gtjaa-QgAz_-iLN6VkoZSBnCPmA",
    "text": "Witaj Doktorze. Oto moja rekomemdacja. Tworzysz atmosferę zaufania i otwartości. Słuchasz naprawdę aktywnie, trafne pytania, parafrazy itd. Po prostu chce się mówić. Dobrze się Ciebie słucha. Ton głosu, pewność i spokój. Mówisz prosto i zrozumiale, umiesz się dopasować do rozmówcy. I oczywiście to co mówisz - wiesz o czym mówisz. Wierzę w to. Masz też niesamowitą trafność diagnozy i oceny sytuacji. Trafiasz w punkt. Jakbyś czytał między wierszami to, co nie zostało powiedziane. To chyba odczułem najbardziej.🙏",
    "link": "https://www.linkedin.com/in/jacek-dmowski-00346899/"
}, {
    "id": 6,
    "name": "Marcin Andziak",
    "title": "FCCA, Head of Finance and Distribution w Servier",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQFTDhcY-xjECQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=lF4OK9xw8iXCblafE9Cu6yVngch_iGre9KgYc1yMnvo",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/marcin-andziak-fcca-1411151/"
}, {
    "id": 7,
    "name": "Borys Herman",
    "title": "Business Excellence & Strategic Planning Manager Sanofi Pasteur",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQHb_DNRziashw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=QnSgiMGDdD0s0AAq0aOs1yU2CqhiR7KCgXl8JA3KQ6I",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/borys-herman-43948b4b/"
}, {
    "id": 8,
    "name": "Joanna Szwajkowska",
    "title": "Prezes Zarządu w WUZETEM S.A",
    "image": "https://i.wnp.pl/d/32/52/92/325292_r1_300.jpg",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "yo"
}, {
    "id": 9,
    "name": "Piotr Stankiewicz",
    "title": "Łukasiewicz Research Network",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQG_Sj_cGQ8Knw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=vnNZO9H_ICgBpFhOWFuBxa09Ejow3t1pTnsGgh_c9U0",
    "text": "Jako słuchacz edycji III edycji Leadership Academy of Poland ze zdumieniem stwierdzałem, że zawartość kursu już raz przerobiłem z moim DoctoreMentorem😊 Artur, dziękuję Ci za wszystkie cenne rady i wypracowane rezultaty.",
    "link": "https://www.linkedin.com/in/piotr-stankiewicz-383a4213/"
}, {
    "id": 10,
    "name": "Natalia Łojko",
    "title": "Partner KRK Legal",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQE15vvo8xklUQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=qevNc-gVx9V45SEi9oeRSfYXXmtDRes6WtZLF1EOrQE",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/natalialojko/"
}, {
    "id": 11,
    "name": "Andrzej Staszewski",
    "title": "National Sales Manager OTC w Takeda",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQGnErQn25tlsA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=0QBnbQ3s7Xk6z23TT4_EUaKErFFjGa5PotODLWvko_8",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/andrzej-staszewski-84106855/"
}, {
    "id": 12,
    "name": "Petia Hadjieva",
    "title": "Founder and CEO Starpharma",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQH13D-xjyWRaQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=LVubNvDxPoNlOeniG5Pf7-sPQ819tX_l7wyelopdfls",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "yo"
}, {
    "id": 13,
    "name": "Mariusz Ćwik",
    "title": "District Manager w Herbapol Poznań",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQGIcU55pV5wnw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=prKhpRhntBK8YYzZanjSzrb1fYiS4XYwiPN4GyXdx4g",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/petia-hadjieva-22a44311/"
}, {
    "id": 14,
    "name": "Joanna Kurek",
    "title": "HR Director CEE w FOX Networks Groups",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQExq5eh5IovOQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=JpNqbrKJ3lPjrr4KSOngiPl4XGsmyrlQKuk31ngs-2g",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/joanna-kurek-207624a9/"
}, {
    "id": 15,
    "name": "Danuta Madejska–Wróbel",
    "title": "Marketing Manager w Bausch Health",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQEo5NUbWHMffA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=E87zTIoDSYIipPNHa2jJRwDTpRHpz1XLiyF_e1_HzfY",
    "text": "Całe szczęście, że poznałam mentora Artura. Były chwile, gdy już myślałam o Bieszczadach…, bo brakowało siły na walkę z absurdem, na ciągłe odbijanie się od ściany, na korpo-ściemę. Artur pomógł mi spojrzeć na nie z innej, zupełnie nowej perspektywy. Wyzwolił tyle pozytywnej energii, zapału i wiary, że się uda. Minęło dużo trochę czasu, efekt pozostał. Dziękuję Arturze!",
    "link": "https://www.linkedin.com/in/danuta-madejska-wr%C3%B3bel-a4625619/"
}, {
    "id": 16,
    "name": "Ilona Berowska",
    "title": "Finance Director w Mylan Poland",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQGGn7VDDLSggA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=xDmTXLHe_eCWxyeX1Xsh64vWmytMjB5VhO6EyY0zcvE",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/ilonaberowska/"
}, {
    "id": 17,
    "name": "Renata Zabłotna",
    "title": "Market Access Director w Celgene Poland",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQFr48ICV_OZgw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=RfVmjSG1Yp3lADnHSnaY__TWrg_BVfVXcaJgAbFpww8",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/renatazablotna/"
}, {
    "id": 18,
    "name": "Krzysztof Warot",
    "title": "Head of Speciality Care w Boehringer Ingelheim",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQFMYwcLd-tEHw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=EvV1wmyDGA1X1oL9qZvQ2XfTS-uTB6_0KM9PeYDGZ2s",
    "text": "Dummy text for checking the length and complexity of the text that can put in this place for a long time",
    "link": "https://www.linkedin.com/in/krzysztof-warot-7304ab68/"
}, {
    "id": 19,
    "name": "Artur Śmiarowski",
    "title": "Doctor Mentor &#128521",
    "image": "img/rmg.jpg",
    "text": "Lubię i polecam siebie za to, że nigdy się nie poddaję w walce o siebie i o Klienta. Moje motto: <strong>Kiedy uczeń jest gotowy, nauczyciel przychodzi. Kiedy uczeń jest naprawdę gotowy, nauczyciel odchodzi.</strong>",
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
        tl.fromTo(expandText, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        expandButton.innerHTML = "Czytaj mniej"
    }
});