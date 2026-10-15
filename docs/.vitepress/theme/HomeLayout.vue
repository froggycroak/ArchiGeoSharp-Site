<script setup lang="ts">
import VPHomeHero from 'vitepress/dist/client/theme-default/components/VPHomeHero.vue'
import VPHomeFeatures from 'vitepress/dist/client/theme-default/components/VPHomeFeatures.vue'
import VPHomeContent from 'vitepress/dist/client/theme-default/components/VPHomeContent.vue'
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
</script>

<template>
  <!-- 与 VPDoc 共用左栏占位以对齐顶栏；首页无页内目录，不占右侧 688+256 文档栏宽 -->
  <div class="ag-vpdoc-shell ag-vpdoc-shell--home has-sidebar">
    <div class="container">
      <div class="content">
        <div class="content-container">
          <div
            class="VPHome"
            :class="{ 'external-link-icon-enabled': theme.externalLinkIcon }"
          >
            <VPHomeHero />
            <VPHomeFeatures />
            <VPHomeContent v-if="frontmatter.markdownStyles !== false">
              <Content />
            </VPHomeContent>
            <Content v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
