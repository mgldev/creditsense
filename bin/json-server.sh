#!/bin/sh

DIR=$(dirname $0)

$DIR/../node_modules/.bin/json-server $DIR/json-server/db.json --routes $DIR/json-server/routes.json