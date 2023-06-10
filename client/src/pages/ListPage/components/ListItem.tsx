import fileSaver from "../../../utils/fileSaver.ts";
import {FaCloudDownloadAlt} from "react-icons/fa";
import {IListItem} from "../../../types/interfaces.ts";
import {LIST_STYLES} from "./styles.ts";

const ListItem = ({ photo, name, prompt, _id }: IListItem) => (
  <div className={LIST_STYLES.ITEM_WRAPPER}>
    <img src={photo} alt="text" className={LIST_STYLES.IMG}/>
    <div className={LIST_STYLES.HOVER_CONTENT}>
      <div className={LIST_STYLES.AUTHOR}>{name[0]}</div>
      <div>Prompt: {prompt}</div>
      <div className={LIST_STYLES.DOWNLOAD_BTN} onClick={() => fileSaver(_id, photo)}>
        <FaCloudDownloadAlt />
      </div>
    </div>
  </div>
)

export default ListItem;
