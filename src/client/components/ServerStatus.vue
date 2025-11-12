<template>
  <div class="server-status">
    <h1>{{ serverMessage }}</h1>
    <p>Uptime: {{ uptime }} seconds</p>
    <p>Memory Usage: {{ memoryUsage }} MB</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ServerStatus',
  setup() {
    const serverMessage = ref('');
    const uptime = ref(0);
    const memoryUsage = ref(0);

    // Fetch data from the Express server
    const fetchServerStatus = async () => {
      try {
        const response = await fetch('/api/status');
        const data = await response.json();
        serverMessage.value = data.message;
        uptime.value = data.uptime;
        memoryUsage.value = (data.memoryUsage.rss / (1024 * 1024)).toFixed(2); // Convert memory usage to MB
      } catch (error) {
        console.error('Error fetching server status:', error);
        serverMessage.value = 'Error fetching server status';
      }
    };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchServerStatus();
    });

    return {
      serverMessage,
      uptime,
      memoryUsage,
    };
  },
};
</script>

<style scoped>
.server-status {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
  margin: 20px;
}

h1 {
  font-size: 2em;
}

p {
  font-size: 1.2em;
  margin: 10px 0;
}
</style>
