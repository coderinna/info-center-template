import { client, gql } from '../../Server/services.js';

const getWP = async () => {

const WP_QUERY = gql`
  query GetWP($page: Int!, $perPage: Int!) {

    getWP(page: $page, perPage: $perPage) {

      hasNextPage
      currentPage
      totalPages

      posts {
        id
        slug

        title {
          rendered
        }
      }
    }
  }
`;

  try {

    const { data } = await client.query({
      query: WP_QUERY,
  variables: { page: 1, perPage: 10 }
    });

    return data?.getWP;

  } catch (error) {

    throw new Error(
      error.message || 'Error fetching WordPress data.'
    );
  }
};

export default {
  getWP
};