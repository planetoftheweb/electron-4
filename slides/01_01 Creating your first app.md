Working with Exercises

> > Author Notes:

Let's take a look at what it takes to install electron. First, we'll go to the electronjs.org website. You can see that there are several versions of electron and chances are that when you look at this, some of these numbers will be different, but the main thing to remember is that there are three choices. The first is the latest version, which is currently 4.1.4, then there is the beta version, which is the next version of electron.

Unlike other projects, one of the main difference between the different versions of electron is the version of node.js as well as chromium that the platform uses. Each version of both node and chromium has certain features they support, so if Electron uses that version, it means that you can use those features.

This means that to work with Electron, you're going to need node.js, which you can get to at this URL:

You can also install the current beta, which also changes all the time, but will

To install electron, you need to make sure you have Git as well as nodejs installed. https://nodejs.org. You should also install a copy of Git at this URL. https://git-scm.com/. If you're on a PC, you'll probably want to install a copy of gitbash.

nuff said...if you have everything installed, then let's get going.

To create an app, you're going to need three things. First is a package.json file. This is what controls an application when using a node.js project.

First, let's make a folder for our application...we'll create a folder called electronApp. CD to it, we'll also need a package.json file. We can create one quickly using the npm init command.

`$ npm init`

Normally, this will create a package.json file for you by asking you a series of questions. But, there's a cool shortcut...you can use -y option to just answer Y to all of the questions. I think it's easier.

We'll need to change a few things like adding an optional description.

```
"scripts": {
  "start": "electron ."
},
```

You'll also need to install electron in your project as a developer dependency.

```
npm install --save-dev electron@4.1.4
```

Now, we'll need to create our index.js file

```
const { app, BrowserWindow } = require('electron');

function createWindows () {
  let appWindow = new BrowserWindow({
  })

  appWindow.loadURL('http://raybo.org');
}

app.on('ready', createWindows);
```

One last thing. Since we're using git to keep track of things it's a good idea to include a .gitignore file to make sure that git doesn't track certain folders like the node_modules folder and that it won't get uploaded to github.

```
node_modules
.gitignore
```

This lets you create an application that is simply a window into a website, some apps prefer this structure because it means that ifyou update a site, then your app is updated and you can create the power of the web to set up things like AB testing, Google Analytics and more . Clearly, you'd have to have access to the internet when using this application, but you it's about the quickest thing you can do with electron.
