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
import { windowsOldFolder } from './windows-old-folder';
import { winsxsCleanup } from './winsxs-cleanup';
import { pagefileHiberfil } from './pagefile-hiberfil';
import { appdataCleanup } from './appdata-cleanup';
import { macStartupDiskFull } from './mac-startup-disk-full';
import { clearCacheWindows11 } from './clear-cache-windows-11';
import { diskSpaceForGaming } from './disk-space-for-gaming';
import { autoEmptyRecycleBin } from './auto-empty-recycle-bin';
import { cleanMyPc } from './cleanmypc';
import { macKeeper } from './mackeeper';
import { isItSafeToDeleteWindowsFiles } from './is-it-safe-to-delete-windows-files';
import { howMuchFreeDiskSpaceDoINeed } from './how-much-free-disk-space-do-i-need';
import { onedriveTakingUpSpace } from './onedrive-taking-up-space';
import { windowsUpdateNotEnoughSpace } from './windows-update-not-enough-space';
import { ssdHealthCheckWindows } from './ssd-health-check-windows';
import { macPurgeableSpaceLocalSnapshots } from './mac-purgeable-space-local-snapshots';

export const articles: Article[] = [
  isItSafeToDeleteWindowsFiles,
  howMuchFreeDiskSpaceDoINeed,
  windowsUpdateNotEnoughSpace,
  ssdHealthCheckWindows,
  onedriveTakingUpSpace,
  macPurgeableSpaceLocalSnapshots,
  macKeeper,
  cleanMyPc,
  autoEmptyRecycleBin,
  diskSpaceForGaming,
  clearCacheWindows11,
  macStartupDiskFull,
  appdataCleanup,
  pagefileHiberfil,
  winsxsCleanup,
  windowsOldFolder,
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
