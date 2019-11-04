import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, InputGroupAddon, InputGroupText, InputGroup } from "shards-react";
import Dropzone from 'react-dropzone';

import "react-quill/dist/quill.snow.css";
import "../../../assets/css/quill.css";
import "./styles.css";

const Editor = ({ product, inputChangeName, inputChangeDescription, uploadFiles }) => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" defaultValue={product.name} onChange={inputChangeName} placeholder="Nome do produto" />
        <ReactQuill className="add-new-post__editor mb-3" value={product.description}  onChange={inputChangeDescription} />

        {/* Price */}
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>Preço: </InputGroupText>
          </InputGroupAddon>
          <FormInput defaultValue={product.price} onChange={inputChangeName} placeholder="" />
          <InputGroupAddon type="prepend">
            <InputGroupText>BRL</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        {/* Qty Stock */}
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>Quantidade em estoque: </InputGroupText>
          </InputGroupAddon>
          <FormInput defaultValue={product.qty_stock} onChange={inputChangeName} placeholder="" />
        </InputGroup>

        {/* Discount */}
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>Disconto: </InputGroupText>
          </InputGroupAddon>
          <FormInput defaultValue={product.discount} onChange={inputChangeName} placeholder="" />
          <InputGroupAddon type="prepend">
            <InputGroupText>%</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        {/* Files */}
        <Dropzone onDropAccepted={uploadFiles}>
          {({ getRootProps, getInputProps }) => (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()}/>
              <p>Clique aqui ou arraste seus arquivos</p>
            </div>
          )}
        </Dropzone>

      </Form>
    </CardBody>
  </Card>
);

export default Editor;
