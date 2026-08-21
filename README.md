# 数字沙画台 · Digital Sand Art

一个面向电脑触摸屏的互动数字沙画网页。画面使用温暖明亮的背光沙台、金橙色砂粒和密度叠色模拟真实沙画：快速划过形成轻薄散砂，手指停留则逐渐堆积出更深的色块。

## 功能

- 触摸屏、鼠标与触控笔交互
- 停留时长控制沙粒堆积深度
- 多档笔触大小
- 落沙、塑形、透光和暂停模式
- 撤回、清空与保存作品
- 复古宋体标题与沙粒扩散动画
- 响应式桌面布局

## 快捷键

| 按键 | 功能 |
| --- | --- |
| `A` | 落沙 |
| `S` | 塑形 |
| `D` | 透光 |
| `F` | 暂停/恢复 |
| `Ctrl/Cmd + Z` | 撤回 |
| `Ctrl/Cmd + X` | 清空 |
| `Ctrl/Cmd + S` | 保存作品 |

## 本地运行

需要 Node.js 20.9 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。建议使用支持 Pointer Events 的现代浏览器；触摸屏设备体验最佳。

## 构建

```bash
npm run build
npm start
```

## 技术栈

- Next.js
- React
- TypeScript
- Canvas 2D

## License

[MIT](LICENSE)
