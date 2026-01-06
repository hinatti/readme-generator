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
| AI | Antigravity（デスクトップアプリ） |
| 言語 | JavaScript |

## セットアップ方法

### 前提条件

- Antigravity デスクトップアプリがインストールされていること

## 実行方法

### Antigravityでの実行方法

1. Antigravityアプリで本プロジェクトフォルダを開く
2. `agent/readme.agent.md` をエージェントとして選択
3. エージェントを実行し、生成結果を `README.md` として保存

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

- 本ツールは現時点では Antigravity デスクトップアプリ上でのエージェント実行を前提としています
- CLI化は将来的な拡張予定です
- エージェント定義ファイル（`agent/readme.agent.md`）でREADMEの出力ルールや構成をカスタマイズできます
- ライセンスは MIT です

---

## README生成について

本READMEは、Antigravityのエージェント機能を用いて  
プロジェクト構成を解析し、自動生成しています。
