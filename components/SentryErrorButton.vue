<!--
This is just a very simple component that throws an example error.
Feel free to delete this file.
-->

<script setup>
import * as Sentry from "@sentry/nuxt";

const hasSentError = ref(false);

const throwError = () => {
  Sentry.startSpan(
    {
      name: "Example Frontend Span",
      op: "test",
    },
    () => {
      hasSentError.value = true;
      throw new Error("Sentry Example Error");
    },
  );
};
</script>

<template>
  <div v-if="hasSentError" class="success">
    Sample error was sent to Sentry.
  </div>
  <button v-else @click="throwError">
    <span>Throw Sample Error</span>
  </button>
</template>

<style scoped>
button {
  border-radius: 8px;
  color: white;
  cursor: pointer;
  background-color: #553db8;
  border: none;
  padding: 0;
  margin-top: 4px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    sans-serif;

  & > span {
    display: inline-block;
    padding: 12px 16px;
    border-radius: inherit;
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
    background-color: #7553ff;
    border: 1px solid #553db8;
    transform: translateY(-4px);
  }

  &:hover > span {
    transform: translateY(-8px);
  }

  &:active > span {
    transform: translateY(0);
  }
}

.success {
  width: max-content;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 20px;
  line-height: 1;
  background-color: #00f261;
  border: 1px solid #00bf4d;
  color: #181423;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    sans-serif;
}
</style>
