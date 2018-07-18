module.exports = {
    url: 'https://www.epam.com/',
    elements: {
        bodyElement: {
            selector: 'body',
        },
        whatToDo: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="what-we-do"]',
        },
        howWeDoIt: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="how-we-do-it"]',
        },
        ourWork: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="our-work"]',
        },
        insights: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="insights"]',
        },
        about: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="about"]',
        },
        careers: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="careers"]',
        },
        titleOfPage: {
            selector: '[class*="title"] >h1',
        },
    }
};