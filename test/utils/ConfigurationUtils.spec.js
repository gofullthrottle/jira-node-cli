const expect = require('chai').expect;
const ConfigurationUtils = require('../../lib/utils/ConfigurationUtils');

describe('Configuration', () => {
  it('should be stored in .jirarc file', () => {
    expect(ConfigurationUtils.CONFIGURATION_FILE_PATH).to.equal(`${process.env.HOME}/.jirarc`);
  });
});
