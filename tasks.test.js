const tasks = require('./tasks')
const artists = require('./data/artists')
const listeners = require('./data/listeners')
const releases = require('./data/releases')

// 1. Display the names of all of the listeners
test('1. Display the names of all of the listeners', function () {
  const expected = ['Debra', 'Jono', 'Stina']
  const actual = tasks.displayListenerNames(listeners)
  expect(actual).toEqual(expected)
  console.log('\n ')
})

// 2. Display the listeners and their genres
test('2. Display the listeners and their genres', () => {
  const expected = {
    Debra: ['pop', 'chill'],
    Jono: ['rap', 'trap'],
    Stina: ['folk', 'trance']
  }
  const actual = tasks.displayListenerNameAndGenre(listeners)
  expect(actual).toEqual(expected)
})

// 3. Display the name of the pop artists
test('3. Display the name of the pop artists', () => {
  const expected = ['Queen', 'The Beatles']
  const actual = tasks.displayArtistNames(artists)
  expect(actual).toEqual(expected)
})

// 4. Display the name of the pop artists
test('4. Display the release IDs of the rap and trap artists', () => {
  const expected = [3, 4]
  const actual = tasks.getId(artists)
  expect(actual).toEqual(expected)
})

// 5. Display the names of the releases by Queen
test('5. Display the names of the releases by Queen', () => {
  const expected = [
    { id: 1, artistId: 1, name: 'Flash Gordon', genre: 'pop', year: 1975 },
    { id: 2, artistId: 1, name: 'A Kind of Magic', genre: 'pop', year: 1986 },
    { id: 3, artistId: 1, name: 'Innuendo', genre: 'pop', year: 1991 }
  ]
  const actual = tasks.releasesByArtist(artists, releases, 'Queen')
  expect(actual).toEqual(expected)
})

test("6. Display the artist names of Debra's genres", () => {
  const expected = [
    { id: 1, name: 'Queen', releaseIds: [1, 2, 3], genre: 'pop' },
    { id: 7, name: 'The Beatles', releaseIds: [14, 15], genre: 'pop' },
    { id: 2, name: 'Thievery Corporation', releaseIds: [4, 5], genre: 'chill' }
  ]
  const actual = tasks.getGenreByArtist(listeners, artists, 'Debra')
  expect(actual).toEqual(expected)
})

// 7. Display the name of the pop artists
test("7. Display the release names of Jono's genres", () => {
  const expected = [
    { id: 6, artistId: 3, name: 'Phrenology', genre: 'rap', year: 2002 },
    { id: 7, artistId: 3, name: 'The Tipping Point', genre: 'rap', year: 2004 },
    { id: 8, artistId: 4, name: 'Harlem Shake', genre: 'trap', year: 2012 },
    { id: 9, artistId: 4, name: 'Dum Dum', genre: 'trap', year: 2012 }
  ]
  const actual = tasks.getReleaseByArtistGenre(listeners, releases, 'Jono')
  expect(actual).toEqual(expected)
})

//  8.Display the artist and release names of all of the listeners
test('8. Display the artist and release names of all of the listeners', () => {
  const expected = {
    Debra: [
      { id: 1, artistId: 1, name: 'Flash Gordon', genre: 'pop', year: 1975 },
      { id: 2, artistId: 1, name: 'A Kind of Magic', genre: 'pop', year: 1986 },
      { id: 3, artistId: 1, name: 'Innuendo', genre: 'pop', year: 1991 },
      { id: 14, artistId: 7, name: 'Abbey Road', genre: 'pop', year: 1969 },
      {
        id: 15,
        artistId: 7,
        name: "Sgt. Pepper's Lonely Hearts Club Band",
        genre: 'pop',
        year: 1967
      },
      {
        id: 4,
        artistId: 2,
        name: 'The Richest Man in Babylon',
        genre: 'chill',
        year: 2002
      },
      {
        id: 5,
        artistId: 2,
        name: 'The Mirror Conspiracy',
        genre: 'chill',
        year: 2000
      }
    ],
    Jono: [
      { id: 6, artistId: 3, name: 'Phrenology', genre: 'rap', year: 2002 },
      {
        id: 7,
        artistId: 3,
        name: 'The Tipping Point',
        genre: 'rap',
        year: 2004
      },
      { id: 8, artistId: 4, name: 'Harlem Shake', genre: 'trap', year: 2012 },
      { id: 9, artistId: 4, name: 'Dum Dum', genre: 'trap', year: 2012 }
    ],
    Stina: [
      {
        id: 10,
        artistId: 5,
        name: "The Shepherd's Dog",
        genre: 'folk',
        year: 2007
      },
      {
        id: 11,
        artistId: 5,
        name: 'Our Endless Numbered Days',
        genre: 'folk',
        year: 2004
      },
      { id: 12, artistId: 6, name: 'Imagine', genre: 'trance', year: 2008 },
      {
        id: 13,
        artistId: 6,
        name: 'This is What it Feels Like',
        genre: 'trance',
        year: 2013
      }
    ]
  }
  const actual = tasks.DisplayReleaseNameOfAllListeners(listeners, releases)
  expect(actual).toEqual(expected)
})
