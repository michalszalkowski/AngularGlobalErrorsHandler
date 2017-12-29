# Page
- http://blog.michalszalkowski.com/java-script/angular-global-error-handler/

# Setup
- nmp install

# Serve
- ng serve --watch true --poll 100 --host 0.0.0.0 --port 4200 -o

# What was used

ng new AngularGlobalErrorsHandler
ng g s post
ng g c post


# Docker

- http://blog.michalszalkowski.com/docker/angular-cli-in-docker/
- docker run -it -p 4200:4200 -u szalek:szalek -v /home/szalek/Workspace/Angular[GitHub]:/home/szalek/Workspace szalek/angular-cli

# AngularGlobalErrorsHandler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
