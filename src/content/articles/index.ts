import type { Article } from '../types';
import { ccleaner } from './ccleaner';
import { cleanmymac } from './cleanmymac';
import { bleachbit } from './bleachbit';
import { wiseDiskCleaner } from './wise-disk-cleaner';
import { glaryUtilities } from './glary-utilities';
import { avgTuneup } from './avg-tuneup';
import { iobit } from './iobit';
import { treesize } from './treesize';
import { windirstat } from './windirstat';
import { daisydisk } from './daisydisk';
import { avastCleanup } from './avast-cleanup';
import { windowsDiskCleanup } from './windows-disk-cleanup';

export const articles: Article[] = [
  ccleaner,
  cleanmymac,
  bleachbit,
  wiseDiskCleaner,
  glaryUtilities,
  avgTuneup,
  iobit,
  treesize,
  windirstat,
  daisydisk,
  avastCleanup,
  windowsDiskCleanup,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
