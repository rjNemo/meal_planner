<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="text-center max-w-md p-8">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <!-- Error Icon -->
          <div class="text-error text-6xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <!-- Error Details -->
          <h1 class="text-4xl font-bold mb-4">
            {{ error?.statusCode || "Error" }}
          </h1>
          <p class="text-xl mb-6">
            {{ error?.message || "Something went wrong" }}
          </p>

          <!-- Action Buttons -->
          <div class="flex justify-center gap-4">
            <button class="btn btn-primary" @click="handleError">
              Try Again
            </button>
            <button class="btn btn-ghost" @click="navigateToHome">
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError();
const route = useRoute();

const handleError = () => {
  clearError({ redirect: route.redirectedFrom?.fullPath ?? "/" });
};

const navigateToHome = () => {
  clearError({ redirect: "/" });
};
</script>
