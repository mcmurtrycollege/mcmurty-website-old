# Website 2.0
McMurtry College: the greatest residential college at Rice! Site is currently under development. 

## About the Site
This is a Jekyll + Github Pages site. Pushing to the repository on the `master` branch compiles the site and pushes it live. If developing non-live changes, don't push to `master`!

## Building the Site
The site is built upon Jekyll, a static site generator. Install Jekyll via ruby gem. There's a good installation guide [here](http://jekyllrb.com/docs/installation/). You might have to update ruby or several other dependencies as well.

To test locally, start the server. Run `jekyll serve --watch` at the root directory of the codebase. The site will be hosted on `http://localhost:4000/` (there's a chance your port could be different).

Jekyll will now compile the site any time a change is made to a file in this directory. These changes compile static files that can be found in the `_site` directory.

To push changes live, simply push the `master`. Github automatically compiles the site and makes the changes live!

## To Blog
Navigate to [folder] in GitHub and create a new file, titled [date].md. This is a Markdown file. Write the content of your post in the space provided, add a commit message where prompted, and commit to master. This will make your changes live.

