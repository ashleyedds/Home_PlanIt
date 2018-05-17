## HomePlanIt

HomePlanIt - All your home organization needs, under one roof!

- Manage your calendar, to-do lists, chores, find and save recipes.

**view the site** (https://home-plan-it-app.herokuapp.com)

**github repo** (https://github.com/ashleyedds/Home_PlanIt)


## To run HomePlanIt locally -

1.) `git clone` [git@github.com:ashleyedds/Home_PlanIt.git] to your computer.

2.) Navigate to the `client` folder and run `yarn install` in terminal/bash.

3.) Navigate back to the `root` folder, again run `yarn install` in terminal/bash.

- There should now be a `node_modules` folder in both the `root` and `client` folder. 
**Note this application requires MongoDB**(https://docs.mongodb.com/) 

4.) In a seperate terminal/bash window run `mongod`.

5.) In the `root` folder run `yarn dev`.

- You should now be able use HomePlanIt in a developement setting.