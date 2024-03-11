import { defineStore } from "pinia";

export const useStore = defineStore("items-store", {
  state: () => ({
    items: [],
    loading: null,
    error: "",

  }),
  actions: {
    setLoading(type) {
      this.loading = type;
    },
    async fetchData() {
      this.setLoading(true);
      try {
        const postsResponse = await fetch(process.env.VUE_APP_API_POSTS);
        const usersResponse = await fetch(process.env.VUE_APP_API_USERS);

        const posts = await postsResponse.json();
        const users = await usersResponse.json();
        const usersMap = users.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});
        this.items = posts.map((post) => ({
          ...post,
          userName: usersMap[post.userId]?.name || "Unknown User",
        }));
      } catch {
        this.error = "Ошибка сервера! Повторите попытку позже";
      }

      this.setLoading(false);
    },
  },
});
