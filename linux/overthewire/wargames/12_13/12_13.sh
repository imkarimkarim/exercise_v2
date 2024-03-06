#!/bin/bash

# https://overthewire.org/wargames/bandit/bandit13.html

rm -rf working_dir
mkdir working_dir
cp data.txt working_dir
cd working_dir

# hex dump to binary
xxd -r < data.txt > file
rm data.txt

function find_the_flag () {

  function get_file_mime_type () {
   file --mime-type $1 | grep -oP '(?<=: ).*'
  }

  mime_type=`get_file_mime_type $1`

  if [[ "$mime_type" = text/plain ]]; then
    cat $1

  else

    case $mime_type in
    application/gzip) mv $1 file.gz ; gzip -d file.gz ; find_the_flag file ;;
    application/x-bzip2) mv $1 file.bz2 ; bzip2 -d file.bz2 ; find_the_flag file ;;
    application/x-tar) mv $1 file.tar ; tmp=`tar xvf file.tar` ; find_the_flag $tmp ;;
    *) echo "unsupported format." ;; 
    esac

  fi
}

find_the_flag file
