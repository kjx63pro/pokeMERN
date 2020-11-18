const pokemons = [
  {
    name: 'Bulbasaur',
    image: '/images/Bulbasaur.png',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    types: ['Grass', 'Poison'],
    price: 2.99,
    countInStock: 10,
    rating: 3.9,
    numReviews: 12,
  },
  {
    name: 'Ivysaur',
    image: '/images/Ivysaur.png',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    types: ['Grass', 'Poison'],
    price: 4.99,
    countInStock: 7,
    rating: 2.6,
    numReviews: 8,
  },
  {
    name: 'Venusaur',
    image: '/images/Venusaur.png',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    types: ['Grass', 'Poison'],
    price: 7.99,
    countInStock: 3,
    rating: 4.1,
    numReviews: 9,
  },
  {
    name: 'Charmander',
    image: '/images/Charmander.png',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    types: ['Fire'],
    price: 2.99,
    countInStock: 12,
    rating: 2.7,
    numReviews: 14,
  },
  {
    name: 'Charmeleon',
    image: '/images/Charmeleon.png',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    types: ['Fire'],
    price: 4.99,
    countInStock: 8,
    rating: 1.7,
    numReviews: 0,
  },
  {
    name: 'Charizard',
    image: '/images/Charizard.png',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    types: ['Fire', 'Flying'],
    price: 7.99,
    countInStock: 1,
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: 'Squirtle',
    image: '/images/Squirtle.png',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    types: ['Water'],
    price: 2.99,
    countInStock: 9,
    rating: 4.6,
    numReviews: 21,
  },
  {
    name: 'Wartortle',
    image: '/images/Wartortle.png',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    types: ['Water'],
    price: 4.99,
    countInStock: 6,
    rating: 3.9,
    numReviews: 8,
  },
  {
    name: 'Blastoise',
    image: '/images/Blastoise.png',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    types: ['Water'],
    price: 7.99,
    countInStock: 0,
    rating: 4.4,
    numReviews: 15,
  },
  {
    name: 'Caterpie',
    image: '/images/Caterpie.png',
    description:
      'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
    types: ['Bug'],
    price: 0.19,
    countInStock: 20,
    rating: 1.5,
    numReviews: 3,
  },
  {
    name: 'Metapod',
    image: '/images/Metapod.png',
    description:
      'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
    types: ['Bug'],
    price: 0.29,
    countInStock: 15,
    rating: 1.1,
    numReviews: 1,
  },
  {
    name: 'Butterfree',
    image: '/images/Butterfree.png',
    description:
      'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
    types: ['Bug', 'Flying'],
    price: 1.59,
    countInStock: 7,
    rating: 2.9,
    numReviews: 3,
  },
  {
    name: 'Weedle',
    image: '/images/Weedle.png',
    description:
      'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.',
    types: ['Bug', 'Poison'],
    price: 0.19,
    countInStock: 20,
    rating: 1.5,
    numReviews: 3,
  },
  {
    name: 'Kakuna',
    image: '/images/Kakuna.png',
    description:
      'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy',
    types: ['Bug', 'Poison'],
    price: 0.29,
    countInStock: 15,
    rating: 1.1,
    numReviews: 1,
  },
  {
    name: 'Beedrill',
    image: '/images/Beedrill.png',
    description:
      'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly',
    types: ['Bug', 'Poison'],
    price: 1.59,
    countInStock: 7,
    rating: 2.9,
    numReviews: 3,
  },
  {
    name: 'Pidgey',
    image: '/images/Pidgey.png',
    description:
      'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.',
    types: ['Normal', 'Flying'],
    price: 2.59,
    countInStock: 10,
    rating: 2.2,
    numReviews: 4,
  },
  {
    name: 'Pidgeotto',
    image: '/images/Pidgeotto.png',
    description:
      'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.',
    types: ['Normal', 'Flying'],
    price: 4.99,
    countInStock: 8,
    rating: 3.2,
    numReviews: 10,
  },
  {
    name: 'Pidgeot',
    image: '/images/Pidgeot.png',
    description:
      'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.',
    types: ['Normal', 'Flying'],
    price: 6.99,
    countInStock: 2,
    rating: 3.9,
    numReviews: 8,
  },
  {
    name: 'Rattata',
    image: '/images/Rattata.png',
    description:
      'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.',
    types: ['Normal'],
    price: 0.09,
    countInStock: 30,
    rating: 0.9,
    numReviews: 21,
  },
  {
    name: 'Raticate',
    image: '/images/Raticate.png',
    description:
      'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.',
    types: ['Normal'],
    price: 1.99,
    countInStock: 6,
    rating: 1.9,
    numReviews: 3,
  },
];

export default pokemons;
