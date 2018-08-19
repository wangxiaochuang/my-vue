#!/bin/sh

ROOT=`cd $(dirname $0); pwd`

source_dir=${ROOT}/src/assets/icon

grep 'el-icon-cmdb' ${source_dir}/iconfont.css
if [ $? -eq 0 ]; then
    exit 0
fi
rm -f ${source_dir}/demo*
sed -i "" 's#icon-#el-icon-cmdb-#g' ${source_dir}/iconfont.css
sed -i "" 's#\.iconfont#.iconfont, [class="el-icon-cmdb"], [class*=" el-icon-cmdb"]#g' ${source_dir}/iconfont.css
