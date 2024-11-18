Restaurant page from odin project
https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page

Live Website:
https://x74z.github.io/restaurant-page/



To republish website:
Make a new branch to deploy from by running git branch gh-pages. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.
Make sure you have all your work committed. You can use git status to see if there’s anything that needs committing.
Run git checkout gh-pages && git merge main --no-edit to change branch and sync your changes from main so that you’re ready to deploy.
Now let’s bundle our application into dist with your build command. For now, that’s npx webpack.

Now there are a few more commands. Run each of these in order:

git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main

Recall that the source branch for GitHub Pages is set in your repository’s settings. Get this changed to the gh-pages branch. That should be everything!
