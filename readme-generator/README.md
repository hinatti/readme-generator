# readme-generator

## 概要

AIエージェントを活用した README 自動生成ツールです。  
対象プロジェクトのファイル構成・設定ファイル・ソースコードを解析し、  
日本語で分かりやすい README.md を自動生成します。

## 主な機能

- プロジェクトディレクトリを入力として受け取り、AIエージェントが構造を解析
- 日本語で初心者にも分かりやすい README.md を自動生成
- 生成結果は `output/README.md` に保存

## 使用技術

| カテゴリ | 技術 |
|----------|------|
| ランタイム | Node.js (ES Modules) |
| AI | Antigravity CLI ※推測 |
| 言語 | JavaScript |

## セットアップ方法

### 前提条件

- Node.js がインストールされていること
- Antigravity CLI がインストールされていること ※推測

### インストール

```bash
cd readme-generator
npm install
```

## 実行方法

### 基本実行

```bash
npm run generate
```

### ディレクトリ指定

```bash
node scripts/generate-readme.js <対象ディレクトリ>
```

生成された README は `output/README.md` に出力されます。

## ディレクトリ構成

```
readme-generator/
├── agent/
│   └── readme.agent.md    # AIエージェント定義ファイル
├── output/
│   └── README.md          # 生成されたREADMEの出力先
├── scripts/
│   └── generate-readme.js # メインスクリプト
└── package.json
```

## 補足・注意点

- Antigravity CLI の仕様は推測です。実際の動作には Antigravity CLI のインストールと設定が必要となる可能性があります
- エージェント定義ファイル（`agent/readme.agent.md`）でREADMEの出力ルールや構成をカスタマイズできます
- ライセンスは MIT です

---

## README生成について

本READMEは、Antigravityのエージェント機能を用いて  
プロジェクト構成を解析し、自動生成しています。
