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
