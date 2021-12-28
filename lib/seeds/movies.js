module.exports = (db) => {

  const movies = [{
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      Rated: "PG",
      Released: "25 May 1977",
      Runtime: "121 min",
      Genre: "Action, Adventure, Fantasy, Sci-Fi",
      Director: "George Lucas",
      Writer: "George Lucas",
      Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
      Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
      Language: "English",
      Country: "USA",
      Awards: "Won 6 Oscars. Another 50 wins & 28 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "8.6/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "93%"
        },
        {
          Source: "Metacritic",
          Value: "90/100"
        }
      ],
      Metascore: "90",
      imdbRating: "8.6",
      imdbVotes: "1,077,767",
      imdbID: "tt0076759",
      Type: "movie",
      DVD: "21 Sep 2004",
      BoxOffice: "N/A",
      Production: "20th Century Fox",
      Website: "http://www.starwars.com/episode-iv/",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      Rated: "PG",
      Released: "25 May 1983",
      Runtime: "131 min",
      Genre: "Action, Adventure, Fantasy, Sci-Fi",
      Director: "Richard Marquand",
      Writer: "Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
      Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
      Plot: "After a daring mission to rescue Han Solo from Jabba the Hutt, the rebels dispatch to Endor to destroy a more powerful Death Star. Meanwhile, Luke struggles to help Vader back from the dark side without falling into the Emperor's trap.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 4 Oscars. Another 20 wins & 16 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "8.3/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "80%"
        },
        {
          Source: "Metacritic",
          Value: "58/100"
        }
      ],
      Metascore: "58",
      imdbRating: "8.3",
      imdbVotes: "827,174",
      imdbID: "tt0086190",
      Type: "movie",
      DVD: "12 Sep 2006",
      BoxOffice: "N/A",
      Production: "Twentieth Century Fox",
      Website: "http://www.starwars.com/episode-vi/",
    },
    {
      Title: "Star Wars: The Force Awakens",
      Year: "2015",
      Rated: "PG-13",
      Released: "18 Dec 2015",
      Runtime: "136 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "J.J. Abrams",
      Writer: "Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)",
      Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
      Plot: "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 5 Oscars. Another 57 wins & 123 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "8.0/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "93%"
        },
        {
          Source: "Metacritic",
          Value: "81/100"
        }
      ],
      Metascore: "81",
      imdbRating: "8.0",
      imdbVotes: "755,035",
      imdbID: "tt2488496",
      Type: "movie",
      DVD: "05 Apr 2016",
      BoxOffice: "$936,658,640",
      Production: "Walt Disney Pictures",
      Website: "http://starwars.com/",
    },
    {
      Title: "Star Wars: Episode I - The Phantom Menace",
      Year: "1999",
      Rated: "PG",
      Released: "19 May 1999",
      Runtime: "136 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "George Lucas",
      Writer: "George Lucas",
      Actors: "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
      Plot: "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 3 Oscars. Another 26 wins & 65 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "6.5/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "55%"
        },
        {
          Source: "Metacritic",
          Value: "51/100"
        }
      ],
      Metascore: "51",
      imdbRating: "6.5",
      imdbVotes: "628,730",
      imdbID: "tt0120915",
      Type: "movie",
      DVD: "16 Oct 2001",
      BoxOffice: "$431,000,000",
      Production: "20th Century Fox",
      Website: "http://www.starwars.com/episode-i/",
    },
    {
      Title: "Star Wars: Episode III - Revenge of the Sith",
      Year: "2005",
      Rated: "PG-13",
      Released: "19 May 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "George Lucas",
      Writer: "George Lucas",
      Actors: "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
      Plot: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
      Language: "English",
      Country: "USA, Italy, Switzerland, Thailand, Tunisia",
      Awards: "Nominated for 1 Oscar. Another 25 wins & 56 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "7.6/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "79%"
        },
        {
          Source: "Metacritic",
          Value: "68/100"
        }
      ],
      Metascore: "68",
      imdbRating: "7.6",
      imdbVotes: "614,576",
      imdbID: "tt0121766",
      Type: "movie",
      DVD: "01 Nov 2005",
      BoxOffice: "N/A",
      Production: "20th Century Fox",
      Website: "http://www.starwars.com/",
    },
    {
      Title: "Star Wars: Episode II - Attack of the Clones",
      Year: "2002",
      Rated: "PG",
      Released: "16 May 2002",
      Runtime: "142 min",
      Genre: "Action, Adventure, Fantasy, Sci-Fi",
      Director: "George Lucas",
      Writer: "George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)",
      Actors: "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee",
      Plot: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-wan Kenobi investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 1 Oscar. Another 16 wins & 58 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "6.6/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "66%"
        },
        {
          Source: "Metacritic",
          Value: "54/100"
        }
      ],
      Metascore: "54",
      imdbRating: "6.6",
      imdbVotes: "551,310",
      imdbID: "tt0121765",
      Type: "movie",
      DVD: "12 Nov 2002",
      BoxOffice: "$307,900,000",
      Production: "20th Century Fox",
      Website: "http://www.starwars.com/episode-ii/"
    },
    {
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      Rated: "PG-13",
      Released: "16 Dec 2016",
      Runtime: "133 min",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Gareth Edwards",
      Writer: "Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
      Actors: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
      Plot: "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 2 Oscars. Another 23 wins & 78 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "7.8/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "85%"
        },
        {
          Source: "Metacritic",
          Value: "65/100"
        }
      ],
      Metascore: "65",
      imdbRating: "7.8",
      imdbVotes: "443,466",
      imdbID: "tt3748528",
      Type: "movie",
      DVD: "04 Apr 2017",
      BoxOffice: "$532,171,696",
      Production: "Walt Disney Pictures",
      Website: "http://www.starwars.com/",
    },
    {
      Title: "Star Wars: The Last Jedi",
      Year: "2017",
      Rated: "PG-13",
      Released: "15 Dec 2017",
      Runtime: "152 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "Rian Johnson",
      Writer: "Rian Johnson, George Lucas (based on characters created by)",
      Actors: "Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley",
      Plot: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 4 Oscars. Another 12 wins & 71 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "7.2/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "91%"
        },
        {
          Source: "Metacritic",
          Value: "85/100"
        }
      ],
      Metascore: "85",
      imdbRating: "7.2",
      imdbVotes: "417,721",
      imdbID: "tt2527336",
      Type: "movie",
      DVD: "27 Mar 2018",
      BoxOffice: "$619,117,636",
      Production: "Walt Disney Pictures",
      Website: "http://www.starwars.com/the-last-jedi/",
    },
    {
      Title: "Solo: A Star Wars Story",
      Year: "2018",
      Rated: "PG-13",
      Released: "25 May 2018",
      Runtime: "135 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "Ron Howard",
      Writer: "Jonathan Kasdan, Lawrence Kasdan, George Lucas (based on characters created by)",
      Actors: "Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke",
      Plot: "During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
      Language: "English",
      Country: "USA",
      Awards: "N/A",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg",
      Ratings: [{
          Source: "Internet Movie Database",
          Value: "7.0/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "70%"
        },
        {
          Source: "Metacritic",
          Value: "62/100"
        }
      ],
      Metascore: "62",
      imdbRating: "7.0",
      imdbVotes: "149,586",
      imdbID: "tt3778644",
      Type: "movie",
      DVD: "14 Sep 2018",
      BoxOffice: "N/A",
      Production: "Walt Disney Pictures",
      Website: "http://www.starwars.com/films/solo",
    }
  ]

  movies.forEach(movie => db.movies.insert(movie))

}