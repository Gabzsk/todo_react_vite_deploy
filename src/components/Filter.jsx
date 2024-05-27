const Filter = ( {filter, setFilter, setSort} ) => {
  return (
    <div className="filter"> 
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
                <p>Ordem Alfabética:</p>
                <button onClick={() => setSort("asc")}>asc</button>
                <button onClick={() => setSort("desc")}>desc</button>

        </div>
    </div>
  )
}

export default Filter