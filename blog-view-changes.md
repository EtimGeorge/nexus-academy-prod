# Proposed Changes for `src/views/BlogView.vue`

To diagnose the issue of invisible blog post cards, I recommend temporarily disabling the scroll-based animation. This will help determine if the animation script is the root cause of the problem.

## Change Details

I will remove the `animate-on-scroll` class from the `RouterLink` component that wraps each blog card.

### Original Code

```html
              <template v-if="filteredPosts.length > 0">
                <RouterLink
                  v-for="post in filteredPosts"
                  :key="post.id"
                  :to="`/blog/${post.id}`"
                  class="blog-card animate-on-scroll"
                >
                  <div class="blog-card-image-container">
                    <img
                      :src="post.imageUrl"
                      :alt="post.title"
                      class="blog-card-image"
                      loading="lazy"
                    />
                  </div>
                  <div class="blog-card-content">
                    <p class="blog-card-category">{{ post.category }}</p>
                    <h3 class="blog-card-title">{{ post.title }}</h3>
                    <p class="blog-card-date">
                      {{ formatDate(post.publishedAt) }}
                    </p>
                  </div>
                </RouterLink>
              </template>
```

### Modified Code

```html
              <template v-if="filteredPosts.length > 0">
                <RouterLink
                  v-for="post in filteredPosts"
                  :key="post.id"
                  :to="`/blog/${post.id}`"
                  class="blog-card"
                >
                  <div class="blog-card-image-container">
                    <img
                      :src="post.imageUrl"
                      :alt="post.title"
                      class="blog-card-image"
                      loading="lazy"
                    />
                  </div>
                  <div class="blog-card-content">
                    <p class="blog-card-category">{{ post.category }}</p>
                    <h3 class="blog-card-title">{{ post.title }}</h3>
                    <p class="blog-card-date">
                      {{ formatDate(post.publishedAt) }}
                    </p>
                  </div>
                </RouterLink>
              </template>
```
