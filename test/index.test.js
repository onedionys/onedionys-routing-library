const assert = require('assert');
const Router = require('../src/router');

describe('Router', function() {
  it('should navigate to the correct route', function() {
    const router = new Router();
    let testValue = '';

    router.addRoute('/home', function() {
      testValue = 'Home Page';
    });

    router.navigate('/home');
    assert.strictEqual(testValue, 'Home Page');
  });

  it('should handle route not found', function() {
    const router = new Router();
    let testValue = '';

    router.addRoute('/about', function() {
      testValue = 'About Page';
    });

    router.navigate('/contact');
    assert.strictEqual(testValue, '');
  });
});
