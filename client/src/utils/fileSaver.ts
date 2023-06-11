import FileSaver from 'file-saver';

const fileSaver = (_id: string | undefined, photo: string) => {
  FileSaver.saveAs(photo, `download-${_id}/jpg`);
}

export default fileSaver;
