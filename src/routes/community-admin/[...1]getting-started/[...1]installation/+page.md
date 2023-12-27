---

title: Installation
description: Information about installation.
sidebar_title: Custom Sidebar Title
---

---
<script>
  import { kitDocs } from '@svelteness/kit-docs';

  $: console.log('kitDocs.meta', $kitDocs.meta);

  // shorthand for $kitDocs.meta.frontmatter
  $: console.log('frontmatter', $frontmatter);
</script>

## {$frontmatter.title}

{$frontmatter.description}

This is the index.md

<script>
    const mermaidOptions = {
        theme: 'forest'
      }
</script>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>

<MermaidDiagram {mermaidOptions}>
flowchart TB
  A & B --> C & D
</MermaidDiagram>
