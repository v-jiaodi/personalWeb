---
title: LLM Streaming UI Patterns for Frontend
description: From loading to partial render, stop, and retry—a complete state machine design for streaming output in frontend applications.
date: 2025-01-15
category: AI UX Notes
tags:
  - Streaming UI
  - Vue
  - AI UX
---

## Why does streaming output need dedicated design?

A core characteristic of large language models (LLMs) is **token-by-token generation**: the model doesn't produce a complete answer at once—it "streams" the output character by character. This presents fundamentally different challenges from traditional request-response patterns.

Traditional API: send request → wait → receive complete response → render

Streaming API: send request → start receiving tokens → **render as tokens arrive** → until complete or interrupted

This difference seems simple but gives rise to a series of UI states that require careful handling.

## Core State Machine

A complete streaming output component needs to cover at least the following states:

```typescript
type StreamState =
  | 'idle'        // Initial state, not started
  | 'loading'     // Request sent, waiting for first token
  | 'streaming'   // Receiving tokens
  | 'paused'      // User-paused (if supported)
  | 'stopped'     // User manually stopped
  | 'done'        // Normal completion
  | 'error'       // Error occurred
```

## Loading State Design

Between sending the request and receiving the first token, there's a waiting period that can range from 0.5s to 3s.

**Key principle**: Don't show nothing during this period.

Recommended approach:

- Show a "thinking" animation (three bouncing dots, or a blinking cursor)
- If no first token arrives after 2s, show a more explicit progress indicator

```vue
<template>
  <div class="response-area">
    <div v-if="state === 'loading'" class="thinking-indicator">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <div v-else-if="state === 'streaming' || state === 'done'" class="content">
      {{ displayedText }}
      <span v-if="state === 'streaming'" class="cursor">|</span>
    </div>
  </div>
</template>
```

## Partial Render (Render as you stream)

This is the most critical state. A few details to watch:

1. **Markdown rendering timing**: If streaming content includes Markdown (code blocks, lists, etc.), don't render it in real-time during streaming—it causes jarring format jumps. Recommended: show plain text during streaming, then render Markdown once complete.

2. **Auto-scroll**: When content keeps growing, should it auto-scroll to the bottom? Recommended approach: only auto-follow if the user hasn't manually scrolled.

3. **Performance**: Triggering Vue reactivity updates for every single token can be expensive. Batch updates with `requestAnimationFrame`.

## Stop Button

Providing a stop button is standard for streaming UIs. Users can immediately stop when the answer starts going off track.

Post-stop state handling:
- Display already-received content (don't clear it)
- Provide a "Regenerate" button
- Mark state as `stopped`, not `done`

## Retry Mechanism

When retrying after an error, consider:

- Should the partially received content be preserved?
- Is the retry a fresh request, or a continuation (if the API supports it)?
- Where should the retry button appear?

## Summary

Streaming UI design is fundamentally **state machine design**: clearly define each state, the transition conditions between states, and the UI representation in each state. Encapsulating this state machine into a reusable composable is one of the foundations for building reliable AI products.
