export interface ImageCompressorDefaults {
  quality: number;
  targetKB?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxHeight?: number;
  outputFormat: 'image/jpeg' | 'image/webp';
  lockFormat: boolean;
}

export interface ImageCompressorLabels {
  title: string;
  description: string;
  fileHelp: string;
  targetHelp: string;
  privacyNote: string;
}
