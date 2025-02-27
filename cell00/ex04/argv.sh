#!/bin/bash
i=0
if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    for arg in $@
    do
        if [ $i -lt 3 ]
        then
            echo "$arg"
        fi
        i=$(($i+1));
    done
fi
