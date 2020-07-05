#!/usr/bin/env bash
#BACKSTOP="docker run --rm -v $(pwd):/src --network=\"host\" backstopjs/backstopjs"
#$BACKSTOP "$@"
#docker run --rm -v $(pwd):/src --network="host" backstopjs/backstopjs reference
docker run --rm -v $(pwd):/src --network="host" backstopjs/backstopjs test
#docker run --rm -v $(pwd):/src --network="host" backstopjs/backstopjs approve
