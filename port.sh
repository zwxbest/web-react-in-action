#!/bin/bash
kill -9 $(netstat -nlp | grep :$1| awk '{print $7}' | awk -F"/" '{ print $1 }')  

