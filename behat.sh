#!/usr/bin/env bash
BEHAT="docker exec few_php  bin/behat --colors --format=pretty --out=std"
$BEHAT "$@"
