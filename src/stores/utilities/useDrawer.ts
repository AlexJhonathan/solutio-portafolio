// src/stores/useDrawer.ts
import { defineStore } from 'pinia'

export const useDrawer = defineStore('drawer', {
  state: () => ({
    isOpen: true
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
})