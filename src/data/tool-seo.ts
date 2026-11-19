export interface ToolSeoMetadata {
  title: string;
  description: string;
}

const toolSeo: Record<string, ToolSeoMetadata> = {
  'youtube-script-generator': {
    title: 'YouTube Script Generator – Write Video Scripts Faster | ToolGearz',
    description: 'Turn a rough video brief into a ready-to-record YouTube script with a hook and clear sections. Free, instant and secure in your browser with ToolGearz.',
  },
  'short-video-prompt-generator': {
    title: 'Video Prompt Generator – Build Short-Form Video Ideas | ToolGearz',
    description: 'Turn a topic into a short-form video concept with scenes, a visual prompt and on-screen text. Free, instant and secure in your browser with ToolGearz.',
  },
  'viral-captions': {
    title: 'Social Caption Generator – Write Captions & Hashtags | ToolGearz',
    description: 'Draft three scroll-stopping social captions with relevant hashtags from one idea. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'seo-titles-descriptions': {
    title: 'SEO Snippet Writer – Draft Titles & Descriptions | ToolGearz',
    description: 'Write accurate SEO titles and meta descriptions for any page brief in seconds. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'urdu-content-rewriter': {
    title: 'Urdu Text Rewriter – Polish Urdu & Roman Urdu Text | ToolGearz',
    description: 'Rewrite text naturally in Urdu or Roman Urdu while keeping its meaning intact. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'word-counter': {
    title: 'Word Counter – Instant Word & Character Count Tool | ToolGearz',
    description: 'Count words, characters, sentences and reading time in any pasted text instantly. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'text-case-converter': {
    title: 'Text Case Converter – Change Text Case in One Click | ToolGearz',
    description: 'Switch text between UPPERCASE, lowercase, title case and sentence case in one click. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'text-formatter': {
    title: 'Text Formatter – Count, Change Case & Make URL Slugs | ToolGearz',
    description: 'Count words, change letter case and build a clean URL slug in one simple workflow. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'base64-encoder-decoder': {
    title: 'Base64 Converter – Encode & Decode Text Online | ToolGearz',
    description: 'Encode UTF-8 text to Base64 or decode it back safely without corrupting characters. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'json-formatter': {
    title: 'JSON Formatter – Validate & Beautify JSON Online | ToolGearz',
    description: 'Validate, prettify and minify JSON while your structured data stays on-device. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'unit-converter': {
    title: 'Unit Converter – Convert Length & Temperature | ToolGearz',
    description: 'Convert length and temperature units in seconds with no manual calculations or extra apps. Free, instant and secure in your browser with ToolGearz.',
  },
  'password-pin-generator': {
    title: 'Password & PIN Generator – Create Random Codes Fast | ToolGearz',
    description: 'Create a random password or numeric PIN with the length and characters you choose. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'password-generator': {
    title: 'Password Generator – Create Strong Random Passwords | ToolGearz',
    description: 'Generate strong passwords and API keys using cryptographic browser randomness. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'slug-generator': {
    title: 'Slug Generator – Turn Text Into Clean URL Slugs | ToolGearz',
    description: 'Turn a title or phrase into a readable, URL-friendly slug in only a few seconds. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'text-hash-generator': {
    title: 'Text Hash Generator – Create MD5 & SHA Digests | ToolGearz',
    description: 'Create MD5, SHA-1 or SHA-256 text digests instantly in your browser without sending data away. Free, instant and secure with ToolGearz; no uploads.',
  },
  'hash-generator': {
    title: 'Hash Generator – Create MD5 & SHA Hashes in Browser | ToolGearz',
    description: 'Generate MD5, SHA-1, SHA-256 or SHA-512 hashes from text without sending it anywhere. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'lorem-ipsum-generator': {
    title: 'Lorem Ipsum Generator – Create Placeholder Text Fast | ToolGearz',
    description: 'Create placeholder words, sentences or paragraphs for mockups and page layouts. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'epoch-date-converter': {
    title: 'Epoch Converter – Turn Timestamps Into Readable Dates | ToolGearz',
    description: 'Convert Unix timestamps to readable dates or turn any date into epoch values. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'svg-formatter': {
    title: 'SVG Optimizer – Clean & Minify SVG Code Online | ToolGearz',
    description: 'Preview and optimize SVG markup while removing risky elements right in your browser. Free, instant and secure with ToolGearz; no uploads or signup.',
  },
  'css-minifier': {
    title: 'CSS Minifier – Minify or Format CSS Instantly | ToolGearz',
    description: 'Minify, beautify and validate CSS with syntax checks and clear byte savings. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'diff-checker': {
    title: 'Diff Checker – Compare Text & Code Changes Fast | ToolGearz',
    description: 'Compare two text or code versions and spot every added or removed line fast. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'regex-tester': {
    title: 'Regex Tester – Test Patterns & Inspect Matches | ToolGearz',
    description: 'Test regex patterns against sample text and inspect matches, groups and character indexes. Free, instant and secure in your browser with ToolGearz.',
  },
  'cron-parser': {
    title: 'Cron Parser – Read Schedules & Next Run Times | ToolGearz',
    description: 'Read five-field cron expressions and preview the exact next scheduled run times. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'css-box-shadow-generator': {
    title: 'CSS Box Shadow Generator – Design Copyable Shadows | ToolGearz',
    description: 'Tune offset, blur, spread, opacity and color, then copy the ready CSS shadow. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'json-to-ts': {
    title: 'JSON to TypeScript – Generate Type Interfaces Fast | ToolGearz',
    description: 'Convert JSON objects and arrays into clean, nested TypeScript interfaces instantly. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'url-encoder-decoder': {
    title: 'URL Encoder / Decoder – Convert URL Text Safely | ToolGearz',
    description: 'Encode or decode URL components and copy the transformed text in a single step. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'html-encoder-decoder': {
    title: 'HTML Entity Converter – Encode & Decode Text | ToolGearz',
    description: 'Encode HTML-sensitive characters or decode named and numeric entities locally. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'uuid-generator': {
    title: 'UUID Generator – Create Secure v4 Identifiers | ToolGearz',
    description: 'Generate random UUID v4 identifiers using secure browser cryptographic randomness. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'color-converter': {
    title: 'Color Converter – Convert HEX, RGB & HSL Values | ToolGearz',
    description: 'Convert HEX, RGB and HSL color values with a live preview and copyable results. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'jwt-decoder': {
    title: 'JWT Decoder – Inspect Headers & Claims Locally | ToolGearz',
    description: 'Decode JWT headers, claims and timestamps locally without verifying signatures. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'csv-json-converter': {
    title: 'CSV to JSON Converter – Convert & Export Data | ToolGearz',
    description: 'Convert CSV rows to JSON or JSON back to CSV while handling quoted fields and delimiters. Free, instant and secure in your browser with ToolGearz.',
  },
  'css-gradient-generator': {
    title: 'CSS Gradient Maker – Build Linear & Radial Gradients | ToolGearz',
    description: 'Build linear or radial CSS gradients with editable color stops and a live preview. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'image-compressor': {
    title: 'Image Compressor – Compress JPG, PNG & WebP Locally | ToolGearz',
    description: 'Compress JPG, PNG or WebP images, resize and compare file sizes before download. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'html-minifier': {
    title: 'HTML Minifier – Minify or Beautify HTML Markup | ToolGearz',
    description: 'Minify or beautify HTML while preserving text inside script, style and pre tags. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
  'text-to-speech': {
    title: 'Text to Speech – Listen With Browser Voices Online | ToolGearz',
    description: 'Read text aloud with installed browser voices and adjustable speed, pitch and volume. Free, instant and secure in your browser with ToolGearz; no uploads.',
  },
};

export function getToolSeo(toolId: string): ToolSeoMetadata {
  const metadata = toolSeo[toolId];
  if (!metadata) throw new Error(`Missing SEO metadata for tool: ${toolId}`);
  return metadata;
}
