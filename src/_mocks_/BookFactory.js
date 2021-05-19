import faker from 'faker';

export function BookFactory() {
  return {
    _id: faker.datatype.uuid(),
    name: faker.lorem.words(),
    numberOfPages: faker.datatype.number({ max: 300, min: 50 }),
    image: faker.image.image(),
    rating: faker.datatype.number({ max: 5, min: 1 }),
    author: AuthorFactory(),
    review: Array(faker.datatype.number({ min: 0, max: 4 })).fill(ReviewFactory(), 0),
  };
}

export function AuthorFactory() {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.country(),
    image: faker.image.people(),
    // writterBooks: Array(faker.datatype.number({ min: 0, max: 4 })).fill(
    //   BookFactory(),
    //   0
    // ),
  };
}

export function ReviewFactory() {
  return {
    _id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    owner: UserFactory(),
  };
}

export function UserFactory() {
  return {
    _id: faker.datatype.uuid(),
    userName: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatar: faker.image.avatar(),
  };
}

export function BookListFactory(n = 20) {
  return [...new Array(n)].map(BookFactory);
}
