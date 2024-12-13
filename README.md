# QRCode Scanner App

一个基于 React Native + Expo 开发的二维码扫描应用，支持Android和iOS双平台。

## 功能特性

- 扫描二维码
- 自动打开二维码中的链接
- 跨平台支持 (Android & iOS)

## 技术栈

- React Native
- Expo
- expo-barcode-scanner
- expo-linking

## 开发环境要求

- Node.js >= 14
- Expo CLI
- Expo Go App (用于手机测试)

## 安装和运行

1. 克隆项目
```bash
git clone https://github.com/your-username/qrcode-scan-app.git
cd qrcode-scan-app
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npx expo start
```

4. 运行方式
- 使用手机：安装 Expo Go 应用，扫描终端中的二维码
- 模拟器：
  - iOS：按 'i' 在 iOS 模拟器中运行
  - Android：按 'a' 在 Android 模拟器中运行

## 开发说明

本项目使用 Expo 托管工作流（managed workflow）开发，无需单独配置原生项目文件，大大简化了开发流程。


