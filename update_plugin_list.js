const glob = require("glob");
const fs = require('fs');

const data = {
    "metadata": {
        "author": "ngatngay",
        "description": "ngatngay vbook extensions"
    },
    "data": []
};

var files = glob.sync("*/*.json");

files.forEach((file) => {
    let raw_data = fs.readFileSync(file, {encoding: 'utf8'});
    let plugin_detail = JSON.parse(raw_data);

    data.data.push({
        "source": plugin_detail['metadata']['source'],
        "name": plugin_detail['metadata']['name'],
        "description": plugin_detail['metadata']['description'],

        "author": plugin_detail['metadata']['author'],
        "version": plugin_detail['metadata']['version'],
        "type": plugin_detail['metadata']['type'],
        "locale": plugin_detail['metadata']['locale'],

        "icon": plugin_detail['metadata']['icon'],
        "path": plugin_detail['metadata']['path'],
    });
});


fs.writeFileSync('plugin.json', JSON.stringify(data));