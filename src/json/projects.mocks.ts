export default [
  {
    title: 'Stock Project with Vantage API',
    description: [
      'Developed a stock app that displays recent closing, opening, price, and volume data on various stocks and cryptos. A public API called the vantage finance API was used to create this.',
      'The UI was created using Vue 3 and SASS, and the data from the vantage API was fetched using axios and the fetch API.',
      'The most recent Vue.js features were used while rendering the components dynamically between the crypto and stock components. Reusability concepts were in the forefront of the creation of the stock app and were implemented to improve readability. To create the stock chart, chart.js was used, which is a free open public library.',
      'Pinia was used to maintain the state of the app. Towards the beginning of the development phase of the app the options API was used, however towards the end there were some components that were refactored to utilize the composition API and Vue.js most recent features.'
    ],
    link: 'https://vuestockapp.firebaseapp.com/',
    skills: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Vue Router', 'chart.js'],
    imageUrl: 'Test image'
  },
  {
    title: 'Portfolio Project with Vue',
    description: [
      'Developed a personal portfolio site to display my recent work experiences and projects using Vue 3 and the script setup with Vite, Pinia and SASS.',
      'Tested the application using Vue.js test utils and jest, includes unit and store testing.',
      'Utilized the most recent vue features and created the portfolio by making it route driven.',
      'Implemented github hygeine by creating semantic commits and working on different branches for features',
    ],
    link: 'https://github.com/salamhis2019/hisham-portfolio',
    skills: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'SASS', 'jest.js', 'UX Design', 'Acessibility', 'Reusability', 'Verison Control'],
    imageUrl: 'Test image'
  },
]
