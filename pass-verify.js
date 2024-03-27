const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin12345';
  const hash = '$2b$10$tD4B50/FmUiN2qpw2bgjNuENpFAZh5qsUpATd8sAmyUhz4ZCdhogK';
  const isMatch = await bcrypt.compare(myPassword, hash); 
  console.log(isMatch);
};

verifyPassword();