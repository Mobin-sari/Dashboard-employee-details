import styles from "../styles/list.module.css"

function List() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Employee List</h1>
                <p><span>Company</span> Employee</p>
            </div>
            <div>
                <h1>10 Members</h1>
            </div>
        </div>
    );
}

export default List;