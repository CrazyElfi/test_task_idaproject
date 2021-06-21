<template>
  <div class="filter-wrapper">
    <div>
      Сортировать по: {{ getSelectedOptionLabel(selectedFilter) }}
      <button id="filters-btn" @click="toggleListFilter">
        <img src="~/assets/images/arrow-down.svg" alt=""/>
      </button>
      <div id="list" v-show="isFilterListVisible">
        <ul class="list-filters">
          <li
            class="list-filters-item"
            v-for="option in options"
            :key="option.value"
            @click="selectFilter(option.value)"
          >
            <span>{{ option.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      isFilterListVisible: false,
      selectedFilter: "price",
      options: [
        {text: "По цене", value: "price"},
        {text: "По популярности", value: "popularity"},
      ],
    };
  },
  methods: {
    getSelectedOptionLabel(type) {
      let labels = {
        price: "цене",
        popularity: "популярности",
      };

      return labels[type];
    },

    toggleListFilter() {
      this.isFilterListVisible = !this.isFilterListVisible;
    },

    selectFilter(data) {
      this.selectedFilter = data
      this.toggleListFilter();
    },
  },
}
</script>

<style scoped>

.filter-wrapper {
  width: 1150px;
  display: flex;
  justify-content: flex-end;
}

#filters-btn {
  border: none;
  background: transparent;
  position: relative;
}

#filters-btn img {
  width: 7px;
}

.hidden {
  display: none;
}

.list-filters {
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  background: #FFFFFF;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  color: #1F1F1F;
}

.list-filters-item {
  height: 30px;
  line-height: 30px;
  list-style: none;
  text-align: start;
}

.list-filters-item:hover {
  background: #cccccc;
}

.list-filters-item a {
  margin: 5px;
}
</style>
