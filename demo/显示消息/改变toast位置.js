function toastAt0(msg, x, y) {
  importClass(android.widget.Toast);
  importClass(android.view.Gravity);
  var toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
  toast.setGravity(Gravity.TOP | Gravity.LEFT, x, y);
  toast.show();
}

function toastAt(msg, x, y) {
  ui.run(() => toastAt0(msg, x, y));
}

TKB.toastAt('sdfsfdsdfs', 300, 300)
toastLog()
// _THREADSSx = threads.start(function () {
//   while (1) {
//     toastLog('1111')
//     sleep(2000)
//   }
// })
