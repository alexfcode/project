const MOCK_LIST = [
  {
    id: 1,
    title: "Работа с формами",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: "green",
    isFavorite: false,
  },

  {
    id: 2,
    title: "Заметка 2",
    content: "К определённым полям формы можно обратиться через form.",
    color: "yellow",
    isFavorite: true,
  },

  {
    id: 3,
    title: "Заметка 3",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: "blue",
    isFavorite: false,
  },

  {
    id: 4,
    title: "Заметка ",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name sdfgsd fgsdfgsdfg sdf dfghdrfth rtfh=-590e6ui0e[r9 thj-0r89eu yh[isrtf hj[ir thj[soij th[osir thjoisdfj th[ositj h[sw9iyh-0uew h[is 9rjth[o0j thp[df",
    color: "blue",
    isFavorite: true,
  },

  {
    id: 3,
    title: "Заметка 3",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: "purple",
    isFavorite: false,
  },
];

const colors = {
  green: "#C2F37D",
  blue: "#7DE1F3",
  red: "#F37D7D",
  yellow: "#F3DB7D",
  purple: "#E77DF3",
};

const model = {
  // notes: MOCK_LIST,
  notes: [],

  // Добавляем новую заметку:
  createNote(title, content, color) {
    const id = new Date().getTime();
    const newNote = { id, title, content, color, isFavorite: false };
    this.notes.unshift(newNote);
    view.renderNotes(this.notes);
    view.showMessage("Заметка добавлена", "green");
  },

  // Удаляем заметку по Id:
  deleteNote(noteId) {
    this.notes = this.notes.filter((note) => note.id != noteId);
    view.renderNotes(this.notes);
    view.showMessage("Заметка удалена", "green");
  },

  // Добавить/удалить в избранное
  toogleNote(noteId) {
    this.notes = this.notes.map((note) => {
      if (note.id == noteId) {
        note.isFavorite = !note.isFavorite;
      }
      return note;
    });
    view.renderNotes(this.notes);
  },

  // Показать только избанные заметки:
  showFavorites() {
    view.renderNotes(this.notes.filter((note) => note.isFavorite));
  },

  // Показать все заметки:
  showAll() {
    view.renderNotes(this.notes);
  },
};

const view = {
  init() {
    this.renderNotes(model.notes);

    const form = document.querySelector(".form-note");

    // Обработчик кнопки формы "Добавить заметку":
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const title = document.querySelector(".title-note-input").value;
      const content = document.querySelector(".content-note-textarea").value;
      const color = document.querySelector(".radio:checked").value;
      controller.createNote(title, content, color);

      //Обнуляем поля ввода после отправки формы:
      // title = '' - не работает почему-то
      // content = ''  - не работает почему-то
      document.querySelector(".title-note-input").value = "";
      document.querySelector(".content-note-textarea").value = "";
    });

    const list = document.querySelector(".notes-list");

    // Обработчик иконки "Избранное"
    list.addEventListener("click", function (event) {
      if (event.target.classList.contains("button-favorite")) {
        let noteId = event.target.parentElement.parentElement.parentElement.id;
        controller.toogleNote(noteId);
      }
    });

    // Обработчик иконки "Удалить"
    list.addEventListener("click", function (event) {
      if (event.target.classList.contains("button-trash")) {
        let noteId = event.target.parentElement.parentElement.parentElement.id;
        controller.deleteNote(noteId);
      }
    });

    // Обработчик чекбокса "Только избранное":
    const favorites = document.querySelector("#show-favorites");
    favorites.addEventListener("change", function () {
      this.checked ? controller.showFavorites() : controller.showAll();
    });
  },

  renderNotes(notes) {
    // находим контейнер для заметок и рендерим заметки в него (если заметок нет, отображаем соответствующий текст)
    let notesHTML = "";
    let alertMessage = "";
    const notesList = document.querySelector(".notes-list");
    const messages = document.querySelector(".messages");
    const numberNotes = document.querySelector(".number-notes");

    for (let i = 0; i < notes.length; i++) {
      notesHTML += `
            <div class="note">
                <dt id="${notes[i].id}" class="${
        notes[i].isFavorite ? "favorite" : "notFavorite"
      }">
                    <div class="note-title" style="background-color: ${
                      colors[notes[i].color]
                    };">
                        <div>
                            <span>${notes[i].title}</span>
                        </div>
                        <div>
                            <input type="image" class="button-favorite" name="button-favorite" ${
                              notes[i].isFavorite
                                ? 'src="./images/heart active.svg" alt="heart"'
                                : 'src="./images/heart inactive.svg" alt="heart"'
                            }>
                            <input type="image" name="button-trash" class="button-trash" src="./images/trash.svg" alt="trash">
                        </div>
                    </div>
                </dt>
                <dd>
                    <div class="note-content">
                        <p>${notes[i].content}</p>
                    </div>
                    
                </dd>
            </div>
            `;
    }

    if (model.notes.length == 0) {
      notesList.innerHTML = `
    <p class="validation">У вас нет еще ни одной заметки
Заполните поля выше и создайте свою первую заметку!</p>
`;
    } else {
      notesList.innerHTML = notesHTML;
    }
    // Счетчик заметок:
    numberNotes.innerHTML = notes.length;
  },
  showError() {
    alertMessage = `<img src="./images/Error.svg" alt="Error">`;
    messages.innerHTML = notesHTML;
  },
  showDone() {
    alertMessage = `<img src="./images/Done.svg" alt="Done">`;
    messages.innerHTML = notesHTML;
  },

  showMessage(text, color) {
    const messageBox = document.querySelector(".message-box");
    messageBox.innerHTML = `<div id="alert" class="message-box-${color}"><p>${text}</p><div>`;

    window.setTimeout(function () {
      document.getElementById("alert").outerHTML = "";
    }, 3000);
  },
};

const controller = {
  createNote(title, content, color) {
    if (title.trim() !== "" && title.length <= 50 && content.trim() !== "") {
      model.createNote(title, content, color);
    } else if (title.length > 50) {
      view.showMessage("Максимальная длина заголовка - 50 символов", "red");
    } else {
      view.showMessage("Заполните все поля!", "red");
    }
  },
  deleteNote(noteId) {
    model.deleteNote(noteId);
  },
  toogleNote(noteId) {
    model.toogleNote(noteId);
  },
  showFavorites() {
    model.showFavorites();
  },

  showAll() {
    model.showAll();
  },
};

function init() {
  view.init();
}

document.addEventListener("DOMContentLoaded", init);
