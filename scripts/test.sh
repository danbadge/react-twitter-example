 #!/bin/bash

node server.js &
server_pid=$!
echo "Server started as process - $server_pid"
npm run functional-test
kill -9 $server_pid