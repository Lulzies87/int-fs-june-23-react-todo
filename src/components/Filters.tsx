import styles from "../App.module.scss";

type FiltersProps = {
  activeFilter: "all" | "open" | "done";
  setActiveFilter: (filter: "all" | "open" | "done") => void;
};

function Filters({ activeFilter, setActiveFilter }: FiltersProps) {
  return (
    <menu className={styles.filtersMenu}>
      <li>
        {activeFilter === "all" ? (
          "All"
        ) : (
          <a onClick={() => setActiveFilter("all")} href="#">
            All
          </a>
        )}
      </li>
      <li>
        {activeFilter === "open" ? (
          "Open"
        ) : (
          <a onClick={() => setActiveFilter("open")} href="#">
            Open
          </a>
        )}
      </li>
      <li>
        {activeFilter === "done" ? (
          "Done"
        ) : (
          <a onClick={() => setActiveFilter("done")} href="#">
            Done
          </a>
        )}
      </li>
    </menu>
  );
}

export default Filters;
