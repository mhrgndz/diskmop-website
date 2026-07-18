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
import { freeDiskSpace } from './free-disk-space';
import { speedUpComputer } from './speed-up-computer';
import { slowStartupFix } from './slow-startup-fix';
import { bestDiskCleaners } from './best-disk-cleaners';
import { uninstallLeftovers } from './uninstall-leftovers';
import { cDriveFullForNoReason } from './c-drive-full-for-no-reason';
import { fix100DiskUsageWindows } from './fix-100-disk-usage-windows';
import { findDuplicateFilesWindows } from './find-duplicate-files-windows';
import { wiztree } from './wiztree';
import { deleteTemporaryFilesWindows } from './delete-temporary-files-windows';
import { findLargeFilesWindows } from './find-large-files-windows';
import { clearSystemDataMac } from './clear-system-data-mac';
import { flushDnsCache } from './flush-dns-cache';
import { storageSense } from './storage-sense';
import { cleanUpDownloadsFolder } from './clean-up-downloads-folder';

export const articles: Article[] = [
  cleanUpDownloadsFolder,
  storageSense,
  flushDnsCache,
  clearSystemDataMac,
  findLargeFilesWindows,
  deleteTemporaryFilesWindows,
  wiztree,
  findDuplicateFilesWindows,
  fix100DiskUsageWindows,
  cDriveFullForNoReason,
  uninstallLeftovers,
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
  freeDiskSpace,
  speedUpComputer,
  slowStartupFix,
  bestDiskCleaners,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
