<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">Player News & Updates</h1>
      </div>
    </div>

    <g-link
      :to="item.node.path"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="journal-post"
    >
      <div class="container journal journal-group">
        <g-image :src="item.node.thumbnail" class="thumbnail"></g-image>
        <div class="journal-text-group">
          <h4 class="journal-title">{{ item.node.title }}</h4>
          <p class="journal-excerpt">{{ item.node.excerpt }}</p>
        </div>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
				thumbnail (quality: 90)
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style scoped>
.thumbnail {
  height: 190px;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.journal-group {
  display: flex;
  margin-left: -0.1rem;
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.journal-text-group {
  margin-left: -4rem;
}
.journal-post {
  display: block;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: var(--color-base-1);
}
.journal-post:hover > * {
  transform: translateX(3rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.journal-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .journal-post {
    padding: 1rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 1rem 0;
  }
}

@media (max-width: 560px) {
  .journal-excerpt {
    display: none;
  }
}
</style>
