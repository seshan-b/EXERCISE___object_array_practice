const tasks = require('./tasks')

const artists = require('./data/artists')
const listeners = require('./data/listeners')
const releases = require('./data/releases')

// 1. Display the names of all of the listeners
console.log('\n 1. Display the names of all of the listeners')
console.log(tasks.displayListenerNames(listeners))

// 2. Display the listeners and their genres
console.log('\n 2. Display the listeners and their genres')
console.log(tasks.displayListenerNameAndGenre(listeners))

// 3. Display the name of the pop artists
console.log('\n 3. Display the name of the pop artists')
console.log(tasks.displayArtistNames(artists))

// 4. Display the name of the pop artists
console.log('\n 4. Display the release IDs of the rap and trap artists')
console.log(tasks.getId(artists))

// 5. Display the names of the releases by Queen
console.log('\n 5. Display the names of the releases by Queen')
console.log(tasks.releasesByArtist(artists, releases, 'Queen'))

// 6. Display the artist names of Debra's genres
console.log('\n 6. Display the artist names of Debra\'s genres')
console.log(tasks.getGenreByArtist(listeners, artists, 'Debra'))

// 7. Display the release names of Jono's genres
console.log('\n 7. Display the release names of Jono\'s genres')
console.log(tasks.getReleaseByArtistGenre(listeners, releases, 'Jono'))

// 8.Display the artist and release names of all of the listeners
console.log(
  '\n  8. Display the artist and release names of all of the listeners'
)
console.log(tasks.DisplayReleaseNameOfAllListeners(listeners, releases))
