<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="text-center max-w-md p-8">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <!-- Error Icon -->
          <div class="text-error text-6xl mb-4">
            <icon name="uil:exclamation-triangle" class="w-16 h-16" />
          </div>

          <!-- Error Details -->
          <h1 class="text-4xl font-bold mb-4">
            {{ error?.statusCode || "Error" }}
          </h1>
          <p class="text-xl mb-6">
            {{ error?.statusMessage || "Something went wrong" }}
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
