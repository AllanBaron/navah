import React, { Component } from "react";
import api from "../../../../services/api";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../../../components/admin/common/PageTitle";
import Editor from "../../../../components/admin/add-new-post/Editor";
import SidebarActions from "../../../../components/admin/add-new-post/SidebarActions";
import SidebarCategories from "../../../../components/admin/add-new-post/SidebarCategories";

export default class EditProduct extends Component {
  state = {
    loading: false,
    product: { name: '', description: '', price: 0, qty_stock: 10, discount: 0, category_id: 2 }
  }

  handleSubmit = async () => {
    const { product } = this.state;

    const response = await api.post("product", product);

    if(response.data){
      this.props.history.push(`/admin/produtos/`);
    }
  };

  handleInputChangeName = e => {
    this.setState({ product: { ...this.state.product, name: e.target.value } });
  };

  handleInputChangeDescription = description => {
    this.setState({ product: { ...this.state.product, description } });
  };

  handleUpload = (files) => {
    files.forEach((file) => {
      const data = new FormData();
      const { id } = this.state.product.id;

      data.append("file", file);
      api.post(`product/${id}/files`, data);
    });
  };

  render() {
    const { id } = this.state.product;

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Editar Produto" subtitle="Home / Produtos" className="text-sm-left" />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg="9" md="12">
            <Editor
              product={this.state.product}
              inputChangeName={this.handleInputChangeName}
              inputChangeDescription={this.handleInputChangeDescription}
              uploadFiles={this.handleUpload}
            />
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12">
            <SidebarActions
              title="Ações"
              id={id}
              submit={this.handleSubmit}
            />
            <SidebarCategories title="Categorias"/>
          </Col>
        </Row>
      </Container>
    )
  }
}
