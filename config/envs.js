const envs = {
  API: process.env.API || 'https://api.themoviedb.org/3',
  API_KEY: process.env.API_KEY || 'd06707693decf1df8d46a4162bf1fbb9',
  IMAGE_API:
    process.env.IMAGE_API ||
    'https://www.themoviedb.org/t/p/w220_and_h330_face/',
};

export default envs;
