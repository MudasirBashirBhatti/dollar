import styles from '@/app/Components/(liteComponents)/DropDownList/DropDownList.module.css';

const DropDownList = ({ onChange, options, value, name }) => {
    return (
        <div>
            <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)} name={name} id="">
                {
                    options.map((option, index) =>
                        <option key={index} value={option.value}>{option.name}</option>
                    )
                }
            </select>

            {/* dropdown */}
            {/* <DropDownList
                options={categoryArr}
                value={selectCategory}
                onChange={setselectCategory}
                name={setselectCategory}
            /> */}
        </div>
    );
};

export default DropDownList;


