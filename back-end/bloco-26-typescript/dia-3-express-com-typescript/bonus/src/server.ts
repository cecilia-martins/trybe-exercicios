import { app } from "./app";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Funfando na https://localhost:${PORT}`);
});

process.on('SIGINT', () =>{
  server.close();
  console.log('App interrompido :)');
})