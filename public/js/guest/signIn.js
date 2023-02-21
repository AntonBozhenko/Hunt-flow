function signIn() {
  const resultWindow = document.getElementById('resultWindow');
  const main = document.querySelector('main');

  const mainChildren = main.children;
  for (let i = 0; i < mainChildren.length; i += 1) {
    if (mainChildren[i].id !== 'resultWindow') mainChildren[i].remove();
  }

  resultWindow.classList.add('d-none');

  const signInWindow = document.createElement('form');
  signInWindow.id = 'signInWindow';
  signInWindow.classList = 'd-flex flex-column align-items-center p-2 text-center white-bg-opacity rounded my-5';
  signInWindow.innerHTML = `
  <h2 class="mb-4">Вход</h2>
  <div class="mb-4 w-50">
    <label for="exampleInputEmail1" class="form-label text-shadow">Ваш адрес электронной почты:</label>
    <input type="email" class="form-control py-0" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required>
  </div>
  <div class="mb-4 w-50">
    <label for="exampleInputPassword1" class="form-label text-shadow">Ваш пароль:</label>
    <input type="password" name="password" class="form-control py-0" id="exampleInputPassword1" required>
  </div>
  <button id="enter" type="submit" class="btn btn-dark w-25 py-2 mb-2">Войти</button>
  <h5 class="mb-2">Войти через:</h5>
  <div class="d-flex justify-content-around">
  <a href="/guest/google"id="google"><img class="ico" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" /></a>
  `;

  main.appendChild(signInWindow);
}
