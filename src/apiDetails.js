export const uri = 'https://swapi.apis.guru/';
export const query = `
  query GetSpaceships($items: Int!) {
    allStarships(first: $items) {
      starships {
        name
        manufacturers
        costInCredits
      }
    }
  }
`;
