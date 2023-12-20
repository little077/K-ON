const fs = require('fs');
const path = require('path');
function importAndUseRoutesFromFolder(folderPath) {
  let Path = folderPath===undefined?path.resolve(__dirname,"../router"):folderPath
  const files = fs.readdirSync(Path);
  files.forEach((file) => {
    const filePath = path.join(Path, file);
    const routes = require(filePath);
    this.use(routes.routes());
    this.use(routes.allowedMethods());
  });
}

module.exports = importAndUseRoutesFromFolder;