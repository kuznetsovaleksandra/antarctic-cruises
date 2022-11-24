const bookingForm = document.querySelector('.booking__form');

function storageForm(formNode) {
  const {elements} = formNode;

  const data = Array.from(elements)
      .map((element) => {
        const {name, type} = element;
        const value = type === 'checkbox' ? element.checked : element.value;

        return {name, value};
      })
      .filter((item) => !!item.name);

  localStorage.setItem('user', JSON.stringify(data));
}

const onSendForm = (form) => {
  form.addEventListener('submit', (evt) => {
    storageForm(evt.target);
  });
};

export const form = () => {
  if (bookingForm) {
    onSendForm(bookingForm);
  }
};
