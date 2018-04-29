[![Build Status](https://travis-ci.org/smart-dashboard/angular-dashboard.svg?branch=master)](https://travis-ci.org/smart-dashboard/angular-dashboard)


# Angular 5 Iot Dashboard

Angular 5 Dashboard is a management dashboard for many purposes, focused on IoT, smart home, and autonomy.
This project, is a fully functional app and is hosted on `esam.io` as an enterprise product. We are sharing many components and our workflow here inside this repository.

This project can be used for Internet of things, reporting dashboard, user management, live monitoring and other other 
dashboard based projects for angular.

We will continously update the workflow of the application. You can use components from this project and get inspired how
an intellgence dashboard can be working.
Either you can fork this project, or build your own app, and import components from this repository.

Please try to keep components as untouched as possible if you want to get the weekly updates and improvements. In case your business logic is different from the way we are implementing ours, try to consult with us to build your own version,
and still get benefit of minor and major features from our developers and contributors.

keywords: Angular 6 Dashboard, Angular 5 Dashboard, Angular 4 Dashboard, Angular 2 Dashboard, Internet of things Angular 2, Realtime Angular App, Socket Angular App, Iot Dashboard using Angular, Interactive dashboard, Realtime Console,Realtime Console Angular.

# Stable enterprise features
We list our stable features that are working as enterprise level inside the application.

* User signup
* User signin
* User password reset
* Recieve incoming RESTful requests from devices (Arduino, Raspberry Pi)
* Create devices and managing them
* Interactive documentation for the api
* Create places and locations based on name and level
* Display realtime value in dashboard
* Mobile version support using cordova
* Collect user contact information for technical reasons.
* Manage user profiles

# Experimental features
* Add conditions for changing devices
* Read devices geographical location for Mobile version


# Supported languages

We are trying to cover as many as languages as possible. At the moment we do cover:

* English (United States)
* Polish (Poland)

Please feel free to contribute to this repository in case you want to add your language.

## Right to left Support

We do support RTL layout but some components are not integrated that well. Our focus was on layout, direction and etc.
We do support Persian language at the moment as experimental, and it's not provided in commercial version.
Marketting team would choose either if they want new languages or regions and it's out of the scope.

Currently supporting experimental

* Polish ( Poland )
* Persian ( Iran )
* English ( World Wide )

Target to support languages:

* Arabic (United Arab Emirates, Egypt)
* Turkish ( Turkey )
* German ( Germany, Austria )
* Spanish ( Spain )

Please feel free to contribute to the locales for your own country.

![Angular Iot Dashboard | Angular 5 Dashboard | Realtime Dashboard](angular-iot-dashboard.gif "Angular Iot Dashboard | Angular 5 Dashboard | Realtime Dashboard")


# Angular 6 Support
We are looking forward for angular 6 release to be of first people who are providing dashboard for Angular 6.
At the moment, all components are based on Angular 5.x

## Technical stack

* Project is based on Angular 5 and angular CLI. For developing please use `npm start` which also provides HMR, and for production level we use `npm run build`, which calls `ng *` tasks directly.
Please review the package.json for different building environments. *This application can be run without any api or microservices, all endpoints having interactive mocks*. Since each customer might need a different way of building the application, we just put building examples.
In case you are distributing this app again for your own purposes, please make your own environments and add them to `.angular-cli.json` file, and update the package, respectively.

* We are using highcharts library for our charts. For any incoming pull requests that containing other chart libraries, please open an issue first and describe why it's not possible to do it using highcharts.
* `lodash`, and `ngrx` store are used heavily for data flow.
* Async/Await concepts are everywhere since project is a realtime dashboard
* We are not supporting unit tests. We only use integration/e2e tests using cypress, and it will be run for each pull request. In case of heavy calculation or sensitive data implementation that requires unit testing, move it to other
package, publish it to npm and then install it inside this repository.

* Project demo is stored on github pages; https://owsolutions.github.io/angular5-iot-dashboard Hence we are commiting the dist directory for each build and given that, our dist folder is not necessarily the production. Nevertheless you need to build this application for yourself, since our configuration is different.

# Mobile version ( Experimental )
This application also will be bundled into a cordova app for Android applications. We put the apk files into github releases, which are not signed. Please feel free to sign them by your own keystore.

Read about signing a apk file here:
https://stackoverflow.com/questions/10930331/how-to-sign-an-already-compiled-apk

then, you can publish it or install it for test purposes. Please notice that we build our apk with mock data,
so that app is not connected to any remote server and is only, for testing and demonstration purposes.
Please fork the app, and update or CI/CD to build with your endpoint address or extra configuration.

## Live preview

You can see the latest deploy here: [https://owsolutions.github.io/angular5-iot-dashboard](https://owsolutions.github.io/angular5-iot-dashboard)

We are hosting demo version on github. For enterprise version, please contact us.

## Contribution guide
We are so much excited to receive Pull-Requests from you. There are some simple rules that we follow in our project:

* Please no comments on functions unless it's really necessary. Please refer to this article for reason: https://bradt.ca/blog/useless-code-comments/
* Open an issue for your pull request, and start your branch name with this format: `issue/[number]-this-is-my-branch` so we can track the issue until we close it.
* Make sure your code passes tests, linting and e2e tests. For new functionality, please add abundant tests.

## Copywrite
This project is free for educational usage, code review and non-commercial usage. For enterprise/commercial usage, you need to obtain a license and please contact us at connexion.founder@outlook.com
