import React, { Component } from "react";

import api from "../../../../services/api";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import { Link } from "react-router-dom";

import ProductsList from "./products";

import PageTitle from "../../../../components/admin/common/PageTitle";

export default class ProductsTables extends Component {
  state = {
    loading: false,
    products: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const products = await api.get("product");
    this.setState({ products: products.data });
  }

  hundleRemoveProduct = async id => {
    const { products } = this.state;

    const response = await api.delete(`product/${id}`);

    if(response.data){
      const updatedProducts = products.filter(product => product.id !== id);

      this.setState({ products: updatedProducts });
    }
  }

  render() {
    const { products } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Todos os Produtos" subtitle="Home / Produtos" className="text-sm-left" />
        </Row>


        {/* Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Produtos</h6>
                <Link className="btn btn-primary" to={"/admin/produtos/novo"}>
                  Novo Produto
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
                        Categorias
                      </th>
                      <th scope="col" className="border-0">
                        Preço
                      </th>
                      <th scope="col" className="border-0">
                        Qtd. Estoque
                      </th>
                      <th scope="col" className="border-0">
                        Desconto
                      </th>
                      <th scope="col" className="border-0">
                        Ação
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductsList
                      products={products}
                      removeProduct={this.hundleRemoveProduct}
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
