#!/bin/bash

# set -x
fromDir="/src/static/koth/images/"
toDir="../../pages/koth/util/ImageURLS.js"

file_contents(){
    imgList=$(ls *.png)
    echo "// @ts-nocheck" > $toDir
    for img in $imgList
    do
        echo "import ${img:0:-4}URL from \"$fromDir${img}\";" >> $toDir
    done
    echo  >> $toDir
    for img in $imgList
    do
        echo "export const ${img:0:-4}=${img:0:-4}URL;" >> $toDir
    done
}

$(file_contents)
