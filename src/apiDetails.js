export const uri = 'https://swapi.apis.guru/';
export const query = `
  query GetStarships($items: Int!) {
    allStarships(first: $items) {
      totalCount
      starships {
        name
        manufacturers
        costInCredits
        id
      }
    }
  }
`;
