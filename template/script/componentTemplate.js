var fs = require("fs");

var myArgs = process.argv.slice(2);
var inputParameter = myArgs[0];

if (!inputParameter) {
    console.log("Example usage:");
    console.log("  npm newcomponent <componentName>");
    console.log("  node template/script/componentTemplate.js <componentName>");
    console.log("  node template/script/componentTemplate.js <parentComponentFolder>/<componentName>");
    return 0
}

var outDir = "./src/components/"

var folderStructure = inputParameter.split('/');
if (folderStructure.length > 1){
    folderStructure.forEach((dir, index) => {
        if (index < folderStructure.length - 1) {
            outDir += `${dir}/`;
        } else {
            outDir += dir
        }
    })
    var componentName = folderStructure[folderStructure.length-1];
} else {
    outDir += folderStructure[0];
    var componentName = folderStructure[0];
}

var regex = RegExp('^[a-z]([A-Z0-9]|[a-z])*$', 'g');
if (!regex.test(componentName)) {
    console.log(`Error: input component name "${componentName}" is not in cameal case`)
    return 0
}

var componentNameUpperCase = componentName.charAt(0).toUpperCase() + componentName.slice(1);

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

var fileExtension = ["sass", "spec.tsx", "stories.tsx", "tsx"];

fileExtension.forEach((extension) => {
    fs.readFile(`template/component/template.${extension}`, "utf8", (err, data) => {
        if (err) throw err;
    
        var result = data.replace(/template/g, componentName).replace(/Template/g, componentNameUpperCase);
        fs.writeFile(`${outDir}/${componentName}.${extension}`, result, "utf8", err => {
            if (err) return console.log(err);
        });
    });
});
