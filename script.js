/****************** Typing Animation ****************/

var typed = new Typed('.typing', {
    strings: ['', 'Web Developer', 'Web Designer', 'Front-end Developer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
})

/****************** Aside Navbar ****************/

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    let a = navList[i].querySelector('a');
    a.addEventListener('click', function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section')
        }
        for (let h = 0; h < totalNavList; h++) {
            if (navList[h].querySelector('a').classList.contains('active')) {
                allSection[h].classList.add('back-section');
            }
            navList[h].querySelector('a').classList.remove('active')
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}


/************** Nav Toggler **************/
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}
document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index');
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
})


const navTogglerBtn = document.querySelector('.nav-toggle'),
    aside = document.querySelector('.aside');
    navTogglerBtn.addEventListener('click', () => {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn() {
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        // for (let i = 0; i < totalSection; i++){
        //     allSection[i].classList.toggle('open');
        // }
    }