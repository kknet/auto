/**
 * 作者:  家
 * QQ:    203118908
 * 功能:　AES加解密demo
 */
importClass("java.security.SecureRandom");
importClass("javax.crypto.spec.DESKeySpec");
importClass("javax.crypto.SecretKeyFactory");
importClass("javax.crypto.Cipher");
importClass("java.security.NoSuchAlgorithmException");
importClass("javax.crypto.KeyGenerator");
importClass("javax.crypto.SecretKey");
importClass("javax.crypto.spec.SecretKeySpec");
importClass("javax.crypto.KeyGenerator");
importClass("javax.crypto.spec.IvParameterSpec");
var config={
  VIPARA:"0102030405060708", // IvParameterSpec
  bm:"UTF-8", // 编码
  dataPassword:'da8a090d7324462585b9966709e90123',
  cleartext:'douyinLink=https://v.douyin.com/JhgErpu/&taskType=3&uuid=da8a090d7324462585b9966709e90123'
}
for(var k in config){
  var v=config[k]
  config[k]=new java.lang.String(v)
}
var dataPassword = config.dataPassword
var cleartext = config.cleartext
var encrypted = encrypt(dataPassword, cleartext)
log('加密结果=')
log(encrypted)
var str = java.net.URLEncoder.encode(z,"UTF-8")
log('编码加密结果='+str)
var decrypted = decrypt(dataPassword, encrypted)
log('解密结果=')
log(decrypted)
function encrypt(dataPassword, cleartext) {
  var VIPARA=config.VIPARA
  var bm=config.bm
  var zeroIv = new IvParameterSpec(config.VIPARA.getBytes());
  var key = new SecretKeySpec(dataPassword.getBytes(), "AES");
  var  cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
  cipher.init(Cipher.ENCRYPT_MODE, key);
  var  encryptedData = cipher.doFinal(cleartext.getBytes(bm)); //	byte[]
  var result= base64Encode(encryptedData);
  result=new java.lang.String(result)
  return result
}
/**
 *
 * @param {String} dataPassword
 * @param {String} encrypted
 * @return {String}
 */
function decrypt(dataPassword, encrypted) {
  var VIPARA=config.VIPARA
  var bm=config.bm
  var  byteMi = base64Decode(encrypted); // byte[]
  var zeroIv = new IvParameterSpec(config.VIPARA.getBytes());
  var key = new SecretKeySpec(dataPassword.getBytes(), "AES");
  var  cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
  cipher.init(Cipher.DECRYPT_MODE, key);
  var decryptedData = cipher.doFinal(byteMi); //byte[]
  return new java.lang.String(decryptedData, bm);
}
function base64Encode(r) {
  var r = android.util.Base64.encodeToString(r, 0);
  return r
}
function base64Decode(r) {
  var r = android.util.Base64.decode(r, 0)
  return r
}

str=java.net.URLEncoder.encode(z,"UTF-8");
log('aa'+str)