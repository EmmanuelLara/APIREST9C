const CONFIG = require('./app/config/configuracion');
const app = require('./app/app');



app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
});