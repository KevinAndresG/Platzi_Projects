#!/usr/bin/node
let titles = [{ "title": "A New Hope", "episode_id": 4, "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", "director": "George Lucas", "producer": "Gary Kurtz, Rick McCallum", "release_date": "1977-05-25", "characters": ["https://swapi-api.hbtn.io/api/people/1/", "https://swapi-api.hbtn.io/api/people/2/", "https://swapi-api.hbtn.io/api/people/3/", "https://swapi-api.hbtn.io/api/people/4/", "https://swapi-api.hbtn.io/api/people/5/", "https://swapi-api.hbtn.io/api/people/6/", "https://swapi-api.hbtn.io/api/people/7/", "https://swapi-api.hbtn.io/api/people/8/", "https://swapi-api.hbtn.io/api/people/9/", "https://swapi-api.hbtn.io/api/people/10/", "https://swapi-api.hbtn.io/api/people/12/", "https://swapi-api.hbtn.io/api/people/13/", "https://swapi-api.hbtn.io/api/people/14/", "https://swapi-api.hbtn.io/api/people/15/", "https://swapi-api.hbtn.io/api/people/16/", "https://swapi-api.hbtn.io/api/people/18/", "https://swapi-api.hbtn.io/api/people/19/", "https://swapi-api.hbtn.io/api/people/81/"], "planets": ["https://swapi-api.hbtn.io/api/planets/1/", "https://swapi-api.hbtn.io/api/planets/2/", "https://swapi-api.hbtn.io/api/planets/3/"], "starships": ["https://swapi-api.hbtn.io/api/starships/2/", "https://swapi-api.hbtn.io/api/starships/3/", "https://swapi-api.hbtn.io/api/starships/5/", "https://swapi-api.hbtn.io/api/starships/9/", "https://swapi-api.hbtn.io/api/starships/10/", "https://swapi-api.hbtn.io/api/starships/11/", "https://swapi-api.hbtn.io/api/starships/12/", "https://swapi-api.hbtn.io/api/starships/13/"], "vehicles": ["https://swapi-api.hbtn.io/api/vehicles/4/", "https://swapi-api.hbtn.io/api/vehicles/6/", "https://swapi-api.hbtn.io/api/vehicles/7/", "https://swapi-api.hbtn.io/api/vehicles/8/"], "species": ["https://swapi-api.hbtn.io/api/species/1/", "https://swapi-api.hbtn.io/api/species/2/", "https://swapi-api.hbtn.io/api/species/3/", "https://swapi-api.hbtn.io/api/species/4/", "https://swapi-api.hbtn.io/api/species/5/"], "created": "2014-12-10T14:23:31.880000Z", "edited": "2014-12-20T19:49:45.256000Z", "url": "https://swapi-api.hbtn.io/api/films/1/" },
{ "title": "The Empire Strikes Back", "episode_id": 5, "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....", "director": "Irvin Kershner", "producer": "Gary Kurtz, Rick McCallum", "release_date": "1980-05-17", "characters": ["https://swapi-api.hbtn.io/api/people/1/", "https://swapi-api.hbtn.io/api/people/2/", "https://swapi-api.hbtn.io/api/people/3/", "https://swapi-api.hbtn.io/api/people/4/", "https://swapi-api.hbtn.io/api/people/5/", "https://swapi-api.hbtn.io/api/people/10/", "https://swapi-api.hbtn.io/api/people/13/", "https://swapi-api.hbtn.io/api/people/14/", "https://swapi-api.hbtn.io/api/people/18/", "https://swapi-api.hbtn.io/api/people/20/", "https://swapi-api.hbtn.io/api/people/21/", "https://swapi-api.hbtn.io/api/people/22/", "https://swapi-api.hbtn.io/api/people/23/", "https://swapi-api.hbtn.io/api/people/24/", "https://swapi-api.hbtn.io/api/people/25/", "https://swapi-api.hbtn.io/api/people/26/"], "planets": ["https://swapi-api.hbtn.io/api/planets/4/", "https://swapi-api.hbtn.io/api/planets/5/", "https://swapi-api.hbtn.io/api/planets/6/", "https://swapi-api.hbtn.io/api/planets/27/"], "starships": ["https://swapi-api.hbtn.io/api/starships/3/", "https://swapi-api.hbtn.io/api/starships/10/", "https://swapi-api.hbtn.io/api/starships/11/", "https://swapi-api.hbtn.io/api/starships/12/", "https://swapi-api.hbtn.io/api/starships/15/", "https://swapi-api.hbtn.io/api/starships/17/", "https://swapi-api.hbtn.io/api/starships/21/", "https://swapi-api.hbtn.io/api/starships/22/", "https://swapi-api.hbtn.io/api/starships/23/"], "vehicles": ["https://swapi-api.hbtn.io/api/vehicles/8/", "https://swapi-api.hbtn.io/api/vehicles/14/", "https://swapi-api.hbtn.io/api/vehicles/16/", "https://swapi-api.hbtn.io/api/vehicles/18/", "https://swapi-api.hbtn.io/api/vehicles/19/", "https://swapi-api.hbtn.io/api/vehicles/20/"], "species": ["https://swapi-api.hbtn.io/api/species/1/", "https://swapi-api.hbtn.io/api/species/2/", "https://swapi-api.hbtn.io/api/species/3/", "https://swapi-api.hbtn.io/api/species/6/", "https://swapi-api.hbtn.io/api/species/7/"], "created": "2014-12-12T11:26:24.656000Z", "edited": "2014-12-15T13:07:53.386000Z", "url": "https://swapi-api.hbtn.io/api/films/2/" },
{ "title": "Return of the Jedi", "episode_id": 6, "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...", "director": "Richard Marquand", "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum", "release_date": "1983-05-25", "characters": ["https://swapi-api.hbtn.io/api/people/1/", "https://swapi-api.hbtn.io/api/people/2/", "https://swapi-api.hbtn.io/api/people/3/", "https://swapi-api.hbtn.io/api/people/4/", "https://swapi-api.hbtn.io/api/people/5/", "https://swapi-api.hbtn.io/api/people/10/", "https://swapi-api.hbtn.io/api/people/13/", "https://swapi-api.hbtn.io/api/people/14/", "https://swapi-api.hbtn.io/api/people/16/", "https://swapi-api.hbtn.io/api/people/18/", "https://swapi-api.hbtn.io/api/people/20/", "https://swapi-api.hbtn.io/api/people/21/", "https://swapi-api.hbtn.io/api/people/22/", "https://swapi-api.hbtn.io/api/people/25/", "https://swapi-api.hbtn.io/api/people/27/", "https://swapi-api.hbtn.io/api/people/28/", "https://swapi-api.hbtn.io/api/people/29/", "https://swapi-api.hbtn.io/api/people/30/", "https://swapi-api.hbtn.io/api/people/31/", "https://swapi-api.hbtn.io/api/people/45/"], "planets": ["https://swapi-api.hbtn.io/api/planets/1/", "https://swapi-api.hbtn.io/api/planets/5/", "https://swapi-api.hbtn.io/api/planets/7/", "https://swapi-api.hbtn.io/api/planets/8/", "https://swapi-api.hbtn.io/api/planets/9/"], "starships": ["https://swapi-api.hbtn.io/api/starships/2/", "https://swapi-api.hbtn.io/api/starships/3/", "https://swapi-api.hbtn.io/api/starships/10/", "https://swapi-api.hbtn.io/api/starships/11/", "https://swapi-api.hbtn.io/api/starships/12/", "https://swapi-api.hbtn.io/api/starships/15/", "https://swapi-api.hbtn.io/api/starships/17/", "https://swapi-api.hbtn.io/api/starships/22/", "https://swapi-api.hbtn.io/api/starships/23/", "https://swapi-api.hbtn.io/api/starships/27/", "https://swapi-api.hbtn.io/api/starships/28/", "https://swapi-api.hbtn.io/api/starships/29/"], "vehicles": ["https://swapi-api.hbtn.io/api/vehicles/8/", "https://swapi-api.hbtn.io/api/vehicles/16/", "https://swapi-api.hbtn.io/api/vehicles/18/", "https://swapi-api.hbtn.io/api/vehicles/19/", "https://swapi-api.hbtn.io/api/vehicles/24/", "https://swapi-api.hbtn.io/api/vehicles/25/", "https://swapi-api.hbtn.io/api/vehicles/26/", "https://swapi-api.hbtn.io/api/vehicles/30/"], "species": ["https://swapi-api.hbtn.io/api/species/1/", "https://swapi-api.hbtn.io/api/species/2/", "https://swapi-api.hbtn.io/api/species/3/", "https://swapi-api.hbtn.io/api/species/5/", "https://swapi-api.hbtn.io/api/species/6/", "https://swapi-api.hbtn.io/api/species/8/", "https://swapi-api.hbtn.io/api/species/9/", "https://swapi-api.hbtn.io/api/species/10/", "https://swapi-api.hbtn.io/api/species/15/"], "created": "2014-12-18T10:39:33.255000Z", "edited": "2014-12-20T09:48:37.462000Z", "url": "https://swapi-api.hbtn.io/api/films/3/" },
{ "title": "The Phantom Menace", "episode_id": 1, "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....", "director": "George Lucas", "producer": "Rick McCallum", "release_date": "1999-05-19", "characters": ["https://swapi-api.hbtn.io/api/people/2/", "https://swapi-api.hbtn.io/api/people/3/", "https://swapi-api.hbtn.io/api/people/10/", "https://swapi-api.hbtn.io/api/people/11/", "https://swapi-api.hbtn.io/api/people/16/", "https://swapi-api.hbtn.io/api/people/20/", "https://swapi-api.hbtn.io/api/people/21/", "https://swapi-api.hbtn.io/api/people/32/", "https://swapi-api.hbtn.io/api/people/33/", "https://swapi-api.hbtn.io/api/people/34/", "https://swapi-api.hbtn.io/api/people/35/", "https://swapi-api.hbtn.io/api/people/36/", "https://swapi-api.hbtn.io/api/people/37/", "https://swapi-api.hbtn.io/api/people/38/", "https://swapi-api.hbtn.io/api/people/39/", "https://swapi-api.hbtn.io/api/people/40/", "https://swapi-api.hbtn.io/api/people/41/", "https://swapi-api.hbtn.io/api/people/42/", "https://swapi-api.hbtn.io/api/people/43/", "https://swapi-api.hbtn.io/api/people/44/", "https://swapi-api.hbtn.io/api/people/46/", "https://swapi-api.hbtn.io/api/people/47/", "https://swapi-api.hbtn.io/api/people/48/", "https://swapi-api.hbtn.io/api/people/49/", "https://swapi-api.hbtn.io/api/people/50/", "https://swapi-api.hbtn.io/api/people/51/", "https://swapi-api.hbtn.io/api/people/52/", "https://swapi-api.hbtn.io/api/people/53/", "https://swapi-api.hbtn.io/api/people/54/", "https://swapi-api.hbtn.io/api/people/55/", "https://swapi-api.hbtn.io/api/people/56/", "https://swapi-api.hbtn.io/api/people/57/", "https://swapi-api.hbtn.io/api/people/58/", "https://swapi-api.hbtn.io/api/people/59/"], "planets": ["https://swapi-api.hbtn.io/api/planets/1/", "https://swapi-api.hbtn.io/api/planets/8/", "https://swapi-api.hbtn.io/api/planets/9/"], "starships": ["https://swapi-api.hbtn.io/api/starships/31/", "https://swapi-api.hbtn.io/api/starships/32/", "https://swapi-api.hbtn.io/api/starships/39/", "https://swapi-api.hbtn.io/api/starships/40/", "https://swapi-api.hbtn.io/api/starships/41/"], "vehicles": ["https://swapi-api.hbtn.io/api/vehicles/33/", "https://swapi-api.hbtn.io/api/vehicles/34/", "https://swapi-api.hbtn.io/api/vehicles/35/", "https://swapi-api.hbtn.io/api/vehicles/36/", "https://swapi-api.hbtn.io/api/vehicles/37/", "https://swapi-api.hbtn.io/api/vehicles/38/", "https://swapi-api.hbtn.io/api/vehicles/42/"], "species": ["https://swapi-api.hbtn.io/api/species/1/", "https://swapi-api.hbtn.io/api/species/2/", "https://swapi-api.hbtn.io/api/species/6/", "https://swapi-api.hbtn.io/api/species/11/", "https://swapi-api.hbtn.io/api/species/12/", "https://swapi-api.hbtn.io/api/species/13/", "https://swapi-api.hbtn.io/api/species/14/", "https://swapi-api.hbtn.io/api/species/15/", "https://swapi-api.hbtn.io/api/species/16/", "https://swapi-api.hbtn.io/api/species/17/", "https://swapi-api.hbtn.io/api/species/18/", "https://swapi-api.hbtn.io/api/species/19/", "https://swapi-api.hbtn.io/api/species/20/", "https://swapi-api.hbtn.io/api/species/21/", "https://swapi-api.hbtn.io/api/species/22/", "https://swapi-api.hbtn.io/api/species/23/", "https://swapi-api.hbtn.io/api/species/24/", "https://swapi-api.hbtn.io/api/species/25/", "https://swapi-api.hbtn.io/api/species/26/", "https://swapi-api.hbtn.io/api/species/27/"], "created": "2014-12-19T16:52:55.740000Z", "edited": "2014-12-20T10:54:07.216000Z", "url": "https://swapi-api.hbtn.io/api/films/4/" },
{ "title": "Attack of the Clones", "episode_id": 2, "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....", "director": "George Lucas", "producer": "Rick McCallum", "release_date": "2002-05-16", "characters": ["https://swapi-api.hbtn.io/api/people/2/", "https://swapi-api.hbtn.io/api/people/3/", "https://swapi-api.hbtn.io/api/people/6/", "https://swapi-api.hbtn.io/api/people/7/", "https://swapi-api.hbtn.io/api/people/10/", "https://swapi-api.hbtn.io/api/people/11/", "https://swapi-api.hbtn.io/api/people/20/", "https://swapi-api.hbtn.io/api/people/21/", "https://swapi-api.hbtn.io/api/people/22/", "https://swapi-api.hbtn.io/api/people/33/", "https://swapi-api.hbtn.io/api/people/35/", "https://swapi-api.hbtn.io/api/people/36/", "https://swapi-api.hbtn.io/api/people/40/", "https://swapi-api.hbtn.io/api/people/43/", "https://swapi-api.hbtn.io/api/people/46/", "https://swapi-api.hbtn.io/api/people/51/", "https://swapi-api.hbtn.io/api/people/52/", "https://swapi-api.hbtn.io/api/people/53/", "https://swapi-api.hbtn.io/api/people/58/", "https://swapi-api.hbtn.io/api/people/59/", "https://swapi-api.hbtn.io/api/people/60/", "https://swapi-api.hbtn.io/api/people/61/", "https://swapi-api.hbtn.io/api/people/62/", "https://swapi-api.hbtn.io/api/people/63/", "https://swapi-api.hbtn.io/api/people/64/", "https://swapi-api.hbtn.io/api/people/65/", "https://swapi-api.hbtn.io/api/people/66/", "https://swapi-api.hbtn.io/api/people/67/", "https://swapi-api.hbtn.io/api/people/68/", "https://swapi-api.hbtn.io/api/people/69/", "https://swapi-api.hbtn.io/api/people/70/", "https://swapi-api.hbtn.io/api/people/71/", "https://swapi-api.hbtn.io/api/people/72/", "https://swapi-api.hbtn.io/api/people/73/", "https://swapi-api.hbtn.io/api/people/74/", "https://swapi-api.hbtn.io/api/people/75/", "https://swapi-api.hbtn.io/api/people/76/", "https://swapi-api.hbtn.io/api/people/77/", "https://swapi-api.hbtn.io/api/people/78/", "https://swapi-api.hbtn.io/api/people/82/"], "planets": ["https://swapi-api.hbtn.io/api/planets/1/", "https://swapi-api.hbtn.io/api/planets/8/", "https://swapi-api.hbtn.io/api/planets/9/", "https://swapi-api.hbtn.io/api/planets/10/", "https://swapi-api.hbtn.io/api/planets/11/"], "starships": ["https://swapi-api.hbtn.io/api/starships/21/", "https://swapi-api.hbtn.io/api/starships/32/", "https://swapi-api.hbtn.io/api/starships/39/", "https://swapi-api.hbtn.io/api/starships/43/", "https://swapi-api.hbtn.io/api/starships/47/", "https://swapi-api.hbtn.io/api/starships/48/", "https://swapi-api.hbtn.io/api/starships/49/", "https://swapi-api.hbtn.io/api/starships/52/", "https://swapi-api.hbtn.io/api/starships/58/"], "vehicles": ["https://swapi-api.hbtn.io/api/vehicles/4/", "https://swapi-api.hbtn.io/api/vehicles/44/", "https://swapi-api.hbtn.io/api/vehicles/45/", "https://swapi-api.hbtn.io/api/vehicles/46/", "https://swapi-api.hbtn.io/api/vehicles/50/", "https://swapi-api.hbtn.io/api/vehicles/51/", "https://swapi-api.hbtn.io/api/vehicles/53/", "https://swapi-api.hbtn.io/api/vehicles/54/", "https://swapi-api.hbtn.io/api/vehicles/55/", "https://swapi-api.hbtn.io/api/vehicles/56/", "https://swapi-api.hbtn.io/api/vehicles/57/"], "species": ["https://swapi-api.hbtn.io/api/species/1/", "https://swapi-api.hbtn.io/api/species/2/", "https://swapi-api.hbtn.io/api/species/6/", "https://swapi-api.hbtn.io/api/species/12/", "https://swapi-api.hbtn.io/api/species/13/", "https://swapi-api.hbtn.io/api/species/15/", "https://swapi-api.hbtn.io/api/species/28/", "https://swapi-api.hbtn.io/api/species/29/", "https://swapi-api.hbtn.io/api/species/30/", "https://swapi-api.hbtn.io/api/species/31/", "https://swapi-api.hbtn.io/api/species/32/", "https://swapi-api.hbtn.io/api/species/33/", "https://swapi-api.hbtn.io/api/species/34/", "https://swapi-api.hbtn.io/api/species/35/"], "created": "2014-12-20T10:57:57.886000Z", "edited": "2014-12-20T20:18:48.516000Z", "url": "https://swapi-api.hbtn.io/api/films/5/" },
{ "title": "Revenge of the Sith", "episode_id": 3, "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....", "director": "George Lucas", "producer": "Rick McCallum", "release_date": "2005-05-19", "characters": ["https://swapi-api.hbtn.io/api/people/1/", "https://swapi-api.hbtn.io/api/people/2/", "https://swapi-api.hbtn.io/api/people/3/", "https://swapi-api.hbtn.io/api/people/4/", "https://swapi-api.hbtn.io/api/people/5/", "https://swapi-api.hbtn.io/api/people/6/", "https://swapi-api.hbtn.io/api/people/7/", "https://swapi-api.hbtn.io/api/people/10/", "https://swapi-api.hbtn.io/api/people/11/", "https://swapi-api.hbtn.io/api/people/12/", "https://swapi-api.hbtn.io/api/people/13/", "https://swapi-api.hbtn.io/api/people/20/", "https://swapi-api.hbtn.io/api/people/21/", "https://swapi-api.hbtn.io/api/people/33/", "https://swapi-api.hbtn.io/api/people/35/", "https://swapi-api.hbtn.io/api/people/46/", "https://swapi-api.hbtn.io/api/people/51/", "https://swapi-api.hbtn.io/api/people/52/", "https://swapi-api.hbtn.io/api/people/53/", "https://swapi-api.hbtn.io/api/people/54/", "https://swapi-api.hbtn.io/api/people/55/", "https://swapi-api.hbtn.io/api/people/56/", "https://swapi-api.hbtn.io/api/people/58/", "https://swapi-api.hbtn.io/api/people/63/", "https://swapi-api.hbtn.io/api/people/64/", "https://swapi-api.hbtn.io/api/people/67/", "https://swapi-api.hbtn.io/api/people/68/", "https://swapi-api.hbtn.io/api/people/75/", "https://swapi-api.hbtn.io/api/people/78/", "https://swapi-api.hbtn.io/api/people/79/", "https://swapi-api.hbtn.io/api/people/80/", "https://swapi-api.hbtn.io/api/people/81/", "https://swapi-api.hbtn.io/api/people/82/", "https://swapi-api.hbtn.io/api/people/83/"], "planets": ["https://swapi-api.hbtn.io/api/planets/1/", "https://swapi-api.hbtn.io/api/planets/2/", "https://swapi-api.hbtn.io/api/planets/5/", "https://swapi-api.hbtn.io/api/planets/8/", "https://swapi-api.hbtn.io/api/planets/9/", "https://swapi-api.hbtn.io/api/planets/12/", "https://swapi-api.hbtn.io/api/planets/13/", "https://swapi-api.hbtn.io/api/planets/14/", "https://swapi-api.hbtn.io/api/planets/15/", "https://swapi-api.hbtn.io/api/planets/16/", "https://swapi-api.hbtn.io/api/planets/17/", "https://swapi-api.hbtn.io/api/planets/18/", "https://swapi-api.hbtn.io/api/planets/19/"], "starships": ["https://swapi-api.hbtn.io/api/starships/2/", "https://swapi-api.hbtn.io/api/starships/32/", "https://swapi-api.hbtn.io/api/starships/48/", "https://swapi-api.hbtn.io/api/starships/59/", "https://swapi-api.hbtn.io/api/starships/61/", "https://swapi-api.hbtn.io/api/starships/63/", "https://swapi-api.hbtn.io/api/starships/64/", "https://swapi-api.hbtn.io/api/starships/65/", "https://swapi-api.hbtn.io/api/starships/66/", "https://swapi-api.hbtn.io/api/starships/68/", "https://swapi-api.hbtn.io/api/starships/74/", "https://swapi-api.hbtn.io/api/starships/75/"], "vehicles": ["https://swapi-api.hbtn.io/api/vehicles/33/", "https://swapi-api.hbtn.io/api/vehicles/50/", "https://swapi-api.hbtn.io/api/vehicles/53/", "https://swapi-api.hbtn.io/api/vehicles/56/", "https://swapi-api.hbtn.io/api/vehicles/60/", "https://swapi-api.hbtn.io/api/vehicles/62/", "https://swapi-api.hbtn.io/api/vehicles/67/", "https://swapi-api.hbtn.io/api/vehicles/69/", "https://swapi-api.hbtn.io/api/vehicles/70/", "https://swapi-api.hbtn.io/api/vehicles/71/", "https://swapi-api.hbtn.io/api/vehicles/72/", "https://swapi-api.hbtn.io/api/vehicles/73/", "https://swapi-api.hbtn.io/api/vehicles/76/"], "species": ["https://swapi-api.hbtn.io/api/species/1/", "https://swapi-api.hbtn.io/api/species/2/", "https://swapi-api.hbtn.io/api/species/3/", "https://swapi-api.hbtn.io/api/species/6/", "https://swapi-api.hbtn.io/api/species/15/", "https://swapi-api.hbtn.io/api/species/19/", "https://swapi-api.hbtn.io/api/species/20/", "https://swapi-api.hbtn.io/api/species/23/", "https://swapi-api.hbtn.io/api/species/24/", "https://swapi-api.hbtn.io/api/species/25/", "https://swapi-api.hbtn.io/api/species/26/", "https://swapi-api.hbtn.io/api/species/27/", "https://swapi-api.hbtn.io/api/species/28/", "https://swapi-api.hbtn.io/api/species/29/", "https://swapi-api.hbtn.io/api/species/30/", "https://swapi-api.hbtn.io/api/species/33/", "https://swapi-api.hbtn.io/api/species/34/", "https://swapi-api.hbtn.io/api/species/35/", "https://swapi-api.hbtn.io/api/species/36/", "https://swapi-api.hbtn.io/api/species/37/"], "created": "2014-12-20T18:49:38.403000Z", "edited": "2014-12-20T20:47:52.073000Z", "url": "https://swapi-api.hbtn.io/api/films/6/" },
{ "title": "The Force Awakens", "episode_id": 7, "opening_crawl": "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....", "director": "J. J. Abrams", "producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk", "release_date": "2015-12-11", "characters": ["https://swapi-api.hbtn.io/api/people/1/", "https://swapi-api.hbtn.io/api/people/3/", "https://swapi-api.hbtn.io/api/people/5/", "https://swapi-api.hbtn.io/api/people/13/", "https://swapi-api.hbtn.io/api/people/14/", "https://swapi-api.hbtn.io/api/people/27/", "https://swapi-api.hbtn.io/api/people/84/", "https://swapi-api.hbtn.io/api/people/85/", "https://swapi-api.hbtn.io/api/people/86/", "https://swapi-api.hbtn.io/api/people/87/", "https://swapi-api.hbtn.io/api/people/88/"], "planets": ["https://swapi-api.hbtn.io/api/planets/61/"], "starships": ["https://swapi-api.hbtn.io/api/starships/10/"], "vehicles": [], "species": ["https://swapi-api.hbtn.io/api/species/1/", "https://swapi-api.hbtn.io/api/species/2/", "https://swapi-api.hbtn.io/api/species/3/"], "created": "2015-04-17T06:51:30.504780Z", "edited": "2015-12-17T14:31:47.617768Z", "url": "https://swapi-api.hbtn.io/api/films/7/" }]
let all = titles.map(x => (x.title))
for (i in all) {
  console.log(all[i])
}