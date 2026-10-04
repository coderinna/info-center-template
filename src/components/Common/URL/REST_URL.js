
const isProd = import.meta.env.PROD

const  REST_URL = {
  origin: !isProd
    ? 'https://localhost:3001/api/rest' 
    : 'https://backend.info_center_template.com/rest',
} 

  export default  REST_URL;
  
