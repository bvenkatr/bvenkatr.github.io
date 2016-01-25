```
Adding user to sudo group in docker container
docker run -it ubuntu:14.04 /bin/bash
adduser venkat
adduser venkat sudo
su venkat
sudo apt-get install vim
exit
exit
docker run -it ubuntu:14.01 /bin/bash
it again creates a new container and you don't see venkat as a username
cat /etc/passwd
```