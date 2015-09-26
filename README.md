###Git tag(add, push, delete)
1. git tag 0.0.1  => Add a new tag with name 0.0.1
2. git push origin 0.0.1 => To push the tag to origin
3. git tag -d 0.0.1 => To delete the tag from local
4. git push origin :refs/tags/0.0.1 => To delete the tag from origin.

###Checkout all files except one
```
modified:  dir/A/file.txt
modified:  dir/B/file.txt
modified:  dir/C/file.txt
modified:  dir/D/file.txt
```

1. git add dir/C/file.txt # this file will stay modified and staged
2. git checkout .

####If you want to unstage the file after that:
1. git reset

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
