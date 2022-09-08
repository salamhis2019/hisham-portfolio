export const projects = [
  {
    title: 'Stock Project with Vantage API',
    description: [
      'Developed a stock app that displays recent closing data from various stocks/cryptos from a public API.',
      'The UI was created using Vue 3 and SASS, and the data was fetched using axios and the fetch API.',
      'Utilized the most recent vue features and rendered the components dynamically between the two apps. Reusability concepts were implemented for readability and the chart.js library was used to render the stock chart.',
      'Used Pinia to maintain the state of the app and utilized the composition API.'
    ],
    link: 'https://vuestockapp.firebaseapp.com/',
  },
  {
    title: 'Portfolio Project with Vue',
    description: [
      'Developed a personal portfolio site using Vue 3 and the script setup with Vite, Pinia and SASS.',
      'Tested the application using vue test utils and jest, includes unit and store testing.',
      'Utilized the most recent vue features and created the portfolio by making it route driven',
      'Implemented good github hygeine by creating semantic commits and working on different branches for features',
    ],
    link: 'https://github.com/salamhis2019/hisham-portfolio',
  },
]

export default projects;