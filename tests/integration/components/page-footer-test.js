import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | page-footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{page-footer}}`);

    const text = this.element.textContent.trim();
    assert.ok(text.includes("This project is developed and maintained by Jonathan Zisser."));
    assert.ok(text.includes("You can find all of my projects on Github."));
    assert.ok(text.includes("If you like my work and would like to support me in a personal way, you can donate through PayPal."));
    assert.ok(text.includes("All tips are optional but greatly appreciated!"));
  });
});
