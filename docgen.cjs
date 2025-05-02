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
      acc[name] = {
        type: prop.type.name,
        required: prop.required,
        defaultValue: prop.defaultValue?.value || null,
        description: prop.description || ''
      };
      return acc;
    }, {});

    console.log(component.tags)
  result[component.displayName] = {
    tags: component.tags || {},
    props: filteredProps
  };
});

fs.mkdirSync('docs/json', { recursive: true });
fs.writeFileSync('docs/json/output.json', JSON.stringify(result, null, 2), 'utf-8');
console.log('✅ Output written to docs/json/output.json');