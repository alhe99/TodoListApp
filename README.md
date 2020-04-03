# TodoListApp
App created at Ionic 5 using Angular 9 Framework

## How to use

I'm assuming you're familiar with node.js and modern JavaScript development.

Clone the repository to an arbitrary directory. Navigate to that directory and run `npm install`.

Now you can start the app with the CLI command `ionic serve`. It'll compile the code, start the server, and open a browser with the URL `localhost:8100`.

## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`