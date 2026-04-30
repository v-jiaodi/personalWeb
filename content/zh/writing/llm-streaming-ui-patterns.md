---
title: LLM 流式输出在前端的 UI 模式总结
description: 从 loading、partial 到 stop 与 retry，一套完整的流式输出前端状态机设计。
date: 2025-01-15
category: AI UX Notes
tags:
  - Streaming UI
  - Vue
  - AI UX
---

## 为什么流式输出需要专门设计？

大语言模型（LLM）的一个核心特征是**逐 token 生成**：模型不是一次性产出完整答案，而是一个字一个字地"流"出来。这给前端带来了和传统请求-响应模式完全不同的挑战。

传统 API：发请求 → 等待 → 拿到完整响应 → 渲染

流式 API：发请求 → 开始接收 token → **边接收边渲染** → 直到结束或中断

这个差异看似简单，实则引出了一系列 UI 状态需要仔细处理。

## 核心状态机

一个完整的流式输出组件，至少需要覆盖以下状态：

```typescript
type StreamState =
  | 'idle'        // 初始状态，未开始
  | 'loading'     // 已发请求，等待第一个 token
  | 'streaming'   // 正在接收 token
  | 'paused'      // 用户手动暂停（如果支持）
  | 'stopped'     // 用户手动停止
  | 'done'        // 正常结束
  | 'error'       // 出错
```

## Loading 状态设计

在发出请求到收到第一个 token 之间，有一段等待期。这个时间可能是 0.5s 到 3s 不等。

**关键原则**：不要在这段时间里什么都不显示。

推荐做法：

- 显示一个"思考中"的动画（三个跳动的点，或者光标闪烁）
- 如果超过 2s 还没有第一个 token，可以显示更明确的进度提示

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

## Partial Render（边流边渲染）

这是最核心的状态。需要注意几个细节：

1. **Markdown 渲染时机**：流式内容中如果有 Markdown（代码块、列表等），不能在流式阶段实时渲染，否则会出现格式跳跃。建议流式阶段只显示纯文本，完成后再渲染 Markdown。

2. **自动滚动**：用户阅读时，如果内容一直在增加，是否自动滚动到底部？推荐做法：只在用户没有手动滚动时才自动跟随。

3. **性能**：每个 token 都触发 Vue 响应式更新可能有性能问题。可以用 `requestAnimationFrame` 批量更新。

## Stop 按钮

提供停止按钮是流式 UI 的标配。用户在看到答案已经偏离预期时，可以立即停止。

停止后的状态处理：
- 显示已接收的内容（不要清空）
- 提供"重新生成"按钮
- 标记状态为 `stopped`，而非 `done`

## Retry（重试）机制

出错后的重试，需要考虑：

- 是否保留已接收的部分内容？
- 重试是全新请求，还是续写（如果 API 支持）？
- 重试按钮应该在哪里显示？

## 总结

流式输出的 UI 设计，本质上是**状态机设计**：清晰定义每个状态、状态之间的转换条件，以及每个状态下的 UI 表现。把这套状态机封装成可复用的 composable，是构建可靠 AI 产品的基础之一。
