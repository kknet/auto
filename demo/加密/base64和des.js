importClass("java.security.SecureRandom");
importClass("javax.crypto.spec.DESKeySpec");
importClass("javax.crypto.SecretKeyFactory");
importClass("javax.crypto.Cipher");
// 输入：123456abcdef，输出：j1kR1+ZraO2Tg78dHueoTg==
// 加密使用的 key
var KEY_BYTES = new java.lang.String("da8a090d7324462585b9966709e90123").getBytes();
var content = "douyinLink=https://v.douyin.com/JhgErpu/&taskType=3&uuid=da8a090d7324462585b9966709e90123"
var contentBytes = new java.lang.String(content).getBytes();
var r = encryptDES(contentBytes,KEY_BYTES)
log('aa'+r)
r = base64编码(r)
log("加密后的内容=",r)

r=base64解码(r)
r=decryptDES(r,KEY_BYTES)
r=new java.lang.String(r)
log("解密后的内容=",r)

function base64编码(r) {
  var r = android.util.Base64.encodeToString(r, 0);
  return r
}

function base64解码(r) {
  var r = android.util.Base64.decode(r, 0)
  return r
}
/**
 * DES 加密
 *
 * @param content 待加密内容
 * @param key     加密的密钥
 * @return 加密后的字节数组
 */
function encryptDES(content, key) {
  var random = new SecureRandom();
  var desKey = new DESKeySpec(key);
  var keyFactory = SecretKeyFactory.getInstance("DES");
  var secretKey = keyFactory.generateSecret(desKey);
  // DES 是加密方式, EBC 是工作模式, PKCS5Padding 是填充模式
  var cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
  cipher.init(Cipher.ENCRYPT_MODE, secretKey, random);
  return cipher.doFinal(content);
}

/**
 * DES 解密
 *
 * @param content 待解密内容
 * @param key     解密的密钥
 * @return 解密的数据
 */
function decryptDES(content,key) {
  var random = new SecureRandom();
  var desKey = new DESKeySpec(key);
  var keyFactory = SecretKeyFactory.getInstance("DES");
  var secretKey = keyFactory.generateSecret(desKey);
  var cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
  cipher.init(Cipher.DECRYPT_MODE, secretKey, random);
  return cipher.doFinal(content);
}
