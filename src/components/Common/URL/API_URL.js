const API_URL = {
  origin: import.meta.env.PROD
    ? "https://backend.info_center_template.com/graphql"
    : 'https://localhost:3001/api/graphql',
}

export default API_URL;