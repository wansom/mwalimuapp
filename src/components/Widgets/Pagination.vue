<template>
    <ul class="pagination">
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          First
        </button>
      </li>
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Previous
        </button>
      </li>
  
      <!-- Visible Buttons Start -->
  
      <li
        v-for="page in pages" :key="page"
        class="pagination-item"
      >
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>
  
      <!-- Visible Buttons End -->
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
          Next
        </button>
      </li>
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    isPageActive(page) {
        return this.currentPage === page;
      },
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    }
  }
  }
  </script>
  
  <style>
  .pagination {
    list-style-type: none;
  }
  
  .pagination-item {
    display: inline-block;
  }
  
  .active {
    background-color: #4AAE9B;
    color: #ffffff;
  }
  </style>