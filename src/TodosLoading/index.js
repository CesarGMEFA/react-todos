import React from "react"
import './TodosLoading.css'

function TodosLoading() {
  return (
    <div className="loader">
      <span className="loader_completeIcon"></span>
      <p className="loader_text">Cargando TODOs...</p>
      <span className="loader_deleteIcon"></span>
    </div>
  )
}

export { TodosLoading };