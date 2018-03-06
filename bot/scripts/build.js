require("./install_dependencies");

//This script generates an executable with a custom icon
//See https://github.com/zeit/pkg/issues/91#issuecomment-365205915

const fs = require("fs");
const resourceHacker = require("node-resourcehacker");
const execSync = require("child_process").execSync;

const exeName = "bot.exe";
const customIconPath = __dirname + "/icon.ico";
const resourceHackerPath = __dirname + "/resource_hacker.zip"; //This file must exist, if not download it at http://www.angusj.com/resourcehacker/resource_hacker.zip
const originalPkgPrecompiledBinaries =
  __dirname + "/pkg-cache/v2.5/fetched-v6.11.5-win-x64.original";
const customizedPkgPrecompiledBinaries =
  __dirname + "/pkg-cache/v2.5/fetched-v6.11.5-win-x64";

process.env["SOURCE_RESOURCE_HACKER"] = resourceHackerPath;

console.log("Download pkg precompiled libraries");
downloadOriginalPkgPrecompiledBinaries();
console.log("Customize pkg precompiled libraries");
customizePkgPrecompiledBinaries();
console.log("Build customized executables");
buildCustomizedExecutables();
console.log("Done");

function downloadOriginalPkgPrecompiledBinaries() {
  if (!fs.existsSync(originalPkgPrecompiledBinaries)) {
    executePkg("temp.exe");
    //Add .original extension
    fs.renameSync(
      customizedPkgPrecompiledBinaries,
      originalPkgPrecompiledBinaries
    );
    //Remove temp.exe
    fs.unlinkSync("temp.exe");
  }
}

function customizePkgPrecompiledBinaries() {
  resourceHacker(
    {
      operation: "addoverwrite",
      input: __dirname + "/pkg-cache/v2.5/fetched-v6.11.5-win-x64",
      output: __dirname + "/pkg-cache/v2.5/fetched-v6.11.5-win-x64",
      resource: customIconPath,
      resourceType: "ICONGROUP",
      resourceName: "1"
    },
    err => {
      if (err) {
        return console.error(err);
      }
    }
  );
}

function buildCustomizedExecutables() {
  executePkg(exeName);
}

function executePkg(exeName) {
  execSync(
    "yarn run cross-env PKG_CACHE_PATH=" +
      __dirname +
      "/pkg-cache pkg " +
      __dirname +
      "/start.js --target win --output " +
      exeName
  );
}
