import { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: [
    'jasmine-core                   ',
    'karma-chrome-launcher          ',
    'karma-coverage                 ',
    'karma-jasmine                  ',
    'karma-jasmine-html-reporter    ',
  ],
};

export default config;
