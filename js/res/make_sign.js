'use strict';
/**
* Copyright (c) 2016 Copyright citongs All Rights Reserved.
* Author: lipengxiang
*/

var hex_md5 = require('crypto/md5').hex_md5;
var secret_key = require('./config').secret_key;

const nonce_elem_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

/**
* @desc: 创建随机串.
* @return: 
*/
function make_nonceStr() {
  let nonceStr = '';
  for (let i = 0; i < 10; i++)
    nonceStr += nonce_elem_arr[Math.floor(Math.random() * nonce_elem_arr.length) % nonce_elem_arr.length];
  return nonceStr;
}
exports.make_nonceStr = make_nonceStr;

/**
* @desc: 根据参数生成签名.
* @param paramsMap: 参数对象.
* @param secretKey: 如果为null, 则使用配置.
* @return:
*     {
        nonce_str: nonce_str  // 随机串.
        sign:      sign,      // 签名串.
      }
*/
exports.make_sign = function(paramsMap, secretKey) {
  if (!paramsMap)
    throw 'params is err';
  
  // make nonceStr.
  let nonce_str;

  // 参数数组.
  let paramsArr = [
    //['nonce_str', nonce_str]
  ];

  if (!paramsMap.nonce_str) {
    nonce_str = make_nonceStr();
    paramsArr.push(['nonce_str', nonce_str]);
  }
  else {
    nonce_str = paramsMap.nonce_str;
  }

  // 遍历参数.
  for (var key in paramsMap) {
    if ('sign' != key)
      paramsArr.push([key, paramsMap[key]]);
  }

  // sort.
  paramsArr.sort((a,b)=>{ return a[0] > b[0]; });

  // make stringA.
  let stringA = '';
  for (let i = 0; i < paramsArr.length; i++) {
    stringA += paramsArr[i][0] + '=' + paramsArr[i][1] + '&';
  }

  // make stringB.
  stringA += (secretKey ? secretKey : secret_key); 

  // md5.
  return {
    sign: hex_md5(stringA).toUpperCase(),
    nonce_str: nonce_str
  }
}


/**
* @desc: 验证签名.
* @param paramsMap: 参数对象.
* @param secretKey: 如果为null, 则使用配置.
* @return: bool
*/
exports.validate_sign = function(paramsMap, secretKey) {
  if (!paramsMap || !paramsMap.sign)
    throw 'params is err';
  
  // 参数数组.
  let paramsArr = [];

  // 遍历参数.
  for (var key in paramsMap) {
    if (key == 'sign')
      continue;
    paramsArr.push([key, paramsMap[key]]);
  }

  // sort.
  paramsArr.sort((a,b)=>{ return a[0] > b[0]; });

  // make stringA.
  let stringA = '';
  for (let i = 0; i < paramsArr.length; i++) {
    stringA += paramsArr[i][0] + '=' + paramsArr[i][1] + '&';
  }

  // make stringB.
  stringA += (secretKey ? secretKey : secret_key);
  stringA = hex_md5(stringA).toUpperCase();

  // md5.
  return paramsMap.sign == stringA;
}

