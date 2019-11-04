import React from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

const Products = ({ products, removeProduct }) => (
  <>
    {products.map(product => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>Notebooks</td>
        <td>{product.price}</td>
        <td>{product.qty_stock}</td>
        <td>{product.discount ? product.discount : 'Sem Desconto'}</td>
        <td>
          <Link className="edit" to={`/admin/produtos/editar/${product.id}`}>
            <i className="material-icons">edit</i>
          </Link>
          <button type="button" className="delete" onClick={() => removeProduct(product.id)}>
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    ))}
  </>
);

export default Products;
