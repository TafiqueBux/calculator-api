const newman = require('newman');
const fs = require('fs');

const COLLECTION = 'collections/calculator.postman_collection.json';
const ENVIRONMENT = 'environments/dev.postman_environment.json';
const REPORT_DIR = 'reports';
const REPORT_FILE = `${REPORT_DIR}/report.html`;

// Ensure reports folder exists
if (!fs.existsSync(REPORT_DIR)) {
fs.mkdirSync(REPORT_DIR);
}

// Run Newman
newman.run({
collection: require(`./${COLLECTION}`),
environment: require(`./${ENVIRONMENT}`),
reporters: ['cli', 'html'],
reporter: {
html: {
export: REPORT_FILE
}
}
}, function (err, summary) {

```
if (err) {
    console.error('❌ Error running collection:', err);
    process.exit(1);
}

const failures = summary.run.failures;

if (failures.length > 0) {
    console.error(`❌ Tests failed: ${failures.length}`);

    failures.forEach((fail, index) => {
        console.error(`\n${index + 1}. ${fail.source.name}`);
        console.error(`   Error: ${fail.error.message}`);
    });

    process.exit(1);
} else {
    console.log('✅ All tests passed successfully!');
    process.exit(0);
}
```

});
