/*
 * Created by 九次方前端研发部-彭庆凯<pqk@jusfoun.com> on 20/03/2018.
*/
/**
 * 处理树形组件需要的数据的方法
 * @param oldArr  需要处理的平面数组
 * @return {Array}  处理完毕的数组
 */
export function handleTreeNode(oldArr) {
  // 得到最小的fid
  oldArr.sort((a, b) => {
    return a.fid - b.fid
  })
  let begin = oldArr[0].fid

  if (Array.isArray(oldArr)) {
    /**
     * 递归调用函数
     * @param fid 父级ID
     * @return {Array} 拼装后的数组
     */
    function arrayToTree(fid) {
      let newArr = []
      for (let i = 0; i < oldArr.length; i++) {
      	oldArr[i].id = parseInt(oldArr[i].id)
        if (oldArr[i].fid == fid) {
          newArr.push({
            ...oldArr[i],
            children: arrayToTree(oldArr[i].id)
          })
          newArr.sort((a, b) => {
            return a.sort - b.sort
          })
        }
      }
      return newArr
    }

    return arrayToTree(begin)
  } else {
    return []
  }
}


/**
 * 处理树形组件需要的数据的方法
 * @param oldArr  需要处理的平面数组
 * @return {Array}  处理完毕的数组
 */
export function handleTreeNode2(oldArr) {
  // 得到最小的fid
  oldArr.sort((a, b) => {
    if (a.pid < b.pid) {
      return -1;
    }
    if (a.pid > b.pid) {
      return 1;
    }
    return 0
    // return a.pid - b.pid
  })
  let begin = oldArr[0].pid

  if (Array.isArray(oldArr)) {
    /**
     * 递归调用函数
     * @param fid 父级ID
     * @return {Array} 拼装后的数组
     */
    function arrayToTree(pid) {
      let newArr = []
      for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i].pid == pid) {
        	// oldArr[i].id = parseInt(oldArr[i].id)
          newArr.push({
            ...oldArr[i],
            children: arrayToTree(oldArr[i].id)
          })
          newArr.sort((a, b) => {
            return a.ordernum - b.ordernum
          })
        }
      }
      return newArr
    }

    return arrayToTree(begin)
  } else {
    return []
  }
}
export function handleTreeNode5(oldArr) {
  // 得到最小的fid
  oldArr.sort((a, b) => {
    if (a.pId < b.pId) {
      return -1;
    }
    if (a.pId > b.pId) {
      return 1;
    }
    return 0
    // return a.pid - b.pid
  })
  let begin = oldArr[0].pId

  if (Array.isArray(oldArr)) {
    /**
     * 递归调用函数
     * @param fid 父级ID
     * @return {Array} 拼装后的数组
     */
    function arrayToTree(pId) {
      let newArr = []
      for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i].pId == pId) {
        	// oldArr[i].id = parseInt(oldArr[i].id)
          newArr.push({
            ...oldArr[i],
            children: arrayToTree(oldArr[i].id)
          })
          newArr.sort((a, b) => {
            return a.ordernum - b.ordernum
          })
        }
      }
      return newArr
    }

    return arrayToTree(begin)
  } else {
    return []
  }
}
export function handleTreeNode3(oldArr) {
  // 得到最小的fid
  oldArr.sort((a, b) => {
    return a.iresourceId - b.iresourceId
  })
  let begin = oldArr[0].iresourceId

  if (Array.isArray(oldArr)) {
    /**
     * 递归调用函数
     * @param fid 父级ID
     * @return {Array} 拼装后的数组
     */
    function arrayToTree(pid) {
    	oldArr[i].id = parseInt(oldArr[i].id)
      let newArr = []
      for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i].iresourceId == pid) {
          newArr.push({
            ...oldArr[i],
            id: Math.random(), // 没有提供可用的id,那么就随机生成一个
            children: arrayToTree(oldArr[i].itableId)
          })
        }
      }
      return newArr
    }

    return arrayToTree(begin)
  } else {
    return []
  }
}

/**
 * 处理树形组件需要的数据的方法
 * @param oldArr
 * @return {Array}
 */
export function handleTreeData4(oldArr) {
  if (Array.isArray(oldArr)) {
    /**
     * 找到这个数组中唯一的不属于任何id的pid
     * @param arr
     * @return {*}
     */
    function findUniqueId(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if(arr[i].pid === arr[j].id){
            break
          }
          if(j >= arr.length-1){
            return arr[i].pid
          }
        }
      }
    }
    let  begin = findUniqueId(oldArr)
    /**
     * 递归调用函数
     * @param fid 父级ID
     * @return {Array} 拼装后的数组
     */
    function arrayToTree(pid) {
      let newArr = []
      for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i].pid == pid) {
          newArr.push({
            ...oldArr[i],
            children: arrayToTree(oldArr[i].id)
          })
          newArr.sort((a, b) => {
            return a.ordernum - b.ordernum
          })
        }
      }
      return newArr
    }
    return arrayToTree(begin)
  }
}

/**
 * 文件下载函数 url:https://github.com/kennethjiang/js-file-download
 * @param data  blob数据
 * @param filename 文件名
 * @param mime  mime类型
 */
export function downloadFile(data, filename, mime) {
  var blob = new Blob([data], {type: mime || 'application/octet-stream'});
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename);
  }
  else {
    var blobURL = window.URL.createObjectURL(blob);
    var tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank');
    }

    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }
}


export function handleRes(res) {
  console.log(res)
  let resBlob = new Blob(res.data)
  let resData = null
  try {
    let resText = new Promise((resolve, reject) => {
      // 通过 FileReader 接受并解析
      let reader = new FileReader()
      reader.addEventListener('abort', reject)
      reader.addEventListener('error', reject)
      reader.addEventListener('loadend', () => {
        console.log(reader.result)
        resolve(reader.result)
      })
      // 文件
      reader.readAsText(resBlob)
    })
    // JSON
    resData = JSON.parse(resText)
  } catch (err) {
    console.log(err)
  }
  if (resData) {
    if (resData.error) {
      // handle error
      console.log(resData.error)
    } else {
      // handle data
      return resData
    }
  } else {
    // handle blob
    downloadFile(resBlob, filename)
  }
  // return {res, resData, resBlob}
}

/**
 * 测试是否是合法的IP地址
 * @param ip ip string
 * @return {boolean} 是合法的IP返回true否则返回false
 */
export function isValidIP(ip) {
  let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip);
}

/**
 * 将时间戳转为时间格式。
 * @memberof  util
 * @param { string } timeStamp 时间戳
 * @param { Boolean } needHMS 是否需要小时 分钟 秒。
 * @param { string } [type='/'] 时间之间的连接符 默认是 '/' 如果传入字符串 '年月日' 则返回带年月日中文的日期 。
 * @returns {String}
 * @author 陈胜  <chensheng@jusfoun.com>
 * @example
 *   const timestamp=new Date().getTime();
 *   JFE.util.formatTime(timestamp,true,'-') 输出：2017-12-22 17:33:17
 *   JFE.util.formatTime(timestamp)  输出：2017/12/22
 *   JFE.util.foramtTime(timestamp,false,'年月日') 输出2017年12月22日
 */
export function formatTime(timeStamp, needHMS ,type) {
  function add0(m) { return m < 10 ? '0' + m : m }
  if (type !== '年月日'){
    var localType = type || '/'
  }
  //timeStamp是整数，否则要parseInt转换
  var time = new Date(timeStamp);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();

  if(type!=='年月日'){
    return needHMS ? (y + localType + add0(m) + localType + add0(d) + ' ' +
      h + ':' + mm + ':' + s) : (y + localType + add0(m) + localType + add0(d))
  }
  else{
    return needHMS ? (y+'年'+ add0(m) + '月'+add0(d)+'日' + ' ' +
      h + ':' + mm + ':' + s)
      :  y+'年'+ add0(m) + '月'+add0(d)+'日'
  }
}
