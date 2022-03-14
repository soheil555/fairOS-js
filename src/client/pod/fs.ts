import {
  FSDeleteFile,
  FSDirPresent,
  FSDownloadFile,
  FSListDir,
  FSMakeDir,
  FSReceiveFileInfo,
  FSReceiveFile,
  FSRemoveDir,
  FSShareFile,
  FSStatDir,
  FSStatInfo,
  FSUploadFile,
} from "../../types/fs";

import { FSModel } from "../../models/fs";

type omit<T> = Omit<T, "pod_name">;

export class PodFS extends FSModel {
  public readonly podName: string = "";

  async makeDir({ dir_path }: omit<FSMakeDir>) {
    return super.fsMakeDir({ pod_name: this.podName, dir_path });
  }

  removeDir({ dir_path }: omit<FSRemoveDir>) {
    return super.fsRemoveDir({ pod_name: this.podName, dir_path });
  }

  listDir({ dir_path }: omit<FSListDir>) {
    return super.fsListDir({ pod_name: this.podName, dir_path });
  }

  statDir({ dir_path }: omit<FSStatDir>) {
    return super.fsStatDir({ pod_name: this.podName, dir_path });
  }

  isDirPresent({ dir_path }: omit<FSDirPresent>) {
    return super.fsDirPresent({ pod_name: this.podName, dir_path });
  }

  async uploadFile({
    dfs_compression,
    pod_dir,
    block_size,
  }: omit<FSUploadFile>) {
    return super.fsUploadFile({
      pod_name: this.podName,
      pod_dir,
      dfs_compression,
      block_size,
    });
  }

  downloadFileGet({ file_path }: omit<FSDownloadFile>) {
    return super.fsDownloadFileGet({ pod_name: this.podName, file_path });
  }

  downloadFilePost({ file_path }: omit<FSDownloadFile>) {
    return super.fsDownloadFilePost({ pod_name: this.podName, file_path });
  }

  shareFile({ pod_path_file, dest_user }: omit<FSShareFile>) {
    return super.fsShareFile({
      pod_name: this.podName,
      pod_path_file,
      dest_user,
    });
  }

  receiveFile({ sharing_ref, dir_path }: omit<FSReceiveFile>) {
    return super.fsReceiveFile({
      pod_name: this.podName,
      sharing_ref,
      dir_path,
    });
  }

  receiveFileInfo({ sharing_ref }: omit<FSReceiveFileInfo>) {
    return super.fsReceiveFileInfo({
      pod_name: this.podName,
      sharing_ref,
    });
  }

  deleteFile({ file_path }: omit<FSDeleteFile>) {
    return super.fsDeleteFile({
      pod_name: this.podName,
      file_path,
    });
  }

  statInfo({ file_path }: omit<FSStatInfo>) {
    return super.fsStatInfo({
      pod_name: this.podName,
      file_path,
    });
  }
}