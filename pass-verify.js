const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin12345';
  const hash = '$2b$10$SbdsmdnzN2YXjzD2rdfhn.RKi/n0iEXU7mJlzSB2HNSQE.sGYikXm';
  const isMatch = await bcrypt.compare(myPassword, hash); 
  console.log(isMatch);
};

verifyPassword();