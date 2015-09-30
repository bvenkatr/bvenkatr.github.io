###Git tag(add, push, delete)
1. git tag 0.0.1  => Add a new tag with name 0.0.1
2. git push origin 0.0.1 => To push the tag to origin
3. git tag -d 0.0.1 => To delete the tag from local
4. git push origin :refs/tags/0.0.1 => To delete the tag from origin.

###To delete last/previous commit
1. git log => to see all logs
2. git reset --soft HEAD~1  => To remove last commit, after this you will get into stages position
3. git reset => to get into unstaged position
4. git add "required files list"
5. git commit "required files list" -m "commit message"
6. git push origin your-branch-name

###HTML5 doctype
Bootstrap makes use of certain HTML elements and CSS properties that require the use of the HTML5 doctype. Include it at the beginning of all your projects.

```
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```

```
browserify main.js -t babelify --outfile bundle.js
```
