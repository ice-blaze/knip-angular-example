import { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['./src/main.ts'],
  ignoreDependencies: [
    '@angular-devkit/build-angular  ',
    '@angular/compiler-cli          ',
    '@types/jasmine                 ',
    'jasmine-core                   ',
    'karma                          ',
    'karma-chrome-launcher          ',
    'karma-coverage                 ',
    'karma-jasmine                  ',
    'karma-jasmine-html-reporter    ',
  ],
};

export default config;
