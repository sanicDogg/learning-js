const catalog = document.querySelector('.page__catalog');

const tpl = (img, title, info, price) => {
    return `
        <img src="${img}" alt="" class="card__image" />
        <div class="card__description">
          <h2 class="card__title">${title}</h2>
          <p class="card__info">
            ${info}
          </p>
          <p class="card__price">${price}</p>
        </div>
  `;
};

for (const item of data) {
    const entityContainer = document.createElement('article');
    entityContainer.classList.add('card', 'catalog__item');
    if (item.type === 'car') {
        const { getDoorsCount, getInfo, getPrice } = new Car(
            item.vendor,
            item.model,
            item.doorsCount,
            item.price
        );
        entityContainer.innerHTML = tpl(item.img, getInfo(), getDoorsCount(), getPrice());
    } else {
        const { getMaxSpeed, getInfo, getPrice } = new Bike(
            item.vendor,
            item.model,
            item.maxSpeed,
            item.price
        );
        entityContainer.innerHTML = tpl(item.img, getInfo(), getMaxSpeed(), getPrice());
    }
    catalog.appendChild(entityContainer);
}
