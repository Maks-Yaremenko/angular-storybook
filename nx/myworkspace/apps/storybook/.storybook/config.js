import { configure, addDecorator } from '@storybook/angular';
import { withTests } from '@storybook/addon-jest';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import results from '../jest-test-results.json';


// should only be added once
// best place is in config.js
addDecorator(withA11y)

// addDecorator(withInfo);

addDecorator(
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
  })
);

const req = require.context('../src/stories', true, /\.stories\.ts$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);