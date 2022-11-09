import React, { useState, useContext } from "react";
import FilterContext from "@/contexts/FiltersContext";
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
import Modal from "../common/modal";
import AddFile from "../media/add-file/AddFile";
import {
  viewTypesOptions,
  fileTypesOptions,
  stationsOptions,
  datesOptions,
} from "@/constants/constants";

const Filters = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const currentStations = stationsOptions.map((station) => {
    return {
      ...station,
      selected: Boolean(filters.stations.includes(station.id)),
    };
  });

  const currentFiletypes = fileTypesOptions.map((file) => {
    return { ...file, selected: filters.filetypes.includes(file.id) };
  });

  const [stations, setStations] = useState(currentStations);
  const [filetypes, setFiletypes] = useState(currentFiletypes);
  const [date, setDate] = useState(filters.date);
  const [view, setView] = useState(filters.view);
  const [search, setSearch] = useState(filters.search);
  const [filesSelected, setFileSelected] = useState(filters.filesSelected);
  const [open, setOpen] = useState(false);

  const handleStationChange = (isSelected: boolean, id: string) => {
    setStations(
      stations.map((station) => {
        if (station.id === id) return { ...station, selected: isSelected };
        return { ...station };
      })
    );
  };

  const handleFiletypeChange = (isSelected: boolean, id: string) => {
    setFiletypes(
      filetypes.map((filetype) => {
        if (filetype.id === id) return { ...filetype, selected: isSelected };
        return { ...filetype };
      })
    );
  };

  const handleViewChange = (id: string) => {
    setView(id);
    setFilters({ ...filters, view: id });
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setFilters({ ...filters, search: value });
  };

  const handleDateChange = (id: string) => setDate(id);

  const handleOpenFileModal = () => setOpen(true);

  const handleGroupFiles = () => console.log("Group!");

  const updateFilters = () => {
    setFilters({
      stations,
      filetypes,
      date,
      view,
      search,
      filesSelected,
    });
  };

  return (
    <div className={styles.filters}>
      <div className={`${styles.station} ${styles.common}`}>
        <p>Sort by station files</p>
        <SlArrowDown />
        <div className={styles.options}>
          <div className={styles.boxes}>
            {stations.map((option) => (
              <div key={option.id} className={styles.box}>
                <input
                  type="checkbox"
                  id={option.id}
                  checked={option.selected}
                  onChange={(e) =>
                    handleStationChange(e.target.checked, option.id)
                  }
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className={styles.apply}>
            <button onClick={updateFilters}>Apply filter</button>
          </div>
        </div>
      </div>
      <div className={`${styles.filetype} ${styles.common}`}>
        <p>Sort by filetype</p>
        <SlArrowDown />
        <div className={styles.options}>
          <div className={styles.boxes}>
            {filetypes.map((option) => (
              <div key={option.id} className={styles.box}>
                <input
                  type="checkbox"
                  id={option.id}
                  checked={option.selected}
                  onChange={(e) =>
                    handleFiletypeChange(e.target.checked, option.id)
                  }
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className={styles.apply}>
            <button onClick={updateFilters}>Apply filter</button>
          </div>
        </div>
      </div>
      <div className={`${styles.date} ${styles.common}`}>
        <p>Sort by date</p>
        <AiOutlineCalendar />
        <div className={styles.options}>
          <div className={styles.boxes}>
            {datesOptions.map((option) => (
              <div key={option.id} className={styles.box}>
                <input
                  type="checkbox"
                  id={option.id}
                  checked={option.id === date}
                  onChange={() => handleDateChange(option.id)}
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className={styles.apply}>
            <button onClick={updateFilters}>Apply filter</button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.group} ${styles.common}`}
        title={`${
          true ? "You need to select two or more files to group them." : ""
        }`}
      >
        <button onClick={() => handleGroupFiles()} disabled={true}>
          <p>Group elements</p>
          <MdFolderOpen />
        </button>
      </div>
      <div className={`${styles.gallery} ${styles.common}`}>
        <p>
          {viewTypesOptions.find((viewType) => viewType.id === view)?.label}{" "}
          view
        </p>
        <div className={styles.views}>
          <MdGridView
            className={`${view === "list" && styles.disabled}`}
            onClick={() => handleViewChange("gallery")}
          />
          <AiOutlineUnorderedList
            className={`${view === "gallery" && styles.disabled}`}
            onClick={() => handleViewChange("list")}
          />
        </div>
      </div>
      <div className={`${styles.search} ${styles.common}`}>
        <input
          value={search}
          type="text"
          placeholder="Search file by description or tag name"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <FiSearch onClick={updateFilters} />
      </div>
      <div className={`${styles.add} ${styles.common}`}>
        <button onClick={() => handleOpenFileModal()}>
          <p>Add file</p>
          <AiOutlinePlus />
        </button>
        {open && (
          <Modal
            isOpen={open}
            title="Add files"
            closeModal={() => setOpen(false)}
          >
            <AddFile />
          </Modal>
        )}
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
