module.exports = {
    url: 'https://www.epam.com/',
    elements: {
      whatToDo: { 
        selector: '//a[normalize-space() = "What We Do"]//ancestor::li[not(contains(@class,"collapsed"))]' ,
        locateStrategy: 'xpath' 
      },
      howWeDoIt: { 
        selector: '//a[normalize-space() = "How We Do It"]//ancestor::li[not(contains(@class,"collapsed"))]' ,
        locateStrategy: 'xpath' 
      },
      ourWork: { 
        selector: '//a[normalize-space() = "Our Work"]//ancestor::li[not(contains(@class,"collapsed"))]' ,
        locateStrategy: 'xpath' 
      },
      insights: { 
        selector: '//a[normalize-space() = "Insights"]//ancestor::li[not(contains(@class,"collapsed"))]' ,
        locateStrategy: 'xpath' 
      },
      about: { 
        selector: '//a[normalize-space() = "About"]//ancestor::li[not(contains(@class,"collapsed"))]' ,
        locateStrategy: 'xpath' 
      },
      careers: { 
        selector: '//a[normalize-space() = "Careers"]//ancestor::li[not(contains(@class,"collapsed"))]' ,
        locateStrategy: 'xpath' 
      },
      whatToDoPage: { 
        selector: '//h1[normalize-space() = "What We Do"]',
        locateStrategy: 'xpath' 
      },
      howWeDoItPage: { 
        selector: '//h1[normalize-space() = "How We Do It"]',
        locateStrategy: 'xpath' 
      },
      ourWorkPage: { 
        selector: '//h1[normalize-space() = "Our Work"]',
        locateStrategy: 'xpath' 
      },
      insightsPage: { 
        selector: '//h1[normalize-space() = "Insights"]',
        locateStrategy: 'xpath' 
      },
      aboutPage: { 
        selector: '//h1[normalize-space() = "About"]',
        locateStrategy: 'xpath' 
      },
      careersPage: { 
        selector: '//h1[normalize-space() = "Work with Us"]',
        locateStrategy: 'xpath' 
      },
      contactUsPage: { 
        selector: '//h1[normalize-space() = "Contact Us"]',
        locateStrategy: 'xpath' 
      },
    }
  };