<template>
  <footer
    class="footer bg-base-300 text-base-content items-center p-4 flex justify-between"
  >
    <aside class="items-center">
      <p>
        <span class="hidden sm:inline"
          >Copyright &copy; {{ new Date().getFullYear() }} –
        </span>
        Made with ❤️
      </p>
    </aside>
    <nav class="grid-flow-col gap-4">
      <nuxt-link
        to="https://github.com/rjNemo/meal_planner"
        :external="true"
        target="_blank"
        aria-label="navigate to the source code on GitHub"
      >
        <icon name="cib:github" class="w-6 h-6" />
      </nuxt-link>
      <nuxt-link
        to="https://ruidy.nemausat.com"
        :external="true"
        target="_blank"
        aria-label="navigate to my website"
      >
        <icon name="uil:globe" class="w-6 h-6" />
      </nuxt-link>
    </nav>
  </footer>
</template>
