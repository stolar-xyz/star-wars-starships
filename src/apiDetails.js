export const uri = 'https://swapi.apis.guru/';
export const query = `
  query GetStarships($items: Int!) {
    allStarships(first: $items) {
      starships {
        name
        manufacturers
        costInCredits
      }
    }
  }
`;
