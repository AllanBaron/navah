import React, { Component } from "react";

import api from "../../../../services/api";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Link } from "react-router-dom";

import CategoriesList from "./category";

import PageTitle from "../../../../components/admin/common/PageTitle";

export default class CategoriesTables extends Component {
  state = {
    loading: false,
    categories: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const categories = await api.get("category");
    this.setState({ categories: categories.data });
  }

  hundleRemoveCategorias = async id => {
    const { categories } = this.state;

    const response = await api.delete(`category/${id}`);

    if(response.data){
      const updatedCategories = categories.filter(category => category.id !== id);

      this.setState({ categories: updatedCategories });
    }
  }

  render() {
    const { categories } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Todos as Categorias" subtitle="Home / Categorias" className="text-sm-left" />
        </Row>

        {/* Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Categorias</h6>
                <Link className="btn btn-primary" to={"/admin/categoria/novo"}>
                  Nova Categoria
                </Link>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Nome
                      </th>
                      <th scope="col" className="border-0">
                        Ação
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <CategoriesList
                      categorias={categories}
                      removeCategory={this.hundleRemoveCategorias}
                    />
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
};
