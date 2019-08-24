const filtersTemplate = filtersList => {
  return `<section class="main__filter filter container">
          ${filtersList.reduce((acc, filter) => acc + filterTemplate(filter), '')}
       </section>`;
};

const filterTemplate = ({title, count}) => {
  return `<section class="main__filter filter container">
        <input
          type="radio"
          id="filter__${title}"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__${title}" class="filter__label">
          ${title} <span class="filter__${title}-count">${count} </span></label
        >
      </section>`;
};

export {filtersTemplate};
