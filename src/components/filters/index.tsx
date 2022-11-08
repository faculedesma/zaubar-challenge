import React from "react";
import { SlArrowDown } from "react-icons/sl";
import {
  AiOutlineCalendar,
  AiOutlineUnorderedList,
  AiOutlinePlus,
} from "react-icons/ai";
import { MdGridView, MdFolderOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";
import styles from "./Filters.module.scss";

const sortOptions = {
  station: [
    {
      id: "2d",
      label: "2D",
    },
    {
      id: "3d",
      label: "3D",
    },
  ],
  filetype: [
    {
      id: "jpg",
      label: "JPG",
    },
    {
      id: "jpg",
      label: "JPG",
    },
    {
      id: "jpg",
      label: "JPG",
    },
  ],
  date: [
    {
      id: "newest",
      label: "Newest to Oldest",
    },
    {
      id: "oldest",
      label: "Oldest to Newest",
    },
  ],
};

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={`${styles.station} ${styles.common}`}>
        <p>Sort by station files</p>
        <SlArrowDown />
        <div className={styles.options}>
          <div className={styles.boxes}>
            {sortOptions.station.map((option) => (
              <div className={styles.box}>
                <input type="checkbox" id={option.id} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className={styles.apply}>
            <button onClick={() => null}>Apply filter</button>
          </div>
        </div>
      </div>
      <div className={`${styles.filetype} ${styles.common}`}>
        <p>Sort by filetype</p>
        <SlArrowDown />
        <div className={styles.options}>
          <div className={styles.boxes}>
            {sortOptions.filetype.map((option) => (
              <div className={styles.box}>
                <input type="checkbox" id={option.id} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className={styles.apply}>
            <button onClick={() => null}>Apply filter</button>
          </div>
        </div>
      </div>
      <div className={`${styles.filetype} ${styles.common}`}>
        <p>Sort by date</p>
        <AiOutlineCalendar />
        <div className={styles.options}>
          <div className={styles.boxes}>
            {sortOptions.date.map((option) => (
              <div className={styles.box}>
                <input type="checkbox" id={option.id} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className={styles.apply}>
            <button onClick={() => null}>Apply filter</button>
          </div>
        </div>
      </div>
      <div className={`${styles.group} ${styles.common}`}>
        <p>Group elements</p>
        <MdFolderOpen />
      </div>
      <div className={`${styles.gallery} ${styles.common}`}>
        <p>Gallery view</p>
        <div className={styles.views}>
          <MdGridView />
          <AiOutlineUnorderedList />
        </div>
      </div>
      <div className={`${styles.search} ${styles.common}`}>
        <input
          type="text"
          placeholder="Search file by description or tag name"
        />
        <FiSearch />
      </div>
      <div className={`${styles.add} ${styles.common}`}>
        <button onClick={() => null}>
          <p>Add file</p>
          <AiOutlinePlus />
        </button>
      </div>
      <div className={styles.selection}>
        <div className={styles.edit}>
          <BsPencil />
          <p>Edit selection</p>
        </div>
        <div className={styles.all}>
          <input type="checkbox" id="select-all" name="select-all" />
          <p>Select all</p>
        </div>
      </div>
    </div>
  );
};

export default Filters;
