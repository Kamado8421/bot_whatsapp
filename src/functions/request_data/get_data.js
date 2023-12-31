const fs = require('fs');

const config_woner = JSON.parse(fs.readFileSync('data/admin/owner.json', 'utf-8'));

module.exports = {
    config_woner
};
