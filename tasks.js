module.exports = {
  displayListenerNames,
  displayListenerNameAndGenre,
  displayArtistNames,
  getId,
  releasesByArtist,
  getGenreByArtist,
  getReleaseByArtistGenre,
  DisplayReleaseNameOfAllListeners
}

// 1. Display the names of all of the listeners
function displayListenerNames (arrObjFile) {
  // Initialize
  const listenerNames = [] // Create the empty array to push into.

  for (const listener of arrObjFile) {
    listenerNames.push(listener.name)
    // Object File get the whole object which we are passed as a dummy param
    // console.log(arrObjFile)
  }

  return listenerNames
}

// 2. Display the listeners and their genres
function displayListenerNameAndGenre (arrObjFile) {
  const listenerNamesArray = displayListenerNames(arrObjFile)
  const listenerGenresNames = {}

  listenerNamesArray.map((name, index) => {
    // Initialize
    const listenerGenresObj = arrObjFile[index].genres
    console.log('Get Genres', listenerGenresObj)

    listenerGenresNames[name] = listenerGenresObj
    console.log('List Names and their fav Genres: ', listenerGenresNames[name])
  })

  console.log(listenerGenresNames)

  return listenerGenresNames
}

// 3. Display the name of the pop artists
function displayArtistNames (arrObjFile) {
  const artistNames = [] // Create the empty array to push into.
  const artistsByGenre = arrObjFile.filter(element => element.genre === 'pop')

  for (const artist of artistsByGenre) {
    artistNames.push(artist.name)
    console.log('Artist Names: ', artistNames)
  }

  return artistNames
}

// 4. Display the release IDs of the rap and trap artists

function getId (arrObjFile) {
  const rapArtist = arrObjFile.filter(element => element.genre === 'rap')
  const trapArtist = arrObjFile.filter(element => element.genre === 'trap')

  const makeNewArrayArtists = [...rapArtist, ...trapArtist]

  console.log('Log makeNewArrayArtists: ', makeNewArrayArtists)

  const ArtistId = makeNewArrayArtists.map(element => element.id)

  return ArtistId
}

// 5. Display the names of the releases by Queen
function releasesByArtist (artistArrObjFile, releasesArrObjFile, artistName) {
  const newArrayToLoad = []

  const findArtistName = artistArrObjFile.find(element => element.name === artistName)
  // console.log('Find Artist Name: ', findArtistName)

  const locateReleaseId = findArtistName.releaseIds
  // console.log('Release Id: ', locateReleaseId)

  for (let i = 0; i < locateReleaseId.length; i++) {
    const getReleaseData = releasesArrObjFile.find(element => element.id === locateReleaseId[i])
    newArrayToLoad.push(getReleaseData)
  }

  return newArrayToLoad
}

// 6. Display the artist names of Debra's genres
function getGenreByArtist (listenerArrObjFile, artistArrObjFile, listenerName) {
  const newArrayToLoad = []

  const findAListenerName = listenerArrObjFile.find(element => element.name === listenerName)

  const getGenre = findAListenerName.genres

  console.log('Get genre: ', getGenre)

  for (let i = 0; i < getGenre.length; i++) {
    const getGenreData = artistArrObjFile.filter(element => element.genre === getGenre[i])
    console.log('Log getGenre[i]', getGenre[i])
    newArrayToLoad.push(...getGenreData)
  }
  return newArrayToLoad
}

// 7. Display the release names of Jono's genres
function getReleaseByArtistGenre (listenerArrObjFile, releaseArrObjFile, listenerName) {
  const newArrayToLoad = []

  const findAListenerName = listenerArrObjFile.find(element => element.name === listenerName)

  const getGenre = findAListenerName.genres

  for (let i = 0; i < getGenre.length; i++) {
    const getGenreData = releaseArrObjFile.filter(element => element.genre === getGenre[i])
    newArrayToLoad.push(...getGenreData)
  }

  newArrayToLoad.map(element => element.name)

  return newArrayToLoad
}
