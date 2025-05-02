const fs = require('fs');
const path = require('path');
const parser = require('react-docgen-typescript').withDefaultConfig();
const docs = parser.parse('src/index.tsx');
const result = {};

docs.forEach((component) => {
    const props = component.props || {};

    const filteredProps = Object.entries(props)
        .filter(([_, prop]) => !prop.parent) // Exclude HTML native props
        .reduce((acc, [name, prop]) => {
            // console.log(props)
            let defaultValue = '-'

            if (prop.defaultValue) {
                defaultValue = prop.defaultValue.value;

                if (typeof defaultValue === 'boolean') {
                    defaultValue = defaultValue.toString();
                }
            }
            acc[name] = {
                type: prop.type.name,
                required: prop.required,
                defaultValue,
                description: prop.description || ''
            };
            return acc;
        }, {});

    result[component.displayName] = {
        tags: component.tags || {},
        props: filteredProps
    };
});

fs.mkdirSync('docs/json', {recursive: true});
fs.writeFileSync('docs/json/output.json', JSON.stringify(result, null, 2), 'utf-8');
console.log('✅ Output written to docs/json/output.json');