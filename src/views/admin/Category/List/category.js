import React from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

const Categorias = ({ categorias, removeCategory }) => (
  <>
    {categorias.map(category => (
      <tr key={category.id}>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td>
          <Link className="edit" to={`/admin/produtos/editar/${category.id}`}>
            <i className="material-icons">edit</i>
          </Link>
          <button type="button" className="delete" onClick={() => removeCategory(category.id)}>
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    ))}
  </>
);

export default Categorias;
