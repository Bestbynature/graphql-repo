let games = [
  {
    id: 1,
    title: "The Legend of Zelda: Ocarina of Time",
    platform: ["Nintendo 64", "Nintendo GameCube"],
  },
  {
    id: 2,
    title: "Super Mario 64",
    platform: ["Nintendo 64", "Xbox 360"],
  },
  {
    id: 3,
    title: "GoldenEye 007",
    platform: ["Switch", "Ps5", "PC"],
  },
  {
    id: 4,
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Switch"],
  },
  {
    id: 5,
    title: "Super Mario Odyssey",
    platform: ["Switch"],
  },
];

let authors = [
  {
    id: 1,
    name: "John Doe",
    verified: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    verified: false,
  },
  {
    id: 3,
    name: "John Smith",
    verified: true,
  },
  {
    id: 4,
    name: "Jane Smith",
    verified: false,
  },
];

let reviews = [
  {
    id: 1,
    rating: 1,
    comment: "This game is terrible",
    author_id: 1,
    game_id: 1,
  },
  {
    id: 2,
    rating: 2,
    comment: "This game is bad",
    author_id: 2,
    game_id: 2,
  },
  {
    id: 3,
    rating: 3,
    comment: "This game is not good",
    author_id: 3,
    game_id: 3,
  },
  {
    id: 4,
    rating: 4,
    comment: "This game is okay",
    author_id: 4,
    game_id: 4,
  },
  {
    id: 5,
    rating: 5,
    comment: "This game is good",
    author_id: 1,
    game_id: 5,
  },
  {
    id: 6,
    rating: 6,
    comment: "This game is great",
    author_id: 2,
    game_id: 1,
  },
  {
    id: 7,
    rating: 7,
    comment: "This game is amazing",
    author_id: 3,
    game_id: 2,
  },
];

export default { games, authors, reviews };
