# HomePlanIt

### HomePlanIt - All your home organization needs, under one roof!

- Manage your calendar, to-do lists, chores, find and save recipes.

**View the site** (https://home-plan-it-app.herokuapp.com)

**Github repo** (https://github.com/ashleyedds/Home_PlanIt)


### To run HomePlanIt locally -

1. `git clone` [git@github.com:ashleyedds/Home_PlanIt.git] to your computer.

1. Navigate to the `client` folder and run `yarn install` in terminal/bash.

1. Navigate back to the `root` folder, again run `yarn install` in terminal/bash.

    1. There should now be a `node_modules` folder in both the `root` and `client` folder. 
    1. **Note this application requires MongoDB**(https://docs.mongodb.com/) 

1. In a seperate terminal/bash window run `mongod`.

1. In the `root` folder run `yarn dev`.

    1. You should now be able use HomePlanIt in a developement setting.