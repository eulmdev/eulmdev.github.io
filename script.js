function theme() {
  let x = document.getElementById('card').classList;
  if (!x[1]) {
    x.add('light');
  } else {
    x.remove('light');
  }
}
