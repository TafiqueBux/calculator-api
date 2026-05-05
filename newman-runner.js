const newman = require('newman');
const path = require('path');
const fs = require('fs');

// Create reports folder if it doesn't exist
if (!fs.existsSync('reports')) fs.mkdirSync('reports');

newman.run({
    collection: require('./collections/calculator.json'),
    environment: require('./environments/dev.json'),
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
            export: './reports/report.html',
            title: 'Calculator API Test Report',
            browserTitle: 'Calculator Tests',
            showOnlyFails: false,
        }
    }
}, (err, summary) => {
    if (err) throw err;
    console.log('Tests complete. Report saved to reports/report.html');
});