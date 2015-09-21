###Git tag(add, push, delete)
1. git tag 0.0.1  => Add a new tag with name 0.0.1
2. git push origin 0.0.1 => To push the tag to origin
3. git tag -d 0.0.1 => To delete the tag from local
4. git push origin :refs/tags/0.0.1 => To delete the tag from origin.

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