export const uri = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
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
