const settings = {
  "name": "software-blog",
  "state": {
    "frontity": {
      "url": "https://software.pitang1965.com/",
      "title": "定年後にWeb開発者目指す",
      "description": "2019年1月から独学中の50代。"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "格安教材",
              "/skill-set"
            ],
            [
              "自己紹介",
              "/self-introduction"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://software.pitang1965.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
