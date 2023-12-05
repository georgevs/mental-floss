https://www.techinterviewhandbook.org/grind75

https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
https://www.techinterviewhandbook.org/coding-interview-cheatsheet/

https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed


### Setup Golang
```bash
DOCKER_BUILDKIT=1 PASSWD=$(read -s -p 'Password:' PASSWD ; echo "$USER:$PASSWD") \
docker image build --no-cache --force-rm --secret id=PASSWD --tag dev-golang - << EOF
  FROM ubuntu
  SHELL ["/bin/bash", "-c"]
  RUN --mount=type=secret,id=PASSWD \
    apt-get update && \
    apt-get install -y sudo ssh tmux vim curl less zip unzip && \
    useradd -m -s /bin/bash -G sudo $USER && \
    cat /run/secrets/PASSWD | chpasswd && \
    curl -sL https://go.dev/dl/go1.20.4.linux-amd64.tar.gz | tar xz --directory /usr/local
  USER $USER
  ENV PATH="\$PATH:/usr/local/go/bin"
  RUN echo "export PATH=\$PATH" >> ~/.bashrc
EOF

docker container run -it \
  --name dev-golang \
  --network bridge-dev \
  --ip 172.20.0.211 \
  --volume "/home/$USER/ws/DEV:/home/$USER/ws/DEV" \
  --volume "/home/$USER/ws/NOTES/wiki:/home/$USER/ws/NOTES/wiki" \
  -d dev-golang
```

### Setup Java
```bash
DOCKER_BUILDKIT=1 \
PASSWD=$(read -s -p 'Password:' PASSWD ; echo "$USER:$PASSWD") \
docker image build \
  --no-cache \
  --force-rm \
  --secret id=PASSWD \
  --tag dev-java \
  - << EOF

  FROM ubuntu
  RUN --mount=type=secret,id=PASSWD \
    apt-get update && \
    apt-get install -y sudo ssh tmux vim curl less openjdk-17-jdk-headless && \
    useradd -m -s /bin/bash -G sudo $USER && \
    cat /run/secrets/PASSWD | chpasswd
  USER $USER
EOF

docker container run -it \
  --name dev-java \
  --network bridge-dev \
  --ip 172.20.0.212 \
  --volume "/home/$USER/ws/DEV:/home/$USER/ws/DEV" \
  --volume "/home/$USER/ws/NOTES/wiki:/home/$USER/ws/NOTES/wiki" \
  -d dev-java
```