const PORT = process.env.PORT || 5000;
const corsOptionsAllowedAll = {
  origin:'http://localhost:3000',
  allowedHeaders: ['Content-Type'],
};

export { PORT };
export { corsOptionsAllowedAll };
