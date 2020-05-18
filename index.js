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
        autoplay: false,
        autoplaySpeed: 4000,
        dots: true,
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
    "text": "Artur is standup guy"
}, {
    "id": 2,
    "name": "Antoni Żarski",
    "title": "General Manager w Bristol Myers Squib",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQFJOa3lsAZzCw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=8Fam6gt00QY4pAPn5LPZI0B5UBT0HnK1AxJTW1q-AZQ",
    "text": "yo"
}, {
    "id": 3,
    "name": "Radosław Pilipczuk",
    "title": "Sales Director w Salveo CEE",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQE74-X8dtRuCg/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=sh08fZhzZDPpXLledZD8hxngkIGuM3n8tPT-TWVzHoM",
    "text": "yo"
}, {
    "id": 4,
    "name": "Monika Gałecka",
    "title": "District Manager Hospital PRO.MED.PL",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQGL5ozw3yifIw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=6NkwkyQeSqHb2jNpa_CW66QYyPPFZGc-MJ96KIUsyvY",
    "text": "yo"
}, {
    "id": 5,
    "name": "Jacek Dmowski",
    "title": "Field Force Lead w BMS",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQH9ASitMm2P7g/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=XM4OxSm79dv72zV5gtjaa-QgAz_-iLN6VkoZSBnCPmA",
    "text": "yo"
}, {
    "id": 6,
    "name": "Marcin Andziak",
    "title": "FCCA, Head of Finance and Distribution w Servier",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQFTDhcY-xjECQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=lF4OK9xw8iXCblafE9Cu6yVngch_iGre9KgYc1yMnvo",
    "text": "yo"
}, {
    "id": 7,
    "name": "Borys Herman",
    "title": "Business Excellence & Strategic Planning Manager Sanofi Pasteur",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQHb_DNRziashw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=QnSgiMGDdD0s0AAq0aOs1yU2CqhiR7KCgXl8JA3KQ6I",
    "text": "yo"
}, {
    "id": 8,
    "name": " Joanna Szwajkowska",
    "title": "Prezes Zarządu w WUZETEM S.A",
    "image": "https://i.wnp.pl/d/32/52/92/325292_r1_300.jpg",
    "text": "yo"
}, {
    "id": 9,
    "name": "Piotr Stankiewicz",
    "title": "Łukasiewicz Research Network",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQG_Sj_cGQ8Knw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=vnNZO9H_ICgBpFhOWFuBxa09Ejow3t1pTnsGgh_c9U0",
    "text": "yo"
}, {
    "id": 10,
    "name": "Natalia Łojko",
    "title": "Partner KRK Legal",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQE15vvo8xklUQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=qevNc-gVx9V45SEi9oeRSfYXXmtDRes6WtZLF1EOrQE",
    "text": "yo"
}, {
    "id": 11,
    "name": "Andrzej Staszewski",
    "title": "National Sales Manager OTC w Takeda",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQGnErQn25tlsA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=0QBnbQ3s7Xk6z23TT4_EUaKErFFjGa5PotODLWvko_8",
    "text": "yo"
}, {
    "id": 12,
    "name": " Petia Hadjieva",
    "title": "Founder and CEO Starpharma",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQH13D-xjyWRaQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=LVubNvDxPoNlOeniG5Pf7-sPQ819tX_l7wyelopdfls",
    "text": "yo"
}, {
    "id": 13,
    "name": "Mariusz Ćwik",
    "title": "District Manager w Herbapol Poznań",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQGIcU55pV5wnw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=prKhpRhntBK8YYzZanjSzrb1fYiS4XYwiPN4GyXdx4g",
    "text": "yo"
}, {
    "id": 14,
    "name": "Joanna Kurek",
    "title": "HR Director CEE w FOX Networks Groups",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQExq5eh5IovOQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=JpNqbrKJ3lPjrr4KSOngiPl4XGsmyrlQKuk31ngs-2g",
    "text": "yo"
}, {
    "id": 15,
    "name": "Danuta Madejska–Wróbel",
    "title": "Product Manager w Bausch Health",
    "image": "https://media-exp1.licdn.com/dms/image/C4D03AQEo5NUbWHMffA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=E87zTIoDSYIipPNHa2jJRwDTpRHpz1XLiyF_e1_HzfY",
    "text": "yo"
}, {
    "id": 16,
    "name": " Ilona Berowska",
    "title": "Finance Director w Mylan Poland",
    "image": "https://media-exp1.licdn.com/dms/image/C5103AQGGn7VDDLSggA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=xDmTXLHe_eCWxyeX1Xsh64vWmytMjB5VhO6EyY0zcvE",
    "text": "yo"
}, {
    "id": 17,
    "name": "Renata Zabłotna",
    "title": "Market Access Director w Celgene Poland",
    "image": "https://media-exp1.licdn.com/dms/image/C4E03AQFr48ICV_OZgw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=RfVmjSG1Yp3lADnHSnaY__TWrg_BVfVXcaJgAbFpww8",
    "text": "yo"
}, {
    "id": 18,
    "name": "Krzysztof Warot",
    "title": "Head of Speciality Care w Boehringer Ingelheim",
    "image": "https://media-exp1.licdn.com/dms/image/C5603AQFMYwcLd-tEHw/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=EvV1wmyDGA1X1oL9qZvQ2XfTS-uTB6_0KM9PeYDGZ2s",
    "text": "yo"
}]

console.log(testimonials);

document.getElementById('slick').innerHTML = testimonials.map(user =>
    `<div class="testimonials">
        <img src="${user.image}" alt="client">
        <h3>${user.name}</h3>
        <h4>${user.title}</h4>
        <hr>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed totam inventore alias suscipit consequatur, commodi libero voluptatibus eligendi pariatur magni?</p>
    </div>`
).join('')


const expandButton = document.getElementById("expand");

expandButton.addEventListener('click', function() {
    const expandText = document.getElementById("expandable")

    if (expandText.style.display === "none") {
        expandText.style.display = "block";
    } else {
        expandText.style.display = "none";
    }
});