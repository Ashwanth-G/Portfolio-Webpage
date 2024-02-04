/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.style.background = '#555';
    } else {
        nav.style.background = '#444';
    }
    var elements = document.querySelectorAll('header, #about, #education, #projects, #skills, #contact');
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.style.opacity = 1;
        }
    });
};

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function openModal(title, description) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.parentNode.removeChild(modal);
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

window.onscroll = function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.style.background = '#555';
    } else {
        nav.style.background = '#444';
    }
};
*/


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.style.background = '#555';
    } else {
        nav.style.background = '#444';
    }

    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.style.opacity = 1;
        }
    });
};

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function openModal(title, description) {
    if (document.querySelector('.modal')) {
        closeModal();
    }

    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.parentNode.removeChild(modal);
    }
}

document.getElementById('currentYear').textContent = new Date().getFullYear();
