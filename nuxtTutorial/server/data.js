export const users = [
  {
    username: 'mitch',
    password: 'swordfish',
    animals: ['alpaca.jpg', 'cow.jpg', 'pony.jpg'],
  },
  {
    username: 'sidney',
    password: '12345',
    animals: ['amphibian.jpg', 'amphibian.jpg', 'amphibian.jpg'],
  },
];

export function findUserWithUsername(soughtUsername) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].username == soughtUsername) {
      return users[i];
    }
  }
  return null;
}
