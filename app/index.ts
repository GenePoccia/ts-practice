import { Registry } from "./registry";

const app = new Registry();
app.getApp().then(server => {
  server.listen(4001, () => {
    console.log(`Project is live on port ${4001}`);
  });
});
