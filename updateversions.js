// get version string from command line
const cmdArgs = process.argv.slice(2);
version = cmdArgs[0];

function updatePackageVersion(version_str, package_folder) {
    let pkg=require(package_folder + '/package.json');
    pkg.version=version_str;
    require('fs').writeFileSync(package_folder + '/package.json', JSON.stringify(pkg, null, 2));
}

package_folders = [ '.' , './frontend' ]
for (let i = 0; i < package_folders.length; i++) {
    updatePackageVersion(version, package_folders[i])
}
