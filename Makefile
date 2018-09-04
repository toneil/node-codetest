build:; docker-compose build
up:; docker-compose up -d
stop:; docker stop nodecodetest_server_1
log:; docker logs -tf --tail=200 nodecodetest_server_1
