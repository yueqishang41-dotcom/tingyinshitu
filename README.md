# 听音选图实验

Auditory-Visual Matching Task

## 项目简介

这是一个心理学实验网站，用于测量被试的听觉-视觉匹配能力。被试听到音频（英文单词）后，从三张图片中选出对应的图片。

## 功能特点

- 纯 HTML + CSS + JavaScript 实现，无需后端
- 响应式布局，支持桌面和移动端
- 内置 61 个 SVG 图标，无需外部图片资源
- Web Speech API 语音合成，无需外部音频文件
- 数据可导出为 CSV 格式

## 实验流程

1. 欢迎页 → 2. 被试信息填写 → 3. 实验说明 → 4. 练习阶段（2题）→ 5. 正式实验（20题）→ 6. 结束页

## 文件结构

```
auditory-visual-task/
├── index.html          # 主入口
├── style.css           # 样式表
├── experiment.js       # 实验逻辑 + SVG 图标
├── config/trials.js    # 试次配置
└── README.md           # 项目说明
```

## 部署

项目已部署到 GitHub Pages：

**在线地址**: https://yueqishang41-dotcom.github.io/tingyinshitu/

## 预览模式（用于 Figma 导入）

通过 URL 参数可以直接进入特定页面状态，方便使用 html.to.design 插件导入 Figma。

| 页面 | 预览链接 |
|------|---------|
| 欢迎页 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=welcome |
| 被试信息页 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=participant |
| 实验说明页 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=instruction |
| 试次页-播放前 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=trial-before-audio |
| 试次页-图片出现 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=trial-images-visible |
| 试次页-倒计时橙 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=trial-countdown-orange |
| 试次页-倒计时红 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=trial-countdown-red |
| 练习反馈-正确 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=practice-correct |
| 练习反馈-错误 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=practice-wrong |
| 超时 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=timeout |
| 结束页 | https://yueqishang41-dotcom.github.io/tingyinshitu/?preview=end |

### 预览模式说明

- `trial-before-audio`: 只有播放按钮，倒计时30秒（绿色）
- `trial-images-visible`: 图片已出现，倒计时15秒（绿色）
- `trial-countdown-orange`: 图片已出现，倒计时8秒（橙色）
- `trial-countdown-red`: 图片已出现，倒计时3秒（红色闪烁）
- `practice-correct`: 练习题正确反馈
- `practice-wrong`: 练习题错误反馈（显示正确答案）
- `timeout`: 超时状态，图片变灰

## 本地运行

直接在浏览器中打开 `index.html` 文件即可运行。

## 技术栈

- HTML5
- CSS3（响应式布局、CSS 动画）
- JavaScript（ES6+）
- Web Speech API（语音合成）
- SVG（内嵌图标）

## License

MIT