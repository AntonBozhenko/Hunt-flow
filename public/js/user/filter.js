async function filter(event) {
  event.preventDefault();
  const mainColumnLeftApll = document.querySelector('.main__column-left');
  // Нашли всех детей
  const children = mainColumnLeftApll.childNodes;
  // удаляем их
  while (mainColumnLeftApll.firstChild) {
    mainColumnLeftApll.removeChild(mainColumnLeftApll.firstChild);
  }
  const { id } = event.target;
  // console.log(id);

  try {
    const response = await fetch(`/api/filter/${id}`);
    const result = await response.json();
    // const result = await response.status;
    // console.log(result);
    mainColumnLeftApll.innerHTML = `
      ${result.map((user) => (

    `<div key=${user.id} data-id=${user.id} id="user__preview" class="row m-2 p-4 ps-2 user__preview">
        <div class="col-3">
            <div class="user__preview-foto" style="background-image: url(${user.applPhoto}); background-size: cover; background-position: center;"></div>
        </div>
        <div class="col-8 ms-2">
            <div class="row">
                <div class="preview-ref-fio">${user.applName} ${user.applLastName}</div>
            </div>
            <div class="row">
                <div class="preview-ref-position">Java Developer</div>
            </div>
        </div>
    </div>`
  )).join('')}
    `;
  } catch (error) {
    console.log('Не могу отправить запрос на фильтр', error);
  }
}
