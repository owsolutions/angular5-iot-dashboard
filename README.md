[![Build Status](https://travis-ci.org/smart-dashboard/angular-dashboard.svg?branch=master)](https://travis-ci.org/smart-dashboard/angular-dashboard)


# Smart angular dashboard ( Angular Iot Dashboard )
Angular 5 Dashboard is a management dashboard for many purposes, focused on IoT, smart home, and autonomous.
This project, is a fully functional app and is being used in some Iot infrastructure, as well as a hosted service.
We will continously update the workflow of the application. You can use components from this project and get inspired how
an intellgence dashboard can be working.
Either you can fork this project, or build your own app, and import components from this repository.

Please try to keep components as untouched possible if you want to get the weekly updates and improvements. In case your
business logic is different from the way we are implementing ours, try to consult with us to build your own version,
and still get benefit of minor and major features from our environment.

keywords: Angular 5 Dashboard, Angular 4 Dashboard, Iot Dashboard using Angular, Interactive dashboard, Realtime Console,Realtime Console Angular.

# Stable Features
We list our stable features that are working as enterprise level inside the application.

* User signup
* User signin
* User customizable dashboard
* Managing locations, create and search, and assign devices
* Connect devices using REST api, connect and integrate them in dashboard
* Interactive documentation for the api
* Mobile version support using cordova


![Smart home app](screenshot-2.png "Smart home app")


## Technical stack

* Project is based on Angular 5 and angular CLI. For developing, we've added `npm run hmr` to provide hot reloading, but for production level we use `npm run build`, which calls `ng *` tasks directly.
Please review the package.json for different building environments. *This application can be run without any api or microservices, all endpoints having interactive mocks*. Since each customer might need a different way of building the application, we just put building examples.
In case you are distributing this app again for your own purposes, please make your own environments and add them to `.angular-cli.json` file, and update the package, respectively.

* We are using highcharts library for our charts. For any incoming pull requests that containing other chart libraries, please open an issue first and describe why it's not possible to do it using highcharts.
* Lodash, and NgRx store are used heavily for data flow.
* Async/Await concepts are everywhere since project is a realtime dashboard
* Our TDD is karma ( default of the angular CLI ) and for CI, we use `TravisCI`. If you want to host the project on a private repository, you might want to 
write your CI specific configuration. We will cover CircleCI build in a near future.
* This project will produce only static files, project demo is hosted on the `Google firebase` but you can host the `dist` folder anywhere you want.
* We have a specific data flow, for catching data from server and posting back the user actions. Document for them currently missing, but you might check `requests.service` and `actions.service`
for this purpose.

# Mobile version
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
This project is free for educational usage, code review and non-commercial usage. For enterprise/commercial usage, you need to obtain a license. 

# Credits
<div>Icons made by <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
