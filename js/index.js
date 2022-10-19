window.addEventListener('DOMContentLoaded', () => {

    // кнопка формы
    const formBtn = document.querySelector('.form__btn'),
            textBtn = document.querySelector('#btn-text');

    formBtn.addEventListener('click', () => {
        formBtn.classList.remove('form__btn');
        formBtn.classList.add('form__btn-active');

        setTimeout(() => {
            textBtn.innerHTML = 'Ваше сообщение отправлено!';
        }, 600)
    })

    // верхнее меню
    const linkProjects = document.querySelector('.nav__menu-projects'),
            linkAbout = document.querySelector('.nav__menu-about'),
            linkContacts = document.querySelector('.nav__menu-contacts'),
            circleProject = document.querySelector('.circle-projects'),
            circleAbout = document.querySelector('.circle-about'),
            circleContacts = document.querySelector('.circle-contacts');


    linkProjects.addEventListener('click', () => {
        linkAbout.classList.remove('nav__menu-active');
        linkContacts.classList.remove('nav__menu-active');
        circleAbout.style.display = 'none';
        circleContacts.style.display = 'none';

        linkProjects.classList.add('nav__menu-active');
        circleProject.style.display = 'block';
    });

    linkAbout.addEventListener('click', () => {
        linkProjects.classList.remove('nav__menu-active');
        linkContacts.classList.remove('nav__menu-active');
        circleProject.style.display = 'none';
        circleContacts.style.display = 'none';

        linkAbout.classList.add('nav__menu-active');
        circleAbout.style.display = 'block';
    });

    linkContacts.addEventListener('click', () => {
        linkAbout.classList.remove('nav__menu-active');
        linkProjects.classList.remove('nav__menu-active');
        circleAbout.style.display = 'none';
        circleProject.style.display = 'none';

        linkContacts.classList.add('nav__menu-active');
        circleContacts.style.display = 'block';
    });


    // переключение языка
    const langRu = document.querySelector('.nav__lang-ru'),
            langEn = document.querySelector('.nav__lang-en'),
            circleRu = document.querySelector('.circle-ru'),
            circleEn = document.querySelector('.circle-en');

    langRu.addEventListener('click', () => {
        langEn.classList.remove('nav__lang-active');
        circleEn.style.display = 'none';

        langRu.classList.add('nav__lang-active');
        circleRu.style.display = 'block';
    });

    langEn.addEventListener('click', () => {
        langRu.classList.remove('nav__lang-active');
        circleRu.style.display = 'none';

        langEn.classList.add('nav__lang-active');
        circleEn.style.display = 'block';
    });

})