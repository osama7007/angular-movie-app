import { Component, OnInit } from '@angular/core';
import { Movie } from './../interfaces/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList : Array<Movie> = [
    {
      "adult": false,
      "id": 760161,
      "original_language": "en",
      "original_title": "Orphan: First Kill",
      "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
      "popularity": 5279.659,
      "poster_path": "https://image.tmdb.org/t/p/w500/l8WZDmjJCxOhGToTlhO6l9YAytr.jpg",
      "release_date": "2022-07-27",
      "title": "Orphan: First Kill",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 868
    },
    {
      "adult": false,
      "id": 718930,
      "original_language": "en",
      "original_title": "Bullet Train",
      "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
      "popularity": 5159.444,
      "poster_path": "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
      "release_date": "2022-07-03",
      "title": "Bullet Train",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 1407
    },
    {
      "adult": false,
      "id": 985939,
      "original_language": "en",
      "original_title": "Fall",
      "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      "popularity": 4251.746,
      "poster_path": "https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      "release_date": "2022-08-11",
      "title": "Fall",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 1224
    },
    {
      "adult": false,
      "id": 429473,
      "original_language": "en",
      "original_title": "Lou",
      "overview": "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets of their past.",
      "popularity": 3143.908,
      "poster_path": "https://image.tmdb.org/t/p/w500/djM2s4wSaATn4jVB33cV05PEbV7.jpg",
      "release_date": "2022-09-23",
      "title": "Lou",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 182
    },
    {
      "adult": false,
      "id": 642885,
      "original_language": "en",
      "original_title": "Hocus Pocus 2",
      "overview": "It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.",
      "popularity": 2552.97,
      "poster_path": "https://image.tmdb.org/t/p/w500/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
      "release_date": "2022-09-27",
      "title": "Hocus Pocus 2",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 395
    },
    {
      "adult": false,
      "id": 916605,
      "original_language": "en",
      "original_title": "The Infernal Machine",
      "overview": "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
      "popularity": 2434.971,
      "poster_path": "https://image.tmdb.org/t/p/w500/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
      "release_date": "2022-09-23",
      "title": "The Infernal Machine",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 39
    },
    {
      "adult": false,
      "id": 760741,
      "original_language": "en",
      "original_title": "Beast",
      "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
      "popularity": 2132.432,
      "poster_path": "https://image.tmdb.org/t/p/w500/xIGr7UHsKf0URWmyyd5qFMAq4d8.jpg",
      "release_date": "2022-08-11",
      "title": "Beast",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 567
    },
    {
      "adult": false,
      "id": 532639,
      "original_language": "en",
      "original_title": "Pinocchio",
      "overview": "A wooden puppet embarks on a thrilling adventure to become a real boy.",
      "popularity": 1949.134,
      "poster_path": "https://image.tmdb.org/t/p/w500/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
      "release_date": "2022-09-07",
      "title": "Pinocchio",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 834
    },
    {
      "adult": false,
      "id": 616037,
      "original_language": "en",
      "original_title": "Thor: Love and Thunder",
      "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      "popularity": 1537.403,
      "poster_path": "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date": "2022-07-06",
      "title": "Thor: Love and Thunder",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 4025
    },
    {
      "adult": false,
      "id": 629176,
      "original_language": "en",
      "original_title": "Samaritan",
      "overview": "Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
      "popularity": 1446.477,
      "poster_path": "https://image.tmdb.org/t/p/w500/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg",
      "release_date": "2022-08-25",
      "title": "Samaritan",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 1228
    },
    {
      "adult": false,
      "id": 882598,
      "original_language": "en",
      "original_title": "Smile",
      "overview": "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      "popularity": 1418.193,
      "poster_path": "https://image.tmdb.org/t/p/w500/hiaeZKzwsk4y4atFhmncO5KRxeT.jpg",
      "release_date": "2022-09-23",
      "title": "Smile",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 80
    },
    {
      "adult": false,
      "id": 975120,
      "original_language": "es",
      "original_title": "Padre no hay mas que Uno 3",
      "overview": "Christmas is coming. The children accidentally break a Nativity scene figurine from their father's collection and must by all means get an equal one, the problem is that it is a unique antique piece. Sara, the eldest daughter breaks up with her boyfriend, Ocho, who will try to recover her favors with the help of her father-in-law, Javier. Precisely Javier's father-in-law, Marisa's father, will be welcomed into the family home to spend the holidays after her recent separation, which will not leave Javier's mother, Milagros, indifferent. Rocío, the folklore of the family, who has been playing the Virgin for several Christmases, is relegated this year to playing the shepherdess, something that her father, Javier, is not willing to assume.",
      "popularity": 1350,
      "poster_path": "https://image.tmdb.org/t/p/w500/bb7mPVCKVPGFM0NTqd5JmqqI4gu.jpg",
      "release_date": "2022-07-15",
      "title": "Father There Is Only One 3",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 74
    },
    {
      "adult": false,
      "id": 766507,
      "original_language": "en",
      "original_title": "Prey",
      "overview": "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
      "popularity": 1327.653,
      "poster_path": "https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
      "release_date": "2022-08-02",
      "title": "Prey",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 4186
    },
    {
      "adult": false,
      "id": 539681,
      "original_language": "en",
      "original_title": "DC League of Super-Pets",
      "overview": "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
      "popularity": 1277.439,
      "poster_path": "https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
      "release_date": "2022-07-27",
      "title": "DC League of Super-Pets",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 726
    },
    {
      "adult": false,
      "id": 921360,
      "original_language": "en",
      "original_title": "Wire Room",
      "overview": "New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.",
      "popularity": 1230.015,
      "poster_path": "https://image.tmdb.org/t/p/w500/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg",
      "release_date": "2022-09-02",
      "title": "Wire Room",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 88
    },
    {
      "adult": false,
      "id": 507086,
      "original_language": "en",
      "original_title": "Jurassic World Dominion",
      "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      "popularity": 1190.224,
      "poster_path": "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date": "2022-06-01",
      "title": "Jurassic World Dominion",
      "video": false,
      "vote_average": 7,
      "vote_count": 3539
    },
    {
      "adult": false,
      "id": 579974,
      "original_language": "te",
      "original_title": "రౌద్రం రణం రుధిరం",
      "overview": "A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.",
      "popularity": 1171.007,
      "poster_path": "https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
      "release_date": "2022-03-24",
      "title": "RRR",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 400
    },
    {
      "adult": false,
      "id": 999205,
      "original_language": "en",
      "original_title": "Stowaway",
      "overview": "A tenacious party girl fights to survive after three thieves commandeer her luxury yacht. Unable to escape and trapped on the yacht at high seas, the prey becomes the hunter as she turns the tables on the intruders and takes matters into her own hands.",
      "popularity": 1169.726,
      "poster_path": "https://image.tmdb.org/t/p/w500/1RmugOkBFU5eXu1dbr1zdxChLfQ.jpg",
      "release_date": "2022-08-31",
      "title": "Stowaway",
      "video": false,
      "vote_average": 4.8,
      "vote_count": 10
    },
    {
      "adult": false,
      "id": 610150,
      "original_language": "ja",
      "original_title": "ドラゴンボール超 スーパーヒーロー",
      "overview": "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      "popularity": 1138.045,
      "poster_path": "https://image.tmdb.org/t/p/w500/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      "release_date": "2022-06-11",
      "title": "Dragon Ball Super: Super Hero",
      "video": false,
      "vote_average": 8,
      "vote_count": 1815
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  triggerEventInParetnt(id:any){
    console.log(id)
    console.log('COMING FROM CHILD')
  }
}
