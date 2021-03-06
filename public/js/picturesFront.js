const btnReadFile = document.querySelector('#readFile')
// console.log(btnReadFile);

btnReadFile?.addEventListener('click', async () => {

  const divPic = document.querySelector('.divPic')
  const id = divPic.id

  const response = await fetch(`/pictures/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const text = await response.json()

  document.querySelector('.readedText').innerHTML += `
  <div class='readedText'><p class='readedText_p'>${text}</p><div>
  <button class="waves-effect waves-light btn-large listenFileButton">Listen it</button>
  `

  // console.log(text);

  const btnListenFile = document.querySelector('.listenFileButton')

  console.log(btnListenFile);

  btnListenFile.addEventListener('click', async () => {
    console.log(text);
    // const response = await fetch(`/pictures/${id}`)
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(text)
    );

  })
})



//удалить картинку со страницы pictures/:id
const deleteBtn = document.querySelector('#deleteFile')
// console.log(deleteBtn);

deleteBtn?.addEventListener('click', async () => {

  const divPic = document.querySelector('.divPic')
  const id = divPic.id
  // console.log(id);

  const response = await fetch(`/pictures/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "Application/json"
    }
  })
  const result = await response.json()

  if (result.success) {
    divPic.remove()
    window.location.href = '/'
  }
})


//удалить картинку со страницы pictures
const deleteButtons = document.querySelectorAll('.deleteFileButton')
// console.log(deleteButtons);

deleteButtons?.forEach(del => {
  del.addEventListener('click', async (e) => {
    const id2 = del.getAttribute('data-id')
    // console.log(id2);
    const divPic = document.getElementById(`${id2}`)
    
    const response = await fetch('/pictures', {

      method: "DELETE",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({id: divPic.id})

    })

    const result = await response.json()
    // console.log(result);

    if (result.success) {
      divPic.remove()
      window.location.href = '/'
    }
  })
})


