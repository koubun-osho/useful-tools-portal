# 文字数カウントツール / Character Counter Tool

リアルタイムで文字数をカウントする便利なWebツールです。テキストを入力すると即座に様々な統計情報が表示されます。

A convenient web tool that counts characters in real-time. Various statistics are displayed immediately when you input text.

![Character Counter Tool Screenshot](https://via.placeholder.com/800x600?text=Character+Counter+Tool+Screenshot)

## 🌟 機能 / Features

- **総文字数**: スペースや改行を含むすべての文字をカウント
- **空白を除く文字数**: スペースや改行を除いた文字のみをカウント
- **単語数**: 日本語（文字単位）と英語（単語単位）に対応した単語カウント
- **行数**: テキストの行数をカウント
- **段落数**: 空行で区切られた段落数をカウント
- **バイト数（UTF-8）**: テキストのUTF-8エンコーディングでのバイト数を表示

---

- **Total Characters**: Count all characters including spaces and line breaks
- **Characters without Spaces**: Count only characters excluding spaces and line breaks
- **Word Count**: Support for both Japanese (character-based) and English (word-based) counting
- **Line Count**: Count the number of lines in the text
- **Paragraph Count**: Count paragraphs separated by empty lines
- **Byte Count (UTF-8)**: Display byte count in UTF-8 encoding

## 🚀 使い方 / Usage

1. `count/index.html` ファイルをブラウザで開く
2. テキストボックスに文章を入力またはペーストする
3. リアルタイムで文字数やその他の統計情報が更新される

---

1. Open `count/index.html` file in your browser
2. Enter or paste text into the text box
3. Character count and other statistics update in real-time

## 🎨 特徴 / Key Features

### リアルタイム更新 / Real-time Updates
テキストを入力すると同時に、すべての統計情報がリアルタイムで更新されます。

All statistics are updated in real-time as you type.

### 日本語対応 / Japanese Language Support
日本語テキストに最適化された文字カウント機能を提供します。ひらがな、カタカナ、漢字に対応しています。

Optimized character counting for Japanese text, supporting Hiragana, Katakana, and Kanji.

### レスポンシブデザイン / Responsive Design
デスクトップ、タブレット、スマートフォンなど、あらゆるデバイスで快適に使用できます。

Works comfortably on all devices including desktop, tablet, and smartphone.

## 📁 ファイル構成 / File Structure

```
character-counter-tool/
├── count/
│   └── index.html    # メインのHTMLファイル / Main HTML file
└── README.md         # このファイル / This file
```

## 🛠️ 技術仕様 / Technical Specifications

- **HTML5**: セマンティックなマークアップ
- **CSS3**: モダンなスタイリング、Flexbox/Grid レイアウト
- **Vanilla JavaScript**: 外部ライブラリに依存しない軽量な実装
- **UTF-8**: 多言語対応

---

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid layout
- **Vanilla JavaScript**: Lightweight implementation without external dependencies
- **UTF-8**: Multi-language support

## 🌐 ライブデモ / Live Demo

### 🔗 **ライブサイト**: https://character-counter-tool-hthkbjbre-koubuns-projects.vercel.app

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/koubun-osho/character-counter-tool)

上のURLから直接ツールを使用できます。または、ブラウザで直接 `count/index.html` を開くか、デプロイボタンをクリックして独自のコピーを作成できます。

You can use the tool directly at the URL above, open `count/index.html` directly in your browser, or click the deploy button to create your own copy.

## 🤝 貢献 / Contributing

プロジェクトへの貢献を歓迎します！以下の方法で参加できます：

We welcome contributions to this project! You can participate in the following ways:

1. バグレポートや機能要請のためのIssueの作成 / Create issues for bug reports or feature requests
2. プルリクエストの送信 / Submit pull requests
3. ドキュメントの改善 / Improve documentation

## 📄 ライセンス / License

このプロジェクトはMITライセンスの下で公開されています。

This project is released under the MIT License.

## 🙏 謝辞 / Acknowledgments

- リアルタイム更新機能のためのJavaScript Event API
- レスポンシブデザインのためのCSS Grid/Flexbox
- 多言語対応のためのUTF-8エンコーディング

---

- JavaScript Event API for real-time updates
- CSS Grid/Flexbox for responsive design
- UTF-8 encoding for multi-language support