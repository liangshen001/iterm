# @liangshen/iterm

**用于获取 Iterm 软件的偏好设置信息**

- 良好的偏好类型声明
- 使用 ESModule 模块方式

## 安装

```shell
npm i @liangshen/iterm -S
```

## 使用方法

```typescript
import iterm from '@liangshen/iterm';

const preferences = await iterm.getPreferences();
console.log(preferences);
```