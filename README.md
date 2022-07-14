# NavbarComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## How can I create and publish an Angular component to NPM?

* ### Sign up to npm
The first thing you need to publish an Angular component to npm is an npm account, you can sign up for free.

* ### Install Node & npm
You probably already have it installed if you have created projects in Angular.

* ### Install the Angular CLI

Also, you probably already have it installed.

Install the Angular CLI globally with command `npm i -g @angular/cli`

* ### Create a new workspace for your Angular component project
Create a new Angular workspace with the command `ng new <workspace-name> --create-application=false`

The --create-application=false flag prevents a default Angular application project from being created, because you'll be creating a library project for your component.

Then navigate into the workspace folder with the command `cd <workspace-name>`

* ### Create a new Angular library project

Create a new library project for your component with the command `ng generate library <project-name>` (from inside the workspace folder)

* ### Remove unused files from project
The generated Angular library project comes with a component and a service, so if you only need a component you can delete the service and associated files with the following steps:

-> Delete the service file `projects/<project-name>/src/lib/<project-name>.service.ts`

-> Delete the service test file `projects/<project-name>/src/lib/<project-name>.service.spec.ts`

-> Update the public api file `projects/<project-name>/src/public-api.ts` to remove the reference to the deleted service file

* ### Update the Angular component with your code
Replace the generated Angular component with the custom component that you want to publish to npm.

As an example, below is the component code for the lidias-navigation-bar npm package that I published:

<img width="607" alt="Captura de Pantalla 2022-07-13 a las 20 52 12" src="https://user-images.githubusercontent.com/72071118/178810734-19b7516b-aafa-4ecc-a692-9ad38128e7ae.png">


* ### Build your Angular component

Run the command `ng build <project-name>` from your workspace folder to build your component, the output files are created in the dist/<project-name> folder.

* ### Login to the npm registry with the npm cli
Run `npm login` from the command line and enter the credentials that you used to sign up to npmjs.com in the first step.

* ### Publish your Angular component to npm!
Navigate to the project dist folder with the command `cd dist/<project-name>`

Run the command `npm publish` to publish the component the npm.

And that's it!
We already have our angular component published in npm: https://www.npmjs.com/package/lidias-navigation-bar

<hr>

This page was a great help to me: https://jasonwatmore.com/post/2020/06/16/angular-npm-how-to-publish-an-angular-component-to-npm

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


